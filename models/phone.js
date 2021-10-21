const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const phoneSchema = new Schema({
  brand: {
    type: String,
    require: true,
    validate: /^\w+$/,
  },
  model: {
    type: String,
    require: true,
    unique: true,
  },
  manufacturedDate: {
    type: Date,
    default: new Date('2021-01-01'),
    max: [new Date(), 'This phone is from future?'],
  },
  displaySize: {
    type: Number,
    min: 1.0,
    max: [10.0, 'This is a tablet PC, not a phone'],
  },
  systemType: {
    type: String,
    required: true,
    default: 'unknown',
    enum: ['iOS', 'Android', 'unknown', 'other'],
  },
  camerasCount: {
    type: Number,
    min: 1,
    max: 10,
  },
  batteryCapacity: {
    type: Number,
    default: 0,
    min: 0,
    max: 100000,
  },
  isNFS: {
    type: Boolean,
    default: true,
  },
});

const Phone = mongoose.model('phones', phoneSchema);

module.exports = Phone;
