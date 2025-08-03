
const text = "A quick brown fox jumps over the lazy dog";
const vowels=['a','e','i','o','u'];
let hasAll = true;
for(i=0;i<vowels.length;i++){
    if(!text.includes(vowels[i])){
        hasAll=false;
    }
}
console.log(hasAll)