import Navbar from "./Navbar";
import { OrderTransactions } from "./OrderTransactions";
import { RevenueCard } from "./RevenueCard";

function Content() {
    return (
        <>
            <Navbar />
            <div className="flex justify-between px-8 py-4">
                <div className="font-medium text-xl">Overview</div>
                <div className="rounded border border-slate-300 px-4 py-1 flex gap-1.5 font-normal">
                    <div className="">This Month</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4">
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-3 px-8 py-3 gap-5">
                <RevenueCard 
                    title="Next Payout"
                    amount="2313.23"
                    orders="23"
                    bg="blue"
                />
                <RevenueCard 
                    title="Amount Pending"
                    amount="92,312.20"
                    orders="13"
                />
                <RevenueCard 
                    title="Amount Processed"
                    amount="23,92,312.19"
                />
            </div>
            <div className="font-medium text-xl px-8 py-4">
                Transactions | This Month
            </div>
            <div className="flex gap-3 text-sm px-8 py-4">
                <div className="bg-slate-200 text-slate-500 px-4 py-1.5 rounded-full">Payouts (22)</div>
                <div className="px-4 py-1.5 bg-sky-600 rounded-full text-white">Refunds (6)</div>
            </div>
            <OrderTransactions />
        </>
    )
}

export default Content;