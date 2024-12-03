import React from 'react';
import ModelViewer from './ModelViewer';

function App() {
    const modelUrl = 'tabak1.glb';

    return (
        <div>
            <h1>3D Model Viewer</h1>
            <ModelViewer modelUrl={modelUrl} />
        </div>
    );
}

export default App;
