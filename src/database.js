const mongoose = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err))