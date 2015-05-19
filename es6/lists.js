var request = require('request-json');
var client = request.createClient('http://a.wunderlist.com/');

export function getLists() {
  client.get('api/v1/lists/', function(err, response, body) {
    return response;
  });
}
