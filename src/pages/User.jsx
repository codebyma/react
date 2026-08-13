import { useState, useEffect } from "react";

export default function UserList() {
    const USERS = [
        { id: 1, name: "홍길동", email: "hong@test.com", age: 25, gender: "남성" },
        { id: 2, name: "김영희", email: "kim@test.com", age: 30, gender: "여성" },
        { id: 3, name: "아무개", email: "A@test.com", age: 55, gender: "남성" },
        { id: 4, name: "개똥이", email: "dog@test.com", age: 8, gender: "남성" }
    ];

    // 버튼 옵션 배열
    const ageFilters = [
        { label: "전체", value: "ALL" },
        { label: "10살 이하", value: "UNDER_TEN" },
        { label: "20살 이상", value: "ADULT" }
    ];

    const genderFilters = [
        { label: "전체", value: "ALL" },
        { label: "남성", value: "남성" },
        { label: "여성", value: "여성" }
    ];

    // 상태
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("ALL");
    const [genderFilter, setGenderFilter] = useState("ALL");

    // 최초 렌더링 시 USERS를 users 상태에 넣어주기
    useEffect(() => {
        setUsers(USERS);
    }, []);

    // 필터링
    const filteredUsers = users.filter(user => {
        // 나이 필터
        if (filter === "UNDER_TEN") return user.age <= 10;
        if (filter === "ADULT") return user.age >= 20;
        return true; // ALL
    }).filter(user => {
        // 성별 필터
        if (genderFilter === "남성") return user.gender === "남성";
        if (genderFilter === "여성") return user.gender === "여성";
        return true; // ALL
    });

    return (
        <>
            <div className="sections">
                <div className="page_header">
                    <div className="page_tit">User</div>
                </div>
                <div className="section">
                    <nav className="sub_menu left">
                        <button onClick={() => setFilter("ALL")} className={filter === "ALL" ? "is_active" : ""}>전체</button>
                        <button onClick={() => setFilter("UNDER_TEN")} className={filter === "UNDER_TEN" ? "is_active" : ""}>10살 이하</button>
                        <button onClick={() => setFilter("ADULT")} className={filter === "ADULT" ? "is_active" : ""}>20살 이상</button>
                        <button onClick={() => setGenderFilter("남성")} className={genderFilter === "남성" ? "is_active" : ""}>남성</button>
                        <button onClick={() => setGenderFilter("여성")} className={genderFilter === "여성" ? "is_active" : ""}>여성</button>
                    </nav>

                    <h2 className="h_tit3">나이 필터</h2>
                    <nav className="sub_menu left">
                        {ageFilters.map(f => (
                            <button
                                key={f.value}
                                onClick={() => setFilter(f.value)}
                                className={filter === f.value ? "is_active" : ""}
                            >
                                {f.label}
                            </button>
                        ))}
                    </nav>

                    <h2 className="h_tit3">성별 필터</h2>
                    <nav className="sub_menu left">
                        {genderFilters.map(f => (
                            <button
                                key={f.value}
                                onClick={() => setGenderFilter(f.value)}
                                className={genderFilter === f.value ? "is_active" : ""}
                            >
                                {f.label}
                            </button>
                        ))}
                    </nav>

                    <h2 className="h_tit3">회원 목록</h2>
                    <ul>
                        {filteredUsers.map(user => (
                            <li key={user.id}>
                                {user.name} ({user.age}살) - {user.gender} - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
