var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var gm = require('gm');

var allImages = fs.readdirSync('web/uploads/images');
var prefixLength = '/uploads/images/'.length;
var url = 'http://staging.go4media.ch/de/';


request(url, findAllImages);


/*** FUNCTIONS ***/

function findAllImages(error, response, page) {
	var $ = cheerio.load(page);
	$('.flipster0 img').each(function () {
		compareAndResize($(this));
	});
	console.log("To je sve narode. ");
} // findAllImages


function compareAndResize($img) {
	var src = $img.attr('src');
	if (src) {
		var newSrc = src.substring(prefixLength);
		for (var i = 0; i < allImages.length; i++) {
			if (newSrc !== allImages[i]) continue;
            gm('web/uploads/images/' + allImages[i])
            	.resize(262)
            	.write('web/uploads/images/' + allImages[i], resizeCallback);
		} // for
	} // if (src)
} // compareAndResize


function resizeCallback(err) {
    if (!err) console.log(' hooray! ');
    else console.log(err);
}
