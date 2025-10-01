
//Task 1

const random = (min, max) => {
  
  if (max !== undefined) {

    console.log(Math.floor(Math.random() * (max - min + 1)) + min );

  } else {
    console.log(min);
  }
  
  
};
  random(6,9);




