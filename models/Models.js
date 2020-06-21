var mongodb = require('mongodb');

// schemas
var AdminSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  username: String,
  password: String
}, { versionKey: false });

var CategorySchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  name: String
}, { versionKey: false });

var CustomerSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  username: String,
  password: String,
  name: String,
  phone: String,
  email: String,
  active: Number,
  token: String,
}, { versionKey: false });

var ProductSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  name: String,
  price: Number,
  image: String,
  cdate: Number,
  category: CategorySchema
}, { versionKey: false });

var ItemSchema = mongodb.Schema({
  product: ProductSchema,
  quantity: Number
}, { versionKey: false, _id: false });

var OrderSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  cdate: Number,
  total: Number,
  status: String,
  customer: CustomerSchema,
  items: [ItemSchema]
}, { versionKey: false });

// models
var Admin = mongodb.model('Admin', AdminSchema);
var Category = mongodb.model('Category', CategorySchema);
var Customer = mongodb.model('Customer', CustomerSchema);
var Product = mongodb.model('Product', ProductSchema);
var Order = mongodb.model('Order', OrderSchema);
module.exports = { Admin, Category, Customer, Product, Order };