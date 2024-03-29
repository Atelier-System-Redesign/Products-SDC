const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  feature: String,
  value: String,
}, { _id: false });

const photosSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String,
}, { _id: false });

// const skusSchema = new mongoose.Schema({
//   quantity: Number,
//   size: String,
// }, { _id: false });

const resultsSchema = new mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: { type: [String, null], default: null },
  'default?': Boolean,
  photos: [photosSchema],
  skus: mongoose.Mixed,
  // {
  //   type: Map,
  //   of: skusSchema,
  // },
}, { _id: false });

const productSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [featuresSchema],
  results: [resultsSchema],
  relatedItems: [Number],
});

module.exports = productSchema;
