import React from 'react';
import { SvgIcons } from './SvgIcons.jsx';
import styles from './SvgIcon.module.css';

const svgIcon = ({ name, size = 24, color = 'currentColor', ...props }) => {
    const SvgIconComponent = SvgIcons[name];
    if (!SvgIconComponent) return null;

    return (
        <SvgIconComponent
            width={size}
            height={size}
            fill={color}
            className={styles.icon}
            {...props}
        />
    );
};


export default svgIcon;