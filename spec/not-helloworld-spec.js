jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
var request = require("request");
var base_url = "http://127.0.0.1:3000/";
var server = require("../app.js");
var rcode = '';
var response = '';
var sleep = require('system-sleep');
sleep(10000);


describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request(base_url, function(error, response, body) {
        //console.log(response);
        if (error) {
 	  console.log(error)
	  console.log(body)
	} else {
	  rcode = response;
	  console.log("status code::"+rcode.statusCode); 
          expect(rcode.statusCode).toBe(200);
        }
	done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toMatch(/world/);
        done();

        server.close();
      });
    });
  });
});

