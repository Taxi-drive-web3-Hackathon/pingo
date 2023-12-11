# Pingo API

## Description

Welcome to the Pingo API, a robust system built with [Nest](https://nestjs.com) designed to streamline user payment management. This API leverages the power of [JWT](https://jwt.io/introduction) for secure authentication, ensuring a seamless and secure experience for handling transactions.

## Table of Contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Usage](#usage)

## Installation

Get started with Pingo by following these simple installation steps:

  1. **Clone the Repository:**

    git clone https://github.com/Taxi-drive-web3-Hackathon/pingo/


  2. **Install dependencies:**

    git clone https://github.com/Taxi-drive-web3-Hackathon/pingo/

## Authentication

The API uses [JWT](https://jwt.io/introduction) for authentication.

To regsiter a new user, use the signup API:

    curl -X POST http://localhost:3000/auth/signup -H "Content-Type: application/json" -d '{"email": "user@provider.com", "name": "user name"}'

To login and get a valid token, use the signin API:

    curl -X POST http://localhost:3000/auth/signup -H "Content-Type: application/json" -d '{"email": "user@provider.com"}'
## Endpoints

The following endpoints are available:

**Create Payment**
POST /payments

    curl -X POST http://localhost:3000/payments -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -d '{"amount": 22, "addressReceiver": "lalalau", "chainId": 666, "user": "leleco"}'

**Get payment by ID**
GET /payments?id=1

    curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" http://0.0.0.0:3000/payments\?id\=1

## Usage

To run the project, use the following command:

`npm run start:dev`
