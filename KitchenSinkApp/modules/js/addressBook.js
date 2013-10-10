/******************************************************************
*	Name    : sendSMS
*	Author  : Kony 
*	Purpose : To send an SMS to the specified number.
*******************************************************************/

function sendSMS()
{
	if(kony.os.deviceInfo().model == "iPhone Simulator")
	{
		alert("Works only on device");
	}
	else
	{
		var phoneNo ="+91 40 12345678"; // This is a dummy number
		var text = "Hi kony developer";
		kony.phone.sendSMS(phoneNo, text);
	}
}

/******************************************************************
*	Name    : addContact
*	Author  : Kony 
*	Purpose : To add contacts to the device.In the below scenario,We are adding "John Steve" contact to the device.
*******************************************************************/

function addContact()
{
	try
	{
		var mycontact = {
						firstname :"John",lastname :"Steve",
						phone:[{name:"mobile",number:"9999999999"},{name:"home",number:"9999999999"}],
						email:[{name:"home",id:"abc@yahoo.com"},{name:"work",id:"def@kony.com"}],
						postal:[{name:"home",street:"Raheja",city:"hyderabad",state:"AP",zipcode:"500310"}],
						company:[{name:"work",company:"kony",title:"architect"}]
				        }
		kony.contact.add(mycontact);
		frmContact.lblDevContact.text = "Contact is added with firstname = 'John' and lastname = 'Steve' . Please Check the device contacts."
	}
	catch(err)
	{
		kony.print("error is ::: "+err);
	}
}

/******************************************************************
*	Name    : findContact
*	Author  : Kony 
*	Purpose : To find the no of contacts in the device with first name of the contact.Here in the below scenario,We are finding the contacts with the first name "John"
*******************************************************************/

function findContact()
{
	var findContacts = kony.contact.find("John"); 
	if (findContacts == null ||findContacts =="" )
	{
		frmContact.lblDevContact.text = "No contacts with the first name is 'John' ";
	}
	else
	{
		var len = findContacts.length;
		frmContact.lblDevContact.text = "No of contacts of which the first name is 'John' = "+len+".";
	}
}

/******************************************************************
*	Name    : removeContact
*	Author  : Kony 
*	Purpose : To remove all the contacts whose first name is "John"
*******************************************************************/

function removeContact()
{
	var findContacts = kony.contact.find("John"); 
	if (findContacts == null ||findContacts =="" )
	{
		frmContact.lblDevContact.text = "No contacts with the first name is 'John' ";
	}
	else
	{
		for (var i in findContacts )
			kony.contact.remove(findContacts[i]);
		frmContact.lblDevContact.text = "Removed all contacts of which the first name is 'John' . Please Check the device contacts.";
	}
}
