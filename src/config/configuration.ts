
export default () => ({
    version: process.env.VERSION || '0.0.1',
    port: parseInt(process.env.PORT, 10) || 3030,
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        expiresIn: process.env.JWT_EXPIRY || '900s' //15 mins
    },
    refresh: {
        secret: process.env.REFRESH_TOKEN_SECRET || 'secret',
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '600000s' //almost 1 week
    }
  });
  