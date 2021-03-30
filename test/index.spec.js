const supertest = require("supertest");
const assert = require("assert");
const app = require("../index");

describe("GET /", function() {
  it("it should has status code 200", function(done) {
      console.log("here");
    supertest(app)
      .get("/")
      .expect(200)
      .end(function(err, res) {
        if (err) done(err);
        done();
      });
  });

  it("it shoud has response with hope key with value of loop", function(done) {
    supertest(app)
      .get("/")
      .expect({ hope: "loop" })
      .end(function(err, res) {
        if (err) done(err);
        done();
      });
  });
});

