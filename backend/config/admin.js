module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ca35f1c1181e321bb8151666e46521ef'),
  },
});
