// Generated by CoffeeScript 1.4.0
(function() {
  var re, regex;

  re = require('request-enhanced');

  re.get('http://www.example.com', function(error, data) {
    return console.log("Fetched: " + data.length + " characters");
  });

  re.get('http://www.example.com', "" + __dirname + "/test.txt", function(error, data) {
    return console.log('Fetched:', data);
  });

  regex = {
    firstLink: {
      regex: /<a href="(.*?)">(.*?)<\/a>/i,
      results: {
        0: 'html',
        1: 'href',
        2: 'text'
      }
    },
    allLinks: {
      regex: /<a href="(.*?)">(.*?)<\/a>/gi,
      results: {
        0: 'html',
        1: 'href',
        2: 'text'
      }
    }
  };

  re.get('http://www.example.com', regex, function(error, data, results) {
    console.log("Fetched: " + data.length + " characters to find:");
    return console.log(results);
  });

}).call(this);
