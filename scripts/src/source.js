const paymentId = args[0];
const token = args[1];

if (!token) {
  throw new Error('Missing token');
}

// build HTTP request object

const request = Functions.makeHttpRequest({
  url: `https://pingo-pay.vercel.app/payments?id=${paymentId}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

// Make the HTTP request
const response = await request;

if (response.error) {
  throw new Error('PinGo failed to fetch payment details' + response.error);
}

// fetch the price
const chainIds = {
  80001: 1,
  43113: 2,
};

const chainId = chainIds[Number(response.data.chainId)];
const values = Object.values({
  id: Number(response.data.id),
  addressReceiver: Number(response.data.addressReceiver),
  chainId,
  amount: Number(response.data.addressReceiver).toString(),
});

console.log(values.toString());

return Functions.encodeString(values.toString());
