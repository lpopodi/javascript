var totalPay;
var overTimeModifier = 1.5;
var regularWorkWeek = 40;
var hours = 40;
var rate = 20;
var button = document.getElementById("passValue"),
var hours=document.getElementById('hours').value;
var rate=document.getElementById('rate').value;

button.onclick = function() {
    hourWorked(hours);
		payRate(rate);
}


	if (hoursWorked > regularWorkWeek) {
		totalPay =(regularWorkWeek * payRate) + (hoursWorked - regularWorkWeek) * (payRate * overTimeModifier);
	} else {
		totalPay = payRate * hoursWorked;
	}

	//round "totalPay" to two decimals
	var result=Math.round(totalPay*100)/100  //returns 28.45

	document.getElementById("roundedResult").innerHTML =
	"The total is: $" + result;
