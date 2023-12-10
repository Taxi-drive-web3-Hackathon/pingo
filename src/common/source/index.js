// Arguments can be provided when a request is initated on-chain and used in the request source code as shown below
const paymentId = args[0];

if (!secrets.apiKey) {
  throw Error('apiKey secret is required.');
}

if (!paymentId) {
  throw Error('paymentId is required.');
}

// build HTTP request object

const pingoRequest = Functions.makeHttpRequest({
  url: `https://0.0.0.0/paymnets`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${secrets.apiKey}`,
  },
  params: {
    id: coinMarketCapCoinId,
  },
});

// Make the HTTP request
const pingoRequestResponse = await pingoRequest;

if (pingoRequestResponse.error) {
  throw new Error('CoinMarketCap Error');
}

// fetch the price
const { data } = pingoRequestResponse;

return Functions.encodeUint256(data);
