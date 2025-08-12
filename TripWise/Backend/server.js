process.removeAllListeners('warning');
const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

require("dotenv").config();
const connectDB = require("./DataBase/DB_Connect");

connectDB();


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
