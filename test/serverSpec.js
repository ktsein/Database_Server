var expect = require('chai').expect;
var request = require('request');
var server = require('../server');

describe('Node database server', function(){

  describe('server is accessible', function(){

      it('should return 200', function(done){

        var url = "http://localhost:4000";

        request(url, function(err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });


});
