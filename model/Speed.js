const mongoose = require('mongoose')
const Speed = new mongoose.Schema(
    {
        name:{

        },
    }
)
module.exports = mongoose.model('Speed',Speed,'Speed')

