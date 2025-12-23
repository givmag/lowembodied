gdjs.Modulo_323Code = {};
gdjs.Modulo_323Code.localVariables = [];
gdjs.Modulo_323Code.idToCallbackMap = new Map();
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_323Code.GDNextButtonObjects1= [];
gdjs.Modulo_323Code.GDNextButtonObjects2= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_323Code.GDNewSprite5Objects1= [];
gdjs.Modulo_323Code.GDNewSprite5Objects2= [];
gdjs.Modulo_323Code.GDNewSpriteObjects1= [];
gdjs.Modulo_323Code.GDNewSpriteObjects2= [];
gdjs.Modulo_323Code.GDNewSprite2Objects1= [];
gdjs.Modulo_323Code.GDNewSprite2Objects2= [];
gdjs.Modulo_323Code.GDMovimentoObjects1= [];
gdjs.Modulo_323Code.GDMovimentoObjects2= [];
gdjs.Modulo_323Code.GDNewBBTextObjects1= [];
gdjs.Modulo_323Code.GDNewBBTextObjects2= [];
gdjs.Modulo_323Code.GDNewBBText2Objects1= [];
gdjs.Modulo_323Code.GDNewBBText2Objects2= [];


gdjs.Modulo_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Modulo_323Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Modulo_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Modulo_323Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSprite2Objects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "UI", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "UI", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowTextBox2Timer") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Modulo_323Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Modulo_323Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Modulo_323Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSpriteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewSprite5Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 12;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDNextButtonObjects1[k] = gdjs.Modulo_323Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 4", false);
}
}

}


};

gdjs.Modulo_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDNewSprite5Objects1.length = 0;
gdjs.Modulo_323Code.GDNewSprite5Objects2.length = 0;
gdjs.Modulo_323Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_323Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_323Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects1.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;

gdjs.Modulo_323Code.eventsList0(runtimeScene);
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDNewSprite5Objects1.length = 0;
gdjs.Modulo_323Code.GDNewSprite5Objects2.length = 0;
gdjs.Modulo_323Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_323Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_323Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects1.length = 0;
gdjs.Modulo_323Code.GDMovimentoObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;


return;

}

gdjs['Modulo_323Code'] = gdjs.Modulo_323Code;
