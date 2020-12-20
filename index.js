// Stock Market APP
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const port = process.env.port || 5000;

// set handlebar middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const otherstuff = "helo there, this is other stuff..";
// set handlebar routes
app.get('/', function(req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

// create static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Server listening on port ' + port));