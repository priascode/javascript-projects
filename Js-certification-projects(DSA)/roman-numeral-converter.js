function convertToRoman(num) {

 const numerals = {
   1:'I',
   4:'IV',
   5:'V',
   9:'IX',
   10:'X',
   40:'XL',
   50:'L',
   90:'XC',
   100:'C',
   400:'CD',
   500:'D',
   900:'CM',
   1000:'M'
 }
 let romanize = '';
 let decimalkeys = Object.keys(numerals).reverse();
 
 decimalkeys.forEach(key =>{
   while(key<= num){
     romanize += numerals[key];
     num-= key;
   }
 })
 console.log(romanize);

 return romanize;
}

convertToRoman(36);