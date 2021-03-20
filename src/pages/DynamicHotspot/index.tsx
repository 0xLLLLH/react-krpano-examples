import { Hotspot, HotspotProps, Krpano, KrpanoActionProxy, Scene, SceneProps } from '@0xllllh/react-krpano';
import React from 'react';

import './index.css';

interface PageDynamicHotspotProps {}

const PageDynamicHotspot: React.FC<PageDynamicHotspotProps> = () => {
    const [hotspots, setHotspots] = React.useState<HotspotProps[]>([]);
    const [renderer, setRenderer] = React.useState<KrpanoActionProxy | null>(null);
    const onAddHotspot = React.useCallback(() => {
        setHotspots([
            ...hotspots,
            {
                name: `hotspot${hotspots.length}`,
                ath: renderer?.get('view.hlookat') || 0,
                atv: renderer?.get('view.vlookat') || 0,
                style: 'hotspot-style',
            },
        ]);
    }, [hotspots, renderer]);

    return (
        <div className="page-dynamic-hotspot">
            <Krpano
                xml={`${process.env.PUBLIC_URL}/xml/dynamic-hotspot.xml`}
                className="pano"
                currentScene="scene0"
                onReady={setRenderer}
            >
                <Scene
                    name="scene0"
                    images={[
                        {
                            type: 'cube',
                            url:
                                'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s',
                        },
                    ]}
                >
                    {hotspots.map((hs) => (
                        <Hotspot key={hs.name} {...hs} />
                    ))}
                </Scene>
            </Krpano>
            <div className="action-bar">
                <div className="action-button" onClick={onAddHotspot}>
                    +
                </div>
            </div>
        </div>
    );
};

export default PageDynamicHotspot;
