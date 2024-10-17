const Notification = require('../models/notification.model');

// Create a notification
exports.createNotification = async (req, res) => {
    const { message, busId } = req.body;

    try {
        const notification = new Notification({ message, busId });
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get notifications for a specific bus
exports.getNotificationsByBus = async (req, res) => {
    const { busId } = req.params;

    try {
        const notifications = await Notification.find({ busId });
        res.json(notifications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
