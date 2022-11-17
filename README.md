# RadioShack SDK
This repo contains tools for developing with [RadioShack](radioshack.org).

## Running
This project uses standard npm and yarn workflows.

Install dependencies

```sh
yarn
```

Compile
```sh
yarn build
```

Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Installation
This project is available as an npm package. Add to your project with `npm install @radioshackswap/sdk2`

# development flow

1. do `npm i` in sdk
2. do `npm run dev` which will watch for any files changes and recompiles files
3. do `yalc link "@radioshackswap/sdk2"` in the project where you want to use components

## Attribution
This code was adapted from this Uniswap repo: [uniswap-sdk](https://github.com/Uniswap/sdk).
