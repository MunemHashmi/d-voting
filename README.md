
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

9. In the terminal, navigate to the dVoting directory. Launch the dVoting application by running the following command in the terminal:

```$ npm start```

10. Navigate to http://localhost:3000 in your browser.
