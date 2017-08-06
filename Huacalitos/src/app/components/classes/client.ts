import { Order } from 'app/components/classes/order';

export class Client {
    id: number;
    email: string;
    lastName: string;
    name: string;
    phone: string;
    orders: Order[];
}
