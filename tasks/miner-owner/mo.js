const fa = require("@glif/filecoin-address");


task("get-owner", "get owner ")
    .setAction(async (taskArgs) => {

        //create a new wallet instance
        const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)
        console.log(wallet.getBalance())

        //create a SimpleCoin contract factory
        const MinerOwner = await ethers.getContractFactory("MinerOwner", wallet)
        //create a SimpleCoin contract instance 
        //this is what you will call to interact with the deployed contract
        const MinerOwnerContract = await MinerOwner.attach("0xD7639A6511525A403Fa8fA425255B330Af8DbC2d")


        //send transaction to call the sendCoin() method
        const res = await MinerOwnerContract.getOwner(1024)
        console.log(res)
        const receipt = await res.wait()
        console.log(receipt)

    })


task("contract-withdraw", "withdraw from contract ")
    .setAction(async (taskArgs) => {

        //create a new wallet instance
        const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)
        console.log(wallet.getBalance())

        //create a SimpleCoin contract factory
        const MinerOwner = await ethers.getContractFactory("MinerOwner", wallet)
        //create a SimpleCoin contract instance 
        //this is what you will call to interact with the deployed contract
        const MinerOwnerContract = await MinerOwner.attach("0xD7639A6511525A403Fa8fA425255B330Af8DbC2d")


        //send transaction to call the sendCoin() method
        // const res = await MinerOwnerContract.withdraw("0x6c398447426eB6Ca6DE8C995F839E592a7dF18f6")
        let target = fa.newIDAddress(1017).bytes
        let _to = fa.newIDAddress(6198).bytes
        const res = await MinerOwnerContract.changeOwner(target, _to)
        console.log(res)
        const receipt = await res.wait()
        console.log(receipt)

    })