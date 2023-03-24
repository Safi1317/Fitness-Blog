const router = require('express').Router();
const speakeasy = require('speakeasy');
const uuid = require('uuid');
const { User } = require('../models');

app.use(express.json())

app.get('/api', (req, res) => res.json({ message: 'Two factor auth begin'}))

// register user 
app.post('api/register', (req, res) => {
  const id = uuid.v4()

  try {
      const path = `user${id}`
      const tempSecret = speakeasy.generateSecret()
      db.push(path, {id, tempSecret})
      res.json({id, secret: tempSecret.base32})
  } catch (error) {
      console.log(error)
      res.status(500).json({message: 'Error secret not generated'})
  }
})

// verify token
app.post ('/api/verify', (req, res) => { 
  const {token, userId} = req.body

  try {
      const path = `/user/${userId}`
      const user = db.getData(path)

      const {base32:secret} = user.tempSecret

      const verified = speakeasy.totp.verify({ secret, 
          encoding: 'base32',
          token });

      if(verified) {
          db.push(path, {id: userId, secret: user.tempSecret})
          res.json({ verified: true })
      } else {
        res.json ({verified: false})
      }
  } catch (error){
    console.log(error)
    res.status(500).json({message: 'Error could not find user'})
  }
})

// validate token
app.post ('/api/validate', (req, res) => { 
  const {token, userId} = req.body

  try {
      const path = `/user/${userId}`
      const user = db.getData(path)

      const {base32:secret} = user.secret

      const tokenValidate = speakeasy.totp.verify({ secret, 
          encoding: 'base32',
          token, window: 1  });

      if(tokenValidate) {
          res.json({ validated: true })
      } else {
        res.json ({validated: false})
      }
  } catch (error){
    console.log(error)
    res.status(500).json({message: 'Error could not find user'})
  }
})

module.exports = router;