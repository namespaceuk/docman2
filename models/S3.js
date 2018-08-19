
/*!
  S3
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

// const S3;

const S3Schema = new Schema({
  id: ObjectId,
  hash: String,
  name: String,
  title: String,
  description: String,
  size: Number,
  created_at: { type: Date, default: Date.now },
});

const S3 = mongoose.model('S3', S3Schema);

module.exports = S3;
