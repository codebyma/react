import React from "react";

/**
 * 2뎁스 하위 노드 종류.
 * - bullet: 기본 불릿(○)
 * - text: 마커 없는 일반 텍스트
 * - reference: 당구장 표시(【 】) 참조
 * - star: 별 모양(★) 강조 항목
 */

// 2뎁스 노드 타입별 렌더러
function ChildRow({ node }) {
    switch (node.type) {
        case "bullet":
            return (
                <div className="flex items-start gap-2">
                    <span
                        aria-hidden="true"
                        className="mt-2 text-[5px] text-neutral-400"
                    >
                        ○
                    </span>

                    <span className="text-sm text-neutral-600">
                        {node.text}
                    </span>
                </div>
            );

        case "text":
            // 마커 없이 들여쓰기만
            return (
                <p className="text-sm text-neutral-500 pl-4">
                    {node.text}
                </p>
            );

        case "reference":
            // 당구장 표시 참조
            return (
                <div className="flex items-start gap-2 pl-4">
                    <span className="text-sm text-neutral-500">
                        <span
                            aria-hidden="true"
                            className="mr-1 text-neutral-400"
                        >
                            【
                        </span>

                        {node.text}

                        <span
                            aria-hidden="true"
                            className="ml-1 text-neutral-400"
                        >
                            】
                        </span>

                        {node.source && (
                            <span className="ml-1 text-xs text-neutral-400">
                                ({node.source})
                            </span>
                        )}
                    </span>
                </div>
            );

        case "star":
            return (
                <div className="flex items-start gap-2">
                    <span
                        aria-hidden="true"
                        className="mt-1 text-[10px] text-amber-500"
                    >
                        ★
                    </span>

                    <span className="text-sm font-medium text-neutral-800">
                        {node.text}
                    </span>
                </div>
            );

        default:
            return null;
    }
}

function ParentRow({ item }) {
    const hasChildren = !!item.children?.length;

    return (
        <li>
            <div className="flex items-start gap-2">
                <span
                    aria-hidden="true"
                    className="mt-1.5 text-[6px] text-neutral-500"
                >
                    ●
                </span>

                <span className="text-sm text-neutral-900">
                    {item.text}
                </span>
            </div>

            {hasChildren && (
                <ul className="mt-1 pl-5 flex flex-col gap-1">
                    {item.children.map((child) => (
                        <li key={child.id}>
                            <ChildRow node={child} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function BulletList({
    items,
    className = "",
}) {
    if (!items?.length) {
        return (
            <p className="text-sm text-neutral-400">
                항목이 없습니다.
            </p>
        );
    }

    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
            {items.map((item) => (
                <ParentRow key={item.id} item={item} />
            ))}
        </ul>
    );
}
