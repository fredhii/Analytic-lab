var express = require('express');
var app = express();

app.use(express.static('./dist/Analytic-lab'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/Analytic-lab/'}
    );
});

app.listen(process.env.PORT || 8080);
