import { createAction, createReducer } from '@reduxjs/toolkit';
import { PanoState, Scene, Hotspot } from './types';

export const loadPano = createAction<PanoState>('pano/loadPano');
export const changeCurrentScene = createAction<string>('pano/changeCurrentScene');
export const addScene = createAction<Scene>('pano/addScene');
export const addHotspot = createAction<Hotspot>('pano/addHotspot');

const initialState: PanoState = {
    currentScene: 'default',
    scenes: {
        byId: {
            default: {
                name: 'default',

                hotspotIds: [],
                images: [
                    {
                        type: 'cube',
                        url:
                            'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s',
                    },
                ],
            },
        },
        ids: ['default'],
    },
    hotspots: {
        byId: {},
        ids: [],
    },
};

const panoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadPano, (state, action) => {
            state.currentScene = action.payload.currentScene;
            state.scenes = action.payload.scenes;
            state.hotspots = action.payload.hotspots;
        })
        .addCase(changeCurrentScene, (state, action) => {
            state.currentScene = action.payload;
        })
        .addCase(addScene, (state, action) => {
            const { name } = action.payload;
            state.scenes.byId[name] = action.payload;
            state.scenes.ids = [...state.scenes.ids, name];
        })
        .addCase(addHotspot, (state, action) => {
            const { name } = action.payload;
            state.hotspots.byId[name] = action.payload;
            state.hotspots.ids = [...state.hotspots.ids, name];
            state.scenes.byId[state.currentScene].hotspotIds = [
                ...state.scenes.byId[state.currentScene].hotspotIds,
                name,
            ];
        });
});

export default panoReducer;
