gdjs.Hallway2Code = {};
gdjs.Hallway2Code.GDParticle_9595DashObjects1= [];
gdjs.Hallway2Code.GDParticle_9595DashObjects2= [];
gdjs.Hallway2Code.GDParticle_9595DashObjects3= [];
gdjs.Hallway2Code.GDParticle_9595DashObjects4= [];
gdjs.Hallway2Code.GDTotalPointsCountObjects1= [];
gdjs.Hallway2Code.GDTotalPointsCountObjects2= [];
gdjs.Hallway2Code.GDTotalPointsCountObjects3= [];
gdjs.Hallway2Code.GDTotalPointsCountObjects4= [];
gdjs.Hallway2Code.GDTotalPointsObjects1= [];
gdjs.Hallway2Code.GDTotalPointsObjects2= [];
gdjs.Hallway2Code.GDTotalPointsObjects3= [];
gdjs.Hallway2Code.GDTotalPointsObjects4= [];
gdjs.Hallway2Code.GDMovementJoystickObjects1= [];
gdjs.Hallway2Code.GDMovementJoystickObjects2= [];
gdjs.Hallway2Code.GDMovementJoystickObjects3= [];
gdjs.Hallway2Code.GDMovementJoystickObjects4= [];
gdjs.Hallway2Code.GDPlayerObjects1= [];
gdjs.Hallway2Code.GDPlayerObjects2= [];
gdjs.Hallway2Code.GDPlayerObjects3= [];
gdjs.Hallway2Code.GDPlayerObjects4= [];
gdjs.Hallway2Code.GDDashButtonObjects1= [];
gdjs.Hallway2Code.GDDashButtonObjects2= [];
gdjs.Hallway2Code.GDDashButtonObjects3= [];
gdjs.Hallway2Code.GDDashButtonObjects4= [];
gdjs.Hallway2Code.GDObjectsObjects1= [];
gdjs.Hallway2Code.GDObjectsObjects2= [];
gdjs.Hallway2Code.GDObjectsObjects3= [];
gdjs.Hallway2Code.GDObjectsObjects4= [];
gdjs.Hallway2Code.GDFloorObjects1= [];
gdjs.Hallway2Code.GDFloorObjects2= [];
gdjs.Hallway2Code.GDFloorObjects3= [];
gdjs.Hallway2Code.GDFloorObjects4= [];
gdjs.Hallway2Code.GDMaleCharacter12Objects1= [];
gdjs.Hallway2Code.GDMaleCharacter12Objects2= [];
gdjs.Hallway2Code.GDMaleCharacter12Objects3= [];
gdjs.Hallway2Code.GDMaleCharacter12Objects4= [];
gdjs.Hallway2Code.GDRedObjects1= [];
gdjs.Hallway2Code.GDRedObjects2= [];
gdjs.Hallway2Code.GDRedObjects3= [];
gdjs.Hallway2Code.GDRedObjects4= [];
gdjs.Hallway2Code.GDGoldCoinObjects1= [];
gdjs.Hallway2Code.GDGoldCoinObjects2= [];
gdjs.Hallway2Code.GDGoldCoinObjects3= [];
gdjs.Hallway2Code.GDGoldCoinObjects4= [];
gdjs.Hallway2Code.GDHotelHallwayObjects1= [];
gdjs.Hallway2Code.GDHotelHallwayObjects2= [];
gdjs.Hallway2Code.GDHotelHallwayObjects3= [];
gdjs.Hallway2Code.GDHotelHallwayObjects4= [];
gdjs.Hallway2Code.GDBlackObjects1= [];
gdjs.Hallway2Code.GDBlackObjects2= [];
gdjs.Hallway2Code.GDBlackObjects3= [];
gdjs.Hallway2Code.GDBlackObjects4= [];
gdjs.Hallway2Code.GDRedoObjects1= [];
gdjs.Hallway2Code.GDRedoObjects2= [];
gdjs.Hallway2Code.GDRedoObjects3= [];
gdjs.Hallway2Code.GDRedoObjects4= [];
gdjs.Hallway2Code.GDTimerObjects1= [];
gdjs.Hallway2Code.GDTimerObjects2= [];
gdjs.Hallway2Code.GDTimerObjects3= [];
gdjs.Hallway2Code.GDTimerObjects4= [];


gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Hallway2Code.GDRedObjects2});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Hallway2Code.GDPlayerObjects2});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Hallway2Code.GDGoldCoinObjects2});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Hallway2Code.GDPlayerObjects2});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Hallway2Code.GDGoldCoinObjects2});
gdjs.Hallway2Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Hallway2Code.GDGoldCoinObjects2 */
/* Reuse gdjs.Hallway2Code.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects2Objects, gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDGoldCoinObjects2Objects, 10, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Hallway2Code.GDGoldCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.Hallway2Code.GDTotalPointsCountObjects2);
{for(var i = 0, len = gdjs.Hallway2Code.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDGoldCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickUp.wav", false, 10, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Hallway2Code.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDTotalPointsCountObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Hallway2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Hallway2Code.GDGoldCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects2Objects, gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDGoldCoinObjects2Objects, 50, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Hallway2Code.GDGoldCoinObjects2 */
/* Reuse gdjs.Hallway2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Hallway2Code.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDGoldCoinObjects2[i].addForceTowardPosition((( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointX("Coin")), (( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointY("Coin")), 120, 0);
}
}
{ //Subevents
gdjs.Hallway2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Hallway2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDMovementJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Hallway2Code.GDMovementJoystickObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDMovementJoystickObjects3[k] = gdjs.Hallway2Code.GDMovementJoystickObjects3[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDMovementJoystickObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDMovementJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Hallway2Code.GDMovementJoystickObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDMovementJoystickObjects3[k] = gdjs.Hallway2Code.GDMovementJoystickObjects3[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDMovementJoystickObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Hallway2Code.GDMovementJoystickObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects3[i].addPolarForce((( gdjs.Hallway2Code.GDMovementJoystickObjects3.length === 0 ) ? 0 :gdjs.Hallway2Code.GDMovementJoystickObjects3[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference(180, (( gdjs.Hallway2Code.GDMovementJoystickObjects3.length === 0 ) ? 0 :gdjs.Hallway2Code.GDMovementJoystickObjects3[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) < 90);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference(0, (( gdjs.Hallway2Code.GDMovementJoystickObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDMovementJoystickObjects2[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))) < 90);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


};gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDDashButtonObjects2Objects = Hashtable.newFrom({"DashButton": gdjs.Hallway2Code.GDDashButtonObjects2});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDParticle_95959595DashObjects2Objects = Hashtable.newFrom({"Particle_Dash": gdjs.Hallway2Code.GDParticle_9595DashObjects2});
gdjs.Hallway2Code.asyncCallback25460852 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Particle_Dash"), gdjs.Hallway2Code.GDParticle_9595DashObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Hallway2Code.GDParticle_9595DashObjects3.length ;i < len;++i) {
    gdjs.Hallway2Code.GDParticle_9595DashObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects3[i].clearForces();
}
}}
gdjs.Hallway2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Hallway2Code.GDParticle_9595DashObjects2) asyncObjectsList.addObject("Particle_Dash", obj);
for (const obj of gdjs.Hallway2Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Hallway2Code.asyncCallback25460852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Hallway2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.Hallway2Code.GDDashButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Hallway2Code.GDPlayerObjects2[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDPlayerObjects2[k] = gdjs.Hallway2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDDashButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDDashButtonObjects2.length;i<l;++i) {
    if ( gdjs.Hallway2Code.GDDashButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDDashButtonObjects2[k] = gdjs.Hallway2Code.GDDashButtonObjects2[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDDashButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25465612);
}
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects2);
/* Reuse gdjs.Hallway2Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.Hallway2Code.GDTotalPointsCountObjects2);
gdjs.Hallway2Code.GDParticle_9595DashObjects2.length = 0;

{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects2[i].addPolarForce((( gdjs.Hallway2Code.GDMovementJoystickObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDMovementJoystickObjects2[0].JoystickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 220, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(3);
}{for(var i = 0, len = gdjs.Hallway2Code.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDTotalPointsCountObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDParticle_95959595DashObjects2Objects, (( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointX("Dust")), (( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointY("Dust")), "");
}{for(var i = 0, len = gdjs.Hallway2Code.GDParticle_9595DashObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDParticle_9595DashObjects2[i].setZOrder((( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getZOrder()) - 1);
}
}
{ //Subevents
gdjs.Hallway2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Hallway2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Hallway2Code.GDPlayerObjects2[i].hasNoForces()) ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDPlayerObjects2[k] = gdjs.Hallway2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25461700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Hallway2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hallway2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Hallway2Code.GDPlayerObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Hallway2Code.GDPlayerObjects1[k] = gdjs.Hallway2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Hallway2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25461900);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Hallway2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Hallway2Code.eventsList6 = function(runtimeScene) {

{


gdjs.Hallway2Code.eventsList2(runtimeScene);
}


{


gdjs.Hallway2Code.eventsList4(runtimeScene);
}


{


gdjs.Hallway2Code.eventsList5(runtimeScene);
}


};gdjs.Hallway2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Hallway2Code.eventsList6(runtimeScene);
}


};gdjs.Hallway2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "PauseLayer"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Hallway2Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Hallway2Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Particle_Dash"), gdjs.Hallway2Code.GDParticle_9595DashObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.Hallway2Code.GDRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("TotalPointsCount"), gdjs.Hallway2Code.GDTotalPointsCountObjects2);
{for(var i = 0, len = gdjs.Hallway2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDRedObjects2Objects, false);
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDParticle_9595DashObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDParticle_9595DashObjects2[i].setPosition((( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointX("Dust")),(( gdjs.Hallway2Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Hallway2Code.GDPlayerObjects2[0].getPointY("Dust")));
}
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 105, 501, 278, "", 0);
}{for(var i = 0, len = gdjs.Hallway2Code.GDTotalPointsCountObjects2.length ;i < len;++i) {
    gdjs.Hallway2Code.GDTotalPointsCountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.Hallway2Code.eventsList1(runtimeScene);
}


{


gdjs.Hallway2Code.eventsList8(runtimeScene);
}


};gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDRedoObjects1Objects = Hashtable.newFrom({"Redo": gdjs.Hallway2Code.GDRedoObjects1});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Hallway2Code.GDPlayerObjects1});
gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDHotelHallwayObjects1Objects = Hashtable.newFrom({"HotelHallway": gdjs.Hallway2Code.GDHotelHallwayObjects1});
gdjs.Hallway2Code.asyncCallback25472052 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hotel Lobby Unused", false);
}}
gdjs.Hallway2Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.Hallway2Code.asyncCallback25472052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Hallway2Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Hallway2Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.Hallway2Code.GDDashButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HotelHallway"), gdjs.Hallway2Code.GDHotelHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.Hallway2Code.GDRedObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "SceneStartSound.wav", false, 30, 1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "", 0);
}{for(var i = 0, len = gdjs.Hallway2Code.GDRedObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDRedObjects1[i].hide();
}
for(var i = 0, len = gdjs.Hallway2Code.GDHotelHallwayObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDHotelHallwayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Black", 0, "linear", 800, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 768, 432);
}{for(var i = 0, len = gdjs.Hallway2Code.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDMovementJoystickObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDDashButtonObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDDashButtonObjects1[i].hide(false);
}
}}

}


{


gdjs.Hallway2Code.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Redo"), gdjs.Hallway2Code.GDRedoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDRedoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25460388);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HotelHallway"), gdjs.Hallway2Code.GDHotelHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Hallway2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDPlayerObjects1Objects, gdjs.Hallway2Code.mapOfGDgdjs_9546Hallway2Code_9546GDHotelHallwayObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25470772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Hallway2Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("DashButton"), gdjs.Hallway2Code.GDDashButtonObjects1);
/* Reuse gdjs.Hallway2Code.GDHotelHallwayObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Hallway2Code.GDMovementJoystickObjects1);
{for(var i = 0, len = gdjs.Hallway2Code.GDMovementJoystickObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDMovementJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDDashButtonObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDDashButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDHotelHallwayObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDHotelHallwayObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Hallway2Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Black", 255, "linear", 800, false);
}
}
{ //Subevents
gdjs.Hallway2Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Hallway2Code.GDTimerObjects1);
{runtimeScene.getScene().getVariables().get("Timer").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer") + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.Hallway2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Hallway2Code.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")), 3)));
}
}}

}


};

gdjs.Hallway2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Hallway2Code.GDParticle_9595DashObjects1.length = 0;
gdjs.Hallway2Code.GDParticle_9595DashObjects2.length = 0;
gdjs.Hallway2Code.GDParticle_9595DashObjects3.length = 0;
gdjs.Hallway2Code.GDParticle_9595DashObjects4.length = 0;
gdjs.Hallway2Code.GDTotalPointsCountObjects1.length = 0;
gdjs.Hallway2Code.GDTotalPointsCountObjects2.length = 0;
gdjs.Hallway2Code.GDTotalPointsCountObjects3.length = 0;
gdjs.Hallway2Code.GDTotalPointsCountObjects4.length = 0;
gdjs.Hallway2Code.GDTotalPointsObjects1.length = 0;
gdjs.Hallway2Code.GDTotalPointsObjects2.length = 0;
gdjs.Hallway2Code.GDTotalPointsObjects3.length = 0;
gdjs.Hallway2Code.GDTotalPointsObjects4.length = 0;
gdjs.Hallway2Code.GDMovementJoystickObjects1.length = 0;
gdjs.Hallway2Code.GDMovementJoystickObjects2.length = 0;
gdjs.Hallway2Code.GDMovementJoystickObjects3.length = 0;
gdjs.Hallway2Code.GDMovementJoystickObjects4.length = 0;
gdjs.Hallway2Code.GDPlayerObjects1.length = 0;
gdjs.Hallway2Code.GDPlayerObjects2.length = 0;
gdjs.Hallway2Code.GDPlayerObjects3.length = 0;
gdjs.Hallway2Code.GDPlayerObjects4.length = 0;
gdjs.Hallway2Code.GDDashButtonObjects1.length = 0;
gdjs.Hallway2Code.GDDashButtonObjects2.length = 0;
gdjs.Hallway2Code.GDDashButtonObjects3.length = 0;
gdjs.Hallway2Code.GDDashButtonObjects4.length = 0;
gdjs.Hallway2Code.GDObjectsObjects1.length = 0;
gdjs.Hallway2Code.GDObjectsObjects2.length = 0;
gdjs.Hallway2Code.GDObjectsObjects3.length = 0;
gdjs.Hallway2Code.GDObjectsObjects4.length = 0;
gdjs.Hallway2Code.GDFloorObjects1.length = 0;
gdjs.Hallway2Code.GDFloorObjects2.length = 0;
gdjs.Hallway2Code.GDFloorObjects3.length = 0;
gdjs.Hallway2Code.GDFloorObjects4.length = 0;
gdjs.Hallway2Code.GDMaleCharacter12Objects1.length = 0;
gdjs.Hallway2Code.GDMaleCharacter12Objects2.length = 0;
gdjs.Hallway2Code.GDMaleCharacter12Objects3.length = 0;
gdjs.Hallway2Code.GDMaleCharacter12Objects4.length = 0;
gdjs.Hallway2Code.GDRedObjects1.length = 0;
gdjs.Hallway2Code.GDRedObjects2.length = 0;
gdjs.Hallway2Code.GDRedObjects3.length = 0;
gdjs.Hallway2Code.GDRedObjects4.length = 0;
gdjs.Hallway2Code.GDGoldCoinObjects1.length = 0;
gdjs.Hallway2Code.GDGoldCoinObjects2.length = 0;
gdjs.Hallway2Code.GDGoldCoinObjects3.length = 0;
gdjs.Hallway2Code.GDGoldCoinObjects4.length = 0;
gdjs.Hallway2Code.GDHotelHallwayObjects1.length = 0;
gdjs.Hallway2Code.GDHotelHallwayObjects2.length = 0;
gdjs.Hallway2Code.GDHotelHallwayObjects3.length = 0;
gdjs.Hallway2Code.GDHotelHallwayObjects4.length = 0;
gdjs.Hallway2Code.GDBlackObjects1.length = 0;
gdjs.Hallway2Code.GDBlackObjects2.length = 0;
gdjs.Hallway2Code.GDBlackObjects3.length = 0;
gdjs.Hallway2Code.GDBlackObjects4.length = 0;
gdjs.Hallway2Code.GDRedoObjects1.length = 0;
gdjs.Hallway2Code.GDRedoObjects2.length = 0;
gdjs.Hallway2Code.GDRedoObjects3.length = 0;
gdjs.Hallway2Code.GDRedoObjects4.length = 0;
gdjs.Hallway2Code.GDTimerObjects1.length = 0;
gdjs.Hallway2Code.GDTimerObjects2.length = 0;
gdjs.Hallway2Code.GDTimerObjects3.length = 0;
gdjs.Hallway2Code.GDTimerObjects4.length = 0;

gdjs.Hallway2Code.eventsList11(runtimeScene);

return;

}

gdjs['Hallway2Code'] = gdjs.Hallway2Code;
