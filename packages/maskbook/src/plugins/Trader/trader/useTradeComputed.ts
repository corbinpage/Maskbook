import BigNumber from 'bignumber.js'
import type { ERC20TokenDetailed, EtherTokenDetailed } from '../../../web3/types'
import { TradeProvider, TradeStrategy } from '../types'
import { useV2Trade as useUniswapTrade } from './uniswap/useV2Trade'
import { useV2TradeComputed as useUniswapTradeComputed } from './uniswap/useV2TradeComputed'
import { useTradeComputed as useZrxTradeComputed } from './0x/useTradeComputed'
import { useTrade as useZrxTrade } from './0x/useTrade'
import { unreachable } from '../../../utils/utils'

export function useTradeComputed(
    provider: TradeProvider,
    strategy: TradeStrategy,
    inputAmount: string,
    outputAmount: string,
    inputToken?: EtherTokenDetailed | ERC20TokenDetailed,
    outputToken?: EtherTokenDetailed | ERC20TokenDetailed,
) {
    const inputTokenProduct = new BigNumber(10).pow(inputToken?.decimals ?? 0)
    const outputTokenProduct = new BigNumber(10).pow(outputToken?.decimals ?? 0)
    const inputAmount_ = new BigNumber(inputAmount || '0').multipliedBy(inputTokenProduct).integerValue().toFixed()
    const outputAmount_ = new BigNumber(outputAmount || '0').multipliedBy(outputTokenProduct).integerValue().toFixed()

    // uniswap || sushiswap || sashimiswap
    const uniswap_ = useUniswapTrade(
        strategy,
        provider === TradeProvider.UNISWAP ||
            provider === TradeProvider.SUSHISWAP ||
            provider === TradeProvider.SASHIMISWAP
            ? inputAmount_
            : '0',
        provider === TradeProvider.UNISWAP ||
            provider === TradeProvider.SUSHISWAP ||
            provider === TradeProvider.SASHIMISWAP
            ? outputAmount_
            : '0',
        inputToken,
        outputToken,
    )
    const uniswap = useUniswapTradeComputed(uniswap_.value)

    // zrx
    const zrx_ = useZrxTrade(
        strategy,
        provider === TradeProvider.ZRX ? inputAmount_ : '0',
        provider === TradeProvider.ZRX ? outputAmount_ : '0',
        inputToken,
        outputToken,
    )
    const zrx = useZrxTradeComputed(zrx_.value ?? null, strategy, inputToken, outputToken)

    switch (provider) {
        case TradeProvider.UNISWAP:
            return {
                ...uniswap_,
                value: uniswap,
            }
        case TradeProvider.ZRX:
            return {
                ...zrx_,
                value: zrx,
            }
        case TradeProvider.SUSHISWAP:
            return {
                ...uniswap_,
                value: uniswap,
            }
        case TradeProvider.SASHIMISWAP:
            return {
                ...uniswap_,
                value: uniswap,
            }
        default:
            unreachable(provider)
    }
}
