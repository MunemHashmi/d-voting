// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

import "./InitialVoting.sol";

contract VotingPlatform is InitialVoting {

    mapping(uint => string) candidates;
    mapping(uint => uint) votes;
    uint candidatesCount;

    constructor() public {

        candidates[0] = "Cadidate I";
        candidates[1] = "Candidate II";
        candidates[2] = "Candidate III";
        
        votes[0] = 0;
        votes[1] = 0;
        votes[2] = 0;

        candidatesCount = 3;

    }

    function vote(uint candidateID) public {
        require(confirmVoter(msg.sender), "Voter not registered");
        votes[candidateID] += 1;
    }

    function viewVotes(uint candidateID) public view returns(uint) {
        return (votes[candidateID]);
    }

}