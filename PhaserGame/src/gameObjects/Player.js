import ASSETS from '../assets.js'

export class Player extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, knightId) {
        super(scene, x, y, ASSETS.spritesheet.knight.key, knightId);
        scene.add.existing(this);

        this.scene = scene;
        this.health = 20;
        this.isAlive = true;
        this.isAttacking = false;
        this.isDefending = false;
        this.isHealing = false;
        this.strength = 5

        this.originalX = x;
        this.originalY = y;
        
        this.play('idle_knight');
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
    }

    attack=() => {

        if (!this.isAttacking) { // Adicione uma verificação para evitar interrupções
            this.isAttacking = true;
            this.play('attack_knight');

            // Adicione um listener para o evento de conclusão da animação de ataque
            this.once('animationcomplete-attack_knight', () => {
                this.isAttacking = false;
                this.play('idle_knight');
            });
        }

    }

    defense = () => {
        if (!this.isDefending) {
            
            this.isDefending = true;
            const defenseDistance = 30; // Distância que o personagem vai recuar
            const defenseDuration = 600; // Duração da animação de recuo e retorno

            this.play('walking_knight'); // Inicia a animação de andar

            this.scene.tweens.add({
                targets: this,
                x: this.x - defenseDistance,
                duration: defenseDuration / 2,
                ease: 'Sine.easeInOut',
                yoyo: true,
                onComplete: () => {
                    this.isDefending = false;
                    this.play('idle_knight'); // Volta para a animação de idle ao terminar
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
                    if(this.health < 20)
                        this.health += 5;
                    else
                        this.health = 20

                    meatSprite.destroy();
                    this.isHealing = false;
                }
            });
        }
    }

}