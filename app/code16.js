gdjs.WinpageCode = {};
gdjs.WinpageCode.GDbackgroundObjects1= [];
gdjs.WinpageCode.GDbackgroundObjects2= [];
gdjs.WinpageCode.GDbackgroundObjects3= [];
gdjs.WinpageCode.GDCongratsTextObjects1= [];
gdjs.WinpageCode.GDCongratsTextObjects2= [];
gdjs.WinpageCode.GDCongratsTextObjects3= [];
gdjs.WinpageCode.GDfinalScoreObjects1= [];
gdjs.WinpageCode.GDfinalScoreObjects2= [];
gdjs.WinpageCode.GDfinalScoreObjects3= [];
gdjs.WinpageCode.GDlabelPlayerNameObjects1= [];
gdjs.WinpageCode.GDlabelPlayerNameObjects2= [];
gdjs.WinpageCode.GDlabelPlayerNameObjects3= [];
gdjs.WinpageCode.GDplayerNameTextInputObjects1= [];
gdjs.WinpageCode.GDplayerNameTextInputObjects2= [];
gdjs.WinpageCode.GDplayerNameTextInputObjects3= [];
gdjs.WinpageCode.GDbringButtonObjects1= [];
gdjs.WinpageCode.GDbringButtonObjects2= [];
gdjs.WinpageCode.GDbringButtonObjects3= [];
gdjs.WinpageCode.GDwinsButtonObjects1= [];
gdjs.WinpageCode.GDwinsButtonObjects2= [];
gdjs.WinpageCode.GDwinsButtonObjects3= [];
gdjs.WinpageCode.GDnecypaaButtonObjects1= [];
gdjs.WinpageCode.GDnecypaaButtonObjects2= [];
gdjs.WinpageCode.GDnecypaaButtonObjects3= [];
gdjs.WinpageCode.GDleaderboardButtonObjects1= [];
gdjs.WinpageCode.GDleaderboardButtonObjects2= [];
gdjs.WinpageCode.GDleaderboardButtonObjects3= [];
gdjs.WinpageCode.GDsubmitButtonObjects1= [];
gdjs.WinpageCode.GDsubmitButtonObjects2= [];
gdjs.WinpageCode.GDsubmitButtonObjects3= [];
gdjs.WinpageCode.GDexitButtonObjects1= [];
gdjs.WinpageCode.GDexitButtonObjects2= [];
gdjs.WinpageCode.GDexitButtonObjects3= [];
gdjs.WinpageCode.GDbringNECYTextObjects1= [];
gdjs.WinpageCode.GDbringNECYTextObjects2= [];
gdjs.WinpageCode.GDbringNECYTextObjects3= [];
gdjs.WinpageCode.GDnhBidTextObjects1= [];
gdjs.WinpageCode.GDnhBidTextObjects2= [];
gdjs.WinpageCode.GDnhBidTextObjects3= [];
gdjs.WinpageCode.GDnecypaaNHTextObjects1= [];
gdjs.WinpageCode.GDnecypaaNHTextObjects2= [];
gdjs.WinpageCode.GDnecypaaNHTextObjects3= [];
gdjs.WinpageCode.GDleaderboardTextObjects1= [];
gdjs.WinpageCode.GDleaderboardTextObjects2= [];
gdjs.WinpageCode.GDleaderboardTextObjects3= [];
gdjs.WinpageCode.GDsubmitTextObjects1= [];
gdjs.WinpageCode.GDsubmitTextObjects2= [];
gdjs.WinpageCode.GDsubmitTextObjects3= [];
gdjs.WinpageCode.GDexitTextObjects1= [];
gdjs.WinpageCode.GDexitTextObjects2= [];
gdjs.WinpageCode.GDexitTextObjects3= [];
gdjs.WinpageCode.GDmscypaaInfoTextObjects1= [];
gdjs.WinpageCode.GDmscypaaInfoTextObjects2= [];
gdjs.WinpageCode.GDmscypaaInfoTextObjects3= [];


gdjs.WinpageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playerNameTextInput"), gdjs.WinpageCode.GDplayerNameTextInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinpageCode.GDplayerNameTextInputObjects2.length;i<l;++i) {
    if ( gdjs.WinpageCode.GDplayerNameTextInputObjects2[i].getString() == "" ) {
        isConditionTrue_0 = true;
        gdjs.WinpageCode.GDplayerNameTextInputObjects2[k] = gdjs.WinpageCode.GDplayerNameTextInputObjects2[i];
        ++k;
    }
}
gdjs.WinpageCode.GDplayerNameTextInputObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playerNameTextInput"), gdjs.WinpageCode.GDplayerNameTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinpageCode.GDplayerNameTextInputObjects1.length;i<l;++i) {
    if ( gdjs.WinpageCode.GDplayerNameTextInputObjects1[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.WinpageCode.GDplayerNameTextInputObjects1[k] = gdjs.WinpageCode.GDplayerNameTextInputObjects1[i];
        ++k;
    }
}
gdjs.WinpageCode.GDplayerNameTextInputObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WinpageCode.GDplayerNameTextInputObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setString((( gdjs.WinpageCode.GDplayerNameTextInputObjects1.length === 0 ) ? "" :gdjs.WinpageCode.GDplayerNameTextInputObjects1[0].getString()) + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDsubmitButtonObjects1Objects = Hashtable.newFrom({"submitButton": gdjs.WinpageCode.GDsubmitButtonObjects1});
gdjs.WinpageCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playerNameTextInput"), gdjs.WinpageCode.GDplayerNameTextInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinpageCode.GDplayerNameTextInputObjects2.length;i<l;++i) {
    if ( gdjs.WinpageCode.GDplayerNameTextInputObjects2[i].getString() == "" ) {
        isConditionTrue_0 = true;
        gdjs.WinpageCode.GDplayerNameTextInputObjects2[k] = gdjs.WinpageCode.GDplayerNameTextInputObjects2[i];
        ++k;
    }
}
gdjs.WinpageCode.GDplayerNameTextInputObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playerNameTextInput"), gdjs.WinpageCode.GDplayerNameTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinpageCode.GDplayerNameTextInputObjects1.length;i<l;++i) {
    if ( gdjs.WinpageCode.GDplayerNameTextInputObjects1[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.WinpageCode.GDplayerNameTextInputObjects1[k] = gdjs.WinpageCode.GDplayerNameTextInputObjects1[i];
        ++k;
    }
}
gdjs.WinpageCode.GDplayerNameTextInputObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WinpageCode.GDplayerNameTextInputObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setString((( gdjs.WinpageCode.GDplayerNameTextInputObjects1.length === 0 ) ? "" :gdjs.WinpageCode.GDplayerNameTextInputObjects1[0].getString()) + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDbringNECYTextObjects1Objects = Hashtable.newFrom({"bringNECYText": gdjs.WinpageCode.GDbringNECYTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnhBidTextObjects1Objects = Hashtable.newFrom({"nhBidText": gdjs.WinpageCode.GDnhBidTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnecypaaNHTextObjects1Objects = Hashtable.newFrom({"necypaaNHText": gdjs.WinpageCode.GDnecypaaNHTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDbringNECYTextObjects1Objects = Hashtable.newFrom({"bringNECYText": gdjs.WinpageCode.GDbringNECYTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnhBidTextObjects1Objects = Hashtable.newFrom({"nhBidText": gdjs.WinpageCode.GDnhBidTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnecypaaNHTextObjects1Objects = Hashtable.newFrom({"necypaaNHText": gdjs.WinpageCode.GDnecypaaNHTextObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDleaderboardButtonObjects1Objects = Hashtable.newFrom({"leaderboardButton": gdjs.WinpageCode.GDleaderboardButtonObjects1});
gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDexitButtonObjects1Objects = Hashtable.newFrom({"exitButton": gdjs.WinpageCode.GDexitButtonObjects1});
gdjs.WinpageCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("finalScore"), gdjs.WinpageCode.GDfinalScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("mscypaaInfoText"), gdjs.WinpageCode.GDmscypaaInfoTextObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 768, 432);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) * 10) - (gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 0) * 1.5));
}{runtimeScene.getScene().getVariables().getFromIndex(1).concatenateString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDfinalScoreObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDfinalScoreObjects1[i].setString("Final Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString(gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].getString() + (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDmscypaaInfoTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDmscypaaInfoTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26025556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bringNECYText"), gdjs.WinpageCode.GDbringNECYTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("exitText"), gdjs.WinpageCode.GDexitTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("leaderboardText"), gdjs.WinpageCode.GDleaderboardTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("mscypaaInfoText"), gdjs.WinpageCode.GDmscypaaInfoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("necypaaNHText"), gdjs.WinpageCode.GDnecypaaNHTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("nhBidText"), gdjs.WinpageCode.GDnhBidTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("playerNameTextInput"), gdjs.WinpageCode.GDplayerNameTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("submitText"), gdjs.WinpageCode.GDsubmitTextObjects1);
{for(var i = 0, len = gdjs.WinpageCode.GDplayerNameTextInputObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDplayerNameTextInputObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.WinpageCode.GDmscypaaInfoTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDmscypaaInfoTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.WinpageCode.GDbringNECYTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDbringNECYTextObjects1[i].setText(gdjs.WinpageCode.GDbringNECYTextObjects1[i].getText() + (" : A"));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDnhBidTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDnhBidTextObjects1[i].setText(gdjs.WinpageCode.GDnhBidTextObjects1[i].getText() + (" : B"));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDnecypaaNHTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDnecypaaNHTextObjects1[i].setText(gdjs.WinpageCode.GDnecypaaNHTextObjects1[i].getText() + (" : Y"));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose a player name. \nOtherwise, you will be entered as ");
}
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString(gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].getString() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDleaderboardTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDleaderboardTextObjects1[i].setText(gdjs.WinpageCode.GDleaderboardTextObjects1[i].getText() + (" : LT"));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDsubmitTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDsubmitTextObjects1[i].setText(gdjs.WinpageCode.GDsubmitTextObjects1[i].getText() + (" : RT"));
}
}{for(var i = 0, len = gdjs.WinpageCode.GDexitTextObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDexitTextObjects1[i].setText(gdjs.WinpageCode.GDexitTextObjects1[i].getText() + (" : X"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinpageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("submitButton"), gdjs.WinpageCode.GDsubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDsubmitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinpageCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bringNECYText"), gdjs.WinpageCode.GDbringNECYTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDbringNECYTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Bring-NECYPAA-to-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nhBidText"), gdjs.WinpageCode.GDnhBidTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnhBidTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NH-Bid-Wins" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("necypaaNHText"), gdjs.WinpageCode.GDnecypaaNHTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnecypaaNHTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NECYPAA-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bringNECYText"), gdjs.WinpageCode.GDbringNECYTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDbringNECYTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Bring-NECYPAA-to-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nhBidText"), gdjs.WinpageCode.GDnhBidTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnhBidTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NH-Bid-Wins" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("necypaaNHText"), gdjs.WinpageCode.GDnecypaaNHTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDnecypaaNHTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NECYPAA-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Triangle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NECYPAA-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
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
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NH-Bid-Wins" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("labelPlayerName"), gdjs.WinpageCode.GDlabelPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Bring-NECYPAA-to-NH" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}{for(var i = 0, len = gdjs.WinpageCode.GDlabelPlayerNameObjects1.length ;i < len;++i) {
    gdjs.WinpageCode.GDlabelPlayerNameObjects1[i].setString("Choose or enter a player name. \nOtherwise, you will be entered as " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
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
{gdjs.evtTools.leaderboards.closeLeaderboardView(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboardButton"), gdjs.WinpageCode.GDleaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDleaderboardButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c5233b27-c863-4b12-8a97-4fd1f8855b63", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.WinpageCode.GDexitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinpageCode.mapOfGDgdjs_9546WinpageCode_9546GDexitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Square", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
}

}


};

gdjs.WinpageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinpageCode.GDbackgroundObjects1.length = 0;
gdjs.WinpageCode.GDbackgroundObjects2.length = 0;
gdjs.WinpageCode.GDbackgroundObjects3.length = 0;
gdjs.WinpageCode.GDCongratsTextObjects1.length = 0;
gdjs.WinpageCode.GDCongratsTextObjects2.length = 0;
gdjs.WinpageCode.GDCongratsTextObjects3.length = 0;
gdjs.WinpageCode.GDfinalScoreObjects1.length = 0;
gdjs.WinpageCode.GDfinalScoreObjects2.length = 0;
gdjs.WinpageCode.GDfinalScoreObjects3.length = 0;
gdjs.WinpageCode.GDlabelPlayerNameObjects1.length = 0;
gdjs.WinpageCode.GDlabelPlayerNameObjects2.length = 0;
gdjs.WinpageCode.GDlabelPlayerNameObjects3.length = 0;
gdjs.WinpageCode.GDplayerNameTextInputObjects1.length = 0;
gdjs.WinpageCode.GDplayerNameTextInputObjects2.length = 0;
gdjs.WinpageCode.GDplayerNameTextInputObjects3.length = 0;
gdjs.WinpageCode.GDbringButtonObjects1.length = 0;
gdjs.WinpageCode.GDbringButtonObjects2.length = 0;
gdjs.WinpageCode.GDbringButtonObjects3.length = 0;
gdjs.WinpageCode.GDwinsButtonObjects1.length = 0;
gdjs.WinpageCode.GDwinsButtonObjects2.length = 0;
gdjs.WinpageCode.GDwinsButtonObjects3.length = 0;
gdjs.WinpageCode.GDnecypaaButtonObjects1.length = 0;
gdjs.WinpageCode.GDnecypaaButtonObjects2.length = 0;
gdjs.WinpageCode.GDnecypaaButtonObjects3.length = 0;
gdjs.WinpageCode.GDleaderboardButtonObjects1.length = 0;
gdjs.WinpageCode.GDleaderboardButtonObjects2.length = 0;
gdjs.WinpageCode.GDleaderboardButtonObjects3.length = 0;
gdjs.WinpageCode.GDsubmitButtonObjects1.length = 0;
gdjs.WinpageCode.GDsubmitButtonObjects2.length = 0;
gdjs.WinpageCode.GDsubmitButtonObjects3.length = 0;
gdjs.WinpageCode.GDexitButtonObjects1.length = 0;
gdjs.WinpageCode.GDexitButtonObjects2.length = 0;
gdjs.WinpageCode.GDexitButtonObjects3.length = 0;
gdjs.WinpageCode.GDbringNECYTextObjects1.length = 0;
gdjs.WinpageCode.GDbringNECYTextObjects2.length = 0;
gdjs.WinpageCode.GDbringNECYTextObjects3.length = 0;
gdjs.WinpageCode.GDnhBidTextObjects1.length = 0;
gdjs.WinpageCode.GDnhBidTextObjects2.length = 0;
gdjs.WinpageCode.GDnhBidTextObjects3.length = 0;
gdjs.WinpageCode.GDnecypaaNHTextObjects1.length = 0;
gdjs.WinpageCode.GDnecypaaNHTextObjects2.length = 0;
gdjs.WinpageCode.GDnecypaaNHTextObjects3.length = 0;
gdjs.WinpageCode.GDleaderboardTextObjects1.length = 0;
gdjs.WinpageCode.GDleaderboardTextObjects2.length = 0;
gdjs.WinpageCode.GDleaderboardTextObjects3.length = 0;
gdjs.WinpageCode.GDsubmitTextObjects1.length = 0;
gdjs.WinpageCode.GDsubmitTextObjects2.length = 0;
gdjs.WinpageCode.GDsubmitTextObjects3.length = 0;
gdjs.WinpageCode.GDexitTextObjects1.length = 0;
gdjs.WinpageCode.GDexitTextObjects2.length = 0;
gdjs.WinpageCode.GDexitTextObjects3.length = 0;
gdjs.WinpageCode.GDmscypaaInfoTextObjects1.length = 0;
gdjs.WinpageCode.GDmscypaaInfoTextObjects2.length = 0;
gdjs.WinpageCode.GDmscypaaInfoTextObjects3.length = 0;

gdjs.WinpageCode.eventsList2(runtimeScene);

return;

}

gdjs['WinpageCode'] = gdjs.WinpageCode;
