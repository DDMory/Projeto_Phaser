export class Preloader extends Phaser.Scene
{

    constructor(){
        super('Preloader');
    }
   
    preload(){
        this.load.spritesheet('purple_knight', '../../assets/Warrior_Purple.png', { frameWidth: 192, frameHeight: 192 })
    }

    create() {

        //Animações
            //Player
        this.anims.create({
            key: 'idle_knight',
            frames: this.anims.generateFrameNames('purple_knight', {start:0 ,end: 5}),
            yoyo: true,
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'attack_knight',
            frames: this.anims.generateFrameNames('purple_knight', {start:12 ,end: 17}),
            framerate: 20
        })

        this.anims.create({
            key: 'walking_knight',
            frames: this.anims.generateFrameNames('purple_knight', {start:6 ,end: 11}),
            yoyo: true,
            framerate: 10
        })

        //Trocar de cena
        this.scene.start('Start')
    }

}