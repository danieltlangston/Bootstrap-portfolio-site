
var container = document.getElementsByClassName('three-container');


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, container.innerWidth/container.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( container.innerWidth, container.innerHeight );
document.body.appendChild( renderer.domElement );

var texture = new THREE.TextureLoader().load( 'assets/fineart/etching/etchings-02.png' );
var geometry = new THREE.PlaneGeometry( 1,1 );


var material = new THREE.MeshBasicMaterial( { side:THREE.DoubleSide,map: texture} );
var plane = new THREE.Mesh( geometry, material );


scene.add( plane );


camera.position.z = 2;

var animate = function () {
	requestAnimationFrame( animate );

	plane.rotation.x += 0;
	plane.rotation.y += 0.01;


	renderer.render( scene, camera);
};

animate();
