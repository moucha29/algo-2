let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
let set = set1.concat(set2);
var found;
let SUM_DISTINCt = 0;
let SUM_COMMUN = 0;

for(const i in set){
   found= false;
    for (const j in set){
        if (set[i]== set[j] && i!==j){
            found = true;
            SUM_COMMUN += set[i];
        }
    }
    if (found == false){
        SUM_DISTINCt += set[i]
    }
}

console.log("Sum of distinct el is", SUM_DISTINCt)
console.log("Sum of commun el is", SUM_COMMUN)