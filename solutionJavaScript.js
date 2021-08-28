//Function to convert input number to roman numeral
function convertToRoman(number) {
	
  // Create an object to compare the input number and convert it to roman numeral
  let baseRomanNumerals = {
    M:1000, CM:900, D:500, CD:400, C:100,
    XC:90, L:50, XL:40, X:10, IX:9, V:5,
    IV:4, I:1
    }
	
  // initialize the output string;
  let romanConvert = '';
  
  // Iterate through each numeral 
  for(let i in baseRomanNumerals){
	  
	// if input number is greater than the current roman numeral in loop
    while(number >= baseRomanNumerals[i]){
		
	  // concat the roman numeral in the output string
      romanConvert += i;
	  
	  // decrease the input number by that numerals decimal equivalent
      number -= baseRomanNumerals[i]
	  
	  // repeat until number decrease below the current roman numeral 
    }
	
	// Continue to the next numeral
  }
  
 // return the roman numeral 
 return romanConvert;
}

console.log(convertToRoman(152));
