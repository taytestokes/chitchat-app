const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Top Level Middleware
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});