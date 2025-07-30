// for (i=21;i>=15;i--){
//     console.log(i)
// }

for (let i = 21; i >= 15; i--) {
  setTimeout(() => {
    console.log(i);
  }, (21 - i) * 1000);
}
