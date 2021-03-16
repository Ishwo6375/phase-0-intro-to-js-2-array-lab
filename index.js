//write your sollution here!
let  cats = ["Milo", "Otis", "Garfield"] ;

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
  let  newArray = cats.concat();
    newArray.push("Broom");
     return  newArray
}
function prependCat(name) {
    let newArray = cats.concat();
    newArray.unshift("Arnold");
    return newArray
}
function removeLastCat() {
    let newArray = cats.concat();
    newArray.pop();
    return newArray
}
function removeFirstCat() {
    let newArray = cats.slice();
    newArray.shift();
    return newArray
}



