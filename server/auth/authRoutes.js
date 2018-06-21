const router = require('express').Router();
const {makeToken} = require('./jwt');
const User = require('../users/User');

router.post('/register', function(req, res) {
  User.create(req.body)
    .then(({ username, race }) => {
      // we destructure the username and race to avoid returning the hashed password

      // then we assemble a new object and return it
      res.status(201).json({ username, race });
    })
    .catch(err => res.status(500).json(err));
});


router.put('/login', (req, res) => { 
  const {username, password} = req.body;
  User.findOne({username})
  .then(user => {
    user.validatePassword(password)
    .then(isMatch => {
      if(isMatch) {
        const token = makeToken(user);
        res.status(201).json({user, token})
      } else {
        res.status(401).json({msg: "token invalid"})
      }
    })
    .catch(err => res.status(401).json({msg:"invalid password"}))
  })
  .catch(err=> res.status(404).json({msg: "user not found"}))
})

module.exports = router;
