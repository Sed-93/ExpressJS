const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware för att hantera JSON
app.use(express.json());

// En enkel route
app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS backend!');
});

// Starta servern
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


