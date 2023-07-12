const animals = {
    tiger: 23,
    lion: 34,
    monkey: 6,
    bird: 13
}

const {tiger, lion,...rest} = animals;

function objectSpread(o1, o2 , o3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const arr = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

sum(...arr);