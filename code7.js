gdjs.ConclusioneCode = {};
gdjs.ConclusioneCode.localVariables = [];
gdjs.ConclusioneCode.idToCallbackMap = new Map();
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1= [];
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2= [];
gdjs.ConclusioneCode.GDNextButtonObjects1= [];
gdjs.ConclusioneCode.GDNextButtonObjects2= [];
gdjs.ConclusioneCode.GDNewSpriteObjects1= [];
gdjs.ConclusioneCode.GDNewSpriteObjects2= [];
gdjs.ConclusioneCode.GDNewSprite2Objects1= [];
gdjs.ConclusioneCode.GDNewSprite2Objects2= [];
gdjs.ConclusioneCode.GDNewSprite3Objects1= [];
gdjs.ConclusioneCode.GDNewSprite3Objects2= [];
gdjs.ConclusioneCode.GDNewSprite4Objects1= [];
gdjs.ConclusioneCode.GDNewSprite4Objects2= [];
gdjs.ConclusioneCode.GDNewBBTextObjects1= [];
gdjs.ConclusioneCode.GDNewBBTextObjects2= [];
gdjs.ConclusioneCode.GDNewBBText2Objects1= [];
gdjs.ConclusioneCode.GDNewBBText2Objects2= [];


gdjs.ConclusioneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].SetLabelTextOp("FINE", null);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConclusioneCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.ConclusioneCode.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ConclusioneCode.GDNextButtonObjects1[k] = gdjs.ConclusioneCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.ConclusioneCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.ConclusioneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects1.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects1.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite2Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite2Objects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects2.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects1.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects2.length = 0;
gdjs.ConclusioneCode.GDNewBBText2Objects1.length = 0;
gdjs.ConclusioneCode.GDNewBBText2Objects2.length = 0;

gdjs.ConclusioneCode.eventsList0(runtimeScene);
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects1.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects1.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite2Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite2Objects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects2.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects1.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects2.length = 0;
gdjs.ConclusioneCode.GDNewBBText2Objects1.length = 0;
gdjs.ConclusioneCode.GDNewBBText2Objects2.length = 0;


return;

}

gdjs['ConclusioneCode'] = gdjs.ConclusioneCode;
