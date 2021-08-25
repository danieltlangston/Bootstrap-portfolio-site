var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//lighting *NOT WORKING*
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );

//texture loader 
var texture = new THREE.TextureLoader().load( 'assets/redesigns/vincents-redesign-08.png' );
//repeat wrapping 
/* texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );*/

//plane
var geometry = new THREE.PlaneGeometry( 1, 1 );

//basic one color material
/* var material = new THREE.MeshBasicMaterial(
    {color: 0xffff00, side: THREE.DoubleSide} ); 
    */

var material = new THREE.MeshBasicMaterial( { side:THREE.DoubleSide,map: texture} );
var plane = new THREE.Mesh( geometry, material );
plane.scale.x = texture.width;
plane.scale.y = texture.height;

scene.add( plane );
var planeTwo = new THREE.Mesh( geometry, material );
scene.add( planeTwo );



camera.position.z = 4;

var animate = function () {
	requestAnimationFrame( animate );

	plane.rotation.x += 0;
	plane.rotation.y += 0.005;
    
	planeTwo.rotation.x += 0;
	planeTwo.rotation.y += 0.01;
    planeTwo.position.x = 2;


	renderer.render( scene, camera);
};

animate();

