const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    notes: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Event', EventSchema)