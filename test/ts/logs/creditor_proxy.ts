import { Address, Bytes32, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

export function LogDebtOfferCancelled(
    contract: Address,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_creditor", creditor],
            ["_creditorCommitmentHash", creditorCommitmentHash],
        ]),
        name: "LogDebtOfferCancelled",
    };
}

export function LogDebtOfferFilled(
    contract: Address,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
    orderRemain: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_creditor", creditor],
            ["_creditorCommitmentHash", creditorCommitmentHash],
            ["_orderRemain", orderRemain],
        ]),
        name: "LogDebtOfferFilled",
    };
}

export function LogError(
    contract: Address,
    errorId: UInt,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams(
            [
                ["_errorId", errorId],
                ["_creditor", creditor],
                ["_creditorCommitmentHash", creditorCommitmentHash],
            ],
            ["uint8", "address", "bytes32"],
        ),
        name: "LogError",
    };
}
