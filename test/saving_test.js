const assert = require('assert');
const marioChar = require("../models/marioChar");

// describe tests
describe("Saving records",function(done){
    //create tests
    it("Saves a record to database",function(){
        var char = new marioChar({
            name:"Mario"
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        }).catch(function () {
            console.log("Promise Rejected");
       });
    });
});