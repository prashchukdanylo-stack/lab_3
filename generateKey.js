
//Task 2

const generateKey = (length, characters) => {
  
let result = "";
const charactersLength = characters.length;

for (let i = 0; i < charactersLength; i++) {
  const random = Math.floor(Math.random() * charactersLength);
  result += characters[random];
}
  return result;
}


const characters = 'admkwmckwmdlwkalksdlsd';


console.log(generateKey (6, characters));