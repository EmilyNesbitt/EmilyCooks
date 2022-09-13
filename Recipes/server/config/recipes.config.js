const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('WE DID IT BOYS'))
    .catch(err => console.log('WE DID NOT DO IT BOYS', err));