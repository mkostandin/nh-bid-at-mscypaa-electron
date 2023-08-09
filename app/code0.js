gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDReset_9595TimerObjects1= [];
gdjs.TitleScreenCode.GDReset_9595TimerObjects2= [];
gdjs.TitleScreenCode.GDReset_9595TimerObjects3= [];
gdjs.TitleScreenCode.GDReset_9595ButtonObjects1= [];
gdjs.TitleScreenCode.GDReset_9595ButtonObjects2= [];
gdjs.TitleScreenCode.GDReset_9595ButtonObjects3= [];
gdjs.TitleScreenCode.GDtitleScreenObjects1= [];
gdjs.TitleScreenCode.GDtitleScreenObjects2= [];
gdjs.TitleScreenCode.GDtitleScreenObjects3= [];
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects1= [];
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects2= [];
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects3= [];
gdjs.TitleScreenCode.GDPlayerObjects1= [];
gdjs.TitleScreenCode.GDPlayerObjects2= [];
gdjs.TitleScreenCode.GDPlayerObjects3= [];
gdjs.TitleScreenCode.GDtitleSpriteObjects1= [];
gdjs.TitleScreenCode.GDtitleSpriteObjects2= [];
gdjs.TitleScreenCode.GDtitleSpriteObjects3= [];
gdjs.TitleScreenCode.GDGoldCoinObjects1= [];
gdjs.TitleScreenCode.GDGoldCoinObjects2= [];
gdjs.TitleScreenCode.GDGoldCoinObjects3= [];
gdjs.TitleScreenCode.GDLeaderboardButtonObjects1= [];
gdjs.TitleScreenCode.GDLeaderboardButtonObjects2= [];
gdjs.TitleScreenCode.GDLeaderboardButtonObjects3= [];
gdjs.TitleScreenCode.GDStartGameButtonObjects1= [];
gdjs.TitleScreenCode.GDStartGameButtonObjects2= [];
gdjs.TitleScreenCode.GDStartGameButtonObjects3= [];
gdjs.TitleScreenCode.GDLeaderboardTextObjects1= [];
gdjs.TitleScreenCode.GDLeaderboardTextObjects2= [];
gdjs.TitleScreenCode.GDLeaderboardTextObjects3= [];
gdjs.TitleScreenCode.GDStartGameTextObjects1= [];
gdjs.TitleScreenCode.GDStartGameTextObjects2= [];
gdjs.TitleScreenCode.GDStartGameTextObjects3= [];


gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24501260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaderboardText"), gdjs.TitleScreenCode.GDLeaderboardTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartGameText"), gdjs.TitleScreenCode.GDStartGameTextObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartGameTextObjects1[i].setText(gdjs.TitleScreenCode.GDStartGameTextObjects1[i].getText() + (" : A"));
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDLeaderboardTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDLeaderboardTextObjects1[i].setText(gdjs.TitleScreenCode.GDLeaderboardTextObjects1[i].getText() + (" : B"));
}
}}

}


};gdjs.TitleScreenCode.eventsList1 = function(runtimeScene) {

{



}


{



}


};gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDLeaderboardButtonObjects1Objects = Hashtable.newFrom({"LeaderboardButton": gdjs.TitleScreenCode.GDLeaderboardButtonObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDStartGameButtonObjects1Objects = Hashtable.newFrom({"StartGameButton": gdjs.TitleScreenCode.GDStartGameButtonObjects1});
gdjs.TitleScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.TitleScreenCode.eventsList0(runtimeScene);
}


{


gdjs.TitleScreenCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.TitleScreenCode.GDLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDLeaderboardButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24508908);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
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
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoading();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.closeLeaderboardView(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGameButton"), gdjs.TitleScreenCode.GDStartGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDStartGameButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24511348);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Circle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDReset_9595TimerObjects1.length = 0;
gdjs.TitleScreenCode.GDReset_9595TimerObjects2.length = 0;
gdjs.TitleScreenCode.GDReset_9595TimerObjects3.length = 0;
gdjs.TitleScreenCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDtitleScreenObjects1.length = 0;
gdjs.TitleScreenCode.GDtitleScreenObjects2.length = 0;
gdjs.TitleScreenCode.GDtitleScreenObjects3.length = 0;
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects1.length = 0;
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects2.length = 0;
gdjs.TitleScreenCode.GDnhBidatMSCYPAAtextObjects3.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects1.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects2.length = 0;
gdjs.TitleScreenCode.GDPlayerObjects3.length = 0;
gdjs.TitleScreenCode.GDtitleSpriteObjects1.length = 0;
gdjs.TitleScreenCode.GDtitleSpriteObjects2.length = 0;
gdjs.TitleScreenCode.GDtitleSpriteObjects3.length = 0;
gdjs.TitleScreenCode.GDGoldCoinObjects1.length = 0;
gdjs.TitleScreenCode.GDGoldCoinObjects2.length = 0;
gdjs.TitleScreenCode.GDGoldCoinObjects3.length = 0;
gdjs.TitleScreenCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDLeaderboardButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDStartGameButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDStartGameButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDStartGameButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDLeaderboardTextObjects1.length = 0;
gdjs.TitleScreenCode.GDLeaderboardTextObjects2.length = 0;
gdjs.TitleScreenCode.GDLeaderboardTextObjects3.length = 0;
gdjs.TitleScreenCode.GDStartGameTextObjects1.length = 0;
gdjs.TitleScreenCode.GDStartGameTextObjects2.length = 0;
gdjs.TitleScreenCode.GDStartGameTextObjects3.length = 0;

gdjs.TitleScreenCode.eventsList2(runtimeScene);

return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
