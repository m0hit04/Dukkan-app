import { OrderDetails } from "./OrderDetails";
import { OrderFilter } from "./OrderFilter";

export const OrderTransactions = () => {
    return (
        <>
            <div className="mx-8 shadow rounded bg-white">
                <OrderFilter />
                <OrderDetails />
            </div>
        </>
    )
}