import ASSETS from '../assets.js'

export class Player extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, knightId) {
        super(scene, x, y, ASSETS.spritesheet.knight.key, knightId);
        scene.add.existing(this);

        this.scene = scene;
        this.health = 20;
        this.isAlive = true;
        this.doingAction = false;
        this.isAttacking = false;
        this.isDefending = false;
        this.isHealing = false;
        this.strength = 5

        this.originalX = x;
        
        this.play('idle_knight');
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
    }

    attack=() => {

        if (!this.isAttacking) { // Adicione uma verificação para evitar interrupções
            this.isAttacking = true;
            this.doingAction = true;
            this.play('attack_knight');

            // Adicione um listener para o evento de conclusão da animação de ataque
            this.once('animationcomplete-attack_knight', () => {
                this.isAttacking = false;
                this.doingAction = false;
                this.play('idle_knight');
            });
        }

    }

    defense = () => {
        if (!this.isDefending) {
            this.doingAction = true;
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
                    this.doingAction = false;
                    this.play('idle_knight'); // Volta para a animação de idle ao terminar
                }
            });
        }
    }

    //TODO: Player.js - Heal method
    heal = () =>{
        if(!this.isHealing){
            this.isHealing = true;
        }
    }

}