const mongoose = require('mongoose');

/**
 * Schema of the booking resource to be stored in the DB
 */

const bookingSchema = new mongoose.Schema({
    showroomId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Showroom'
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    paymentId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Payment'
    },
	status: {
        type: String,
        required: true,
        default: "IN_PROGRESS"
    },
	noOfSeatsToBook: {
        type: Number,
        required: true
    },
    seatsToBook: {
        type: [Number],
        required: true
    },
	totalCost: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now(),
        immutable: true
    },
    updatedAt:{
        type: Date,
        required: true,
        default: Date.now(),
    },
},{

})

module.exports = mongoose.model('Booking', bookingSchema);