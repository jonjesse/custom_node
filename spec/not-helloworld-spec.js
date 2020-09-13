var request = require("request");
var base_url = "http://localhost:3000/";
var server = require("../app.js");
var rcode = '';
var response = '';

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request(base_url, function(error, response, body) {
        //console.log(response);
	rcode = response;
	console.log("status code::"+rcode.statusCode); 
        expect(rcode.statusCode).toBe(200);
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

