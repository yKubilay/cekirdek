const express = require('express');
const bodyParser = require('body-parser');
const { runAutomation } = require('./index');

const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Received webhook request:', req.body); // Log the entire request body
    const { type } = req.body;

    // Check the type of webhook and trigger automation accordingly
    if (type === 'longhook') {
        console.log('Received longhook webhook');
        // Trigger the automation for longhook
        runAutomation('longhook');
    } else if (type === 'shorthook') {
        console.log('Received shorthook webhook');
        // Trigger the automation for shorthook
        runAutomation('shorthook');
    } else {
        console.log('Unknown webhook type:', type);
    }

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
