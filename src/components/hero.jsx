import headphone from '../assets/img/headphone.png'

export default function Hero(){

    return (
        <div className="bg-zinc-200 flex justify-center items-center py-28 p-2 rounded-2xl relative">
            <div className="leading-none px-20">
                <div className="font-medium text-4xl">Beats Solo</div>
                <div className="font-semibold text-[100px]">Wireless</div>
                <div className="font-bold text-[200px] leading-[1] text-white uppercase">
                    Headphone
                </div>
                <button className="bg-red-600 hover:bg-red-700 p-4 rounded-3xl text-white cursor-pointer transition-colors">
                    Shop by Category
                </button>

            </div>

            {/* Headphone Image */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {headphone && <img src={headphone} alt="headphone" className="max-h-[80%]" />}
            </div>
        </div>

    );
}