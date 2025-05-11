export class Preloader extends Phaser.Scene
{

    //TODO[10:05]: Create a enemy!!! + Put it on a scene

    constructor(){
        super('Preloader');
    }
   
    preload(){
        this.load.spritesheet('purple_knight', '../../assets/Warrior_Purple.png', { frameWidth: 192, frameHeight: 192 })
    }

    create() {

        //Player animations
        this.anims.create({
            key: 'idle_knight',
            frames: this.anims.generateFrameNames('purple_knight', {start:0 ,end: 5}),
            yoyo: true,
            frameRate: 8,
            repeat: -1
        })

        this.anims.create({
            key: 'attack_knight',
            frames: this.anims.generateFrameNames('purple_knight', {prefix:'purple_knight', start:12 ,end: 17})
        })

        this.scene.start('Start')
    }

}