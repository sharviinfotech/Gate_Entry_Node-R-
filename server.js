const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./config/db');

// Initialize App
const app = express();

// CORS
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// ---- BODY PARSER (ONLY ONCE) ----
app.use(express.json({ limit: "50mb", strict: false }));
app.use(express.urlencoded({ extended: true }));

// ---- ROUTES MUST COME AFTER BODY PARSER ----
app.use('/api', routes);

// Database Connection
connectDB();

// Server Initialization
const BASE_SERVER_URL = 'http://localhost'
const BASE_PORT = 3005
app.listen(BASE_PORT, () =>
    console.log(`🚀 Server running on ${BASE_SERVER_URL}:${BASE_PORT}`)
);

// {
//     const express = require('express');
// const cors = require('cors');
// const routes = require('./routes');
// const connectDB = require('./config/db');

// const app = express();

// // CORS – allow nginx domain
// app.use(cors({
//     origin: ['http://103.69.28.102:8090'],
//     credentials: true
// }));
// app.use(express.json({ limit: '50mb', strict: false }));
// app.use(express.urlencoded({ extended: true }));

// app.use('/api', routes);

// connectDB();

// // IMPORTANT: listen on 0.0.0.0
// const PORT = 3009;
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`?? Backend running on port ${PORT}`);
// });

// }
