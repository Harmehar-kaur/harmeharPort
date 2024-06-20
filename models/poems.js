const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true },
  content: { 
    type: String, 
    required: true },
  author: { 
    type: String, 
    default:'Harmehar Kaur' },
  createdAt: { 
    type: Date, 
    default: Date.now }
});

module.exports = mongoose.model('Poem', poemSchema);
