const { ethers } = require("hardhat")

const networkConfig = {
    314159: {
        name: "calibration",
        tokensToBeMinted: 12000,
    },
}

// const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    // developmentChains,
}
