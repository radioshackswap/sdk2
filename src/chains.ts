export enum ChainId {
  MAINNET = 1,
  AVALANCHE = 43114,
}

export enum StakingType {
  LEGACY = 'LEGACY',
  SAR_POSITIONS = 'SAR_POSITIONS',
  NEAR_STAKING = 'NEAR_STAKING'
}

interface StakingContract {
  address: string
  active: boolean
  reward_token: string
  type: StakingType
}

export enum AirdropType {
  LEGACY = 'LEGACY',
  MERKLE = 'MERKLE',
  MERKLE_TO_STAKING = 'MERKLE_TO_STAKING',
  MERKLE_TO_STAKING_COMPLIANT = 'MERKLE_TO_STAKING_COMPLIANT',
  NEAR_AIRDROP = 'NEAR_AIRDROP'
}

interface AirdropContract {
  address: string
  active: boolean
  type: AirdropType
}

interface AirdropContractTitled extends AirdropContract {
  title: string
}

export enum ChefType {
  MINI_CHEF = 'MINI_CHEF',
  MINI_CHEF_V2 = 'MINI_CHEF_V2',
}

interface ChefContract {
  address: string
  active: boolean
  type: ChefType
}

export interface Chain {
  id: string
  name: string
  chain_id?: number
  mainnet: boolean
  evm: boolean
  radioshack_is_live: boolean
  tracked_by_debank: boolean
  supported_by_gelato: boolean
  rpc_uri: string
  subgraph?: {
    exchange: string
  }
  symbol: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls?: string[]
  radio_symbol?: string
  logo?: string
  coingecko_id?: string
  debank_radioshack_id?: string
  contracts?: {
    radio: string
    factory: string
    router: string
    router_daas?: string
    wrapped_native_token: string
    mini_chef?: ChefContract
    timelock?: string
    migrator?: string
    specialAirdrops?: AirdropContractTitled[]
    foundation_multisig?: string
    joint_multisig?: string
    revenue_distributor?: string
    governor?: string
    fee_collector?: string
    multicall: string
    staking?: StakingContract[]
  }
}

export const ETHEREUM_MAINNET: Chain = {
  id: 'ethereum_mainnet',
  chain_id: 1,
  name: 'Ethereum',
  symbol: 'ETH',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/eth.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://rpc.ankr.com/eth',
  coingecko_id: 'ethereum',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  contracts: {
    radio: '0x7a5d3A9Dcd33cb8D527f7b5F96EB4Fef43d55636',
    factory: '0x91fAe1bc94A9793708fbc66aDcb59087C46dEe10',
    router: '0x3e445e3280C5747a188DB8d0aB7762838A50E4ff',
    wrapped_native_token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    multicall: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  },
  blockExplorerUrls: ['https://etherscan.io']
}

export const AVALANCHE_MAINNET: Chain = {
  id: 'avalanche_mainnet',
  chain_id: 43114,
  name: 'Avalanche',
  symbol: 'AVAX',
  radio_symbol: 'RADIO',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/avax.png',
  radioshack_is_live: true,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://api.avax.network/ext/bc/C/rpc',
  subgraph: {
    exchange: 'https://api.thegraph.com/subgraphs/name/radioshackcreator/exchange-avalanche'
  },
  coingecko_id: 'avalanche',
  debank_radioshack_id: 'avax_radioshack',
  contracts: {
    radio: '0x02Bfd11499847003De5f0F5AA081C43854d48815',
    factory: '0xA0FbfDa09B8815Dd42dDC70E4f9fe794257CD9B6',
    router: '0x763D8D37669bB18064b410e17E3bB46BCF34F487',
    router_daas: '0x55DcFF319871a589D7559808d609fE5bB832f4c8',
    wrapped_native_token: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    multicall: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  },
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  blockExplorerUrls: ['https://snowtrace.io']
}

export const BSC_MAINNET: Chain = {
  id: 'bsc_mainnet',
  chain_id: 56,
  name: 'Binance',
  symbol: 'BSC',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/bsc.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://bsc-dataseed.binance.org',
  coingecko_id: 'binance-smart-chain',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18
  },
  blockExplorerUrls: ['https://bscscan.com']
}

export const CRONOS_MAINNET: Chain = {
  id: 'cronos_mainnet',
  chain_id: 25,
  name: 'Cronos',
  symbol: 'CRO',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/cro.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://evm-cronos.crypto.org',
  coingecko_id: 'cronos',
  nativeCurrency: {
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18
  },
  blockExplorerUrls: ['https://cronos.org/explorer']
}

export const FANTOM_MAINNET: Chain = {
  id: 'fantom_mainnet',
  chain_id: 250,
  name: 'Fantom',
  symbol: 'FTM',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/ftm.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://rpc.ftm.tools',
  coingecko_id: 'fantom',
  nativeCurrency: {
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18
  },
  blockExplorerUrls: ['https://ftmscan.com']
}

export const OP_MAINNET: Chain = {
  id: 'op_mainnet',
  chain_id: 10,
  name: 'Optimism',
  symbol: 'OP',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/op.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: false,
  rpc_uri: 'https://mainnet.optimism.io',
  coingecko_id: 'optimistic-ethereum',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  blockExplorerUrls: ['https://optimistic.etherscan.io']
}

export const POLYGON_MAINNET: Chain = {
  id: 'polygon_mainnet',
  chain_id: 137,
  name: 'Polygon',
  symbol: 'MATIC',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/radioshackswap/sdk2/master/src/images/chains/matic.png',
  radioshack_is_live: false,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://polygon-rpc.com',
  coingecko_id: 'polygon-pos',
  nativeCurrency: {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18
  },
  blockExplorerUrls: ['https://polygonscan.com']
}

export const CHAINS: { [chainId in ChainId]: Chain } = {
  [ChainId.MAINNET]: ETHEREUM_MAINNET,
  [ChainId.AVALANCHE]: AVALANCHE_MAINNET
}

export const ALL_CHAINS: Chain[] = [
  ETHEREUM_MAINNET,
  AVALANCHE_MAINNET,
  BSC_MAINNET,
  CRONOS_MAINNET,
  FANTOM_MAINNET,
  OP_MAINNET,
  POLYGON_MAINNET,
]
