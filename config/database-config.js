const mongoose = require('mongoose');

const connect = async ()=>{
    await mongoose.connect("mongodb+srv://princevarshney072:users@cluster0.ota0ny1.mongodb.net/notes_db");
}

module.exports = connect;