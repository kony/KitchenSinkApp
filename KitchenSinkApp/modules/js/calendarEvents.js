
/*****************************************************************
*	Name    : CalendarAddEvent
*	Author  : Kony 
*	Purpose : To add the calendar event to the device using 'kony.phone.addCalendarEvent' API
******************************************************************/

function CalendarAddEvent(eventObj)
{
	try 
	{
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 		
		var yyyy = today.getFullYear();		
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		if(dd<10)
			{dd='0'+dd}
		if(mm<10)
			{mm='0'+mm} 		 
		var date = dd+'/'+mm+'/'+yyyy;
		var stime  = h+":"+(parseInt(m)+2).toString()+":"+s;
		startTime  =date+" "+stime;
		var ftime = (parseInt(h)+1).toString()+":"+m+":"+s;
		finishTime =date+" "+ftime;
		if (eventObj["text"] == "Add calendar event")
		{
			var evtobj={summary:"Event started", start:startTime, finish:finishTime,alarm:40, access:"public"};
			kony.phone.addCalendarEvent(evtobj);
			frmCalendarEvents.lblCalendarEvents.text = "Calendar event is added with start time = "+startTime+". Please open device calendar to observe this.";
		}
		
		else 
		{
			var evtobj={summary:"Event started", start:startTime, finish:finishTime,alarm:40, access:"confidential"};
			kony.phone.addCalendarEvent(evtobj);
			frmCalendarEvents.lblCalendarEvents.text = "Calendar event is added in confidential mode with start time = "+startTime+".";
			
		}
	}
	catch(PhoneError)
	{
		alert("error in addCalendarEvent:: "+PhoneError);
	}
}
/*****************************************************************
*	Name    : CalendarRemoveEvent
*	Author  : Kony 
*	Purpose : To remove the calendar event from the device using 'kony.phone.removeCalendarEvent' API
******************************************************************/

function CalendarRemoveEvent()
{
		if (startTime =="undefined" || startTime ==undefined )
		{
			frmCalendarEvents.lblCalendarEvents.text ="Please create the calendar event."
			return
		}
		var evtobj={type:"starting",start:startTime, finish:finishTime};
		var events = kony.phone.findCalendarEvents(evtobj);
		
		kony.phone.removeCalendarEvent(events[0]);
		frmCalendarEvents.lblCalendarEvents.text = "Calendar event is removed. Please open device calendar to observe this"
}