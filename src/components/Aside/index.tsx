import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FlexItem, VStack } from "../FlexContainer";

import "./index.css";

const MenuItem: React.FC<{
  children: string;
  path: string;
  exact?: boolean;
}> = ({ children, path, exact }) => {
  let match = useRouteMatch({
    path,
    exact,
  });

  return (
    <div className={`aside-menu-item ${match ? "active" : ""}`}>
      <Link className={`aside-menu-item-link`} to={path}>
        {children}
      </Link>
    </div>
  );
};

const Aside: React.FC<{}> = () => {
  const [collapsed, setCollapsed] = React.useState(window.innerWidth <= 750);
  const onToggle = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);

  return (
    <aside className={`app-aside ${collapsed ? "collapsed" : ""}`}>
      <VStack>
        <div className="aside-title">React Krpano Examples</div>
        <VStack className="aside-menu">
          <MenuItem path="/load-xml">加载XML</MenuItem>
          <MenuItem path="/switch-scene">切换场景</MenuItem>
          <MenuItem path="/multires">多分辨率</MenuItem>
          <MenuItem path="/dynamic-hotspot">动态热点</MenuItem>
        </VStack>
        <div className="aside-toggle-bar" onClick={onToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </VStack>
    </aside>
  );
};

export default Aside;
