// channel is a global variable defined to identify from which channel the app is being accessed. This is defined in the preappinit of the application properties.
/*****************************************************************
*	Name    : commonErrorCallback
*	Author  : Kony 
*	Purpose : To display error message on the console 
******************************************************************/

function commonErrorCallback( transactionId, error )
{
	kony.print(" Error code:: " + error);
	kony.print(" Error message:: " + error.message);
}

/*****************************************************************
*	Name    : commonVoidcallback
*	Author  : Kony 
*	Purpose : To display success message on the console.
******************************************************************/

function commonVoidcallback(  )
{
	kony.print("The transaction was executed successfully.");
}

/*****************************************************************
*	Name    : success_createTable
*	Author  : Kony 
*	Purpose : To display a message when table creation is successful.
******************************************************************/

function success_createTable( transactionId, resultset )
{
	frmWebSQL.lblWebSqlUpdate.text ="Database is created successfully with emp_details table"
}

/*****************************************************************
*	Name    : success_dropTable
*	Author  : Kony 
*	Purpose : To display a message on the console when table creation is unsuccessful.
******************************************************************/

function success_dropTable( transactionId, resultset )
{
	kony.print("Table was dropped");
}


/*****************************************************************
*	Name    : createTable
*	Author  : Kony 
*	Purpose : To create emp_details table with 4 rows
******************************************************************/

function createTable( transactionID )
{
	var sqlStatement = "DROP TABLE IF EXISTS emp_details";
	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    success_dropTable,
	                    commonErrorCallback);
	
	var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    success_createTable,
	                    commonErrorCallback);
	
	var insertTable = [ [ "George", 10 ],
	[ "John", 10 ],
	[ "Thomas", 20 ],
	[ "James", 20 ],
	[ "James", 30 ] ];
	for ( i=1; ((insertTable) != null) && i <= insertTable.length; i++ )
	{
	    var v = insertTable[ kony.decrement( i ) ];
	    var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[ kony.decrement(1) ] + "\"," + v[ kony.decrement(2) ] + ")";
	    count = count + 1;
	    kony.db.executeSql(transactionID,
	                        sqlStatement,
	                        null,
	                        success_createTable,
	                        commonErrorCallback);
	}
}


/*****************************************************************
*	Name    : createDB
*	Author  : Kony 
*	Purpose : To create the database with employee_details table
******************************************************************/

function createDB(  )
{
	if(channel=="tablet" || channel=="desktopweb")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
	}
	webSQLFlag = 1;
	baseObjectId = kony.db.openDatabase("webSqlDB",
	                                     "1.0",
	                                     "Sample SQL Database",
	                                     5 * 1024 * 1024);// 5MB database
	                                     
	kony.db.transaction(baseObjectId,
	                     createTable,
	                     commonErrorCallback,
	                     commonVoidcallback);
	                     
}

/*****************************************************************
*	Name    : success_insertData
*	Author  : Kony 
*	Purpose : To display a message when inserting the rows into 'employee_details' table is successful.
******************************************************************/

function success_insertData( transactionId, resultset )
{
	frmWebSQL.lblWebSqlUpdate.text ="3 rows are added to emp_details table";
}

/*****************************************************************
*	Name    : insertFirstData
*	Author  : Kony 
*	Purpose : To insert 3 rows into the 'employee_details' table
******************************************************************/

function insertFirstData( transactionID )
{
	var insertTable = [ [ "Siberius", 10 ], [ "Clark", 10 ], [ "Richard", 20 ] ];
	for ( i=1; ((insertTable) != null) && i <= insertTable.length; i++ )
	{
	    var v = insertTable[ kony.decrement( i ) ];
	    var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[ kony.decrement(1) ] + "\"," + v[ kony.decrement(2) ] + ")";
	    count = count + 1;
	    kony.db.executeSql(transactionID,
	                        sqlStatement,
	                        null,
	                        success_insertData,
	                        commonErrorCallback);
	}
}

/*****************************************************************
*	Name    : doTransactioninsertData
*	Author  : Kony 
*	Purpose : To implement WebSQL 'INSERT' statement to insert data into 'emp_details' table
******************************************************************/

function doTransactioninsertData(  )
{
	if(channel=="tablet" || channel=="desktopweb")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
	}
	if (webSQLFlag == 0)
	{
		frmWebSQL.lblWebSqlUpdate.text = "Please create the database and then try inserting data"
		return;
	}
	kony.db.transaction(baseObjectId,
	                     insertFirstData,
	                     commonErrorCallback,
	                     commonVoidcallback);
	
}

/*****************************************************************
*	Name    : success_sqlSelect
*	Author  : Kony 
*	Purpose : To show all the rows of 'emp_details' table in the form
******************************************************************/

function success_sqlSelect( transactionId, resultset )
{
	if(resultset != null)
	{
		var numResults = resultset.rows.length;
		var insertTable = [ { lblEmpID : "empid", lblEmpName : "empname", lblDepId : "depid" }  ];
		for ( var i = 0; i <= numResults - 1; i++ )
		{
			var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
			var addItem = { lblEmpID : rowItem.empid.toString(), lblEmpName : rowItem.empname, lblDepId : rowItem.depid.toString() } ;
			insertTable.push(addItem);
		}
		if(channel == "tablet" || channel == "desktopweb")
		{
			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
			frmWebSQL.segWebSQLResults.setData(insertTable);
			frmDeviceFeatures.sbxDevFeatureDeatils.addAt(frmWebSQL.segWebSQLResults, 2);
		}
		else
			frmWebSQLResults.segWebSQLResults.setData (insertTable);
	}
	if(channel != "tablet" && channel !="desktopweb")
		frmWebSQLResults.show();
}

/*****************************************************************
*	Name    : sqlSelect
*	Author  : Kony 
*	Purpose : To implement SQL statement 'SELECT' to select all the rows and to display the same.
******************************************************************/

function sqlSelect( transactionID )
{
	try
	{
		var sqlStatement = "SELECT * FROM emp_details";
		kony.db.executeSql(transactionID,
		                    sqlStatement,
		                    null,
		                    success_sqlSelect,
		                    commonErrorCallback);
	
	}
	catch(err)
	{
		kony.print("error while selecting "+err);
	}
}

/*****************************************************************
*	Name    : doTransactionsqlSelect
*	Author  : Kony 
*	Purpose : To initiate transaction to implement SQL statement 'SELECT' to select all the rows and to display the same.
******************************************************************/

function doTransactionsqlSelect()
{
	if (webSQLFlag == 0)
	{
		frmWebSQL.lblWebSqlUpdate.text = "Please create the database and then try show data"
		return;
	}
	try
	{
		kony.db.transaction(baseObjectId,
	                     sqlSelect,
	                     commonErrorCallback,
	                     commonVoidcallback);
	}
	catch(err)
	{
		kony.print("error in  select transaction"+err);
	}
}

/*****************************************************************
*	Name    : success_sqlUpdate
*	Author  : Kony 
*	Purpose : To display a message when updating the data to 'employee_details' table is successful
******************************************************************/

function success_sqlUpdate( transactionId, resultset )
{
	frmWebSQL.lblWebSqlUpdate.text = "Executed UPDATE emp_details SET depid=30 WHERE empname='John'; Rows updated: " + resultset[ kony.decrement("rowsAffected") ];
}

/*****************************************************************
*	Name    : sqlUpdate
*	Author  : Kony 
*	Purpose : To implement webSQL 'UPDATE' to update 'employee_details' table  in such a way that employee John's depart number will be 30
******************************************************************/

function sqlUpdate( transactionID )
{
	var sqlStatement = "UPDATE emp_details SET depid=30 WHERE empname='John'";
	//Execute sql statement

	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    success_sqlUpdate,
	                    commonErrorCallback);
}

/*****************************************************************
*	Name    : doTransactionUpdate
*	Author  : Kony 
*	Purpose : To initiate transaction to implement webSQL 'UPDATE' to update 'employee_details' table  
******************************************************************/

function doTransactionUpdate(  )
{
	if(channel=="tablet" || channel=="desktopweb")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
	}
	//Create a new read n write transaction
	if (webSQLFlag == 0)
	{
		frmWebSQL.lblWebSqlUpdate.text = "Please create the database and then try update data"
		return;
	}
	
	kony.db.transaction(baseObjectId,
	                     sqlUpdate,
	                     commonErrorCallback,
	                     commonVoidcallback);
}

/*****************************************************************
*	Name    : success_sqlDelete
*	Author  : Kony 
*	Purpose : To display a message when deleting the rows from 'employee_details' is successful
******************************************************************/

function success_sqlDelete( transactionId, resultset )
{
	frmWebSQL.lblWebSqlUpdate.text = "Executed DELETE FROM emp_details WHERE empid=(select max(empid) from emp_details); Rows updated: " + resultset[ kony.decrement("rowsAffected") ];
}

/*****************************************************************
*	Name    : sqlDelete
*	Author  : Kony 
*	Purpose : To delete the row which is having maximum id from the 'employee_details' table.
******************************************************************/

function sqlDelete( transactionID )
{
	var sqlStatement = "DELETE FROM emp_details WHERE empid=(select max(empid) from emp_details)";
	//Execute sql statement

	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    success_sqlDelete,
	                    commonErrorCallback);
}

/*****************************************************************
*	Name    : doTransactionDelete
*	Author  : Kony 
*	Purpose : To initiate transaction to delete a row from 'employee_details' table.
******************************************************************/

function doTransactionDelete( )
{
	if(channel=="tablet" || channel=="desktopweb")
	{
		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
	}
	//Create a new read n write transaction
	if (webSQLFlag == 0)
	{
		frmWebSQL.lblWebSqlUpdate.text = "Please create the database and then try deleting data"
		return;
	}
	kony.db.transaction(baseObjectId,
	                     sqlDelete,
	                     commonErrorCallback,
	                     commonVoidcallback);
}
