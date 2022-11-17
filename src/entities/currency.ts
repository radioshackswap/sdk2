import JSBI from 'jsbi'
import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'
import { ChainId, CHAINS } from '../chains'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */

  //$ public static readonly CETH: Currency = new Currency(18, 'AVAX', 'Avalanche')

  public static readonly CURRENCY: { [chainId in ChainId]: Currency } = {
    [ChainId.MAINNET]: new Currency(18, CHAINS[ChainId.MAINNET].symbol, CHAINS[ChainId.MAINNET].name),
    [ChainId.AVALANCHE]: new Currency(18, CHAINS[ChainId.AVALANCHE].symbol, CHAINS[ChainId.AVALANCHE].name),
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

//$ const CETH = Currency.CETH
export const CETH = Currency.CURRENCY
