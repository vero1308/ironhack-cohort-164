const mongoose = require("mongoose"); // import mongoose dependency

// the Schema defines the future shape of the inserted documents in the studnets collection
const Schema = mongoose.Schema; // assign the Schema constructor to a constant

// ... instanciate the Schema with option (the blueprint)
const studentSchema = new Schema({
    age: Number,
    cohort: Number,
    email: String,
    password: String,
    firstname: String
});

const studentModel = mongoose.model("Student", studentSchema); 
// create a model using the schema
// a "students" collection is automatically created when inserting first student in database

module.exports = studentModel;
// D.I.Y
// modify the form signup AND the Student model 
// so the created students have age + cohort key/value pairs as well !!!!!