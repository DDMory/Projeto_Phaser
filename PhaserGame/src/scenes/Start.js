import Player from '../gameObjects/Player.js'


export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.spritesheet('purple_knight', '../../assets/Warrior_Purple.png', { frameWidth: 192, frameHeight: 192 })
    }

    player

    create() {
        this.player = new Player(this, 200, 300, 0); 
        this.add.existing(this.player);

    }

    update() {

        this.player.update();

    }
    
}
