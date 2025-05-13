import ASSETS from '../assets.js'

export class Enemy extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, enemyID){
        super(scene, x, y, ASSETS.spritesheet.torch.key, enemyID);
        scene.add.existing(this);

        this.scene = scene;
        this.originalX = x;
        this.originalY = y;
        this.isAttacking = false;
        this.isDefending = false;
        this.isHealing = false;

        this.health = 10;
        
        this.play('idle_torch');
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
    }

    attack=(playerX) => {
        if (!this.isAttacking) {
            this.isAttacking = true;
            
            this.scene.tweens.add({
                targets: this,
                x: playerX + 300,
                duration: 800 / 2,
                ease: 'Sine.easeInOut',
                onComplete: () => {
                    this.play('attack_torch');

                    this.once('animationcomplete-attack_torch', () => {
                        this.scene.tweens.add({
                            targets: this,
                            x: this.originalX,
                            duration: 800 / 2,
                            ease: 'Sine.easeInOut',
                        });
                    });
               
                }
            });

            this.once('animationcomplete-attack_torch', () => {
                this.isAttacking = false;
                this.play('idle_torch');
            });
        }

    }

    defense = () => {
        if (!this.isDefending) {
            
            this.isDefending = true;

            this.play('walking_torch');

            this.scene.tweens.add({
                targets: this,
                x: this.x + 100,
                duration: 400,
                ease: 'Sine.easeInOut',
                yoyo: true,
                onComplete: () => {
                    this.isDefending = false;
                    this.play('idle_torch'); // Volta para a animação de idle ao terminar
                }
            });
        }
    }

    heal = () => {
        if (!this.isHealing) {
            this.isHealing = true;

            const meatSprite = this.scene.add.sprite(this.originalX, this.originalY - 100, 'meat');
            meatSprite.play('meat');

            this.scene.tweens.add({
                targets: meatSprite,
                y: this.originalY,
                duration: 600,
                ease: 'Linear',
                onComplete: () => {
                    if(this.health < 10)
                        this.health += 5;
                    else
                        this.health = 10;
                    
                    this.isHealing = false;
                    meatSprite.destroy();
                    
                }
            });
            
            
        }
    }

}