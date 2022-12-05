let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
let set = set1.concat(set2);
let SUM_DISTINCt = 0;
let SUM_COMMUN = 0;
let htab = new Map()

for(const i in set){
    if(htab.has(set[i])== false){
        htab.set(set[i],1)
    }
    else {
        htab.set(set[i],htab.get(set[i]) +1);
    }
}
//console.log(htab)

for (item of htab){
    if(item[1]>1){
       SUM_COMMUN += (item[0]*item[1]) ;
    }
    else {
        SUM_DISTINCt += item[0];
    }
}


console.log("Sum of distinct el is", SUM_DISTINCt)
console.log("Sum of commun el is", SUM_COMMUN)
