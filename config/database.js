const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://harshatborusu518:harshat123@cluster0.emekczo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then((result) => console.log('Connected to DB'))
  .catch((err) => console.log(err));