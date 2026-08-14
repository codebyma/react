import React from "react";

/**
 * 범용 텍스트 컴포넌트
 *
 * Props
 * ------
 * as         : "div" | "span" | "p" | "h1"~"h6" | "label" | "strong" 등 (기본 "p") - 렌더링할 태그
 * size       : "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" (기본 "md")
 * color      : Tailwind에 전역으로 정의되어 있는 텍스트 컬러 클래스를 그대로 전달
 *              예) "text-blue-600", "text-rose-400", "text-emerald-700", "text-white" ...
 *              → 컴포넌트 내부에 컬러를 따로 정의해두지 않고, tailwind.config의
 *                theme.colors(또는 기본 팔레트)에 있는 값을 자유롭게 그대로 씁니다.
 * weight     : "normal" | "medium" | "semibold" | "bold" (기본 "normal")
 * className  : 추가 커스텀 클래스 (기존 클래스 뒤에 병합됨 → 필요시 덮어쓰기 가능)
 * children   : 텍스트 내용
 * ...rest    : onClick 등 표준 속성 그대로 전달
 *
 * 주의: Tailwind는 실제 코드에 클래스 문자열이 "그대로" 존재해야 빌드에 포함합니다.
 * `text-${color}-600` 처럼 동적으로 문자열을 조합하면 JIT가 클래스를 인식하지 못해
 * 스타일이 빠질 수 있습니다. 그래서 color prop은 완성된 클래스명을
 * ("text-blue-600" 같은 형태로) 그대로 전달받는 방식입니다.
 * 프로젝트에서 실제로 자주 쓰는 값들은 tailwind.config.js의 safelist에 등록해두면 안전합니다.
 */

const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
};

const weightStyles = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Text({
    as = "p",
    size = "md",
    color = "text-slate-700",
    weight = "normal",
    className = "",
    children,
    ...rest
}) {
    const Tag = as;

    return (
        <Tag
            className={cn(
                sizeStyles[size] || sizeStyles.md,
                color,
                weightStyles[weight] || weightStyles.normal,
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
}
