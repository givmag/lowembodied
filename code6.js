gdjs.Modulo_326Code = {};
gdjs.Modulo_326Code.localVariables = [];
gdjs.Modulo_326Code.idToCallbackMap = new Map();
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_326Code.GDNextButtonObjects1= [];
gdjs.Modulo_326Code.GDNextButtonObjects2= [];
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_326Code.GDNewSpriteObjects1= [];
gdjs.Modulo_326Code.GDNewSpriteObjects2= [];
gdjs.Modulo_326Code.GDNewSprite2Objects1= [];
gdjs.Modulo_326Code.GDNewSprite2Objects2= [];
gdjs.Modulo_326Code.GDNewSprite3Objects1= [];
gdjs.Modulo_326Code.GDNewSprite3Objects2= [];
gdjs.Modulo_326Code.GDNewSprite4Objects1= [];
gdjs.Modulo_326Code.GDNewSprite4Objects2= [];
gdjs.Modulo_326Code.GDNewBBTextObjects1= [];
gdjs.Modulo_326Code.GDNewBBTextObjects2= [];
gdjs.Modulo_326Code.GDNewBBText2Objects1= [];
gdjs.Modulo_326Code.GDNewBBText2Objects2= [];


gdjs.Modulo_326Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_326Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Modulo_326Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_326Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewSprite3Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
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
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_326Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Modulo_326Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_326Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewSprite3Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDNextButtonObjects1[k] = gdjs.Modulo_326Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Conclusione", false);
}
}

}


};

gdjs.Modulo_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite4Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite4Objects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects2.length = 0;

gdjs.Modulo_326Code.eventsList0(runtimeScene);
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_326Code.GDNewSprite4Objects1.length = 0;
gdjs.Modulo_326Code.GDNewSprite4Objects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects2.length = 0;


return;

}

gdjs['Modulo_326Code'] = gdjs.Modulo_326Code;
