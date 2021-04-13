import { Hotspot, Krpano, KrpanoActionProxy, Scene } from '@0xllllh/react-krpano';
import React from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import { loadPano, addHotspot, changeCurrentScene, addScene } from './reducer';
import * as api from './api';

interface ReduxAppProps {}

const ReduxApp: React.FC<ReduxAppProps> = () => {
    const currentState = useAppSelector((state) => state);
    const currentScene = useAppSelector((state) => state.currentScene);
    const scenes = useAppSelector((state) => state.scenes.ids.map((id) => state.scenes.byId[id]));
    const hotspotCount = useAppSelector((state) => state.hotspots.ids.length);
    const hotspotById = useAppSelector((state) => state.hotspots.byId);
    const dispatch = useAppDispatch();
    const [renderer, setRenderer] = React.useState<KrpanoActionProxy | null>(null);

    const onReady = React.useCallback((renderer: KrpanoActionProxy) => {
        setRenderer(renderer);
        api.getPanoState().then((pano) => {
            dispatch(loadPano(pano));
        });
    }, []);
    const onAddHotspot = React.useCallback(() => {
        dispatch(
            addHotspot({
                name: `hotspot${hotspotCount + 1}`,
                ath: renderer?.get('view.hlookat') || 0,
                atv: renderer?.get('view.vlookat') || 0,
                style: 'hotspot-style',
            }),
        );
    }, [renderer, hotspotCount]);
    const onSave = React.useCallback(() => {
        api.savePanoState(currentState).then(() => {
            window.alert('pano saved');
        });
    }, [currentState]);
    const handleChangeScene = (name: string) => () => dispatch(changeCurrentScene(name));
    const onAddScene = React.useCallback(() => {
        api.generateNewScene().then((sc) => {
            dispatch(addScene(sc));
            alert('new scene added');
        });
    }, []);

    return (
        <React.Fragment>
            <Krpano
                xml={`${process.env.PUBLIC_URL}/xml/dynamic-hotspot.xml`}
                className="pano"
                currentScene={currentScene}
                onReady={onReady}
                enableLogger={true}
            >
                {scenes.map((scene) => (
                    <Scene key={scene.name} {...scene}>
                        {scene.hotspotIds
                            .map((name) => hotspotById[name])
                            .map((hs) => (
                                <Hotspot key={hs.name} {...hs} />
                            ))}
                    </Scene>
                ))}
            </Krpano>
            <div className="action-bar">
                <div className="action-button" onClick={onAddHotspot}>
                    +
                </div>
                <div className="action-button" onClick={onSave}>
                    📥
                </div>
            </div>

            <div className="scene-list">
                {scenes.map((sc) => (
                    <div
                        key={sc.name}
                        className={`scene-list-item ${sc.name === currentScene ? 'active' : ''}`}
                        onClick={handleChangeScene(sc.name)}
                    >
                        <img src={sc.previewUrl || sc.images![0].url.replace('%s', 'f')} alt={sc.name} />
                    </div>
                ))}
                <div className="scene-list-item scene-list-item--add" onClick={onAddScene}>
                    +
                </div>
            </div>
        </React.Fragment>
    );
};

export default ReduxApp;
