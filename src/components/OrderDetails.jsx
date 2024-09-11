export const OrderDetails = () => {

    const orders = [
    { id: '#281209', status: 'Successful', transactionId: '131634495747', refundDate: 'Today, 08:45 PM', amount: '₹1,125.00' },
    { id: '#281208', status: 'Processing', transactionId: '131634495747', refundDate: 'Yesterday, 8:45 PM', amount: '₹1,125.00' },
    { id: '#281207', status: 'Failed', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281206', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281205', status: 'Processing', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281204', status: 'Failed', transactionId: '131634495747', refundDate: '12 Jul 2023, 1:00 PM', amount: '₹1,125.00' },
    { id: '#281203', status: 'Successful', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281202', status: 'Successful', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281201', status: 'Failed', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281200', status: 'Successful', transactionId: '131634495747', refundDate: '10 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281209', status: 'Successful', transactionId: '131634495747', refundDate: 'Today, 08:45 PM', amount: '₹1,125.00' },
    { id: '#281208', status: 'Processing', transactionId: '131634495747', refundDate: 'Yesterday, 8:45 PM', amount: '₹1,125.00' },
    { id: '#281207', status: 'Failed', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281206', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281205', status: 'Processing', transactionId: '131634495747', refundDate: '12 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281204', status: 'Failed', transactionId: '131634495747', refundDate: '12 Jul 2023, 1:00 PM', amount: '₹1,125.00' },
    { id: '#281203', status: 'Successful', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281202', status: 'Successful', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281201', status: 'Failed', transactionId: '131634495747', refundDate: '11 Jul 2023, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281200', status: 'Successful', transactionId: '131634495747', refundDate: '10 Jul 2023, 3:00 PM', amount: '₹1,125.00' },    
    ];

    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-5 gap-4 text-left font-bold text-sm border-b pb-2">
            <div>Order ID</div>
            <div>Status</div>
            <div>Transaction ID</div>
            <div>Refund Date</div>
            <div>Order Amount</div>
        </div>
        {orders.map((order, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 text-left py-4 border-b text-sm text-slate-600">
            <div className="text-sky-600 font-medium">{order.id}</div>
            <div className="flex gap-2">
                <div className={`rounded-full w-2.5 h-2.5 mt-1.5 ${
                    order.status === 'Successful'
                    ? 'bg-green-500'
                    : order.status === 'Failed'
                    ? 'bg-red-500'
                    : 'bg-slate-500'
                }`}></div>
                <div>{order.status}</div>
            </div>
            <div>{order.transactionId}</div>
            <div>{order.refundDate}</div>
            <div>{order.amount}</div>
            </div>
        ))}
        </div>
    )
};

