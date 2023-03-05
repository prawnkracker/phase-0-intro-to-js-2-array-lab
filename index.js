// Write your solution here!
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name) {
    [cats.splice(4,0,'Ralph')]
};

function destructivelyPrependCat(name) {
    [cats.splice(0,0,'Bob')]
};

function destructivelyRemoveLastCat() {
    [cats.pop()]
};

function destructivelyRemoveFirstCat() {
    [cats.shift()]
};

function appendCat(name) {
    const newCats = [...cats,'Broom'];
    return newCats;
}

function prependCat(name) {
    const newerCats = ['Arnold',...cats];
    return newerCats;
}

function removeLastCat() {
    const copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats
}

function removeFirstCat() {
    const catsAgain = [...cats];
    catsAgain.shift();
    return catsAgain;
}