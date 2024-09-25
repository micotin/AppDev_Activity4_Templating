const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

const app = express ();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use('/', routes);

app.listen(PORT || 8080, () =>{
    console.log('Server connected successfully to port ${PORT}...')
})