import {Player} from '../gameObjects/Player.js'


export class Start extends Phaser.Scene {

    constructor() {
        super('Start');

        this.player;
    }

    create() {
        this.player = new Player(this, 1280/2, 720/2, 0)
    }

    update() {

        this.player.update();

    }
    
}
