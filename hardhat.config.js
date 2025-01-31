require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'blockscout',
  networks: {
    blockscout: {
      url: process.env.BLOCKSCOUT_NETWORK,
      accounts: [process.env.PrivateKey0]
    },
  }
};
