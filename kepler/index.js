const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Values taken from - 
// https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/
// https://phl.upr.edu/projects/habitable-exoplanets-catalog
function isHabitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 //amount of light from sun compared to earth
    && planet['koi_prad']<1.6; // radius of planet compared to earth
}

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({    // connects readable source(kepler) to writeable destination (parse()), returns js object
        comment: '#',
        columns: true,  // return each row as js object as key value pair
    }))     
    .on('data', (data) => {
        if(isHabitable(data)){
            habitablePlanets.push(data);
        }
    })
    .on('err', (err) => {
        habitablePlanets.push(err);
    })    
    .on('end', () => {
        console.log(habitablePlanets.length + " habitable planets found!");
        console.log(habitablePlanets.map((planet) => planet['kepler_name']));
        console.log('done');        
    })