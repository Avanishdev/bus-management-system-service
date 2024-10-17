const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Notification', notificationSchema);
