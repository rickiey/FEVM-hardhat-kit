require("hardhat-deploy")
require("hardhat-deploy-ethers")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId

    //deploy DealRewarder
    const mowner = await ethers.getContractFactory('MinerOwner', wallet);
    console.log('Deploying MinerOwner...');
    const minerowner = await mowner.deploy();
    await minerowner.deployed()
    console.log('MinerOwner deployed to:', minerowner.address);
}