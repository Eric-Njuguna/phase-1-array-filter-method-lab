// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(array, string) {
    return array.filter(array => array.toLowerCase() == string.toLowerCase());

}

// console.log(findMatching(drivers, 'bobb'));

function fuzzyMatch(array, string) {
    // .slice() helps us check the beginning characters of the strings in the array

    return array.filter(array => array.slice(0, 2) == string);

    // return array.filter(array => array.name.slice(0, 2) == string);
}

// console.log(fuzzyMatch(drivers, 'Sa'));

function matchName(array, string) {
    return array.filter(array => array.name == string);
}

console.log(matchName(drivers, `Bobby`));