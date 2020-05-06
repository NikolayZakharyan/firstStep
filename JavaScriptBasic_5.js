console.log('Tast Number 5');
//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.


let str = "w3resource";

for (let index = 0; index < str.length; index++) {
    // const element = str[index];
    let lastElement = str.substr(str.length - 1, 5);
    console.log(lastElement);

    let strRemoveLastElelment = str.slice(0, -1);
    let addLastElelement = lastElement.concat('', strRemoveLastElelment);

    str = addLastElelement;
    console.log(addLastElelement);   
};










