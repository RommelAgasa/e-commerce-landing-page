import headphone from '../assets/img/headphone_sale.png';


export default function Sale(){

    return (

        <div className="relative mt-16 sm:mt-26">
            <div className="container mx-auto px-2">
                <div className="bg-red-600 text-white rounded-2xl w-full grid md:grid-cols-2">
                
                {/* Left column */}
                <div className="px-10 pt-20 md:p-10 md:px-20 leading-none flex flex-col md:items-start relative">
                    <div>
                        <div>20 % Off</div>
                        <div className="leading-none">
                            <div className="text-[70px] md:text-[100px] uppercase font-extrabold mb-0">Fine</div>
                            <div className="text-[70px] md:text-[100px] uppercase font-extrabold mt-0 md:-mt-4">
                            Smile
                            </div>
                        </div>
                        <div>15 Nov To 7 Dec</div>
                    </div>

                    {/* Headphone image */}
                    {headphone && (
                        <img
                            src={headphone}
                            alt="headphone"
                            className="absolute top-0 
                                    right-6 md:left-80 lg:left-90
                                    max-w-[180px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[270px] 
                                    object-contain 
                                    -translate-y-20 sm:-translate-30 md:-translate-20 lg:-translate-y-30"
                        />
                    )}
                </div>

                {/* Right column */}
                <div className="p-10 md:px-20">
                    <div className="leading-9 md:max-w-[400px]">
                        <div>Books Solo Air</div>
                        <div className="text-4xl md:text-5xl font-extrabold">Summer Sale</div>
                        <p className="leading-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                            eius veritatis quisquam suscipit sequi minus labore necessitatibus?
                        </p>
                        <button className="mt-8 bg-gray-100 hover:bg-gray-200 rounded-2xl w-28 text-red-600">
                            Shop
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>


    );
}