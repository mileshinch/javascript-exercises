

const findTheOldest = function(people) {
    const currentYear = 2025;
    
    const oldestPerson = people.reduce((acc,curr) => 
    //curr.yearOfDeath - curr.yearOfBirth > acc.yearOfDeath - acc.yearOfBirth
    //? curr : acc

    // Handle missing 'yearOfDeath' by using the current year
    {
    const currAge = curr.yearOfDeath ? curr.yearOfDeath - curr.yearOfBirth : currentYear - curr.yearOfBirth;
    const accAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth : currentYear - acc.yearOfBirth;
    
    // Compare ages and return the person with the greater age
    return currAge > accAge ? curr : acc;

    }, people[0])
    
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
