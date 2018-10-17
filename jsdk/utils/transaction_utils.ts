// External
import * as ethjsABI from "ethjs-abi";
import * as assignDefaults from "lodash.defaults";
import * as promisify from "tiny-promisify";
import * as Web3 from "web3";
import { Web3Utils } from "./web3_utils";

import { ContractsAPI } from "../src/apis";
import { DEBT_ORDER_DATA_DEFAULTS, DebtOrderData, TxData } from "../src/types";

function filterMethodABI(abi: any[]): Web3.MethodAbi[] {
    return abi.filter((abiDef) => abiDef.type === "function");
}

function findMethod(abi: Web3.AbiDefinition[], name: string, inputTypes: string): Web3.MethodAbi {
    const methodAbi = filterMethodABI(abi).find((abiDef) => {
        const methodArgs = abiDef.inputs.map((input) => input.type).join(",");
        return abiDef.name === name && methodArgs === inputTypes;
    });

    if (methodAbi) {
        return methodAbi;
    }

    throw new Error(`Method: ${name} with input types: ${inputTypes} is not found`);
}

// sendTransaction is a util function to send a transaction to any overloaded
// method of a contract.
// Truffle contract instance cannot handle overloaded methods
// (truffle will only handle the first implementation of the method).
export async function sendRawTransaction(
    web3: Web3,
    web3ContractInstance: Web3.ContractInstance,
    methodName: string,
    inputTypes: string,
    inputVals: any[],
    txData: TxData = {},
): Promise<string> {
    const abiMethod = findMethod(web3ContractInstance.abi, methodName, inputTypes);
    const encodedData = ethjsABI.encodeMethod(abiMethod, inputVals);

    return promisify<string>(web3.eth.sendTransaction)({
        data: encodedData,
        ...txData,
        to: web3ContractInstance.address,
    });
}

export async function applyNetworkDefaults(
    debtOrderData: DebtOrderData,
    contracts: ContractsAPI,
): Promise<DebtOrderData> {
    const debtKernel = await contracts.loadDebtKernelAsync();
    const repaymentRouter = await contracts.loadRepaymentRouterAsync();

    const networkDefaults = {
        ...DEBT_ORDER_DATA_DEFAULTS,
        kernelVersion: debtKernel.address,
        issuanceVersion: repaymentRouter.address,
    };

    return assignDefaults(debtOrderData, networkDefaults);
}

export async function generateTxOptions(
    web3: Web3,
    gas: number,
    options?: TxData,
): Promise<TxData> {
    const web3Utils = new Web3Utils(web3);
    const accounts = await web3Utils.getAvailableAddressesAsync();

    // TODO(kayvon): Add fault tolerance to scenario in which no addresses are available.

    return {
        gas,
        from: accounts[0],
        ...options,
    };
}
