import React, { useState } from 'react';
import './CardTabs.css';
const CardTabs = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardTypeChange = (e) => {
    setSelectedCardType(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const mockApiResponse = 
  {
    "data": [
      {
        "name": "Mixmax",
        "budget_name": "Software subscription",
        "owner_id": 1,
        "spent": {
          "value": 100,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 1000,
          "currency": "SGD"
        },
        "card_type": "burner",
        "expiry": "9 Feb",
        "limit": 100,
        "status": "active"
      },
      {
        "name": "Quickbooks",
        "budget_name": "Software subscription",
        "owner_id": 2,
        "spent": {
          "value": 50,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 250,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 10,
        "status": "active"
      },
      {
        "name": "Netflix",
        "budget_name": "Entertainment",
        "owner_id": 1,
        "spent": {
          "value": 20,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 200,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 5,
        "status": "inactive"
      },
      {
        "name": "Amazon Prime",
        "budget_name": "Shopping",
        "owner_id": 3,
        "spent": {
          "value": 80,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 300,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 20,
        "status": "active"
      },
      {
        "name": "Uber",
        "budget_name": "Transportation",
        "owner_id": 2,
        "spent": {
          "value": 30,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 150,
          "currency": "SGD"
        },
        "card_type": "burner",
        "expiry": "15 Mar",
        "limit": 50,
        "status": "active"
      },
      {
        "name": "Spotify",
        "budget_name": "Entertainment",
        "owner_id": 1,
        "spent": {
          "value": 15,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 100,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 10,
        "status": "active"
      },
      {
        "name": "Gym Membership",
        "budget_name": "Health and Fitness",
        "owner_id": 3,
        "spent": {
          "value": 0,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 500,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 15,
        "status": "active"
      },
      {
        "name": "Airbnb",
        "budget_name": "Travel",
        "owner_id": 2,
        "spent": {
          "value": 200,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 500,
          "currency": "SGD"
        },
        "card_type": "burner",
        "expiry": "10 Apr",
        "limit": 200,
        "status": "active"
      },
      {
        "name": "Adobe Creative Cloud",
        "budget_name": "Software subscription",
        "owner_id": 1,
        "spent": {
          "value": 50,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 200,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 20,
        "status": "active"
      },
      {
        "name": "Food Delivery",
        "budget_name": "Food and Dining",
        "owner_id": 3,
        "spent": {
          "value": 30,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 100,
          "currency": "SGD"
        },
        "card_type": "burner",
        "expiry": "5 May",
        "limit": 50,
        "status": "inactive"
      },
      {
        "name": "Fitness App",
        "budget_name": "Health and Fitness",
        "owner_id": 1,
        "spent": {
          "value": 10,
          "currency": "SGD"
        },
        "available_to_spend": {
          "value": 50,
          "currency": "SGD"
        },
        "card_type": "subscription",
        "limit": 5,
        "status": "active"
      }
    ],
    "page": 1,
    "per_page": 10,
    "total": 100
  }
  

  const cards = mockApiResponse.data;

  const filteredCards = cards
    .filter(
      (card) =>
        (activeTab === 'Your' && card.owner_id === 1) ||
        activeTab === 'All' ||
        (activeTab === 'Blocked' && card.status === 'blocked')
    )
    .filter(
      (card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCardType === 'All' || card.card_type === selectedCardType) &&
        (selectedFilter === 'All' || card.status === selectedFilter)
    );

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 'Your' ? 'active' : ''}
          onClick={() => handleTabClick('Your')}
        >
          Your
        </button>
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabClick('All')}
        >
          All
        </button>
        <button
          className={activeTab === 'Blocked' ? 'active' : ''}
          onClick={() => handleTabClick('Blocked')}
        >
          Blocked
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by card name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filter-container">
        <label htmlFor="cardType">Card Type:</label>
        <select
          id="cardType"
          value={selectedCardType}
          onChange={handleCardTypeChange}
        >
          <option value="All">All</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label htmlFor="filter">Filter:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>
      <div className="tab-content">
        <div className="card-container">
          {filteredCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <span className="card-type">{card.card_type}</span>
              </div>
              <div className="card-body">
                <p>Name: {card.name}</p>
                {card.card_type === 'burner' && <p>Expires on {card.expiry}</p>}
                {card.card_type === 'subscription' && (
                  <p>Limit: {card.limit}</p>
                )}
                <p>Status: {card.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTabs;
