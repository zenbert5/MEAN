const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static(__dirname + '/public'));

const { getElementById, getIndexById, updateElement,
    seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static(__dirname + '/public'));

app.get('/expressions', (req, res, next) => {
    res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
if (foundExpression) {
    res.send(foundExpression);
} else {
    res.status(404).send();
}
});

// check if object exits by checking for ID of object in expression
// if object exists, then update the element
app.put('/expressions/:id', (req, res, next) => {
    const expressionUpdates = req.query;
if (getIndexById(req.params.id, expressions) !== -1) {
    expressions[req.params.id] = updateElement(req.params.id, expressionUpdates, expressions);
    res.send(expressions[req.params.id]);
} else {
    res.status(404).send('Object not found');
}
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});