gdjs.ConferenceCode = {};
gdjs.ConferenceCode.GDParticle_9595DashObjects1= [];
gdjs.ConferenceCode.GDParticle_9595DashObjects2= [];
gdjs.ConferenceCode.GDParticle_9595DashObjects3= [];
gdjs.ConferenceCode.GDParticle_9595DashObjects4= [];
gdjs.ConferenceCode.GDTotalPointsCountObjects1= [];
gdjs.ConferenceCode.GDTotalPointsCountObjects2= [];
gdjs.ConferenceCode.GDTotalPointsCountObjects3= [];
gdjs.ConferenceCode.GDTotalPointsCountObjects4= [];
gdjs.ConferenceCode.GDTotalPointsObjects1= [];
gdjs.ConferenceCode.GDTotalPointsObjects2= [];
gdjs.ConferenceCode.GDTotalPointsObjects3= [];
gdjs.ConferenceCode.GDTotalPointsObjects4= [];
gdjs.ConferenceCode.GDMovementJoystickObjects1= [];
gdjs.ConferenceCode.GDMovementJoystickObjects2= [];
gdjs.ConferenceCode.GDMovementJoystickObjects3= [];
gdjs.ConferenceCode.GDMovementJoystickObjects4= [];
gdjs.ConferenceCode.GDPlayerObjects1= [];
gdjs.ConferenceCode.GDPlayerObjects2= [];
gdjs.ConferenceCode.GDPlayerObjects3= [];
gdjs.ConferenceCode.GDPlayerObjects4= [];
gdjs.ConferenceCode.GDDashButtonObjects1= [];
gdjs.ConferenceCode.GDDashButtonObjects2= [];
gdjs.ConferenceCode.GDDashButtonObjects3= [];
gdjs.ConferenceCode.GDDashButtonObjects4= [];
gdjs.ConferenceCode.GDObjectsObjects1= [];
gdjs.ConferenceCode.GDObjectsObjects2= [];
gdjs.ConferenceCode.GDObjectsObjects3= [];
gdjs.ConferenceCode.GDObjectsObjects4= [];
gdjs.ConferenceCode.GDFloorObjects1= [];
gdjs.ConferenceCode.GDFloorObjects2= [];
gdjs.ConferenceCode.GDFloorObjects3= [];
gdjs.ConferenceCode.GDFloorObjects4= [];
gdjs.ConferenceCode.GDRedObjects1= [];
gdjs.ConferenceCode.GDRedObjects2= [];
gdjs.ConferenceCode.GDRedObjects3= [];
gdjs.ConferenceCode.GDRedObjects4= [];
gdjs.ConferenceCode.GDGoldCoinObjects1= [];
gdjs.ConferenceCode.GDGoldCoinObjects2= [];
gdjs.ConferenceCode.GDGoldCoinObjects3= [];
gdjs.ConferenceCode.GDGoldCoinObjects4= [];
gdjs.ConferenceCode.GDHotelHallwayObjects1= [];
gdjs.ConferenceCode.GDHotelHallwayObjects2= [];
gdjs.ConferenceCode.GDHotelHallwayObjects3= [];
gdjs.ConferenceCode.GDHotelHallwayObjects4= [];
gdjs.ConferenceCode.GDBlackObjects1= [];
gdjs.ConferenceCode.GDBlackObjects2= [];
gdjs.ConferenceCode.GDBlackObjects3= [];
gdjs.ConferenceCode.GDBlackObjects4= [];
gdjs.ConferenceCode.GDRedoObjects1= [];
gdjs.ConferenceCode.GDRedoObjects2= [];
gdjs.ConferenceCode.GDRedoObjects3= [];
gdjs.ConferenceCode.GDRedoObjects4= [];
gdjs.ConferenceCode.GDTimerObjects1= [];
gdjs.ConferenceCode.GDTimerObjects2= [];
gdjs.ConferenceCode.GDTimerObjects3= [];
gdjs.ConferenceCode.GDTimerObjects4= [];
gdjs.ConferenceCode.GDBuffArrow1Objects1= [];
gdjs.ConferenceCode.GDBuffArrow1Objects2= [];
gdjs.ConferenceCode.GDBuffArrow1Objects3= [];
gdjs.ConferenceCode.GDBuffArrow1Objects4= [];
gdjs.ConferenceCode.GDWinObjects1= [];
gdjs.ConferenceCode.GDWinObjects2= [];
gdjs.ConferenceCode.GDWinObjects3= [];
gdjs.ConferenceCode.GDWinObjects4= [];
gdjs.ConferenceCode.GDSubmitTimeObjects1= [];
gdjs.ConferenceCode.GDSubmitTimeObjects2= [];
gdjs.ConferenceCode.GDSubmitTimeObjects3= [];
gdjs.ConferenceCode.GDSubmitTimeObjects4= [];
gdjs.ConferenceCode.GDNewTextInputObjects1= [];
gdjs.ConferenceCode.GDNewTextInputObjects2= [];
gdjs.ConferenceCode.GDNewTextInputObjects3= [];
gdjs.ConferenceCode.GDNewTextInputObjects4= [];


gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.ConferenceCode.GDRedObjects2});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ConferenceCode.GDPlayerObjects2});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.ConferenceCode.GDGoldCoinObjects2});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ConferenceCode.GDPlayerObjects2});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.ConferenceCode.GDGoldCoinObjects2});
gdjs.ConferenceCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.ConferenceCode.GDGoldCoinObjects2 */
/* Reuse gdjs.ConferenceCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects2Objects, gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDGoldCoinObjects2Objects, 10, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDGoldCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.ConferenceCode.GDTotalPointsCountObjects2);
{for(var i = 0, len = gdjs.ConferenceCode.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDGoldCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickUp.wav", false, 10, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.ConferenceCode.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDTotalPointsCountObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ConferenceCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.ConferenceCode.GDGoldCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects2Objects, gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDGoldCoinObjects2Objects, 50, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDGoldCoinObjects2 */
/* Reuse gdjs.ConferenceCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.ConferenceCode.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDGoldCoinObjects2[i].addForceTowardPosition((( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointX("Coin")), (( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointY("Coin")), 120, 0);
}
}
{ //Subevents
gdjs.ConferenceCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ConferenceCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDMovementJoystickObjects3.length;i<l;++i) {
    if ( gdjs.ConferenceCode.GDMovementJoystickObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDMovementJoystickObjects3[k] = gdjs.ConferenceCode.GDMovementJoystickObjects3[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDMovementJoystickObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDMovementJoystickObjects3.length;i<l;++i) {
    if ( gdjs.ConferenceCode.GDMovementJoystickObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDMovementJoystickObjects3[k] = gdjs.ConferenceCode.GDMovementJoystickObjects3[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDMovementJoystickObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDMovementJoystickObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects3[i].addPolarForce((( gdjs.ConferenceCode.GDMovementJoystickObjects3.length === 0 ) ? 0 :gdjs.ConferenceCode.GDMovementJoystickObjects3[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference(180, (( gdjs.ConferenceCode.GDMovementJoystickObjects3.length === 0 ) ? 0 :gdjs.ConferenceCode.GDMovementJoystickObjects3[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) < 90);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference(0, (( gdjs.ConferenceCode.GDMovementJoystickObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDMovementJoystickObjects2[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) < 90);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


};gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDDashButtonObjects2Objects = Hashtable.newFrom({"DashButton": gdjs.ConferenceCode.GDDashButtonObjects2});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDParticle_95959595DashObjects2Objects = Hashtable.newFrom({"Particle_Dash": gdjs.ConferenceCode.GDParticle_9595DashObjects2});
gdjs.ConferenceCode.asyncCallback25871588 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Particle_Dash"), gdjs.ConferenceCode.GDParticle_9595DashObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.ConferenceCode.GDParticle_9595DashObjects3.length ;i < len;++i) {
    gdjs.ConferenceCode.GDParticle_9595DashObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects3[i].clearForces();
}
}}
gdjs.ConferenceCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.ConferenceCode.GDParticle_9595DashObjects2) asyncObjectsList.addObject("Particle_Dash", obj);
for (const obj of gdjs.ConferenceCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.ConferenceCode.asyncCallback25871588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ConferenceCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.ConferenceCode.GDDashButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.ConferenceCode.GDPlayerObjects2[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDPlayerObjects2[k] = gdjs.ConferenceCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDDashButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDDashButtonObjects2.length;i<l;++i) {
    if ( gdjs.ConferenceCode.GDDashButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDDashButtonObjects2[k] = gdjs.ConferenceCode.GDDashButtonObjects2[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDDashButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25868164);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects2);
/* Reuse gdjs.ConferenceCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.ConferenceCode.GDTotalPointsCountObjects2);
gdjs.ConferenceCode.GDParticle_9595DashObjects2.length = 0;

{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects2[i].addPolarForce((( gdjs.ConferenceCode.GDMovementJoystickObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDMovementJoystickObjects2[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 220, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(3);
}{for(var i = 0, len = gdjs.ConferenceCode.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDTotalPointsCountObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDParticle_95959595DashObjects2Objects, (( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointX("Dust")), (( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointY("Dust")), "");
}{for(var i = 0, len = gdjs.ConferenceCode.GDParticle_9595DashObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDParticle_9595DashObjects2[i].setZOrder((( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getZOrder()) - 1);
}
}
{ //Subevents
gdjs.ConferenceCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ConferenceCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.ConferenceCode.GDPlayerObjects2[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDPlayerObjects2[k] = gdjs.ConferenceCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25872388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.ConferenceCode.GDPlayerObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDPlayerObjects1[k] = gdjs.ConferenceCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25873140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


};gdjs.ConferenceCode.eventsList6 = function(runtimeScene) {

{


gdjs.ConferenceCode.eventsList2(runtimeScene);
}


{


gdjs.ConferenceCode.eventsList4(runtimeScene);
}


{


gdjs.ConferenceCode.eventsList5(runtimeScene);
}


};gdjs.ConferenceCode.eventsList7 = function(runtimeScene) {

{


gdjs.ConferenceCode.eventsList6(runtimeScene);
}


};gdjs.ConferenceCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "PauseLayer"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConferenceCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.ConferenceCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Particle_Dash"), gdjs.ConferenceCode.GDParticle_9595DashObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.ConferenceCode.GDRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.ConferenceCode.GDTotalPointsCountObjects2);
{for(var i = 0, len = gdjs.ConferenceCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDRedObjects2Objects, false);
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDParticle_9595DashObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDParticle_9595DashObjects2[i].setPosition((( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointX("Dust")),(( gdjs.ConferenceCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.ConferenceCode.GDPlayerObjects2[0].getPointY("Dust")));
}
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 441, 324, "", 0);
}{for(var i = 0, len = gdjs.ConferenceCode.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.ConferenceCode.GDTotalPointsCountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.ConferenceCode.eventsList1(runtimeScene);
}


{


gdjs.ConferenceCode.eventsList8(runtimeScene);
}


};gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDRedoObjects1Objects = Hashtable.newFrom({"Redo": gdjs.ConferenceCode.GDRedoObjects1});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.ConferenceCode.GDPlayerObjects1});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDBuffArrow1Objects1Objects = Hashtable.newFrom({"BuffArrow1": gdjs.ConferenceCode.GDBuffArrow1Objects1});
gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDSubmitTimeObjects1Objects = Hashtable.newFrom({"SubmitTime": gdjs.ConferenceCode.GDSubmitTimeObjects1});
gdjs.ConferenceCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.ConferenceCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.ConferenceCode.GDDashButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HotelHallway"), gdjs.ConferenceCode.GDHotelHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ConferenceCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.ConferenceCode.GDRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitTime"), gdjs.ConferenceCode.GDSubmitTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.ConferenceCode.GDWinObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "SceneStartSound.wav", false, 30, 1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{for(var i = 0, len = gdjs.ConferenceCode.GDHotelHallwayObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDHotelHallwayObjects1[i].hide();
}
for(var i = 0, len = gdjs.ConferenceCode.GDRedObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDRedObjects1[i].hide();
}
for(var i = 0, len = gdjs.ConferenceCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDWinObjects1[i].hide();
}
for(var i = 0, len = gdjs.ConferenceCode.GDSubmitTimeObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDSubmitTimeObjects1[i].hide();
}
for(var i = 0, len = gdjs.ConferenceCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDNewTextInputObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Black", 0, "linear", 800, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{for(var i = 0, len = gdjs.ConferenceCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDMovementJoystickObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDDashButtonObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDDashButtonObjects1[i].hide(false);
}
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 768, 432);
}}

}


{


gdjs.ConferenceCode.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Redo"), gdjs.ConferenceCode.GDRedoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDRedoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25874156);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.ConferenceCode.GDTimerObjects1);
{runtimeScene.getScene().getVariables().get("Timer").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer") + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.ConferenceCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")), 3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuffArrow1"), gdjs.ConferenceCode.GDBuffArrow1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ConferenceCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDPlayerObjects1Objects, gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDBuffArrow1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ConferenceCode.GDBuffArrow1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.ConferenceCode.GDDashButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.ConferenceCode.GDMovementJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ConferenceCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.ConferenceCode.GDWinObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "GameTimer");
}{for(var i = 0, len = gdjs.ConferenceCode.GDBuffArrow1Objects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDBuffArrow1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDMovementJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDDashButtonObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDDashButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDWinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ConferenceCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDNewTextInputObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ConferenceCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConferenceCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.ConferenceCode.GDNewTextInputObjects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.ConferenceCode.GDNewTextInputObjects1[k] = gdjs.ConferenceCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.ConferenceCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubmitTime"), gdjs.ConferenceCode.GDSubmitTimeObjects1);
{for(var i = 0, len = gdjs.ConferenceCode.GDSubmitTimeObjects1.length ;i < len;++i) {
    gdjs.ConferenceCode.GDSubmitTimeObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitTime"), gdjs.ConferenceCode.GDSubmitTimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConferenceCode.mapOfGDgdjs_9546ConferenceCode_9546GDSubmitTimeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25878460);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ConferenceCode.GDNewTextInputObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "ca6b0a6b-641b-4d59-b2ba-e2cbbc2b193b", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")), (( gdjs.ConferenceCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.ConferenceCode.GDNewTextInputObjects1[0].getString()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "ca6b0a6b-641b-4d59-b2ba-e2cbbc2b193b", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", true);
}}

}


};

gdjs.ConferenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConferenceCode.GDParticle_9595DashObjects1.length = 0;
gdjs.ConferenceCode.GDParticle_9595DashObjects2.length = 0;
gdjs.ConferenceCode.GDParticle_9595DashObjects3.length = 0;
gdjs.ConferenceCode.GDParticle_9595DashObjects4.length = 0;
gdjs.ConferenceCode.GDTotalPointsCountObjects1.length = 0;
gdjs.ConferenceCode.GDTotalPointsCountObjects2.length = 0;
gdjs.ConferenceCode.GDTotalPointsCountObjects3.length = 0;
gdjs.ConferenceCode.GDTotalPointsCountObjects4.length = 0;
gdjs.ConferenceCode.GDTotalPointsObjects1.length = 0;
gdjs.ConferenceCode.GDTotalPointsObjects2.length = 0;
gdjs.ConferenceCode.GDTotalPointsObjects3.length = 0;
gdjs.ConferenceCode.GDTotalPointsObjects4.length = 0;
gdjs.ConferenceCode.GDMovementJoystickObjects1.length = 0;
gdjs.ConferenceCode.GDMovementJoystickObjects2.length = 0;
gdjs.ConferenceCode.GDMovementJoystickObjects3.length = 0;
gdjs.ConferenceCode.GDMovementJoystickObjects4.length = 0;
gdjs.ConferenceCode.GDPlayerObjects1.length = 0;
gdjs.ConferenceCode.GDPlayerObjects2.length = 0;
gdjs.ConferenceCode.GDPlayerObjects3.length = 0;
gdjs.ConferenceCode.GDPlayerObjects4.length = 0;
gdjs.ConferenceCode.GDDashButtonObjects1.length = 0;
gdjs.ConferenceCode.GDDashButtonObjects2.length = 0;
gdjs.ConferenceCode.GDDashButtonObjects3.length = 0;
gdjs.ConferenceCode.GDDashButtonObjects4.length = 0;
gdjs.ConferenceCode.GDObjectsObjects1.length = 0;
gdjs.ConferenceCode.GDObjectsObjects2.length = 0;
gdjs.ConferenceCode.GDObjectsObjects3.length = 0;
gdjs.ConferenceCode.GDObjectsObjects4.length = 0;
gdjs.ConferenceCode.GDFloorObjects1.length = 0;
gdjs.ConferenceCode.GDFloorObjects2.length = 0;
gdjs.ConferenceCode.GDFloorObjects3.length = 0;
gdjs.ConferenceCode.GDFloorObjects4.length = 0;
gdjs.ConferenceCode.GDRedObjects1.length = 0;
gdjs.ConferenceCode.GDRedObjects2.length = 0;
gdjs.ConferenceCode.GDRedObjects3.length = 0;
gdjs.ConferenceCode.GDRedObjects4.length = 0;
gdjs.ConferenceCode.GDGoldCoinObjects1.length = 0;
gdjs.ConferenceCode.GDGoldCoinObjects2.length = 0;
gdjs.ConferenceCode.GDGoldCoinObjects3.length = 0;
gdjs.ConferenceCode.GDGoldCoinObjects4.length = 0;
gdjs.ConferenceCode.GDHotelHallwayObjects1.length = 0;
gdjs.ConferenceCode.GDHotelHallwayObjects2.length = 0;
gdjs.ConferenceCode.GDHotelHallwayObjects3.length = 0;
gdjs.ConferenceCode.GDHotelHallwayObjects4.length = 0;
gdjs.ConferenceCode.GDBlackObjects1.length = 0;
gdjs.ConferenceCode.GDBlackObjects2.length = 0;
gdjs.ConferenceCode.GDBlackObjects3.length = 0;
gdjs.ConferenceCode.GDBlackObjects4.length = 0;
gdjs.ConferenceCode.GDRedoObjects1.length = 0;
gdjs.ConferenceCode.GDRedoObjects2.length = 0;
gdjs.ConferenceCode.GDRedoObjects3.length = 0;
gdjs.ConferenceCode.GDRedoObjects4.length = 0;
gdjs.ConferenceCode.GDTimerObjects1.length = 0;
gdjs.ConferenceCode.GDTimerObjects2.length = 0;
gdjs.ConferenceCode.GDTimerObjects3.length = 0;
gdjs.ConferenceCode.GDTimerObjects4.length = 0;
gdjs.ConferenceCode.GDBuffArrow1Objects1.length = 0;
gdjs.ConferenceCode.GDBuffArrow1Objects2.length = 0;
gdjs.ConferenceCode.GDBuffArrow1Objects3.length = 0;
gdjs.ConferenceCode.GDBuffArrow1Objects4.length = 0;
gdjs.ConferenceCode.GDWinObjects1.length = 0;
gdjs.ConferenceCode.GDWinObjects2.length = 0;
gdjs.ConferenceCode.GDWinObjects3.length = 0;
gdjs.ConferenceCode.GDWinObjects4.length = 0;
gdjs.ConferenceCode.GDSubmitTimeObjects1.length = 0;
gdjs.ConferenceCode.GDSubmitTimeObjects2.length = 0;
gdjs.ConferenceCode.GDSubmitTimeObjects3.length = 0;
gdjs.ConferenceCode.GDSubmitTimeObjects4.length = 0;
gdjs.ConferenceCode.GDNewTextInputObjects1.length = 0;
gdjs.ConferenceCode.GDNewTextInputObjects2.length = 0;
gdjs.ConferenceCode.GDNewTextInputObjects3.length = 0;
gdjs.ConferenceCode.GDNewTextInputObjects4.length = 0;

gdjs.ConferenceCode.eventsList10(runtimeScene);

return;

}

gdjs['ConferenceCode'] = gdjs.ConferenceCode;
