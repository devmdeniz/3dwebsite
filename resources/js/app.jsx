import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const App = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Sahne, Kamera ve Renderer Ayarları
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 3);

        const renderer = new THREE.WebGLRenderer({
            // alpha: true
        });
        // Renderer boyutlarını ekranın tamamına ayarla
        renderer.setSize(window.innerWidth * 2.5, window.innerHeight * 0.8); // Ekranın tamamını kapsayacak şekilde ayarla
        renderer.setClearColor(0x000000, 0); // Arka plan rengini şeffaf yapıyoruz
        mountRef.current.appendChild(renderer.domElement);

        // Işık Ekleyelim
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        // Arka Plan Resmi (Texture) Ekleyelim
        const textureLoader = new THREE.TextureLoader();
        const backgroundTexture = textureLoader.load("backslider.jpg"); // Resmi public/images klasörüne koy

        // Plane (Düzlem) Ekleyelim
        const geometry = new THREE.PlaneGeometry(10, 10); // Plane boyutlarını ayarla
        const material = new THREE.MeshBasicMaterial({
            map: backgroundTexture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5,
        });
        const plane = new THREE.Mesh(geometry, material);
        plane.position.z = -5; // Plane'in kamera ile mesafesini ayarlayalım
        scene.add(plane);

        // GLTFLoader ile GLB Modelini Yükleme
        const loader = new GLTFLoader();
        loader.load(
            "/tabak1.glb", // model.glb'yi "public" klasörüne koy
            (gltf) => {
                const model = gltf.scene;

                // Modeli küçültme
                model.scale.set(0.1, 0.3, 0.1); // Küçültme oranını burada ayarlayabilirsin
                // Opacity (saydamlık) ayarı
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.opacity = 1; // Saydamlık oranını burada ayarlayabilirsin
                    }
                });
                // Animasyon Döngüsü
                const animate = () => {
                    requestAnimationFrame(animate);
                    model.rotation.y += 0.002;
                    renderer.render(scene, camera);
                };
                animate();

                scene.add(model);
            }
        );

        // Bileşen Temizliği
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

// React uygulamasını render et
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
