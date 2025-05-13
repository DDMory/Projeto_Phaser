import {Player} from '../gameObjects/Player.js'
import {Enemy} from '../gameObjects/Enemy.js'

export class Start extends Phaser.Scene {

    constructor() {
        super('Start');

        this.player;
        this.enemy;
    }

    create() {
        
        this.player = new Player(this, (1280/2) - 320, 720/2, 0)
        this.enemy = new Enemy(this, (1280/2) + 320, 720/2, 0);

        const action_attack = this.add.text((1280/2) - 500, 720 - 220, "Attack!!!").setInteractive();
        const action_defense = this.add.text(1280/2, 720 - 220, "Defese!!!").setInteractive();
        const action_heal = this.add.text((1280/2) + 500, 720 - 220, "Heal!!!").setInteractive();
             
        action_attack.on('pointerdown', () => {
            this.player.attack(this.enemy.x); 
            this.enemy.attack(this.player.x);
        });

        action_defense.on('pointerdown', () => {
            this.player.defense(); 
            this.enemy.defense();
        });


        action_heal.on('pointerdown', () => {
            this.player.heal(); 
            this.enemy.heal();
        });
                
        //TODO: Start.js - enemies
    }

    update() {

        if (this.enemy && this.player) {
            if (this.enemy.x > this.player.x) {
                this.enemy.flipX = true;
                this.player.flipX = false;
            } else if (this.enemy.x < this.player.x) {        
                this.enemy.flipX = false;
                this.player.flipX = true;
            }
        }

    }
    
}
