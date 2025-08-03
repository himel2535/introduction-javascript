let text='An Aabbasiya khilafath';
count=0;
for(i=0;i<text.length;i++){
    if(text[i].toLowerCase()==='a'){
        count++;
    }
}
console.log(count)