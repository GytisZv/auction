const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  starting_bid: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('auction', itemSchema);
