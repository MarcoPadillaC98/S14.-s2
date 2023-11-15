var juego= new Phaser.Game(1300,650,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var persona;
var teclaDerecha;
var teclaIzquierda;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/new.jpg');	
	juego.load.spritesheet('hombre','img/hom.png',82.5,106.5);

	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,1300,650,'fondo');
		persona = juego.add.sprite(juego.width/2,juego.height/2,'hombre');
		persona.anchor.setTo(-1.3);
		persona.animations.add('derecha',[0,1,2,3,4,5,6,7],9,true);
		persona.animations.add('izquierda',[9,10,11,12,13,14,15],9,true);
		
		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);		
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds=true;

		},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		//flappy.animations.play('vuelo');
		if(teclaDerecha.isDown){
			
			persona.position.x+=2;
			persona.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			
			persona.position.x-=2;
			persona.animations.play('izquierda');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');
