import * as React from 'react';
import { CSSProperties } from 'react';

import './index.css';

interface FlexContainerProps {
    className?: string;
    justifyContent?: CSSProperties['justifyContent'];
}

export const HStack: React.FC<FlexContainerProps> = ({ className = '', justifyContent, children }) => (
    <div className={`flex-container h-stack ${className}`} style={{ justifyContent }}>
        {children}
    </div>
);

export const VStack: React.FC<FlexContainerProps> = ({ className = '', justifyContent, children }) => (
    <div className={`flex-container v-stack ${className}`} style={{ justifyContent }}>
        {children}
    </div>
);

interface ItemProps {
    flex?: CSSProperties['flex'];
}

export const FlexItem: React.FC<ItemProps> = ({ flex, children }) => (
    <div className="flex-item" style={{ flex }}>
        {children}
    </div>
);
