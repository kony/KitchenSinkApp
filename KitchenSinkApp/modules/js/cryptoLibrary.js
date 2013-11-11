
/*****************************************************************
*     Name    : Encrypt
*     Author  : Kony
*     Purpose : To encrypt the user text and display the encrypted text.
******************************************************************/

function Encrypt()
{
	try
	{
		var algo="aes";
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		if (frmCrypto.textEncrypt.text == "" || frmCrypto.textEncrypt.text ==null)
		{
			frmCrypto.lblEncrypt.text =  "Please enter the text to encrypt";
			return;
		}
		
		else
		{
			var inputstr=frmCrypto.textEncrypt.text;
		}
		
		var prptobj={padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
		var myEncryptedText  = kony.convertToBase64(myEncryptedTextRaw);
		
		if(kony.os.deviceInfo().name == "Windows 8" || kony.os.deviceInfo().name == "WindowsPhone")
		{
			frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedTextRaw.toString();
		}
		else
		{
			frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedText.toString();
		}
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackEncryptAes : "+err );
	}
}


 
 
/*****************************************************************
*     Name    : decrypt
*     Author  : Kony
*     Purpose : To decrypt the encrypted text and display the decrypted text.
******************************************************************/
 
function decrypt()
{
	try
	{
		var algo="aes";
		
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		var prptobj= {padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		
		if(frmCrypto.lblEncrypt.text == "" ||frmCrypto.lblEncrypt.text == null || frmCrypto.lblEncrypt.text == "Please enter the text to encrypt")
		{
			frmCrypto.lblDecrypt.text = "There is no encrypted text";
			return;
		}
		var str = frmCrypto.lblEncrypt.text;
		//convertToRawBytes is not supported in SPA
		if(kony.os.deviceInfo().name == "thinclient")
		{
			var myEncryptedTextRa = myEncryptedTextRaw;
		}
		else
			var myEncryptedTextRa = kony.convertToRawBytes(str.substring(17));
		var myClearText = kony.crypto.decrypt(algo,encryptDecryptKey,myEncryptedTextRa,prptobj);
		if(kony.os.deviceInfo().name == "WindowsPhone")
			frmCrypto.lblDecrypt.text ="Decrypted text = "+myClearText;
		else
			frmCrypto.lblDecrypt.text ="Decrypted text = "+myClearText.toString();
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackDecryptAes : "+err );
	}
}


/*****************************************************************
*	Name    : createHashMD2
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD2" Algorithm.
******************************************************************/

function createHashMD2()
{
	try
    {
    	if( kony.os.deviceInfo().name == "WindowsPhone" ||kony.os.deviceInfo().name == "Windows")
    		var algo="sha1";
    	else
			var algo="md2";
		var inputstr=frmCrypto.txtMd2Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD2Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD2 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD4
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD4" Algorithm.
******************************************************************/

function createHashMD4()
{
	try
    {
    	if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows")
    		var algo="sha256";
    	else
			var algo="md4";
		var inputstr=frmCrypto.txtMD4Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD4Hash.text = myHashValue		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD4 : "+err );
	}
}

/*****************************************************************
*	Name    : createHashMD5
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD5" Algorithm.
******************************************************************/

function createHashMD5()
{
	try
    {
    	var algo="md5";
		var inputstr=frmCrypto.txtMD5Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		frmCrypto.lblMD5Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD5 : "+err );
	}
}