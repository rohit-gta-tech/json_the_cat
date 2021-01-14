const arguments = process.argv.slice(2);
const breed = arguments[0];
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('There seems to be a problem at our end!!!');
    process.exit();
  }
  //console.log(typeof body);
  //console.log(body);
  const data = JSON.parse(body);
  //console.log(typeof data);
  if (!data[0]) {
    console.log('Sorry!Breed not found');
  } else {
    console.log(data[0].description);
  }
});