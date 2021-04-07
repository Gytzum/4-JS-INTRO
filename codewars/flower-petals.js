function howMuchILoveYou(nbPetals) {
let phrases = ['I love you', 'a little', 'a lot', 'passionately', 
'madly', 'not at all'];
let a = phrases[(nbPetals-1) % phrases.length];
    return a;
}


console.log(howMuchILoveYou(14),"I love you");
console.log(howMuchILoveYou(3),"a lot");
console.log(howMuchILoveYou(6),"not at all");
