
const express = require('express');
const travelRouter = express.Router();
const travelLog = [
    {
        img: 'img/20204165.jpg',
        title: 'Hidden Retreat',
        locData: 'Hualien, Taiwan'
    },
    {
        img: 'img/20232138.jpg',
        title: 'Picturesque Promenade',
        locData: 'Halstatt, Austria'
    },
    {
        img: 'img/DSCF1625.jpg',
        title: 'Leap of Faith',
        locData: 'Florence, Italy'
    },
    {
        img: 'img/20157677.jpg',
        title: 'Serenity',
        locData: 'Konigsee, Austria'
    },
	{
		img: 'img/kyotoeki.jpg',
		title: 'Visual Delight',
		locData: 'Kyoto Main Station, Japan'
	},
	{
		img: 'img/DSCF1608.jpg',
		title: 'Feat of Magnificence',
		locData: 'Florence, Italy'
	},
];

travelRouter.get('/', (req, res, next) => {
    res.send(travelLog);
});

module.exports = travelRouter;