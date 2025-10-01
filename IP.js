
//Task 3

const IP_convert = (ip = '127.0.0.1') => {
  const result = ip.split('.').map(Number).reduce((acc, byte, index ) => {


       return acc + (byte << ((3 - index) * 8));

  }, 0);

    console.log(result);
 
 } ;
  
  
IP_convert('0.0.0.0');