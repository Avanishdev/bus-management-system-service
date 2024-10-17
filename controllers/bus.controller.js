const Bus = require('../models/bus.model');

// Create a new bus
exports.createBus = async (req, res) => {
    const { route, capacity } = req.body;

    try {
        const newBus = new Bus({ route, capacity });
        await newBus.save();
        res.status(201).json(newBus);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update bus location
exports.updateBusLocation = async (req, res) => {
    const { busId, coordinates } = req.body;

    try {
        const bus = await Bus.findByIdAndUpdate(busId, { location: { coordinates } }, { new: true });
        res.json(bus);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
