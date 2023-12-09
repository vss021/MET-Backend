const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://saudvijaysingh:Wraz8ElEg4FKKZOH@cluster0.5qcxnfb.mongodb.net/?retryWrites=true&w=majority")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}
