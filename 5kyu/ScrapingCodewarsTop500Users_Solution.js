// [optional] you can use request, request-promise, bluebird
const request = require('request');
var cheerio = require('cheerio');
var url = 'https://www.codewars.com/users/leaderboard';

function solution() {
  let prom = new Promise((resolve, reject) => {request(url, (err, res, html) => {
          if (!err && res.statusCode === 200) {
            var $ = cheerio.load(html);
          } else {
              return null;
          }
          let leaderboard = {position: {}};
          $('.rank').each(function(i, row){
              let user = {};
              user.name = $(this).next().find('a').text().replace(/<[\s\S]{1,}>/, "");
              let clan = $(this).next().next().text() || '';
              user.clan = clan;
              user.honor = parseInt($(this).next().next().next().text());
              leaderboard.position[i + 1] = user;
          })
          return resolve(leaderboard)
       })
  });
  return prom;
}