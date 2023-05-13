//rest
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello");// returns "Hello !"

//spread
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];
myFriends.push(...newFriends);
console.log(myFriends);

//distructure
let [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1,2,[3,4];