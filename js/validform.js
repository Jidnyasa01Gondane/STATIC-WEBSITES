function validform() {
   
var name = document.getElementById("name").value;

var num = document.getElementById("number").value;

var mail = document.getElementById("mail").value;

var pass = document.getElementById("password").value;

var exp = /^[a-zA-Z]+$/

if (num != "" )
{
	if (name.match(exp))
	{
		if (!isNaN(num))
		{
			if(pass.length <11)
			{
				return true;
			}
			else
			{
				alert("Password fields should not be more 10 character")
			}
		}
		else
		{
			alert("Number fields should not contain alphabet or special character")
		}
	}
	else
	{
		alert("Name fields should not contain number or special character")
		return false;
		
	}
	
}
else
{
	alert("All fields are not fields completely.")
	return false;
}


}
