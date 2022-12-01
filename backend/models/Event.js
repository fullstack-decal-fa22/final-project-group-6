const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new Schema({
    notes: {
        type: String,
        required: true,
    }
}, {collection: 'eventsCollections'})

module.exports = mongoose.model('Event', eventSchema)