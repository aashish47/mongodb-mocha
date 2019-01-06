const mongoose = require('mongoose');

//es6 Promises 
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before(function(done){

    mongoose.connect("mongodb://localhost/testaroo", { useNewUrlParser: true });

    mongoose.connection.once('open',function(){
        console.log('connection made');
        done();
    }).on('error',function(error){
        console.log('connection error',error);
    });
});

//Drop the characters collection before each tests
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})