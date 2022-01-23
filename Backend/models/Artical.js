const mongoose = require ("mongoose");


const Schema = mongoose.Schema;
const articalSchema = new Schema({

articalname:{
    type:String,
    required:true,
    trim:true

},

description:{
    type:String,
    required:true,
    trim:true
},

photo:{
    required:true,
    trim:true
}

});

const Artical = mongoose.model("Artical",articalSchema);

export default Articals;