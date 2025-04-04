// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    const males = _.filter(array, (customer) => customer.gender === 'male');
    return males.length
};

var femaleCount = function(array) {
    const females = _.filter(array, (customer) => customer.gender === 'female');
    return females.length
};

var oldestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) {
        if (accumulator.age > current.age) {
            return accumulator.name;
        } else {
            return current.name;
        }
    });
};

var youngestCustomer = function(array) {
    let currentAge = 1000;
    let currentYoungest = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].age < currentAge) {
            currentAge = array[i].age
            currentYoungest = array[i].name
        }
    }
    return currentYoungest;
};

var averageBalance;

var firstLetterCount = function(array, letter) {
    const match = _.filter(array, function(customer) {
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) {
            return customer.name
        }
    })
    return match.length
};

var friendFirstLetterCount = function(array, customer, letter) {
    let match1 = _.filter(array, function(name) {
        if (customer === name.name) {
            return name;
        }
    });
    let match2 = _.filter(match1[0].friends, function(friend) {
        let output = []
        if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
            output.push(friend.name)
        }
        return output.length;
    });
    return match2.length;
};

// var friendsCount = function(array, name) {
//     let match = _.filter(array, function(person) {
//         let output = [];
//         for (let i = 0; i < person.friends.length; i++) {
//             if (person.friends[i].name === name) {
//                 output.push(person.name)
//             }
//         }
//         return output
//     })
//     return match;
// };

var topThreeTags;

// var genderCount = function(array) {
//     return _.reduce(array, function(accumulator, current) {
//         // determine if current object's gender already exists in accumulator as a key
//         // if it does, increment it
//         // else it doesn't exist
//         // create this key and give it an initial value
//     }, {})
// };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
