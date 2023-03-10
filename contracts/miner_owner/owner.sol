// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {MinerAPI} from "@zondax/filecoin-solidity/contracts/v0.8/MinerAPI.sol";
import {MinerTypes} from "@zondax/filecoin-solidity/contracts/v0.8/types/MinerTypes.sol";

contract MinerOwner {
    address owner;

    event ChangeOwner(uint64 newID);

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() payable {
        owner = msg.sender;
    }

    function receives() public payable {}

    function withdraw(address payable addr) public onlyOwner {
        addr.transfer(address(this).balance);
    }

    function getOwner(uint64 minerID) public returns (bytes memory) {
        return MinerAPI.getOwner(minerID).owner;
    }

    function changeOwner(bytes memory target, bytes memory addr) public onlyOwner {
        MinerAPI.changeOwnerAddress(target, addr);
    }
}
