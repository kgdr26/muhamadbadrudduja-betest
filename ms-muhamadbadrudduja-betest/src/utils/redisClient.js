const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.connect();

client.on('error', (err) => {
  console.log(err);
});

module.exports = client;