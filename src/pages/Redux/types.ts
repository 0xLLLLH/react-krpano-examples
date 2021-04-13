import { HotspotProps, SceneProps } from '@0xllllh/react-krpano';

export interface Scene extends SceneProps {
    hotspotIds: string[];
}
export type Hotspot = HotspotProps;

export interface PanoState {
    currentScene: string;
    /** normalized data */
    scenes: {
        byId: Record<string, Scene>;
        ids: string[];
    };
    hotspots: {
        byId: Record<string, Hotspot>;
        ids: string[];
    };
}
