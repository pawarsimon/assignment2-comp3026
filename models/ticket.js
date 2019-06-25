const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  startcity: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  passportnumber: {
    type: Number,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
