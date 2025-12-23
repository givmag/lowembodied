gdjs.Modulo_325Code = {};
gdjs.Modulo_325Code.localVariables = [];
gdjs.Modulo_325Code.idToCallbackMap = new Map();
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_325Code.GDNextButtonObjects1= [];
gdjs.Modulo_325Code.GDNextButtonObjects2= [];
gdjs.Modulo_325Code.GDNewSpriteObjects1= [];
gdjs.Modulo_325Code.GDNewSpriteObjects2= [];
gdjs.Modulo_325Code.GDNewSprite2Objects1= [];
gdjs.Modulo_325Code.GDNewSprite2Objects2= [];
gdjs.Modulo_325Code.GDNewSprite3Objects1= [];
gdjs.Modulo_325Code.GDNewSprite3Objects2= [];
gdjs.Modulo_325Code.GDNewBBTextObjects1= [];
gdjs.Modulo_325Code.GDNewBBTextObjects2= [];


gdjs.Modulo_325Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_325Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_325Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_325Code.GDNextButtonObjects1[k] = gdjs.Modulo_325Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_325Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 6", false);
}
}

}


};

gdjs.Modulo_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_325Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_325Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_325Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_325Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_325Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_325Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects2.length = 0;

gdjs.Modulo_325Code.eventsList0(runtimeScene);
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_325Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_325Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_325Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_325Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_325Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_325Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects2.length = 0;


return;

}

gdjs['Modulo_325Code'] = gdjs.Modulo_325Code;
