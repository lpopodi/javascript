
var palindrome = prompt("Please enter a word to test if it is a palindrome", "hello");

function palindrome(myString){

  /* reverse removeChar for comparison*/
  var checkPalindrome = palindrome.split('').reverse().join('');

  /* Check to see if myString is a Palindrome*/
  if(palindrome === checkPalindrome) {
    document.getElementById("answer").innerHTML =
  	myString + " is a Palindrome"
    console.log(myString + " is a Palindrome");
  }else{
    console.log(myString + " is not a Palindrome");
  }

}
