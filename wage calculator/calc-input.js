var totalPay;
var overTimeModifier = 1.5;
var regularWorkWeek = 40;
var hours = 40;
var rate = 20;
var passValueButton = document.getElementById("passValue");
passValueButton.addEventListener ("click", calculateWages);
function calculateWages () {

  var hoursWorked=document.getElementById('hours').value;
  var payRate=document.getElementById('rate').value;

  if (hoursWorked > regularWorkWeek) {
		totalPay =(regularWorkWeek * payRate) + (hoursWorked - regularWorkWeek) * (payRate * overTimeModifier);
	} else {
		totalPay = payRate * hoursWorked;
	}

	//round "totalPay" to two decimals
	var result=Math.round(totalPay*100)/100;

	document.getElementById("roundedResult").innerHTML =
	"The total is: $" + result;
}
