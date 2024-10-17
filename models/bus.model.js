const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    occupancy: {
        type: Number,
        default: 0,
    },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] },
    },
});

module.exports = mongoose.model('Bus', busSchema);
