import {
  Hotspot,
  Krpano,
  Scene,
  SceneProps,
  View,
} from "@0xllllh/react-krpano";
import React from "react";

import "./index.css";

interface PageMultiresProps {}

const SceneConfig: SceneProps[] = [
  {
    name: "scene0",
    // 重要！必须提供tilesize
    imageTagAttributes: {
      tilesize: 256,
      baseindex: 0,
    },
    images: [
      {
        type: "cube",
        url:
          "https://qhrenderpicoss.kujiale.com/r/2020/11/08/L3D222S21ENDIK37RIAUI5L7ELUF3P3WO888.0_6000x1000.jpg_%s?x-oss-process=image/resize,w_256",

        tiledImageWidth: 256,
        tiledImageHeight: 256,
        asPreview: true,
      },
      {
        type: "cube",
        url:
          "https://qhrenderpicoss.kujiale.com/r/2020/11/08/L3D222S21ENDIK37RIAUI5L7ELUF3P3WO888.0_6000x1000.jpg_%s?x-oss-process=image/resize,w_512|image/indexcrop,x_256,i_%h|image/indexcrop,y_256,i_%v",

        tiledImageWidth: 512,
        tiledImageHeight: 512,
      },
      {
        type: "cube",
        url:
          "https://qhrenderpicoss.kujiale.com/r/2020/11/08/L3D222S21ENDIK37RIAUI5L7ELUF3P3WO888.0_6000x1000.jpg_%s?x-oss-process=image/indexcrop,x_256,i_%h|image/indexcrop,y_256,i_%v",

        tiledImageWidth: 1200,
        tiledImageHeight: 1200,
      },
    ],
  },
  {
    name: "scene1",
    images: [
      {
        type: "cube",
        url:
          "https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s",
      },
    ],
  },
];

const PageMultires: React.FC<PageMultiresProps> = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = React.useState(0);

  return (
    <div className="page-switch-scene">
      <Krpano
        className="pano"
        currentScene={SceneConfig[currentSceneIndex].name}
      >
        {SceneConfig.map((sc, idx) => (
          <Scene key={sc.name} {...sc}>
            <Hotspot
              name="hotspot0"
              type="image"
              url="https://0xllllh.github.io/krpano-examples/images/hotspot.png"
              ath={0}
              atv={0}
              onClick={() => {
                setCurrentSceneIndex((idx + 1) % SceneConfig.length);
              }}
            />
            <View fov={90} fovMin={80} fovMax={120} />
          </Scene>
        ))}
      </Krpano>
    </div>
  );
};

export default PageMultires;
