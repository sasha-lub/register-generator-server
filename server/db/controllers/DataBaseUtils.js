const mongoose = require('mongoose');

require('../model/RegisterModel');

const MONGODB_URI = 'mongodb://admin:8Uhq39avAfyGPAT@ds151282.mlab.com:51282/heroku_1m8n95p6';

const RegisterModel = mongoose.model('RegisterModel');

function setUpConnection() {
  mongoose.connect(MONGODB_URI);
}

function listModels() {
  return RegisterModel.find();
}

function findById(id) {
  return RegisterModel.findById(id);
}

function updateModel(name, data) {
  return RegisterModel.findOne({name : name}).update(data);
}

function deleteModel(id) {
  return RegisterModel.findByIdAndDelete(id);
}

function createModel(data) {

  console.log(data);

  const model = new RegisterModel({
    name: data.name,
    package: data.package,
    registers: data.registers,
    blocks: data.blocks,
    additionalComponent : data.additionalComponent
  });

  return model.save();
}

module.exports = {
  setUpConnection, listModels, findById, createModel, deleteModel, updateModel
};