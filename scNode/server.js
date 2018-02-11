var express  = require('express');
var app      = express();

const PORT = process.env.PORT || 4001;
const traveler = require(__dirname + '/routes/travelRouter.js');

app.use(express.static('public'));
app.use('/travel', traveler);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});