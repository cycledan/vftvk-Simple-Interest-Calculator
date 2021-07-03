function compute()
{
	// get the values from edit field and controls
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	// This is not the way to calculate compound interest but want results to match.
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
	// if negative or zero send alert and focus back to input. (0 is not negative but OK)
    if(principal < 1)
    {
        alert("Enter a positive number");
		document.getElementById("principal").focus();    
	}
    else
	{
		// put on multiple lines to make readable. Could also use + sign to join lines
		document.getElementById("result").innerHTML=
			"If you deposit <mark>"+principal+"</mark>,\<br\>\
			at an interest rate of <mark>"+rate+"%</mark>\<br\>\
			You will receive an amount of <mark>"+interest+"</mark>,\<br\>\
			in the year <mark>"+year+"</mark>\<br\>";
	}

}

// called when slider is released. Would be better to update as you slide.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
