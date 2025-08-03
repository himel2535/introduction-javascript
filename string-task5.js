
let text= "capitalize every first letter of each word";
let words=text.split(' ')

for(i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
}
let result=words.join(" ")
console.log(result)