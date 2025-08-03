
const text = "A quick brown fox jumps over the lazy dog";
const vowels=['a','e','i','o','u'];
lText=text.toLowerCase()
let hasAll = true;
for(i=0;i<vowels.length;i++){
    if(!lText.includes(vowels[i])){
        hasAll=false;
    }
}
console.log(hasAll)