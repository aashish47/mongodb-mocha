const assert = require('assert');
const marioChar = require("../models/marioChar");

// describe tests
describe("Deleting records",function(){
    
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
    
    it("Delete one record from the database",function(done){
        marioChar.findOneAndRemove({name:'Mario'}).then(function(){
            marioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null)
                done();
            })
        })
    });
});