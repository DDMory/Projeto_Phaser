import {Player} from '../gameObjects/Player.js'


export class Start extends Phaser.Scene {

    constructor() {
        super('Start');

        this.player;
        this.meat;
    }

    create() {
        
        this.player = new Player(this, 1280/2, 720/2, 0)

        const action_attack = this.add.text((1280/2) - 500, 720 - 220, "Attack!!!").setInteractive();
        const action_defense = this.add.text(1280/2, 720 - 220, "Defese!!!").setInteractive();
        const action_heal = this.add.text((1280/2) + 500, 720 - 220, "Heal!!!").setInteractive();
             
        if(this.player.isAttacking == false){
            action_attack.on('pointerdown',this.player.attack);

        }
        
        if(this.player.isDefending == false){
            action_defense.on('pointerdown',this.player.defense);
        }

        if(this.player.isHealing == false){
            action_heal.on('pointerdown',this.player.heal);
        }
        
        //TODO: Start.js - enemies
    }

    update() {

        this.player.update();

    }
    
}
