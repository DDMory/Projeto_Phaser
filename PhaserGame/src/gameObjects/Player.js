import ASSETS from '../assets.js'

export default class Player extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, knightId) {
        super(scene, x, y, ASSETS.spritesheet.knight.key, knightId);

        this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.isAlive = true;
        this.play('idle_knight',true);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
    }

    //TODO: Player moviment
}