const { Router } = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.send('express')
})
module.exports = router;    