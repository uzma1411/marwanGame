class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();


    //creating the player sprite
    player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
    player.addImage("pRight", p1)
    player.scale = 0.3
    player.debug = true
    player.setCollider("rectangle", 0, 0, 50, 200)

    player2 = createSprite(displayWidth - 150, displayHeight - 300, 50, 50);
    player2.addImage("pLeft", p2)
    player2.scale = 0.3
    player2.debug = true
    player2.setCollider("rectangle", 0, 0, 50, 200)

    fSplayers = [player, player2]

  }

  handleElements() {
    form.hide();
    form.titleImg.hide();
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(backgroundImage, 0, 0, width, height);

      drawSprites();
    }
  }
}
