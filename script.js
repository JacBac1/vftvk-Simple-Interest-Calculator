function compute()      //button
{
    //extracted variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //computed variables
    var interest = principal * years * (rate /100);
    var amount = parseFloat(principal) + parseFloat(interest);
    var year = new Date().getFullYear()+parseInt(years);
    //display, verification
    if(principal < 0)
    {
        document.getElementById("result").innerHTML="The amount you entered is invalid.\<br\>"
    }
    else
    {
        document.getElementById("result").innerHTML="If you deposit $"+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $"+interest.toFixed(2)+",\<br\>in the year "+year+"\<br\>"
    }
}
function updateRate()       //slider display
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        