// external
import * as _ from "lodash";
import * as singleLineString from "single-line-string";
import * as Web3 from "web3";
import { BigNumber } from "../../utils/bignumber";

// wrappers
import {
    CollateralizedSimpleInterestTermsContractContract,
    CollateralizerContract,
    ContractRegistryContract,
    ContractWrapper, CreditorProxyContract,
    DebtKernelContract,
    DebtRegistryContract,
    DebtTokenContract,
    ERC20Contract,
    RepaymentRouterContract,
    SimpleInterestTermsContractContract,
    TermsContract,
    TokenRegistryContract,
    TokenTransferProxyContract,
} from '../wrappers';

// utils
import {
    COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY,
    COLLATERALIZER_CONTRACT_CACHE_KEY,
    DEBT_KERNEL_CONTRACT_CACHE_KEY,
    DEBT_REGISTRY_CONTRACT_CACHE_KEY,
    DEBT_TOKEN_CONTRACT_CACHE_KEY,
    NULL_ADDRESS,
    REPAYMENT_ROUTER_CONTRACT_CACHE_KEY,
    SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY,
    TERMS_CONTRACT_TYPES,
    TOKEN_REGISTRY_CONTRACT_CACHE_KEY,
    TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY,
    CONTRACT_REGISTRY_CONTRACT_CACHE_KEY,
} from "../../utils/constants";

// types
import { AddressBook } from "../types";
import {WETH9Contract} from '../wrappers/contract_wrappers/weth9_wrapper';

export interface DharmaContracts {
    debtKernel: DebtKernelContract;
    debtRegistry: DebtRegistryContract;
    debtToken: DebtTokenContract;
    repaymentRouter: RepaymentRouterContract;
    tokenTransferProxy: TokenTransferProxyContract;
    collateralizer: CollateralizerContract;
    creditorProxy: CreditorProxyContract;
}

export const ContractsError = {
    CANNOT_FIND_TOKEN_WITH_SYMBOL: (symbol: string) =>
        singleLineString`Could not find token associated with symbol ${symbol}.`,
    CANNOT_FIND_TOKEN_WITH_INDEX: (index: number) =>
        singleLineString`Could not find token associated with index ${index}.`,
    TERMS_CONTRACT_NOT_FOUND: (termsContractAddress: string) =>
        singleLineString`Could not find a terms contract tracked by
                         dharma.js at address ${termsContractAddress}.`,
};

export class ContractsAPI {
    private web3: Web3;
    private addressBook: AddressBook;

    private cache: { [contractName: string]: ContractWrapper };

    public constructor(web3: Web3, addressBook: AddressBook = {}) {
        this.web3 = web3;
        this.addressBook = addressBook;

        this.cache = {};
    }

    public async loadDharmaContractsAsync(
        transactionOptions: object = {},
    ): Promise<DharmaContracts> {
        const debtKernel = await this.loadDebtKernelAsync(transactionOptions);
        const debtRegistry = await this.loadDebtRegistryAsync(transactionOptions);
        const debtToken = await this.loadDebtTokenAsync(transactionOptions);
        const repaymentRouter = await this.loadRepaymentRouterAsync(transactionOptions);
        const tokenTransferProxy = await this.loadTokenTransferProxyAsync(transactionOptions);
        const collateralizer = await this.loadCollateralizerAsync(transactionOptions);
        const creditorProxy = await this.loadCreditorProxyAsync(transactionOptions);

        return {
            debtKernel,
            debtRegistry,
            debtToken,
            repaymentRouter,
            tokenTransferProxy,
            collateralizer,
            creditorProxy,
        };
    }

    public async loadDebtKernelAsync(transactionOptions: object = {}): Promise<DebtKernelContract> {
        if (DEBT_KERNEL_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[DEBT_KERNEL_CONTRACT_CACHE_KEY] as DebtKernelContract;
        }

        let debtKernel: DebtKernelContract;

        if (this.addressBook.kernelAddress) {
            debtKernel = await DebtKernelContract.at(
                this.addressBook.kernelAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            debtKernel = await DebtKernelContract.deployed(this.web3, transactionOptions);
        }

        this.cache[DEBT_KERNEL_CONTRACT_CACHE_KEY] = debtKernel;

        return debtKernel;
    }

    public async loadCollateralizerAsync(
        transactionOptions: object = {},
    ): Promise<CollateralizerContract> {
        if (COLLATERALIZER_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[COLLATERALIZER_CONTRACT_CACHE_KEY] as CollateralizerContract;
        }

        let collateralizer: CollateralizerContract;

        if (this.addressBook.collateralizerAddress) {
            collateralizer = await CollateralizerContract.at(
                this.addressBook.collateralizerAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            collateralizer = await CollateralizerContract.deployed(this.web3, transactionOptions);
        }

        this.cache[COLLATERALIZER_CONTRACT_CACHE_KEY] = collateralizer;

        return collateralizer;
    }

    public async loadDebtRegistryAsync(
        transactionOptions: object = {},
    ): Promise<DebtRegistryContract> {
        if (DEBT_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[DEBT_REGISTRY_CONTRACT_CACHE_KEY] as DebtRegistryContract;
        }

        let debtRegistry: DebtRegistryContract;

        if (this.addressBook.debtRegistryAddress) {
            debtRegistry = await DebtRegistryContract.at(
                this.addressBook.debtRegistryAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            debtRegistry = await DebtRegistryContract.deployed(this.web3, transactionOptions);
        }

        this.cache[DEBT_REGISTRY_CONTRACT_CACHE_KEY] = debtRegistry;

        return debtRegistry;
    }

    public async loadContractRegistryAsync(
        transactionOptions: object = {},
    ): Promise<ContractRegistryContract> {
        if (CONTRACT_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[CONTRACT_REGISTRY_CONTRACT_CACHE_KEY] as ContractRegistryContract;
        }

        let contractRegistry: ContractRegistryContract;

        if (this.addressBook.debtRegistryAddress) {
            contractRegistry = await ContractRegistryContract.at(
                this.addressBook.debtRegistryAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            contractRegistry = await ContractRegistryContract.deployed(
                this.web3,
                transactionOptions,
            );
        }

        this.cache[CONTRACT_REGISTRY_CONTRACT_CACHE_KEY] = contractRegistry;

        return contractRegistry;
    }

    public async loadDebtTokenAsync(transactionOptions: object = {}): Promise<DebtTokenContract> {
        if (DEBT_TOKEN_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[DEBT_TOKEN_CONTRACT_CACHE_KEY] as DebtTokenContract;
        }

        let debtToken: DebtTokenContract;

        if (this.addressBook.kernelAddress) {
            debtToken = await DebtTokenContract.at(
                this.addressBook.debtTokenAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            debtToken = await DebtTokenContract.deployed(this.web3, transactionOptions);
        }

        this.cache[DEBT_TOKEN_CONTRACT_CACHE_KEY] = debtToken;

        return debtToken;
    }

    public async loadRepaymentRouterAsync(
        transactionOptions: object = {},
    ): Promise<RepaymentRouterContract> {
        if (REPAYMENT_ROUTER_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[REPAYMENT_ROUTER_CONTRACT_CACHE_KEY] as RepaymentRouterContract;
        }

        let repaymentRouter: RepaymentRouterContract;

        if (this.addressBook.repaymentRouterAddress) {
            repaymentRouter = await RepaymentRouterContract.at(
                this.addressBook.repaymentRouterAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            repaymentRouter = await RepaymentRouterContract.deployed(this.web3, transactionOptions);
        }

        this.cache[REPAYMENT_ROUTER_CONTRACT_CACHE_KEY] = repaymentRouter;

        return repaymentRouter;
    }

    public async loadRepaymentRouterAtAsync(
        address: string,
        transactionOptions: object = {},
    ): Promise<RepaymentRouterContract> {
        const cacheKey = this.getRepaymentRouterCacheKey(address);

        if (cacheKey in this.cache) {
            return this.cache[cacheKey] as RepaymentRouterContract;
        }

        const repaymentRouter = await RepaymentRouterContract.at(
            address,
            this.web3,
            transactionOptions,
        );

        this.cache[cacheKey] = repaymentRouter;

        return repaymentRouter;
    }

    public async loadTokenTransferProxyAsync(
        transactionOptions: object = {},
    ): Promise<TokenTransferProxyContract> {
        if (TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[
                TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY
                ] as TokenTransferProxyContract;
        }

        let tokenTransferProxy: TokenTransferProxyContract;

        if (this.addressBook.tokenTransferProxyAddress) {
            tokenTransferProxy = await TokenTransferProxyContract.at(
                this.addressBook.tokenTransferProxyAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            tokenTransferProxy = await TokenTransferProxyContract.deployed(
                this.web3,
                transactionOptions,
            );
        }

        this.cache[TOKEN_TRANSFER_PROXY_CONTRACT_CACHE_KEY] = tokenTransferProxy;

        return tokenTransferProxy;
    }

    public async loadERC20TokenAsync(
        tokenAddress: string,
        transactionOptions: object = {},
    ): Promise<ERC20Contract> {
        const cacheKey = this.getERC20TokenCacheKey(tokenAddress);

        if (cacheKey in this.cache) {
            return this.cache[cacheKey] as ERC20Contract;
        } else {
            const tokenContract = await ERC20Contract.at(
                tokenAddress,
                this.web3,
                transactionOptions,
            );
            this.cache[cacheKey] = tokenContract;
            return tokenContract;
        }
    }

    public async loadTermsContractAsync(
        termsContractAddress: string,
        transactionOptions: object = {},
    ): Promise<TermsContract> {
        const cacheKey = this.getTermsContractCacheKey(termsContractAddress);

        if (cacheKey in this.cache) {
            return this.cache[cacheKey] as TermsContract;
        } else {
            const termsContract = await TermsContract.at(
                termsContractAddress,
                this.web3,
                transactionOptions,
            );
            this.cache[cacheKey] = termsContract;
            return termsContract;
        }
    }

    /**
     * Given a terms contract address, returns the name of that contract.
     *
     * @example
     *  getTermsContractType("0x069cb8891d9dbf02d89079a77169e0dc8bacda65")
     *  => "SimpleInterestLoan"
     *
     * @param {string} tokenAddress
     * @returns {string}
     */
    public async getTermsContractType(contractAddress: string): Promise<string> {
        const simpleInterestTermsContract = await this.loadSimpleInterestTermsContract();
        const collateralizedSimpleInterestTermsContract = await this.loadCollateralizedSimpleInterestTermsContract();

        const addressToContractType = {
            [collateralizedSimpleInterestTermsContract.address]:
            TERMS_CONTRACT_TYPES.COLLATERALIZED_SIMPLE_INTEREST_LOAN,
            [simpleInterestTermsContract.address]: TERMS_CONTRACT_TYPES.SIMPLE_INTEREST_LOAN,
        };

        const termsContractType = addressToContractType[contractAddress];

        if (!termsContractType) {
            throw new Error(ContractsError.TERMS_CONTRACT_NOT_FOUND(contractAddress));
        }

        return termsContractType;
    }

    public async loadSimpleInterestTermsContract(
        transactionOptions: object = {},
    ): Promise<SimpleInterestTermsContractContract> {
        if (SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[
                SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY
                ] as SimpleInterestTermsContractContract;
        }

        let simpleInterestTermsContract: SimpleInterestTermsContractContract;

        if (this.addressBook.simpleInterestTermsContractAddress) {
            simpleInterestTermsContract = await SimpleInterestTermsContractContract.at(
                this.addressBook.simpleInterestTermsContractAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
                this.web3,
                transactionOptions,
            );
        }

        this.cache[SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY] = simpleInterestTermsContract;

        return simpleInterestTermsContract;
    }

    public async loadCollateralizedSimpleInterestTermsContract(
        transactionOptions: object = {},
    ): Promise<CollateralizedSimpleInterestTermsContractContract> {
        if (COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[
                COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY
                ] as CollateralizedSimpleInterestTermsContractContract;
        }

        let collateralizedSimpleInterestTermsContract: CollateralizedSimpleInterestTermsContractContract;

        if (this.addressBook.collateralizedSimpleInterestTermsContractAddress) {
            collateralizedSimpleInterestTermsContract = await CollateralizedSimpleInterestTermsContractContract.at(
                this.addressBook.collateralizedSimpleInterestTermsContractAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            collateralizedSimpleInterestTermsContract = await CollateralizedSimpleInterestTermsContractContract.deployed(
                this.web3,
                transactionOptions,
            );
        }

        this.cache[
            COLLATERALIZED_SIMPLE_INTEREST_TERMS_CONTRACT_CACHE_KEY
            ] = collateralizedSimpleInterestTermsContract;

        return collateralizedSimpleInterestTermsContract;
    }

    public async loadTokenRegistry(
        transactionOptions: object = {},
    ): Promise<TokenRegistryContract> {
        if (TOKEN_REGISTRY_CONTRACT_CACHE_KEY in this.cache) {
            return this.cache[TOKEN_REGISTRY_CONTRACT_CACHE_KEY] as TokenRegistryContract;
        }

        let tokenRegistryContract: TokenRegistryContract;

        if (this.addressBook.tokenRegistryAddress) {
            tokenRegistryContract = await TokenRegistryContract.at(
                this.addressBook.tokenRegistryAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            tokenRegistryContract = await TokenRegistryContract.deployed(
                this.web3,
                transactionOptions,
            );
        }

        this.cache[TOKEN_REGISTRY_CONTRACT_CACHE_KEY] = tokenRegistryContract;

        return tokenRegistryContract;
    }

    public async loadCreditorProxyAsync(
        transactionOptions: object = {},
    ): Promise<CreditorProxyContract> {
        if ("CreditorProxy" in this.cache) {
            return this.cache["CreditorProxy"] as CreditorProxyContract;
        }

        let contract: CreditorProxyContract;

        if (this.addressBook.creditorProxyAddress) {
            contract = await CreditorProxyContract.at(
                this.addressBook.creditorProxyAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            contract = await CreditorProxyContract.deployed(this.web3, transactionOptions);
        }

        this.cache["CreditorProxy"] = contract;

        return contract;
    }

    public async loadWETH9ContractAsync(
        transactionOptions: object = {},
    ): Promise<WETH9Contract> {
        if ("WEH9" in this.cache) {
            return this.cache["WEH9"] as WETH9Contract;
        }

        let contract: WETH9Contract;

        if (this.addressBook.creditorProxyAddress) {
            contract = await WETH9Contract.at(
                this.addressBook.creditorProxyAddress,
                this.web3,
                transactionOptions,
            );
        } else {
            contract = await WETH9Contract.deployed(this.web3, transactionOptions);
        }

        this.cache["WETH9"] = contract;

        return contract;
    }

    public async getTokenAddressBySymbolAsync(symbol: string): Promise<string> {
        const tokenRegistryContract = await this.loadTokenRegistry({});

        const tokenAddress = await tokenRegistryContract.getTokenAddressBySymbol.callAsync(symbol);

        if (tokenAddress === NULL_ADDRESS) {
            throw new Error(ContractsError.CANNOT_FIND_TOKEN_WITH_SYMBOL(symbol));
        }

        return tokenAddress;
    }

    /**
     * Given the index of a token in the Token Registry, returns the address of that
     * token's contract.
     *
     * @param {number} index
     * @returns {Promise<string>}
     */
    public async getTokenAddressByIndexAsync(index: BigNumber): Promise<string> {
        const tokenRegistryContract = await this.loadTokenRegistry({});

        const tokenAddress = await tokenRegistryContract.getTokenAddressByIndex.callAsync(index);

        if (tokenAddress === NULL_ADDRESS) {
            throw new Error(ContractsError.CANNOT_FIND_TOKEN_WITH_INDEX(index.toNumber()));
        }

        return tokenAddress;
    }

    public async getTokenIndexBySymbolAsync(symbol: string): Promise<BigNumber> {
        const tokenRegistryContract = await this.loadTokenRegistry();

        // We first confirm token exists with the given symbol.  This call
        // will throw if the token is not tracked by the registry.
        await this.getTokenAddressBySymbolAsync(symbol);

        return tokenRegistryContract.getTokenIndexBySymbol.callAsync(symbol);
    }

    // TODO(kayvon): this function is duplicated in the token API and belongs there.
    public async getTokenSymbolByIndexAsync(index: BigNumber): Promise<string> {
        const tokenRegistryContract = await this.loadTokenRegistry();

        const symbol = await tokenRegistryContract.getTokenSymbolByIndex.callAsync(index);

        if (!symbol || symbol === "") {
            throw new Error(ContractsError.CANNOT_FIND_TOKEN_WITH_INDEX(index.toNumber()));
        }

        return symbol;
    }

    public async loadTokenBySymbolAsync(
        symbol: string,
        transactionOptions: object = {},
    ): Promise<ERC20Contract> {
        const tokenAddress = await this.getTokenAddressBySymbolAsync(symbol);

        return this.loadERC20TokenAsync(tokenAddress, transactionOptions);
    }

    /**
     * Given the index of a token in the token registry, loads an instance of that
     * token and returns it.
     *
     * @param {number} index
     * @param {object} transactionOptions
     * @returns {Promise<ERC20Contract>}
     */
    public async loadTokenByIndexAsync(
        index: BigNumber,
        transactionOptions: object = {},
    ): Promise<ERC20Contract> {
        const tokenAddress = await this.getTokenAddressByIndexAsync(index);

        return this.loadERC20TokenAsync(tokenAddress, transactionOptions);
    }

    public async doesTokenCorrespondToSymbol(
        tokenAddress: string,
        symbol: string,
    ): Promise<boolean> {
        const addressMappedToSymbol = await this.getTokenAddressBySymbolAsync(symbol);
        return tokenAddress === addressMappedToSymbol;
    }

    private getERC20TokenCacheKey(tokenAddress: string): string {
        return `ERC20_${tokenAddress}`;
    }

    private getTermsContractCacheKey(termsContractAddress: string): string {
        return `TermsContract_${termsContractAddress}`;
    }

    private getRepaymentRouterCacheKey(tokenAddress: string): string {
        return `RepaymentRouter_${tokenAddress}`;
    }
}
