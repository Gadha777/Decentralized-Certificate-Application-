# Decentralized Certificate Issuing Application (DApp)

This is a decentralized application (DApp) designed to issue and verify certificates on the Ethereum blockchain. It leverages smart contracts written in Solidity and is built with React.js for the frontend. MetaMask (or any compatible Web3 wallet) is used to interact with the Ethereum blockchain, making certificate issuance and verification secure and transparent.

## Overview

In this system:

- **Smart Contracts** will be used to issue and verify certificates.
- **MetaMask** (or any Web3 wallet) will be used for user interaction with the blockchain.
- **React.js** will serve as the frontend for user interaction.
- **Solidity** will be used to write the smart contract.

## Key Features

- **Issue Certificates**: Admins can issue certificates to users.
- **Verify Certificates**: Users can view and verify their certificates using a unique certificate ID.
- **Blockchain Storage**: All certificates are stored securely on the Ethereum blockchain, ensuring immutability and transparency.

## Tech Stack

- **Frontend**: React.js
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Web3 Library**: ethers.js
- **Wallet**: MetaMask for connecting to the blockchain

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MetaMask extension or another Ethereum-compatible wallet
- A local Ethereum node or use the Rinkeby testnet for testing

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Decentralized-Certificate-Application/CERTIDAPP.git
   cd CERTIDAPP

2. Install dependencies:
   
   ```bash
   npm install


3.Run the React frontend:

   ```bash
   npm run dev


### Deploy the Smart Contract

1. **Write and Compile the Smart Contract:**
   copy the smart contract in Solidity and compile it using a framework like Hardhat.

2. **Deploy the Contract to the Ethereum Network:**
   Hardhat to deploy the smart contract to the Ethereum network (local or testnet).

   - **With Hardhat:**
     - Install Hardhat: `npm install --save-dev hardhat`
     - Compile the contract: `npx hardhat compile`
     - Deploy using: `npx hardhat run scripts/deploy.js --network <network-name>

3. **Get the Deployed Contract Address and ABI:**
   After successful deployment, you will receive the contract address and ABI. Save these values as they will be required for interacting with the contract in 
       your DApp.

4. **Configure the Contract in the Project:**
   Use the contract address and ABI in your project (e.g., in a configuration file) to interact with the deployed contract.

### Set Up MetaMask

1. **Install the MetaMask Browser Extension:**
   - Go to [MetaMask](https://metamask.io) and install the extension for your preferred browser.

2. **Connect MetaMask to the Ethereum Network:**
   - Open MetaMask and connect it to the Ethereum network (either local or a testnet like Rinkeby).

3. **Import or Create an Account in MetaMask:**
   - Create a new MetaMask wallet or import an existing one. Follow the instructions provided by MetaMask.

4. **Interact with the DApp:**
   - Once MetaMask is connected to the network and the wallet is set up, you can interact with the DApp on the Ethereum blockchain.
