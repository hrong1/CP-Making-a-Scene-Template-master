// Code Practice: Making a Scene
// Name: Haorong Rong
// Date: Jan 17 2024

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    }, 
    scene: [ MainMenu, Play ]
}

let game = new Phaser.Game(config)