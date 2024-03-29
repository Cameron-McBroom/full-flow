module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'hello@levelupexterior.com.au',
        defaultReplyTo: 'hello@levelupexterior.com.au',
        testAddress: 'email@domain.com',
      },
    },
  },
});
