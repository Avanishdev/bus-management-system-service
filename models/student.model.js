const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    shift: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);
