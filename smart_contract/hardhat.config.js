require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/9-nN1uzaV7FghHtdclPvcCGoEfXVACGG",
      accounts: [
        "f4d84a382412f590a1c3835239f370a25781b98d449e31b6e4632557f18c210e",
      ],
    },
  },
};
