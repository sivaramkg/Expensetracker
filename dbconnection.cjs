const  {MongoClient} = require('mongodb')

let dbConnection
function connectToDb() {
    dbConnection = MongoClient.connect('mongodb://localhost:27017/ExpenseTracker'.then(Function(client) ))
}

function getDb() {
    return dbConnection
}

// Exporting the required functions
module.exports = {connectToDb, getDb}