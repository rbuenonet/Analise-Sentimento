var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'rVeokwgSoRUGQ94pp2YgJbGAU',
  consumer_secret: 'WFQSZ4QQkFkX0oMaLAguHiYaitGowfhfJR7TcsgJ5dN8PnIb9s',
  access_token_key: '258358379-eIM82Y5GdB2mK9OCQNynREToMlCni2H8bCpmISMy',
  access_token_secret: 'guDbtwgBp4eOhBoYHF6anNSwXBoq3URogAHQuAE4ApLS9'
});
 
client.get('search/tweets', {q: '#jbs', result_type: 'mixed', count: 10, lang: 'en'}, function(error, tweets, response) {
   tweets.statuses.forEach(function(element) {
       console.log(element.text)
   }, this);
});
