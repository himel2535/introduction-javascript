let text = "Xoja xangman";

if (text.includes("x")) {
  text=text.replace(/x/g, "y");
}
if (text.includes("X")) {
  text=text.replace(/X/g, "Y");
}

console.log(text);
