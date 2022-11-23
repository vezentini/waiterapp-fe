import { Container } from '../Orders/styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';


export function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get('/orders')
            .then(({ data }) => {
                setOrders(data);
            });
    }, []);

    const waiting = orders.filter((order) => order.status === 'WAITING');
    const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
    const done = orders.filter((order) => order.status === 'DONE');

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) => prevState.filter(order => order._id === orderId));
    }

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
        console.log('ta chamando?');
        setOrders((prevState) => prevState.map((order) => (
            order._id === orderId
                ? { ...order,  status}
                : order
        )));
    }

    return (
        <Container>
            <OrdersBoard
                icon="⏱"
                title="Fila de espera"
                orders={waiting}
                onCancelOrder={handleCancelOrder}
                onOrderStatusChange={handleOrderStatusChange}
            />
            <OrdersBoard
                icon="👩‍🍳"
                title="Fila de preparo"
                orders={inProduction}
                onCancelOrder={handleCancelOrder}
                onOrderStatusChange={handleOrderStatusChange}
            />
            <OrdersBoard
                icon="✅"
                title="Pronto!"
                orders={done}
                onCancelOrder={handleCancelOrder}
                onOrderStatusChange={handleOrderStatusChange}
            />
        </Container>
    );
}
