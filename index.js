const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server runnin on port ' + PORT);
});
