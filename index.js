/* require_statements_1 */
// const file1 = require('./require_statements_1/file1.js')
// const file2 = require('./require_statements_1/file2.js')
// const file3 = require('./require_statements_1/file3.js')

/* require_statements_2 */
// const file1 = require('./require_statements_2/file1.js')
// const file2 = require('./require_statements_2/file2.js')
// const file3 = require('./require_statements_2/file3.js')

// console.log(file1 + ", " + file2 + " is a number, " + "and a boolean can be " + file3 + " or false")

/* require_statements_3 */
// const array = require('./require_statements_3/array.js')

// for (var idx = 0; idx < array.length; idx++) {
//     console.log(array[idx])
// }

// /* require_statements_4 */
// const add = require('./require_statements_4/add.js')

// console.log(add(1, 1))
// console.log(add(200, 100))
// console.log(add(123, 321))

/* require_statements_5 */

const dog = require('./require_statements_5/dog.js')
const cat = require('./require_statements_5/cat.js')
const randomValue = require('./require_statements_5/randomValue.js')

console.log(randomValue(2, 5))
if (randomValue < 5) {
    return console.log(cat)
} else {return console.log(dog)}
console.log(randomValue)

