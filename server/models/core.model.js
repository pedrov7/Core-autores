const mongoose = require('mongoose');

const CoreSchema = new mongoose.Schema({
    title:  {
            type:String,
            required: [true, 'Field required'],
            minlength: [3, 'Length must be at least 3 characters']
            }

},{timestamps:true})


module.exports.Core = mongoose.model("Core",CoreSchema);