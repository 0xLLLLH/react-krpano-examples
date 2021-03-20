import { Krpano, Scene, SceneProps } from '@0xllllh/react-krpano';
import React from 'react';

import './index.css';

interface PageSwitchSceneProps {}

const SceneConfig: SceneProps[] = [
    {
        name: 'scene0',
        images: [
            {
                type: 'cube',
                url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s',
            },
        ],
    },
    {
        name: 'scene1',
        images: [
            {
                type: 'cube',
                url:
                    'https://qhrenderpicoss.kujiale.com/r/2020/11/08/L3D222S21ENDIK37RIAUI5L7ELUF3P3WO888.0_6000x1000.jpg_%s',
            },
        ],
    },
];

const PageSwitchScene: React.FC<PageSwitchSceneProps> = () => {
    const [currentScene, setCurrentScene] = React.useState(SceneConfig[0].name);
    const handleClick = React.useCallback((name: string) => () => setCurrentScene(name), [setCurrentScene]);

    return (
        <div className="page-switch-scene">
            <Krpano className="pano" currentScene={currentScene} enableLogger={true}>
                {SceneConfig.map((sc) => (
                    <Scene key={sc.name} {...sc} />
                ))}
            </Krpano>
            <div className="scene-list">
                {SceneConfig.map((sc) => (
                    <div
                        key={sc.name}
                        className={`scene-list-item ${sc.name === currentScene ? 'active' : ''}`}
                        onClick={handleClick(sc.name)}
                    >
                        <img src={sc.previewUrl || sc.images![0].url.replace('%s', 'f')} alt={sc.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageSwitchScene;
