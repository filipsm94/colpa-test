const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./dist/colpatriaTest'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'/dist/colpatriaTest/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Express server listening on port ${port}`);
});