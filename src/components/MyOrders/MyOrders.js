import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const email = user.email;
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${email}`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    history.push('/login')
                }
            })

            .then(data => setOrders(data))
    }, [email])

    return (
        <div>
            <h1>You have {orders.length} orders</h1>
            <ul>
                {
                    orders.map(order => <li>{order?.email}</li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;