import ASSETS from '../assets.js'

export class Player extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, knightId) {
        super(scene, x, y, ASSETS.spritesheet.knight.key, knightId);
        scene.add.existing(this);


        this.isAlive = true;
        this.play('idle_knight',true);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
    }

    //TODO: Player moviment
}