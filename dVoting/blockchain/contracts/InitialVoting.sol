// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;


contract InitialVoting{

    mapping(address => bool) voterList;

    function registerVoter(address voter) public {
        require(!voterList[voter], "Voter is already registered");
        voterList[voter] = true;
    }

    
    function confirmVoter(address voter) public view returns(bool) {
        return (voterList[voter]);
    }

}