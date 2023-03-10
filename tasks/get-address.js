const fa = require("@glif/filecoin-address");

task("get-address", "Gets Filecoin f4 address and corresponding Ethereum address.")
  .setAction(async (taskArgs) => {

    //create new Wallet object from private key
    const DEPLOYER_PRIVATE_KEY = network.config.accounts[0]
    const deployer = new ethers.Wallet(DEPLOYER_PRIVATE_KEY);

    //Convert Ethereum address to f4 address
    const f4Address = fa.newDelegatedEthAddress(deployer.address).toString();
    const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)
    const Filecoin_Precision = 1000000000000000000n
    let balacne = await wallet.getBalance()
    balacne = Number(balacne.toBigInt() * 1000000000000000n / Filecoin_Precision) / 1000000000000000
    console.log(balacne, " FIL")
    console.log("Ethereum address (this addresss should work for most tools):", deployer.address);
    console.log("f4address (also known as t4 address on testnets):", f4Address);
  })

task("ethaddr2filaddr", "convert eth address to  Filecoin  address .")
  .addParam("address", "The address of the eth address")
  .setAction(async (taskArgs) => {
    const f4Address = fa.newDelegatedEthAddress(taskArgs.address).toString();

    console.log("f4address (also known as t4 address on testnets):", f4Address);
    fa.Address
  })