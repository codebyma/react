import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

const Button = forwardRef(
    (
        {
            children,
            icon,
            iconPosition = 'left', // 기본값
            onClick,
            color,
            size,
            outline,
            fullWidth = false,
            disabled = false,
            round = false,
            type = 'button',
            className,
            'aria-label': ariaLabel,
            ...rest
        },
        ref
    ) => {
        // 🔥 아이콘 존재 여부만 판단
        const hasIcon = Boolean(icon);
        const isVertical = iconPosition === 'top' || iconPosition === 'bottom';

        const isIconOnly = hasIcon && !children;

        if (isIconOnly && !ariaLabel) {
            console.warn(
                'Accessibility warning: Icon-only buttons should have an aria-label.'
            );
        }

        return (
            <button
                type={type}
                className={clsx(
                    styles.btn,
                    outline && styles[`btn_outline`],
                    color && styles[`btn_${color}`],
                    size && styles[`btn_${size}`],
                    round && styles['btn_round'],
                    fullWidth && styles['btn_full'],
                    disabled && styles['is_disabled'],
                    hasIcon &&
                    (isVertical
                        ? styles['btn_with_icon_column']
                        : styles['btn_with_icon_row']),
                    className
                )}
                ref={ref}
                data-ui="Button"
                aria-label={ariaLabel}
                onClick={!disabled ? onClick : undefined}
                disabled={disabled}
                {...rest}
            >
                {hasIcon && (iconPosition === 'left' || iconPosition === 'top') && icon}
                {children && <span className={styles.button_text}>{children}</span>}
                {hasIcon && (iconPosition === 'right' || iconPosition === 'bottom') && icon}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;