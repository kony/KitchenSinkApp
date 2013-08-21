
/*****************************************************************
*	Name    : setLocationData
*	Author  : Kony 
*	Purpose : To set the location data to the map
******************************************************************/

function setLocationData()
{    
	if(kony.os.deviceInfo.name != "thinclient" && kony.os.deviceInfo.name != "android")
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
		/* Map is not occupying whole screen
			Imran Khan Mohammed	30-May-2013 15:06:35	From now we have introduced two psp for MAP 
			containerHeight 
			containerHeightReference 
			
			With this we can achieve this. 
			
			add to map model like: 
			
			WidgetModel.containerHeight = 100; 
			WidgetModel.containerHeightReference = constants.MAP_HEIGHT_BY_FORM_REFERENCE; 
			Note: currently these properties are not exposed from IDE. */
			
		if(kony.os.deviceInfo().name == "thinclient" && channel == "tablet")
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