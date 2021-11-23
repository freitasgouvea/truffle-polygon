require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env["PRIVATE_KEY"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    mainnet: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl:
          "https://mainnet.infura.io/v3/" + infuraProjectId
      }),
      network_id: 1,
    },
    rinkeby: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl:
          "https://rinkeby.infura.io/v3/" + infuraProjectId
      }),
      network_id: 4,
    },
    polygon: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl:
          "https://polygon-mainnet.infura.io/v3/" + infuraProjectId
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    mumbai: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl:
          "https://polygon-mumbai.infura.io/v3/" + infuraProjectId
      }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
        }
      }
    }
  }
}
