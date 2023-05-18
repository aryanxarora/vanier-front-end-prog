const isArray = (arr) => {
    return Array.isArray(arr);
}

const getFirst = (arr, n) => {
    return arr.map((num, index) => n < index + 1 ? undefined : num).filter(n => n != undefined)
    //return arr.slice(0, n);
}

const capitalize = (s) => {
    return s.split().map(letter => letter.toUpperCase()).join()
}

const swapCase = (s) => {
    return s
            .split("")
            .map( (letter) => {
                return letter === letter.toUpperCase() ?
                letter.toLowerCase() :
                letter.toUpperCase()
            })
            .join("")
}

const charCount = (s) => {
     return [...s].reduce((count, char) => {
         count[char] = (count[char]||0)+1
         return count;
     }, {})
}

const getAverage = (arr) => {
    return  arr.reduce((avg, person) =>
        avg + person.age, 0) / arr.length;
}

console.log(isArray('w3resource'))
console.log(isArray([1, 2, 4, 0]))
console.log(getFirst([[],1, 2, 4, 0], 3))
console.log(capitalize('aryan'))
console.log(swapCase('aBcD'))
console.log(charCount('aaabbc'))
console.log(getAverage([{name: "Aryan", age: 22}, {name:"Jolon", age: 23}, {name: "Meet", age: 38}]))