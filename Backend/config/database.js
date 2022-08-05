const mongoose = require('mongoose');



const connectDatabase = () => {
    console.log('connecting to database');
mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con=>{
        console.log('Database connected');
})
}
module.exports = connectDatabase;