require('dotenv').config(); // För att läsa miljövariabler
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware för JSON-hantering
app.use(express.json());

// En enkel route
app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS backend!');
});

// Starta servern
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
