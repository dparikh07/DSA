const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/people')

const peopleSchema=new mongoose.Schema({
    name: String,
    age: Number
});
const Person=mongoose.model('Person',peopleSchema);

const person1= new Person({
    name:'Dhaval',
    age:22
})
const person2=Person({
    name:'Bikram',
    age:21
})
// ...


// Use promises to handle the results of the query
Person.find()
    .then((people) => {
        people.forEach(function(person){
            console.log(person.name);
        })
    })
    .catch((error) => {
        console.error("Error querying the database:", error);
    })
    .finally(() => {
        // You can optionally close the MongoDB connection here
        mongoose.connection.close();
    });

Person.deleteOne({name:"Bikram"}).then(console.log("Succesfull")).catch((err)=>{console.log("error==",err)})