import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        if (!userToken) {
            navigate('/login');
        } else {
            const confirmed = window.confirm('本当にログアウトしますか？');

            if (confirmed) {
                localStorage.removeItem('userToken');
                window.location.reload();
            } else {
                window.history.back();
            }
        }
    }, []);

    return <div>ログアウトする...</div>;
};
export default Logout;
