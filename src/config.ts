export default {
  jwt: {
    secretOrKey: 'S1lXEvzZqrWLNsyJIgffhzxCgn8CTgvi',
    expiresIn: 86400,
  },
  // these are used in the mail templates
  project: {
    name: 'PinGo',
    address: '#',
    logoUrl: '#',
    slogan: 'You drive your choice',
    color: '#123456',
    socials: [['GitHub', '#']],
    url: 'http://localhost:4200',
  },

  onchain: {
    mumbai: {
      rpc: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      router: '0x66cDc21b5db131E3f8E8af0CDB4E455a8393604a',
      consumer: '0x0cF7B245cAE77F1AA22FFAC2A303Dc5a97779AC5',
    },
  },
};
