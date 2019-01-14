const mongoose = require('mongoose');

const RegisterModelSchema = new mongoose.Schema({
  name : String,
  package : String,
  additionalComponent : {
    generateAgent: Boolean,
    generateEnv: Boolean,
    generateDriver: Boolean,
    generateAdapter: Boolean,
    generateTransaction: Boolean,
    generateSequence: Boolean,
    generateSequencer: Boolean,
    generateTest: Boolean
  },
  registers : [{
    name : String,
    coverageMode : String,
    size : Number,
    fields : [{
      name : String,
      size : Number,
      isRand : Number,
      access : String,
      dimension : Number,
      reset : String,
      volatile : Number,
      lsbPos : Number,
      individuallyAccessible : Number,
      hasReset : Number
    }]
  }],
  blocks : [{
    name : String,
    coverageMode : String,
    map : {
      name : String,
      offset : String,
      size : Number,
      endian : String
    },
    mem : {
      name : String,
      offset : String,
      size : Number
    },
    fields : [{
      fieldType : String,
      name : String,
      offset : String,
      access : String,
      dimension : Number
    }]
  }]

});

module.exports = mongoose.model('RegisterModel', RegisterModelSchema);