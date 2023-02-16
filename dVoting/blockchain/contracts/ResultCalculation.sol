// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;
import "./VotingPlatform.sol";

contract ResultCalculation is VotingPlatform {

    uint result;
    string winningCandidate;

    function calculateResult() public {
        result = 0;
        for (uint i = 0; i < candidatesCount; i++) {
            result += votes[i];
        }

        uint maxVotes = 0;
        for (uint i = 0; i < candidatesCount; i++) {
            uint currentVotes = votes[i];
            if (currentVotes > maxVotes) {
                maxVotes = currentVotes;
                winningCandidate =candidates[i];
            }
        }
    }

    function winner() public view returns(string memory) {
        return winningCandidate;
    }

    function viewResult() public view returns(uint) {
        return result;
    }

}