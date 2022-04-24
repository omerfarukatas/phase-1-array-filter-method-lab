// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, name){
    return array.filter(function(element){
        return element.toUpperCase() === name.toUpperCase();
    })
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(array, letters){
    return array.filter(function(element){
        return element.toUpperCase().startsWith(letters.toUpperCase());
    })
}

console.log(fuzzyMatch(drivers, "bo"));

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, name){
    return array.filter(isMatching);

    function isMatching(object){
        return object.name === name;
    }
}

console.log(matchName(driversObj, "Bobby"));