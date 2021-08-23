import React, { useState } from 'react';
import './App.css';
import { IpInfo } from './components/IpInfo';
import { getIpInfo } from './api/api';
import logo from './images/Logo.png';

function App() {
  const [info, setInfo] = useState('');
  const [foundIp, setFoundIp] = useState('');
  const [isLoad, setIsLoad] = useState('');

  const handleChange = (event) => {
    setFoundIp(event.target.value)
  }

  const handleSubmit = (event) => {
    setIsLoad(true);
    event.preventDefault();
    if (foundIp) {
      getIpInfo(foundIp)
        .then(info => {
          setInfo(info);
          setIsLoad('');
        })
    } else {
      setInfo('')
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <a href=".">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
          </a>
          <h1 className="title">Find My IP</h1>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="input"
            placeholder="8.8.8.8"
            name="foundIp"
            value={foundIp}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="button-submit"
            name="send"
          >
            Search
          </button>
        </form>
        <div className="info-container">
          {!info
            ? <p className="simple-text">
              Enter IP and press “Search” to get geolocation data
            </p>
            : isLoad
              ? <p className="simple-text">Loading...</p>
              : <IpInfo info={info} />
          }
        </div>
      </div>

    </div>
  );
}

export default App;
