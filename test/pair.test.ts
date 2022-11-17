import { ChainId, Token, Pair, TokenAmount, WETH, Price } from '../src'

describe('Pair', () => {
  const DAS = new Token(ChainId.AVALANCHE, '0x75aF0F9CD8831050812706B81316127D30271DCf', 18, 'DAS', 'Das Coin')
  const CON = new Token(ChainId.AVALANCHE, '0x7dA7F13653436345756D93c45A09066bf664FbB3', 18, 'CON', 'Connor Coin')

  describe('constructor', () => {
    it('cannot be used for tokens on different chains', () => {
      expect(
        () => new Pair(new TokenAmount(DAS, '100'), new TokenAmount(WETH[ChainId.MAINNET], '100'), ChainId.AVALANCHE)
      ).toThrow('CHAIN_IDS')
    })
  })

  describe('#getAddress', () => {
    it('returns the correct address', () => {
      //expect(Pair.getAddress(DAS, CON)).toEqual('0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5')
      expect(Pair.getAddress(DAS, CON, ChainId.AVALANCHE)).toEqual('0x5285c38f692b1Edc1c630CFBc2bd9e395b2700f7')
    })
  })

  describe('#token0', () => {
    it('always is the token that sorts before', () => {
      expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).token1).toEqual(CON)
      expect(new Pair(new TokenAmount(CON, '100'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).token1).toEqual(CON)
    })
  })
  describe('#token1', () => {
    it('always is the token that sorts after', () => {
      expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).token0).toEqual(DAS)
      expect(new Pair(new TokenAmount(CON, '100'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).token0).toEqual(DAS)
    })
  })
  describe('#reserve0', () => {
    it('always comes from the token that sorts before', () => {
      expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '101'), ChainId.AVALANCHE).reserve1).toEqual(
        new TokenAmount(CON, '101')
      )
      expect(new Pair(new TokenAmount(CON, '101'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).reserve1).toEqual(
        new TokenAmount(CON, '101')
      )
    })
  })
  describe('#reserve1', () => {
    it('always comes from the token that sorts after', () => {
      expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '101'), ChainId.AVALANCHE).reserve0).toEqual(
        new TokenAmount(DAS, '100')
      )
      expect(new Pair(new TokenAmount(CON, '101'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).reserve0).toEqual(
        new TokenAmount(DAS, '100')
      )
    })
  })

  describe('#token0Price', () => {
    it('returns price of token0 in terms of token1', () => {
      expect(new Pair(new TokenAmount(DAS, '101'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).token1Price).toEqual(
        new Price(CON, DAS, '100', '101')
      )
      expect(new Pair(new TokenAmount(CON, '100'), new TokenAmount(DAS, '101'), ChainId.AVALANCHE).token1Price).toEqual(
        new Price(CON, DAS, '100', '101')
      )
    })
  })

  describe('#token1Price', () => {
    it('returns price of token1 in terms of token0', () => {
      expect(new Pair(new TokenAmount(DAS, '101'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).token0Price).toEqual(
        new Price(DAS, CON, '101', '100')
      )
      expect(new Pair(new TokenAmount(CON, '100'), new TokenAmount(DAS, '101'), ChainId.AVALANCHE).token0Price).toEqual(
        new Price(DAS, CON, '101', '100')
      )
    })
  })

  describe('#priceOf', () => {
    const pair = new Pair(new TokenAmount(DAS, '101'), new TokenAmount(CON, '100'), ChainId.AVALANCHE)
    it('returns price of token in terms of other token', () => {
      expect(pair.priceOf(CON, DAS)).toEqual(pair.token1Price)
      expect(pair.priceOf(DAS, CON)).toEqual(pair.token0Price)
    })

    it('throws if invalid token', () => {
      expect(() => pair.priceOf(WETH[ChainId.AVALANCHE], CON)).toThrow('TOKEN')
    })
  })

  describe('#reserveOf', () => {
    it('returns reserves of the given token', () => {
      expect(
        new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '101'), ChainId.AVALANCHE).reserveOfToken(DAS)
      ).toEqual(new TokenAmount(DAS, '100'))
      expect(
        new Pair(new TokenAmount(CON, '101'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).reserveOfToken(DAS)
      ).toEqual(new TokenAmount(DAS, '100'))
    })

    it('throws if not in the pair', () => {
      expect(() =>
        new Pair(new TokenAmount(CON, '101'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).reserveOfToken(
          WETH[ChainId.AVALANCHE]
        )
      ).toThrow('TOKEN')
    })
  })

  describe('#chainId', () => {
    it('returns the token0 chainId', () => {
      expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).chainId).toEqual(
        ChainId.AVALANCHE
      )
      expect(new Pair(new TokenAmount(CON, '100'), new TokenAmount(DAS, '100'), ChainId.AVALANCHE).chainId).toEqual(
        ChainId.AVALANCHE
      )
    })
  })
  describe('#involvesToken', () => {
    expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).involvesToken(DAS)).toEqual(
      true
    )
    expect(new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).involvesToken(CON)).toEqual(
      true
    )
    expect(
      new Pair(new TokenAmount(DAS, '100'), new TokenAmount(CON, '100'), ChainId.AVALANCHE).involvesToken(
        WETH[ChainId.AVALANCHE]
      )
    ).toEqual(false)
  })
})
