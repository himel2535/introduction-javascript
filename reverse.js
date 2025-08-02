
//----by for of ---->

const sentence='i am learning Web Dev'

// let reverse=''

// for (const letter of sentence){
//     // console.log(letter)
//     reverse = letter + reverse ;
// }
// console.log(reverse);


//-----with normal--->

// let rev=''
// for (i=0;i<sentence.length;i++){
//     // console.log(sentence[i])
//     const letter = sentence[i];
//     rev=letter+rev;
// }
// console.log(rev);


// ----shortcut --->

const reversed = sentence.split('').reverse().join('');
console.log(reversed)

