class Application {
  player = null;
  opponent = null;
  mouse = null;

  scenes = {};

  activeScene = null;

  constructor(scenes = {}) {
    const player = new BattleFieldView();
    const opponent = new BattleFieldView();
    const mouse = new Mouse(document.body);


    Object.assign(this, { player, opponent, mouse });

    document.querySelector('[data-side="player"]').append(player.root);
    document.querySelector('[data-side="opponent"]').append(opponent.root);
  

    for (const [nameScene, classScene] of Object.entries(scenes)) {
      this.scenes[nameScene] = new classScene(nameScene, this);
    }


    for (const scene of Object.values(this.scenes)) {
      scene.init();
    }

    requestAnimationFrame(() => this.tick());
  };


  tick() {
    requestAnimationFrame(() => this.tick());

    if(this.activeScene) {
      this.activeScene.update();
    }

    this.mouse.tick();
  }


  start(sceneName) {

  
   if(this.activeScene) {
    this.activeScene.stop();
   }
   
    

		const scene = this.scenes[sceneName];
		this.activeScene = scene;
		scene.start();
  
  

		return true;
	}


};