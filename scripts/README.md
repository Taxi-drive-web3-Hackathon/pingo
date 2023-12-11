# Pingo Scripts

This project is a command-line interface (CLI)

## Installation

To set up the project, follow these steps:

1. Install the required dependencies.

   ```bash
   npm install
   ```

2. We use [@chainlink/env-enc](https://www.npmjs.com/package/@chainlink/env-enc) package to encrypt environment variables at rest. Set the password to encrypt and decrypt the environment varilable file `.env.enc`:

   ```bash
   npx env-enc set-pw
   ```

3. Set the following variables:

- PRIVATE_KEY
- POLYGON_MUMBAI_RPC_URL

4. Execute

Update the values for the variables:

const consumerAddress;
const subscriptionId;

```
node request.js
```
