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

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Işık Ekleyelim
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        // GLTFLoader ile GLB Modelini Yükleme
        const loader = new GLTFLoader();
        loader.load(
            "/tabak1.glb", // model.glb'yi "public" klasörüne koy
            (gltf) => {
                const model = gltf.scene;

                // Modeli küçültme
                model.scale.set(0.1, 0.1, 0.1); // Küçültme oranını burada ayarlayabilirsin
                // Animasyon Döngüsü
                const animate = () => {
                    requestAnimationFrame(animate);
                    model.rotation.y += 0.005;
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
