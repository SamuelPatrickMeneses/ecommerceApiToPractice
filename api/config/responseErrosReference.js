module.exports = {
    ValidationError: {status: 400},
    MongooseError: {status: 500},
    DatabaseError: {status: 500},
    ReferenceError: {status: 404}
};