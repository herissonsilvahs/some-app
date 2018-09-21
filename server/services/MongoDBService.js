const mongoose = require('mongoose')

module.exports = mongoose.connect(
  'mongodb://root:h1s2prog@ds149672.mlab.com:49672/app-2'
)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
