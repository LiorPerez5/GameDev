"use strict";
exports.__esModule = true;
exports.GameManager = void 0;
/**
 * Use this class for main implementation.
 *
 */
var GameManager = /** @class */ (function () {
    function GameManager(i_Scene) {
        console.log(i_Scene);
        console.log(i_Scene.symbolsArr());
        console.log(i_Scene.symbolsArr()[0]);
        // i_Scene.symbolsArr()[0].setFrame()
        i_Scene.add.layer(i_Scene.symbolsArr()[1]);
        console.log(i_Scene.editorCreate);
    }
    return GameManager;
}());
exports.GameManager = GameManager;
