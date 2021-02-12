/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export class ExchangeProxy extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
    clone(): ExchangeProxy
    methods: {
        batchSwapExactIn(
            swaps: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: number | string
                limitReturnAmount: number | string
                maxPrice: number | string
            }[],
            tokenIn: string,
            tokenOut: string,
            totalAmountIn: number | string,
            minTotalAmountOut: number | string,
        ): TransactionObject<string>

        batchSwapExactOut(
            swaps: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: number | string
                limitReturnAmount: number | string
                maxPrice: number | string
            }[],
            tokenIn: string,
            tokenOut: string,
            maxTotalAmountIn: number | string,
        ): TransactionObject<string>

        isOwner(): TransactionObject<boolean>

        multihopBatchSwapExactIn(
            swapSequences: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: number | string
                limitReturnAmount: number | string
                maxPrice: number | string
            }[][],
            tokenIn: string,
            tokenOut: string,
            totalAmountIn: number | string,
            minTotalAmountOut: number | string,
        ): TransactionObject<string>

        multihopBatchSwapExactOut(
            swapSequences: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: number | string
                limitReturnAmount: number | string
                maxPrice: number | string
            }[][],
            tokenIn: string,
            tokenOut: string,
            maxTotalAmountIn: number | string,
        ): TransactionObject<string>

        owner(): TransactionObject<string>

        renounceOwnership(): TransactionObject<void>

        setRegistry(_registry: string): TransactionObject<void>

        smartSwapExactIn(
            tokenIn: string,
            tokenOut: string,
            totalAmountIn: number | string,
            minTotalAmountOut: number | string,
            nPools: number | string,
        ): TransactionObject<string>

        smartSwapExactOut(
            tokenIn: string,
            tokenOut: string,
            totalAmountOut: number | string,
            maxTotalAmountIn: number | string,
            nPools: number | string,
        ): TransactionObject<string>

        transferOwnership(newOwner: string): TransactionObject<void>

        viewSplitExactIn(
            tokenIn: string,
            tokenOut: string,
            swapAmount: number | string,
            nPools: number | string,
        ): TransactionObject<{
            swaps: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: string
                limitReturnAmount: string
                maxPrice: string
            }[]
            totalOutput: string
            0: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: string
                limitReturnAmount: string
                maxPrice: string
            }[]
            1: string
        }>

        viewSplitExactOut(
            tokenIn: string,
            tokenOut: string,
            swapAmount: number | string,
            nPools: number | string,
        ): TransactionObject<{
            swaps: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: string
                limitReturnAmount: string
                maxPrice: string
            }[]
            totalOutput: string
            0: {
                pool: string
                tokenIn: string
                tokenOut: string
                swapAmount: string
                limitReturnAmount: string
                maxPrice: string
            }[]
            1: string
        }>
    }
    events: {
        OwnershipTransferred: ContractEvent<{
            previousOwner: string
            newOwner: string
            0: string
            1: string
        }>
        allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
    }
}
