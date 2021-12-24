import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Send() {
    const location = useLocation();
    const user = location.state.user

    return (
        <div style={{ textAlign: 'center' }}>
            form sent
            <br />
            thanks {user.name}
        </div>
    )
}
