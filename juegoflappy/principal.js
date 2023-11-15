var juego= new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
//var flappy;
var persona;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/bg.jpeg');
	juego.load.image('pajaro','img/pajaro1.png');
	juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
	juego.load.spritesheet('persona','img/persona.png',64,64);



	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
		persona = juego.add.sprite(juego.width/2,juego.height/2,'persona');
		persona.anchor.setTo(0.5);
		persona.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true);
		persona.animations.add('izquierda',[9,10,11,12,13,14,15,16,17],10,true);
		persona.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);
		persona.animations.add('derecha',[27,28,29,30,31,32,33,34,35],10,true);
		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
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
		}else if(teclaArriba.isDown){
			
			persona.position.y-=2;
			persona.animations.play('arriba');
		}else if(teclaAbajo.isDown){
			
			persona.position.y+=2;
			persona.animations.play('abajo');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');

