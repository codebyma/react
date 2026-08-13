import React, { useState } from 'react';

interface ButtonItem {
  id: number;
  text: string;
}

const ButtonManager: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonItem[]>([
    { id: 1, text: '버튼 1' },
  ]);

  // 버튼 추가 함수
  const addButton = (): void => {
    setButtons((prev) => {
      // 새 버튼의 ID는 마지막 버튼 ID + 1 (배열이 비었으면 1)
      const nextId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      const newButton: ButtonItem = {
        id: nextId,
        text: `버튼 ${nextId}`,
      };

      // 중요: 기존 배열(...prev) 뒤에 새 버튼을 추가한 새 배열 반환
      return [...prev, newButton];
    });
  };

  // 버튼 삭제 함수 (안전한 함수형 업데이트 버전)
  const removeButton = (targetId: number): void => {
    setButtons((prev) => prev.filter((button) => button.id !== targetId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>버튼 관리자</h2>

      {/* 추가 버튼 */}
      <button
        onClick={addButton}
        style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        새 버튼 추가 +
      </button>

      <hr />

      {/* 버튼 리스트 */}
      <div style={{ marginTop: '20px' }}>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => removeButton(button.id)}
            style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}
          >
            {button.text} (클릭시 삭제)
          </button>
        ))}
        {buttons.length === 0 && <p>버튼이 없습니다. 추가 버튼을 눌러보세요!</p>}
      </div>
    </div>
  );
};

export default ButtonManager;