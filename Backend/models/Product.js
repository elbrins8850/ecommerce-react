const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: "No description available"
  },
  category: {
    type: String,
    required: true,
    enum: ['women', 'men', 'kid']
  },
  image: {
    type: String,
    required: true
  },
  new_price: {
    type: Number,
    required: true,
    min: 0
  },
  old_price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 10,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);