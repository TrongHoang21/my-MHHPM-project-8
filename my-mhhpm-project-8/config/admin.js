module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ddb0e87fe1ae2001ef662a1c5a43e12'),
  },
});
