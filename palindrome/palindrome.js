
var pInput = prompt("Please enter a word to test if it is a palindrome", "hello");
palindrome(pInput);

function palindrome(myString){
  /* reverse removeChar for comparison*/
  var checkPalindrome = myString.split('').reverse().join('');
  /* Check to see if myString is a Palindrome*/
  if(myString === checkPalindrome) {
    console.log(myString + " is a Palindrome");
  }else{
    console.log(myString + " is not a Palindrome");
  }
}
