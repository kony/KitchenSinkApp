/******************************************************************
*	Name    : set3DOSData
*	Author  : Kony 
*	Purpose : This function sets data to the 3DObjectselector
******************************************************************/
function set3DOSData()
{
	frm3DObj.objectselector3D.clearAllData();  // clearing data of 3DObjectselector
	//Adding models to 3DObjectselector
	frm3DObj.objectselector3D.addModel(1, "Flight_Down_Up_01", 0.371);
	frm3DObj.objectselector3D.addModel(2, "Flight_Down_Up_02", 0.371);
	frm3DObj.objectselector3D.addModel(3, "Flight_Seat_Up", 0.371);
	frm3DObj.objectselector3D.addModel(4, "Flight_Seat_Up_Sel", 0.371);
	frm3DObj.objectselector3D.addModel(5, "Flight_Side", 0.371);
	frm3DObj.objectselector3D.addModel(6, "Flight_Back", 0.371);
	frm3DObj.objectselector3D.addModel(7, "Flight_Door", 0.371);
 	frm3DObj.objectselector3D.defineSpecialModels(3,4);//Defining select and unselect models
	//Defining data Mapping
	frm3DObj.objectselector3D.setMapData(12, 7, 1, 1.774,
	[
        0, 6, 6, 7, 6, 6, 0,

		5, 3, 2, 1, 2, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,

		5, 2, 2, 1, 2, 2, 5
	] );
	frm3DObj.objectselector3D.setRequiredSelectionsCount(3);//Defining how many objects user can select
    frm3DObj.objectselector3D.setSelectedCells( [ [4, 3], [5, 5] ] );//pre-defining selected values
	frm3DObj.objectselector3D.setCameraProperties(1.5, 2.5, [ [1,4] ]);//setting camera properties (while in walk-through mode)

}
/******************************************************************
*	Name    : getSelected3DOS
*	Author  : Kony 
*	Purpose : This fuction alerts the selected values of the 3DObjectselector
******************************************************************/
function getSelected3DOS()
{
	var selectItems = frm3DObj.objectselector3D.getSelectedCells();//returns selected values
	frm3DObj.lblSel.text = selectItems;
	
}
