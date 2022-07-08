import MainScene from './Scenes/MainScene';

/**
 * Use this class for main implementation.
 *
 */
export class GameManager {
  constructor(i_Scene: MainScene) {
    console.log(i_Scene)
    console.log(i_Scene.symbolsArr())
    console.log(i_Scene.symbolsArr()[0])
    // i_Scene.symbolsArr()[0].setFrame()
    i_Scene.add.layer(i_Scene.symbolsArr()[1])
    console.log(i_Scene.editorCreate);
  }
}
