require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("./tasks")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "calibration",
    networks: {
        calibration: {
            chainId: 314159,
            url: "http://192.168.253.36:1234/rpc/v1",
            accounts: ["1c960fc89a7bd733bc94bb8c80e6c977577eaf530a7aaf21497295973166f42c"],
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
}
