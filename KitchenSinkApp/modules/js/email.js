
/*****************************************************************
*	Name    : feedBack
*	Author  : Kony 
*	Purpose : To send feed back to "kitchensinkapp@kony.com" DL
******************************************************************/

function feedBack()
{
	kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"Feedback on KitchenSink Application 1.1","",false,[]);
}
/*****************************************************************
*	Name    : emailSend
*	Author  : Kony 
*	Purpose : To send an email without attachment
******************************************************************/

function emailSend()
{
	kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"Feedback on KitchenSink Application 1.1","",false,[]);
}

/*****************************************************************
*	Name    : openMediaGallaeryCallBck
*	Author  : Kony 
*	Purpose : Below function is the callback function for 'kony.phone.openMediaGallery' API and this function will send email with an image from the media gallery as an attachment
******************************************************************/

function openMediaGallaeryCallBck(rawbytes)
{
	kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"","",false,[{mimetype:"image/*",attachment:rawbytes,filename :"IMG_0362.JPG"}]);
}
/*****************************************************************
*	Name    : emailSendWithAttachment
*	Author  : Kony 
*	Purpose : The below function is to open media gallery and to select an image from there and send the the same as an email attachment
******************************************************************/
function emailSendWithAttachment()
{
	kony.phone.openMediaGallery(openMediaGallaeryCallBck,{mimetype:"image/*"})
}

