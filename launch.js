const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./dist/colaptriaTest'));

app.get('/*', (req, res) => {
    res.sendFile('/dist/colaptriaTest/index.html');
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Express server listening on port ${process.env.PORT}`);
});