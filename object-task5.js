let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (prop in myObject){
    console.log('key: ',prop,' | ','type: ',typeof myObject[prop])
}


