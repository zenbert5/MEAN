
const express = require('express');
const request = require('request');
const fourSQ = express.Router();

// Foursquare API Info
const clientId = 'K1PEF2M1PO5PYFKL4GAOXDN5AFFO31SE0ARQFNOM51RDHEIH';
const clientSecret = 'NVAOGYNNDVL2BT1MOUDCKAC3FHDXZP1LUDHR0F1CANK0BWMG';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

const city = 'san jose';
const urlToFetch = url + city + '&venuePhotos=1&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180210';

fourSQ.get('/', function(req, res) {
	request.get({url: urlToFetch}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var jsonResponse  = JSON.parse(body);
			let venues = jsonResponse.response.groups[0].items.map(location => location.venue);
			res.send(venues);
		} else {
			return;
		}
	});
});

module.exports = fourSQ;