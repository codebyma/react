function ListItem({ user, fields = [] }) {
    const fieldMap = {
        name: () => <span key="name">이름: {user.name} / </span>,
        email: () => <span key="email">이메일: {user.email} / </span>,
        age: () => <span key="age">나이: {user.age} / </span>,
        gender: () => <span key="gender">성별: {user.gender} / </span>,
    };

    return (
        <li>
            {fields.map((field) =>
                fieldMap[field] ? fieldMap[field]() : null
            )}
        </li>
    );
}


export default ListItem