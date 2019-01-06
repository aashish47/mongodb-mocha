const assert = require('assert');
const marioChar = require("../models/marioChar");

// describe tests
describe("Updating records",function(){
    
    var char;
    beforeEach(function(done){
        char = new marioChar({
            name:"Mario",
            weight: 50
        });
    
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        }).catch(function () {
            console.log("Promise Rejected");
       });
    });
    
    //create tests
    
    it("Update one record in the database",function(done){
        marioChar.findOneAndUpdate({name: 'Mario'},{name: 'Luigi'}).then(function(){
            marioChar.findOne({_id:char._id}).then(function(result){
                assert(result.name === 'Luigi');
                done();
            })
        })
    });

    it("Increment the weight by 1",function(done){
        marioChar.update({},{$inc:{weight:1}}).then(function(){
            marioChar.findOne({name:'Mario'}).then(function(result){
                assert(result.weight === 51);
                done();
            }).catch(function(){
                console.log('Promise rejected');
            })
        })
    });
});