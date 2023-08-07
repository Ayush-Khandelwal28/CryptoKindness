import Web3 from 'web3';
import contractABI from './contractABI.json';

let selectedAccount;
let fundMeContract;
let isInitialized = false;

export const init = async () => {
	try {
		let provider = window.ethereum;

		if (typeof provider !== 'undefined') {
			const accounts = await provider.request({ method: 'eth_requestAccounts' });
			selectedAccount = accounts[0];
			console.log(`Selected account is ${selectedAccount}`);

			window.ethereum.on('accountsChanged', (accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account changed to ${selectedAccount}`);
			});
		} else {
			throw new Error('Web3 provider not found');
		}

		const web3 = new Web3(provider);
		const networkId = await web3.eth.net.getId();

		fundMeContract = new web3.eth.Contract(
			contractABI,
			// Contract address on the appropriate network
			'0xbB59bb522617D859B25B8FaFE8dC5EB702bbbE5B'
		);

		isInitialized = true;
	} catch (error) {
		console.error('Error initializing:', error);
	}
};

export const fundContract = async (amount) => {
	try {
	  // Convert the amount to wei
	  const amountInWei = Web3.utils.toWei(amount/1e18, 'ether');
  
	  // Fund the contract
	  await fundMeContract.methods.fund().send({
		from: selectedAccount,
		value: amountInWei,
	  });
  
	//   console.log('Transaction hash:', tx.transactionHash);
	//   return tx;
	} catch (error) {
	  console.error('Error funding contract:', error);
	  throw error;
	}
  };

export const withdrawFunds = async () => {
	try {
		if (!isInitialized) {
			await init();
		}

		const tx = await fundMeContract.methods.withdraw().send({ from: selectedAccount });
		console.log('Transaction hash:', tx.transactionHash);
		return tx;
	} catch (error) {
		console.error('Error withdrawing funds:', error);
		throw error;
	}
};
