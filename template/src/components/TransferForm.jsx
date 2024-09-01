
import React, { useState } from 'react';
import './TransferForm.css';

const TransferForm = () => {
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [sendingCountry, setSendingCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [nameoncard, setNameoncard] = useState(''); 
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const countries = [
    { code: 'IN', name: 'India', rate: 83.38 },
    { code: 'PH', name: 'Philippines', rate: 58.41 },
    { code: 'NG', name: 'Nigeria', rate: 1515.90 },
    { code: 'US', name: 'USA', rate: 1 },
    { code: 'CA', name: 'Canada', rate: 1.75 },
    { code: 'UK', name: 'UK', rate: 1.3 },
    { code: 'FR', name: 'France', rate: 1.2 },
    { code: 'DE', name: 'Germany', rate: 1.1 },
    { code: 'HTG', name: 'Haiti', rate: 132.56 },
    { code: 'DR', name: 'Dominican Republic', rate:59.10 },
    { code: 'GH', name: 'Ghana', rate: 15.26},
    
  ];

  const handleSendAmountChange = (e) => {
    const amount = e.target.value;
    setSendAmount(amount);
    if (selectedCountry) {
      setReceiveAmount((amount * exchangeRate).toFixed(2));
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const selectedCountryData = countries.find((c) => c.code === country);
    const rate = selectedCountryData ? selectedCountryData.rate : 1;
    setExchangeRate(rate);
    if (sendAmount) {
      setReceiveAmount((sendAmount * rate).toFixed(2));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      senderName,
      senderPhone,
      receiverName,
      receiverPhone,
      sendingCountry,
      selectedCountry,
      sendAmount,
      receiveAmount,
      nameoncard,
      creditCard,
      expirationDate,
      cvv
    });
    // Reset form after submission
    setSenderName('');
    setSenderPhone('');
    setReceiverName('');
    setReceiverPhone('');
    setSendingCountry('');
    setSelectedCountry('');
    setSendAmount('');
    setReceiveAmount('');
    setNameoncard('');
    setCreditCard('');
    setExpirationDate('');
    setCvv('');
  };

  return (
    <div className="transfer-form-container">
      <h2>Transfer Money</h2>
      <form className="transfer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="senderName">Sender Name:</label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senderPhone">Sender Phone Number:</label>
          <input
            type="text"
            id="senderPhone"
            value={senderPhone}
            onChange={(e) => setSenderPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverName">Receiver Name:</label>
          <input
            type="text"
            id="receiverName"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverPhone">Receiver Phone Number:</label>
          <input
            type="text"
            id="receiverPhone"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sendingCountry">Sending Country:</label>
          <select
            id="sendingCountry"
            value={sendingCountry}
            onChange={(e) => setSendingCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="selectedCountry">Receiving Country:</label>
          <select
            id="selectedCountry"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sendAmount">Send Amount:</label>
          <input
            type="number"
            id="sendAmount"
            value={sendAmount}
            onChange={handleSendAmountChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiveAmount">Receive Amount:</label>
          <input
            type="number"
            id="receiveAmount"
            value={receiveAmount}
            readOnly
          />



        <div className="form-group">
          <label htmlFor="nameoncard">Name on Card:</label>
          <input
            type="text"
            id="nameoncard"
            value={nameoncard}
            onChange={(e) => setNameoncard(e.target.value)}
            required
          />

        </div>



        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransferForm;
