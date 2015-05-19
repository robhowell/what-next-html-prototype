var request = require('request-json');
var client = request.createClient('http://a.wunderlist.com/');
client.headers['X-Client-ID'] = process.env.WHAT_NOW_CLIENT_ID;
client.headers['X-Access-Token'] = process.env.WHAT_NOW_ACCESS_TOKEN;

client.get('/api/v1/lists', function(err, response, body) {
  console.log(response.toJSON());
});
