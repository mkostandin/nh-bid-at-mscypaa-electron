gdjs.Vermont_32BidCode = {};
gdjs.Vermont_32BidCode.GDDinoDouxObjects1= [];
gdjs.Vermont_32BidCode.GDDinoDouxObjects2= [];
gdjs.Vermont_32BidCode.GDDinoDouxObjects3= [];
gdjs.Vermont_32BidCode.GDPlayerObjects1= [];
gdjs.Vermont_32BidCode.GDPlayerObjects2= [];
gdjs.Vermont_32BidCode.GDPlayerObjects3= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects3= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects3= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects3= [];
gdjs.Vermont_32BidCode.GDyObjects1= [];
gdjs.Vermont_32BidCode.GDyObjects2= [];
gdjs.Vermont_32BidCode.GDyObjects3= [];
gdjs.Vermont_32BidCode.GDTextObjects1= [];
gdjs.Vermont_32BidCode.GDTextObjects2= [];
gdjs.Vermont_32BidCode.GDTextObjects3= [];
gdjs.Vermont_32BidCode.GDRedFlatBarObjects1= [];
gdjs.Vermont_32BidCode.GDRedFlatBarObjects2= [];
gdjs.Vermont_32BidCode.GDRedFlatBarObjects3= [];
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1= [];
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2= [];
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects3= [];
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects3= [];
gdjs.Vermont_32BidCode.GDTimerObjects1= [];
gdjs.Vermont_32BidCode.GDTimerObjects2= [];
gdjs.Vermont_32BidCode.GDTimerObjects3= [];
gdjs.Vermont_32BidCode.GDBlackObjects1= [];
gdjs.Vermont_32BidCode.GDBlackObjects2= [];
gdjs.Vermont_32BidCode.GDBlackObjects3= [];


gdjs.Vermont_32BidCode.asyncCallback25978276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), true);
}}
gdjs.Vermont_32BidCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Vermont_32BidCode.asyncCallback25978276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Vermont_32BidCode.asyncCallback25980108 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), true);
}}
gdjs.Vermont_32BidCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Vermont_32BidCode.asyncCallback25980108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Vermont_32BidCode.asyncCallback25981308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), true);
}}
gdjs.Vermont_32BidCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Vermont_32BidCode.asyncCallback25981308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Vermont_32BidCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length;i<l;++i) {
    if ( gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2[k] = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2[i];
        ++k;
    }
}
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar2"), gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Vermont_32BidCode.GDTextObjects2);
{for(var i = 0, len = gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2[i].SetValue(gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDTextObjects2[i].setString("10 Damage");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), false);
}
{ //Subevents
gdjs.Vermont_32BidCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length;i<l;++i) {
    if ( gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2[k] = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2[i];
        ++k;
    }
}
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar2"), gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Vermont_32BidCode.GDTextObjects2);
{for(var i = 0, len = gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2[i].SetValue(gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (5), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDTextObjects2[i].setString("5 Damage");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), false);
}
{ //Subevents
gdjs.Vermont_32BidCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar2"), gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Vermont_32BidCode.GDTextObjects1);
{for(var i = 0, len = gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1[i].SetValue(gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDTextObjects1[i].setString("3 Damage");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), false);
}
{ //Subevents
gdjs.Vermont_32BidCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Vermont_32BidCode.asyncCallback25983068 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), true);
}}
gdjs.Vermont_32BidCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Vermont_32BidCode.asyncCallback25983068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Vermont_32BidCode.asyncCallback25984180 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hallway", false);
}}
gdjs.Vermont_32BidCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.Vermont_32BidCode.asyncCallback25984180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Vermont_32BidCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Vermont_32BidCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("DinoDoux"), gdjs.Vermont_32BidCode.GDDinoDouxObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 768, 432);
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDDinoDouxObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDDinoDouxObjects1[i].flipX(true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), false);
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Black", 0, "linear", 800, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Attack"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Vermont_32BidCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25982596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Vermont_32BidCode.GDTextObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("EnemyAttack"), false);
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDTextObjects1[i].setString("The Vermont Bid tried to attack.\nIt was ineffective..");
}
}
{ //Subevents
gdjs.Vermont_32BidCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar2"), gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1.length;i<l;++i) {
    if ( gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1[k] = gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1[i];
        ++k;
    }
}
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25983636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Vermont_32BidCode.GDBlackObjects1);
{for(var i = 0, len = gdjs.Vermont_32BidCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("Black", 255, "linear", 800, false);
}
}
{ //Subevents
gdjs.Vermont_32BidCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Vermont_32BidCode.GDTimerObjects1);
{runtimeScene.getScene().getVariables().get("Timer").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer") + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.Vermont_32BidCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Vermont_32BidCode.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Timer")), 3)));
}
}}

}


};

gdjs.Vermont_32BidCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Vermont_32BidCode.GDDinoDouxObjects1.length = 0;
gdjs.Vermont_32BidCode.GDDinoDouxObjects2.length = 0;
gdjs.Vermont_32BidCode.GDDinoDouxObjects3.length = 0;
gdjs.Vermont_32BidCode.GDPlayerObjects1.length = 0;
gdjs.Vermont_32BidCode.GDPlayerObjects2.length = 0;
gdjs.Vermont_32BidCode.GDPlayerObjects3.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder2Objects3.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.Vermont_32BidCode.GDTransparentButtonWithWhiteBlueBorder3Objects3.length = 0;
gdjs.Vermont_32BidCode.GDyObjects1.length = 0;
gdjs.Vermont_32BidCode.GDyObjects2.length = 0;
gdjs.Vermont_32BidCode.GDyObjects3.length = 0;
gdjs.Vermont_32BidCode.GDTextObjects1.length = 0;
gdjs.Vermont_32BidCode.GDTextObjects2.length = 0;
gdjs.Vermont_32BidCode.GDTextObjects3.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBarObjects1.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBarObjects2.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBarObjects3.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects1.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects2.length = 0;
gdjs.Vermont_32BidCode.GDRedFlatBar2Objects3.length = 0;
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Vermont_32BidCode.GDEmptyCloudBackgroundObjects3.length = 0;
gdjs.Vermont_32BidCode.GDTimerObjects1.length = 0;
gdjs.Vermont_32BidCode.GDTimerObjects2.length = 0;
gdjs.Vermont_32BidCode.GDTimerObjects3.length = 0;
gdjs.Vermont_32BidCode.GDBlackObjects1.length = 0;
gdjs.Vermont_32BidCode.GDBlackObjects2.length = 0;
gdjs.Vermont_32BidCode.GDBlackObjects3.length = 0;

gdjs.Vermont_32BidCode.eventsList6(runtimeScene);

return;

}

gdjs['Vermont_32BidCode'] = gdjs.Vermont_32BidCode;
