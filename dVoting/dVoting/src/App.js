import React, { Component } from 'react'
import Web3 from 'web3'
import { RESULT_CALCULATION_ABI, RESULT_CALCULATION_ADDRESS } from './config'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ accounts, account: accounts[0] })
    const voting = new web3.eth.Contract(RESULT_CALCULATION_ABI, RESULT_CALCULATION_ADDRESS)
    this.setState({ eVoting: voting })

  }

  registerVoter = async (voterAddress) => {
    const { accounts, eVoting } = this.state;
    try {
      await eVoting.methods.registerVoter(voterAddress).send({ from: accounts[0] });
      alert('Voter successfully registered!');
    } catch (err) {
      alert('Voter registration failed!');
    }
  };

  confirmVoter = async (voterAddress) => {
    const { accounts, eVoting } = this.state;
    try {
      const hasVoter = await eVoting.methods.confirmVoter(voterAddress).call({ from: accounts[0] });
      if(hasVoter){
        alert('Voter already registered!');
      } else {
        await eVoting.methods.registerVoter(voterAddress).send({ from: accounts[0] });
        alert('Voter successfully registered!');
      }
    } catch (err) {
      alert('Voter registration failed!');
    }
  };

  vote = async (candidateID) => {
    const { accounts, eVoting } = this.state;
    try {
      await eVoting.methods.vote(candidateID).send({ from: accounts[0] });
      alert('Vote casted successfully!');
    } catch (err) {
      alert('Vote casting failed!');
    }
  };
  
  viewVotes = async (candidateID) => {
    const { accounts, eVoting } = this.state;
    try {
      const response = await eVoting.methods.viewVotes(candidateID).call({ from: accounts[0] });
      await eVoting.methods.calculateResult().send({ from: accounts[0] });
      alert('Number of Votes: ' + response);
    } catch (err) {
      alert('Viewing Vote Failed!');
    }
  };

  resultCalculation = async () => {
    const { accounts, eVoting } = this.state;
    try {
      await eVoting.methods.calculateResult().send({ from: accounts[0] });
      let winner = await eVoting.methods.winner().call({ from: accounts[0] })
      alert('Winner: ' + winner)
      let result = await eVoting.methods.viewResult().call({ from: accounts[0] })
      alert('Total votes: ' + result)
    } catch (err) {
      alert('Viewing Vote Failed!');
    }
  };


  constructor(props) {
    super(props)
    this.state = { accounts: [], account: '',  eVoting: '' , candidatesIDs: ["Candidate I", "Candidate II", "Candidate III"], candidateID: 0}
  }

  handleAccountChange = (event) => {
      this.setState({account: event.target.value});
  } 
  
  handleCandidateChange = (event) => {
    this.setState({candidateID: event.target.value});
  }

  handleRegisterVoter = (event) => {
    event.preventDefault();
    this.registerVoter(this.state.account);
  }

  handleConfirmVoter = (event) => {
    event.preventDefault();
    this.confirmVoter(this.state.account);
  }
  
  handleVote = (event) => {
    event.preventDefault();
    this.vote(this.state.candidateID);
  }

  handleViewVotes = (event) => {
    event.preventDefault();
    this.viewVotes(this.state.candidateID);
  } 

  handleResult = (event) => {
    event.preventDefault();
    this.resultCalculation(this.state.candidateID);
  }

  render() {
    return (
      <div className="container py-5">
        <h1 className="text-center text-xl text-gray-700 font-extrabold uppercase">
          Welcome to Decentralized Voting Platform!
        </h1> 
        <p className="text-center text-xl text-gray-700 font-bold">
          Your Account: 
          <select value={this.state.account} onChange={this.handleAccountChange}>
            {this.state.accounts.map((account, index) => {
              return <option key={index} value={account}>{account}</option>;
            })}
          </select>
        </p>
        <form className="py-5">
          <h2 className="text-center text-gray-700 font-bold mb-5">Register Vote</h2>
          <div className="flex flex-col justify-center items-center mb-10">
            <button
              onClick={this.handleRegisterVoter}
              className="rounded p-2 px-3 bg-gray-700 text-white border shadow-md font-bold py-2"
            >
              Register
            </button>
          </div>
          <h2 className="text-center text-gray-700 font-bold mb-5">Check Registration Status</h2>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={this.handleConfirmVoter}
              className="rounded p-2 px-3 bg-gray-700 text-white border shadow-md font-bold py-2"
            >
              Check
            </button>
          </div>
          <h2 className="text-center text-gray-700 font-bold mb-5">Cast Vote</h2>
          <div className="flex flex-col justify-center items-center mb-10">
            <label className="text-x text-gray-700 font-bold">Candidate ID</label>
            <select value={this.state.candidateID} onChange={this.handleCandidateChange}>
              {this.state.candidatesIDs.map((candidate, index) => {
                return <option key={index} value={index}>{candidate}</option>;
              })}
            </select>
            <button
              onClick={this.handleVote}
              className="rounded p-2 px-3 bg-gray-700 text-white border shadow-md font-bold py-2"
            >
              Vote
            </button>
          </div>
          <h2 className="text-center text-gray-700 font-bold mb-5">View Votes</h2>
          <div className="flex flex-col justify-center items-center mb-10">
            <label className="text-x text-gray-700 font-bold">Candidate ID</label>
            <select value={this.state.candidateID} onChange={this.handleCandidateChange}>
              {this.state.candidatesIDs.map((candidate, index) => {
                return <option key={index} value={index}>{candidate}</option>;
              })}
            </select>
            <button
              onClick={this.handleViewVotes}
              className="rounded p-2 px-3 bg-gray-700 text-white border shadow-md font-bold py-2"
            >
              View
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={this.handleResult} 
              className="rounded p-2 px-3 bg-gray-700 text-white border shadow-md font-bold py-2"
            >
              Calculate Result and Winner
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;