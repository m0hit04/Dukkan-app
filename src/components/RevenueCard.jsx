export const RevenueCard = ({title, amount, orders, bg}) => {
    const bgColorClass = bg ? 'bg-sky-600' : 'bg-white';
    const textColor = bg ? 'text-white' : 'text-black'
    const titleColor = bg ? 'text-white' : 'text-gray-700';
    const orderColor = bg ? 'text-white' : 'text-sky-600';
    return (
        <div className="">
            <div className={`${bgColorClass} ${textColor}  p-5 shadow rounded-t`}>
                <div className="flex gap-2">
                    <p className={`${titleColor}`}>{title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" width="15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="font-semibold text-3xl">₹ {amount}</div>
                    {orders && <div className={`flex ${orderColor} cursor-pointer`}>
                        <div className="underline">{orders} orders</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>}
                </div>
            </div>
            {bg && 
                (
                    <div className="flex justify-between bg-sky-900 px-4 py-2 text-slate-200 text-sm rounded-b">
                        <div>Next payout date:</div>
                        <div>Today, 04:00 PM</div>
                    </div>
                )
            }
        </div>
    )
}