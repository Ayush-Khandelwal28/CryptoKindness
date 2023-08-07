import React, { useState, useEffect } from 'react';
import { init, fundContract } from '../Web3Client'; 
import Web3 from 'web3';

const DonatePage = ({ onGoBack }) => {
  useEffect(() => {
    init();
  }, []);

  const [name, setName] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [organization, setOrganization] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();
  
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
  
    const amountInWei = Web3.utils.toWei(parsedAmount.toString(), 'ether');
  
    try {
      const tx = await fundContract(amountInWei);
  
      console.log('Transaction hash:', tx.transactionHash);
      return tx;
    } catch (error) {
      console.error('Error processing donation:', error);
      setError('There was an error processing your donation.');
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleDonate}>
      <h1>Donate</h1>
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          Be Anonymous
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={anonymous} 
          />
        </label>
        <label>
          Organization:
          <select value={organization} onChange={(e) => setOrganization(e.target.value)}>
            <option value="">Select an organization</option>
            <option value="org1">Caring Hands Initiative</option>
            <option value="org2">Acts of Kindness Charity</option>
            <option value="org3">Hope for Tomorrow Charity</option>
          </select>
        </label>
        <label>
          Amount (ETH Minimum: 0.05 ETH):
          <input
            type="number"
            step="0.001"
            placeholder="Enter donation amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
        </label>
        <button type="submit">Donate</button>
      <button onClick={onGoBack}>Back</button> 
      </form>
    </div>
  );
};

export default DonatePage;
