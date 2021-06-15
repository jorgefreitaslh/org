const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))