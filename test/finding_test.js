const assert = require('assert');
const marioChar = require("../models/marioChar");

// describe tests
describe("finding records",function(){
    
    var char;
    beforeEach(function(done){
        char = new marioChar({
            name:"Mario"
        });
    
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        }).catch(function () {
            console.log("Promise Rejected");
       });
    });
    
    //create tests
    
    it("Finds one record from the database",function(done){
        marioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        }).catch(function () {
            console.log("Promise Rejected");
       });
    });

    it("Finds one record by id from the database",function(done){
        marioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        }).catch(function () {
            console.log("Promise Rejected");
       });
    });
});