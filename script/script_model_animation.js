// import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('containerModel').appendChild(renderer.domElement);

// // Загрузка и отображение файла ImageTO.glb
// const loader = new GLTFLoader();

// loader.load('./3dAnimation/ImageTO.glb', function (gltf) {
//     gltf.scene.traverse(function (child) {
//         if (child.isMesh) {
//             child.material.side = THREE.DoubleSide; // Попробуйте изменить сторону материала
//         }
//     });
//     scene.add(gltf.scene);
// }, undefined, function (error) {
//     console.error(error);
// });

// // Добавление освещения
// const light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// camera.position.set(0, 0, 5); // Установка начального положения камеры
// camera.lookAt(0, 0, 0); // Направление камеры на центр сцены

// function animate() {
//     requestAnimationFrame(animate);

//     renderer.render(scene, camera);
// }

// export { animate };