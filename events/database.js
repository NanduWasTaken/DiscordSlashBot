module.exports = {
    name:'database',
    execute(client) {
     const mongoose = require('mongoose');
     const db = mongoose.connection



     mongoose.connect(process.env.DPASS, {
       useNewUrlParser: true,
         useUnifiedTopology: true
         });
         db.once('open', () => {
           console.log('Successfully connected to MongoDB using Mongoose!')
         });
         db.on('error', () => {
           console.log('MongoDB Connection Error')
         });


    }
    
};