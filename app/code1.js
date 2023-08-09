gdjs.StartCode = {};
gdjs.StartCode.GDReset_9595TimerObjects1= [];
gdjs.StartCode.GDReset_9595TimerObjects2= [];
gdjs.StartCode.GDReset_9595TimerObjects3= [];
gdjs.StartCode.GDReset_9595TimerObjects4= [];
gdjs.StartCode.GDReset_9595ButtonObjects1= [];
gdjs.StartCode.GDReset_9595ButtonObjects2= [];
gdjs.StartCode.GDReset_9595ButtonObjects3= [];
gdjs.StartCode.GDReset_9595ButtonObjects4= [];
gdjs.StartCode.GDInstructionsObjects1= [];
gdjs.StartCode.GDInstructionsObjects2= [];
gdjs.StartCode.GDInstructionsObjects3= [];
gdjs.StartCode.GDInstructionsObjects4= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartCode.GDReset_9595ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartCode.GDReset_9595TimerObjects2);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 768, 432);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595ButtonObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartCode.GDReset_9595ButtonObjects2[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595ButtonObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 5, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24545668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartCode.GDReset_9595ButtonObjects1);
{for(var i = 0, len = gdjs.StartCode.GDReset_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595ButtonObjects1[i].setString("Press Anything to Begin");
}
}}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDReset_95959595ButtonObjects2Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartCode.GDReset_9595ButtonObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDReset_95959595ButtonObjects1Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartCode.GDReset_9595ButtonObjects1});
gdjs.StartCode.asyncCallback24557260 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hotel Lobby", false);
}}
gdjs.StartCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartCode.asyncCallback24557260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.asyncCallback24555668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartCode.GDReset_9595TimerObjects3);

{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects3[i].setString("1");
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects3[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartCode.GDReset_9595TimerObjects3[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 7, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.StartCode.GDReset_9595TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartCode.asyncCallback24555668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.asyncCallback24553916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartCode.GDReset_9595TimerObjects2);

{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects2[i].setString("2");
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartCode.GDReset_9595TimerObjects2[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 4, 4, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartCode.GDReset_9595TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartCode.asyncCallback24553916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartCode.GDReset_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDReset_95959595ButtonObjects2Objects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Any", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24549948);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDReset_9595ButtonObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDReset_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595ButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartCode.GDReset_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDReset_95959595ButtonObjects1Objects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24551092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartCode.GDReset_9595TimerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartCode.GDReset_9595TimerObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDReset_9595TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{


gdjs.StartCode.eventsList0(runtimeScene);
}


{


gdjs.StartCode.eventsList4(runtimeScene);
}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDReset_9595TimerObjects1.length = 0;
gdjs.StartCode.GDReset_9595TimerObjects2.length = 0;
gdjs.StartCode.GDReset_9595TimerObjects3.length = 0;
gdjs.StartCode.GDReset_9595TimerObjects4.length = 0;
gdjs.StartCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.StartCode.GDReset_9595ButtonObjects4.length = 0;
gdjs.StartCode.GDInstructionsObjects1.length = 0;
gdjs.StartCode.GDInstructionsObjects2.length = 0;
gdjs.StartCode.GDInstructionsObjects3.length = 0;
gdjs.StartCode.GDInstructionsObjects4.length = 0;

gdjs.StartCode.eventsList5(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
