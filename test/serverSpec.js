var expect = require('chai').expect;
var request = require('request');
var server = require('../server');

describe('Node database server', function(){

  describe('server is accessible', function(){

    var url = "http://localhost:4000/set?kyaw=awesome";

      it('should return 200', function(done){
        request(url, function(err, response, body){
          expect(response.statusCode).to.equal(200);
          done();
        });
      });

      it('saves key and value to the memory', function(done){
        request(url, function(err, response, body){
          expect(body).to.equal('{"kyaw":"awesome"}');
          done();
        });
      });

      it('return the value when search by key', function(done){
        request("http://localhost:4000/get?key=kyaw", function(err, response, body){
          expect(body).to.equal('awesome');
          done();
        });
      });
    });


});
