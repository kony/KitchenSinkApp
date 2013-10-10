// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.

/*****************************************************************
*	Name    : setLocationData
*	Author  : Kony 
*	Purpose : To set the location data to the map
******************************************************************/

function setLocationData()
{    
	if((kony.os.deviceInfo.name != "thinclient" && kony.os.deviceInfo.name != "android")|| (channel == "desktopweb"))
	{
		
		frmMap.mapNrm.locationData = [ 
	                              {
	                            	   lat:"17.447326",lon:"78.371358",name:"KonyLabs(new)",desc:"Phoenix infocity, Gachibowli"
	                            	  },
	                            	  {
	                            	   lat:"17.441839", lon:"78.380928", name:"KonyLabs(old)",desc:"Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",image:"pin.png",meta:{color:"red",label:"A"}
	                            	  },
	                            	        {
	                            	            lat:"17.450378", lon:"78.388398", name:"My Residence",desc:"408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",image:"pin.png",meta:{color:"yellow",label:"B"}
	                            	  }
	                              ]
	}
	else
	{
		
			
		if(kony.os.deviceInfo().name == "thinclient" && channel == "tablet" && channel != "desktopweb")
		{
			frmMap.mapNrm.containerHeight = 90; 
			frmMap.mapNrm.containerHeightReference = constants.MAP_HEIGHT_BY_FORM_REFERENCE; 
		}
		frmMap.mapNrm.address = [ 
	                              {
	                            	   lat:"17.447326",lon:"78.371358",name:"KonyLabs(new)",desc:"Phoenix infocity, Gachibowli"
	                            	  },
	                            	  {
	                            	   lat:"17.441839", lon:"78.380928", name:"KonyLabs(old)",desc:"Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",image:"pin.png",meta:{color:"red",label:"A"}
	                            	  },
	                            	        {
	                            	            lat:"17.450378", lon:"78.388398", name:"My Residence",desc:"408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",image:"pin.png",meta:{color:"yellow",label:"B"}
	                            	  }
	                              ]
	}
}