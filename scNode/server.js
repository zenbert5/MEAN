var express  = require('express');
var app      = express();

const PORT = process.env.PORT || 4001;
const traveler = require(__dirname + '/routes/travelRouter.js');
const venues = require(__dirname + '/routes/fourSQ.js');

app.use(express.static('public'));
app.use('/travel', traveler);
app.use('/venue', venues)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});