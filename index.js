const arguments = process.argv.slice(2);
const breedName = arguments[0];
const { fetchBreedDescription } = require('./breedFetcher');


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    const data = JSON.parse(desc);
    if (!data[0]) {
      console.log('Sorry!Breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});