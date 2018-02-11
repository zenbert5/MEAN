
const express = require('express');
const travelRouter = express.Router();
const travelLog = [
    {
        img: 'img/20170715.jpg',
        title: 'BMWWELT i8',
        locData: 'Munich, Germany'
    },
    {
        img: 'img/20232138.jpg',
        title: 'Town Promenade',
        locData: 'Halstatt, Austria'
    },
    {
        img: 'img/DSCF1625.jpg',
        title: 'Overlooking Firenze',
        locData: 'Florence, Italy'
    },
    {
        img: 'img/20157677.jpg',
        title: 'Timeless',
        locData: 'Konigsee, Austria'
    }
];

travelRouter.get('/', (req, res, next) => {
    res.send(travelLog);
});

module.exports = travelRouter;