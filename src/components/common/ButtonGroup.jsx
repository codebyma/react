import React from 'react';
import styles from './ButtonGroup.module.css';

const ButtonGroup = ({
    children,
    fixed = false,
    gap = 8,
    size = '',       // 'sm', 'md', 'lg'
    align = ''   // 'left', 'center', 'right'
}) => {
    const sizeClass = styles[size] || '';
    const alignClass = styles[align] || '';
    const fixedClass = fixed ? styles.fixed : '';

    return (
        <div
            className={`${styles.btn_group} ${sizeClass} ${alignClass} ${fixedClass}`}
            style={{ gap: `${gap}px` }}
        >
            {children}
        </div>
    );
};

export default ButtonGroup;
