class Game{
    static scenes = [];
    static currentSceneIndex = 0;
    static nextSceneIndex = -1;
    static scene(){
      return Game.scenes[Game.currentSceneIndex];
    }
    static findByType(type){
      return Game.scene().gameObjects.filter(go=>go.constructor.name == type);
    }
    static updateScene(){
      if(Game.nextSceneIndex != -1){
        Game.currentSceneIndex = Game.nextSceneIndex;
        Game.nextSceneIndex = -1;
        Game.scene().restart();
      }
    }
    static changeScene(index){
      Game.nextSceneIndex = index;
    }
  }
  
  export default Game;