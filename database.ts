const mongoose = require("mongoose");

const URI = "mongodb://localhost/task";

mongoose.connect(URI, { useNewUrlParser: true });
// .then(db => console.log('BD is connectd'))
// .catch(err => console.log(err))

module.exports = mongoose;
