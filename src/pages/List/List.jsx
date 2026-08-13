import ListItem from './ListItem';
import styles from './List.module.css'
import { useState, useMemo } from "react";

export default function UserList() {
    const USERS = [
        { id: 1, name: "홍길동", email: "hong@test.com", age: 25, gender: "남성" },
        { id: 2, name: "김영희", email: "kim@test.com", age: 30, gender: "여성" },
        { id: 3, name: "아무개", email: "A@test.com", age: 55, gender: "남성" },
        { id: 4, name: "개똥이", email: "dog@test.com", age: 8, gender: "남성" }
    ];

    const [users, setUsers] = useState(USERS);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('이메일');
    const [age, setAge] = useState('');

    const totalAge = useMemo(() => {
        return users.reduce((sum, user) => sum + Number(user.age), 0);
    }, [users]);

    const handleAddUser = () => {
        if (name.trim() === "") {
            alert('이름을 입력하세요');
            return
        } // 빈값 입력 방지
        const newUser = {
            id: users.length + 1, // 간단히 id 증가
            name,
            email: "default@test.com",
            age,
            gender,
        };
        setUsers([...users, newUser]); // 기존 배열에 새 사용자 추가
        setName(""); // 초기화
        setAge(""); // 초기화
        setGender("선택안함"); // 초기화
    }

    return (
        <>
            <div className="sections">
                <div className="page_header">
                    <div className="page_tit">List</div>
                </div>
                <div className="section">

                    <h2 className="h_tit3">목록</h2>
                    <ul>
                        {users.map((user) => (
                            <ListItem
                                key={user.id}
                                user={user}
                                fields={["name", "email", "age"]}
                            />
                        ))}
                    </ul>
                    <h2 className="h_tit3">추가</h2>
                    <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" selected>이메일</option>
                        <option value="선택안함">선택안함</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </select>
                    <input
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="나이를 입력하세요"
                    />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력하세요"
                    />
                    <button onClick={handleAddUser}>추가</button>
                    <h2 className="h_tit3">총 나이 합계</h2>
                    <p className={styles.list_ll}>{totalAge}세</p>
                    {/* <h3 className={styles['list_ll']}>총 나이 합계: {totalAge}</h3> */}
                </div>
            </div>
        </>
    );
}
