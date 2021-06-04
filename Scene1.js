class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootAnimation");
    }

    preload() {
        const imageUrl = window.innerWidth < 1100 ? 'assets/main-bg-portrait.png' : 'assets/main-bg.png'

        this.load.image('background', imageUrl)

        this.load.atlas('shiningStars', 'assets/backgroundAnim.png', 'backgroundAnim.json')
    }

    create() {

        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.shiningStars = this.add.sprite(0, 0, 'shiningStars')
        this.shiningStars.setOrigin(0, 0);

        this.anims.create({
            key: 'shine_landscape',
            frames: [
                { key: 'shiningStars', frame: 'landscape_01' },
                { key: 'shiningStars', frame: 'landscape_02' },
                { key: 'shiningStars', frame: 'landscape_03' },
                { key: 'shiningStars', frame: 'landscape_04' },
                { key: 'shiningStars', frame: 'landscape_05' },
            ],
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'shine_portrait',
            frames: [
                { key: 'shiningStars', frame: 'portrait_01' },
                { key: 'shiningStars', frame: 'portrait_02' },
                { key: 'shiningStars', frame: 'portrait_03' },
                { key: 'shiningStars', frame: 'portrait_04' },
                { key: 'shiningStars', frame: 'portrait_05' },
            ],
            frameRate: 3,
            repeat: -1
        });

        if (config.width < 1100) {
            this.shiningStars.displayHeight = 1920;
            this.shiningStars.scaleX = this.shiningStars.scaleY;
            this.shiningStars.alpha = 0.5;
            this.shiningStars.play('shine_portrait')
        } else {
            this.shiningStars.displayHeight = 1920;
            this.shiningStars.scaleX = this.shiningStars.scaleY;
            this.shiningStars.alpha = 0.5;
            this.shiningStars.play('shine_landscape')
        }
    }
}

