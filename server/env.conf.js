exports.corsOptions = {
    origin:'*', 
    methods:'GET, PUT, POST, PATCH, DELETE'
}
exports.defaultPort = 8012
exports.mongooUrl = 'mongodb://localhost:27017'
exports.mongooOps = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: false, // Don't build indexes
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 9, // Maintain up to 10 socket connections
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,
    dbName: '',
    user: '',
    pass: '',
    auth: {
        authdb: 'admin'
    }
}