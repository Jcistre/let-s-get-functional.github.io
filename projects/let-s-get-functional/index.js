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
    return _.reduce(array, function(accumulator, item) {
        if (item.gender === 'female') {
            accumulator += 1
        }
        return accumulator;
    }, 0);
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        if (current.age > accumulator.age) {
            return current
        } else {
            return accumulator
        }
    });
    return oldest.name
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(accumulator, current) {
        if (current.age < accumulator.age) {
            return current
        } else {
            return accumulator
        }
    });
    return youngest.name
};

var averageBalance = function(array) {
    let total = _.reduce(array, function(accumulator, current) {
        let num = parseFloat(current.balance.replace("$", "").replace(",", ""))
        accumulator += num
        return accumulator
    }, 0)
    let average = total/array.length
    return average;
};

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

var friendsCount = function(array, name) {
    let matches = _.filter(array, function(person) {
        // for loop to iterate over person's friends' array
        for (let i = 0; i < person.friends.length; i++) {
            // if name in friends matches name given, return that
            if (person.friends[i].name === name) {
                return person.name
            }
        }
    })
    let names = _.map(matches, function(person) {
        return person.name
    })
    // return match
    return names;
};

var topThreeTags = function(array) {
    // create an object with the tags and amount of times tag was mentioned / similar code to genderCount
    let counts = _.reduce(array, function(accumultator, current) {
        for (let i = 0; i < current.tags.length; i++) {
            accumultator[current.tags[i]] = (accumultator[current.tags[i]] || 0) + 1;
        }
        return accumultator
    }, {})
    // find the highest count / same code as oldestCustomer
    let highest = _.reduce(counts, function(accumulator, current) {
        if (current > accumulator) {
            return current
        } else {
            return accumulator
        }
    });
    // loop over counts object and if key's value matches highest value, push the key into output array 
    let output = []
    for (let key in counts) {
        if (counts[key] === highest) {
            output.push(key)
        }
    }
    // return array
    return output;
};

var genderCount = function(array) {
    return _.reduce(array, function(accumulator, current) { 
        accumulator[current.gender] = (accumulator[current.gender] || 0) + 1;
        return accumulator;
    }, {})
};

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
