
# dVoting - a blockchain based voting application

dVoting is a blockchain-based voting platform developed using Ganache, Truffle, ReactJS, TailwindCss, web3.js, and Solidity. dVoting allows users to register, cast votes and view results securely and trustfully.


## Features

dVoting incorporates the following features: 
* Trust - Blockchain technology allows for secure transactions, with all data stored on the blockchain itself.
* Transparency - All transactions on the blockchain are transparent and visible.
* Reliability - A vote cast on the dVoting platform can be tracked and audited.


## Benefits

dVoting provides several benefits, such as:
* Increased accuracy - Electronic voting reduces chances of human errors.
* Increased turnout - Easier and more convenient voting process.
* Cost-effectiveness - Lower cost of conducting a vote, as there is no need to print or distribute ballot papers or count the votes manually.


## Technology

dVoting is powered by the following technologies:
* Ganache – private Ethereum blockchain
* Truffle – smart contract development framework
* ReactJS – Web application framework
* TailwindCSS – styling library
* web3.js – JavaScript library for interacting with the blockchain 
* Solidity – programing language for writing smart contracts


## Installation

To install dVoting, follow these steps:

1. Install Ganache, Truffle, ReactJS and web3.js on your system.

2. Clone the dVoting repository from Github.

3. In the terminal, navigate to the blockchain directory, and compile the project using Truffle:

```$ truffle compile```

4. Migrate the contracts to your local blockchain:

```$ truffle migrate```

5. Copy the contract address and paste it in the `config.js` file located in the `src` directory of dVoting.

6. Get the ABI (Application Binary Interface) of the contract from the `ResultCalculation.js` file located in the build folder of the blockchain directory.

7. Paste the ABI in the `config.js` file located in the `src` directory of dVoting.

8. Ensure your Ganache blockchain is running, and that your React app is connected to the blockchain.

9. In the terminal, navigate to the dVoting directory. Install the dependencies by running the following command in the terminal:

```$ npm install``` 

10. Launch the dVoting application by running the following command in the terminal:

```$ npm start```

11. Navigate to http://localhost:3000 in your browser.
