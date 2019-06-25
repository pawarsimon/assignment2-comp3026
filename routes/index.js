const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ticket = require('../models/Ticket');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.post('/dashboard', (req, res) => {
  const { name, age, gender, startcity, destination, passportnumber } = req.body;
  let errors = [];

  if (!name || !age || !gender || !startcity || !destination || !passportnumber) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (errors.length > 0) {
    res.render('dashboard', {
      errors,
      name,
      age,
      gender,
      startcity,
      destination, 
      passportnumber
    });
  }else 
  {
    const newUser = new Ticket({
          name,
          age,
          gender,
          startcity,
          destination,
          passportnumber
        });
        console.log(newUser)
      }
    });


module.exports = router;
