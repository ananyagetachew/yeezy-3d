import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const canvas = document.querySelector('canvas.webgl')
const canvass = document.querySelector('canvas.webg')
const canvasss = document.querySelector('canvas.web')
const canvassss = document.querySelector('canvas.we')
let ambientLight2; 
let directionalLightBack2;
let  directionalLightFront2;
let ambientLight3; 
let directionalLightBack3;
let  directionalLightFront3;
let ambientLight4; 
let directionalLightBack4;
let  directionalLightFront4;
let ambientLight; 
let directionalLightBack;
let  directionalLightFront;


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight

}


const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const scene3 = new THREE.Scene()
const scene4 = new THREE.Scene()


const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height)
const camera2 = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
const camera3 = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
const camera4 = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)



camera.position.z = 1
camera.position.x = 15
camera.position.y = 5


camera2.position.set(1, 5, 20);


camera3.position.set(1, 5, 20);


camera4.position.set(1, 5, 20);



scene.add(camera)
scene2.add(camera2)
scene3.add(camera3)
scene4.add(camera4)


const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

const gltfLoader = new GLTFLoader()
const gltfLoader2 = new GLTFLoader()
const gltfLoader3 = new GLTFLoader()
const gltfLoader4 = new GLTFLoader()

gltfLoader.setDRACOLoader(dracoLoader)
gltfLoader2.setDRACOLoader(dracoLoader)
gltfLoader3.setDRACOLoader(dracoLoader)
gltfLoader4.setDRACOLoader(dracoLoader)


 ambientLight = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.75);
scene.add(ambientLight);
directionalLightBack = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightBack.position.set(30, 100, 100);
scene.add(directionalLightBack);
directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightFront.position.set(-30, 100, -100);
scene.add(directionalLightFront);


ambientLight2 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
scene2.add(ambientLight2);
directionalLightBack2 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightBack2.position.set(30, 100, 100);
scene2.add(directionalLightBack2);
directionalLightFront2 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightFront2.position.set(-30, 100, -100);
scene2.add(directionalLightFront2);



ambientLight3 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
scene3.add(ambientLight3);
directionalLightBack3 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightBack3.position.set(30, 100, 100);
scene3.add(directionalLightBack3);
directionalLightFront3 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightFront3.position.set(-30, 100, -100);
scene3.add(directionalLightFront3);


 ambientLight4 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
scene4.add(ambientLight4);
directionalLightBack4 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightBack4.position.set(30, 100, 100);
scene4.add(directionalLightBack4);
 directionalLightFront4 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightFront4.position.set(-30, 100, -100);
scene4.add(directionalLightFront4);




gltfLoader.load(
    'short.glb',
    (gltf) => {

        scene.add(gltf.scene)

    }
)
gltfLoader2.load(
    'long.glb',
    (gltf) => {
        const blackMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Create a new material with black color
              const blackMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  
              // Preserve existing texture if available
              if (child.material.map) {
                blackMaterial.map = child.material.map;
              }
  
              // Apply the new material
              child.material = blackMaterial;
            }
          });
  
          // Add the loaded model to the scene
          scene2.add(gltf.scene);

    }
)

gltfLoader3.load(
    't.glb',
    (gltf) => {

        scene3.add(gltf.scene)

    }
)

gltfLoader4.load(
    'pants3.glb',
    (gltf) => {

        scene4.add(gltf.scene)

    }
)

const cursor = { x: 0, y: 0 }
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.width - 0.5)
})


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const renderer2 = new THREE.WebGLRenderer({
    canvas: canvass
})

const renderer3 = new THREE.WebGLRenderer({
    canvas: canvasss
})

const renderer4 = new THREE.WebGLRenderer({
    canvas: canvassss
})

renderer.setClearColor(0xF2F3F5);
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;



renderer2.setClearColor(0xF2F3F5);
renderer2.setSize(sizes.width, sizes.height)

renderer3.setClearColor(0xF2F3F5);
renderer3.setSize(sizes.width, sizes.height)

renderer4.setClearColor(0xF2F3F5);
renderer4.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 15;
controls.maxDistance = 30;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update()


const controls2 = new OrbitControls(camera2, canvass)
controls2.enableDamping = true;
controls2.enablePan = false;
controls2.minDistance = 1;
controls2.maxDistance = 30;
controls2.minPolarAngle = 0.5;
controls2.maxPolarAngle = 1.5;
controls2.autoRotate = true;
//controls2.target = new THREE.Vector3(0, 1, 0);
controls2.update()

const controls3 = new OrbitControls(camera3, canvasss)
controls3.enableDamping = true;
controls3.enablePan = false;
controls3.minDistance = 5;
controls3.maxDistance = 20;
controls3.minPolarAngle = 0.5;
controls3.maxPolarAngle = 1.5;
controls3.autoRotate = true;
controls3.target = new THREE.Vector3(0, 1, 0);
controls3.update()

const controls4 = new OrbitControls(camera4, canvassss)
controls4.enableDamping = true;
controls4.enablePan = false;
controls4.minDistance = 5;
controls4.maxDistance = 20;
controls4.minPolarAngle = 0.5;
controls4.maxPolarAngle = 1.5;
controls4.autoRotate = true;
controls4.target = new THREE.Vector3(0, 1, 0);
controls4.update()




window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera2.aspect = sizes.width / sizes.height
    camera2.updateProjectionMatrix()

    renderer2.setSize(sizes.width, sizes.height)
    renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    camera3.aspect = sizes.width / sizes.height
    camera3.updateProjectionMatrix()

    renderer3.setSize(sizes.width, sizes.height)
    renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera4.aspect = sizes.width / sizes.height
    camera4.updateProjectionMatrix()

    renderer4.setSize(sizes.width, sizes.height)
    renderer4.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})
const animate = () => {

    renderer.render(scene, camera)
    controls.update()

    window.requestAnimationFrame(animate)
}
const animate2 = () => {

    renderer2.render(scene2, camera2)
    controls2.update()

    window.requestAnimationFrame(animate2)
}

const animate3 = () => {

    renderer3.render(scene3, camera3)
    controls3.update()

    window.requestAnimationFrame(animate3)
}

const animate4 = () => {

    renderer4.render(scene4, camera4)
    controls4.update()

    window.requestAnimationFrame(animate4)
}


animate()
animate2()
animate3()
animate4()






var products = [
    { li: "SPLY BAG(1)", name: "YZY PODS", price: "BR11,478.00", b: "DELIVERY WITHIN 4 WEEKS ", size: "SIZE", aa: "1", bb: "2", cc: "3", sw: "SIZE GUIDE", o: "OREDR" },
    { li: "SPLY BAG(1)", name: "VULTURES PANTS", price: "BR6,887.00", b: "BLACK", w: "White", size: "SIZE", aa: "1", bb: "2", cc: "3", sw: "SIZE GUIDE", o: "OREDR" },
    { li: "SPLY BAG(1)", name: "LONG T", price: "BR5,739.00", b: "BLACK", w: "White", size: "SIZE", aa: "1", bb: "2", cc: "3", sw: "SIZE GUIDE", o: "OREDR" },
    { li: "SPLY BAG(1)", name: "VULTURES SHORTS", price: "BR5,739.005", b: "BLACK", w: "White", size: "SIZE", aa: "1", bb: "2", cc: "3", sw: "SIZE GUIDE", o: "OREDR" },
    { li: "SPLY BAG(1)", name: "BOX T", price: "BR4,592.00", b: "BLACK", w: "White", size: "SIZE", aa: "1", bb: "2", cc: "3", sw: "SIZE GUIDE", o: "OREDR" },
    { size: "SPLY BAG(1)", o: "vultures" },
];
var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            document.getElementById("li").textContent =
            products[swiper.activeIndex].li;
            document.getElementById("product_name").textContent =
                products[swiper.activeIndex].name;
            document.getElementById("price").textContent =
                products[swiper.activeIndex].price;
           
            document.getElementById("b").textContent =
                products[swiper.activeIndex].b;
            document.getElementById("w").textContent =
                products[swiper.activeIndex].w;
            document.getElementById("size").textContent =
                products[swiper.activeIndex].size;
            document.getElementById("aa").textContent =
                products[swiper.activeIndex].aa;
            document.getElementById("bb").textContent =
                products[swiper.activeIndex].bb;
            document.getElementById("cc").textContent =
                products[swiper.activeIndex].cc;
            document.getElementById("sw").textContent =
                products[swiper.activeIndex].sw;
            document.getElementById("o").textContent =
                products[swiper.activeIndex].o;
              
        },
    },
});

document.getElementById("b").addEventListener("click", myFunction);
document.getElementById("w").addEventListener("click", myFunctionw);
function myFunctionw() {
    let index_currentSlide      = swiper.realIndex;
    console.log(index_currentSlide)

    if(index_currentSlide == 4){
    ambientLight3 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.10);
    scene3.add(ambientLight3);
     directionalLightBack3 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.10);
    directionalLightBack3.position.set(30, 100, 100);
    scene3.add(directionalLightBack3);
     directionalLightFront3 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.10);
    directionalLightFront3.position.set(-30, 100, -100);
    scene3.add(directionalLightFront3);


    
  }


  if(index_currentSlide == 3){
     ambientLight = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    scene.add(ambientLight);
     directionalLightBack= new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightBack.position.set(30, 100, 100);
    scene.add(directionalLightBack);
     directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightFront.position.set(-30, 100, -100);
    scene.add(directionalLightFront);
  }
  
  if(index_currentSlide == 2){

    
    ambientLight2 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    scene2.add(ambientLight2);
    directionalLightBack2 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightBack2.position.set(30, 100, 100);
    scene2.add(directionalLightBack2);
    directionalLightFront2 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightFront2.position.set(-30, 100, -100);
    scene2.add(directionalLightFront2);

    
  }
  if(index_currentSlide == 1){
    ambientLight4 = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    scene4.add(ambientLight4);
     directionalLightBack4 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightBack4.position.set(30, 100, 100);
    scene4.add(directionalLightBack4);
     directionalLightFront4 = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
    directionalLightFront4.position.set(-30, 100, -100);
    scene4.add(directionalLightFront4);
  }
}

function myFunction() {
    let index_currentSlide      = swiper.realIndex;
                console.log(index_currentSlide)

                if(index_currentSlide == 4){
                    scene3.remove(ambientLight3);
                    scene3.remove(directionalLightBack3);
                    scene3.remove(directionalLightFront3);

                
              }
   
   
              if(index_currentSlide == 3){
                scene.remove(ambientLight);
                scene.remove(directionalLightBack);
                scene.remove(directionalLightFront);
              }
              
              if(index_currentSlide == 2){                
                scene2.remove(ambientLight2);
                scene2.remove(directionalLightBack2);
                scene2.remove(directionalLightFront2);
              }
              if(index_currentSlide == 1){
                scene4.remove(ambientLight4);
                scene4.remove(directionalLightBack4);
                scene4.remove(directionalLightFront4);
              }
           
}


