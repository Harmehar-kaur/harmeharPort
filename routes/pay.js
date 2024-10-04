const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  res.render('pay',{
    title:'Brew Stack | Pay'
  })
})

module.exports = router