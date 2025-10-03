import headphone from '../assets/img/headphone1.png'

export default function Hero(){

    return (
        <div className="bg-zinc-200
                flex flex-col justify-center items-center 
                py-20
                rounded-2xl
                relative">
            <div className="z-10 md:z-0
                flex flex-col
                sm:justify-start sm:items-start
                leading-none 
                px-5 md:px-20 w-full">
                <div className="font-medium text-[clamp(1rem,4vw,2.5rem)]">
                    Beats Solo
                </div>

                <div className="font-semibold text-[clamp(2rem,6vw,6rem)]">
                    Wireless
                </div>

                <div className="font-bold text-[clamp(2rem,13vw,18rem)] leading-[1] text-white uppercase">
                    Headphone
                </div>

                <button className="
                    bg-red-600 hover:bg-red-700 
                    text-[clamp(0.6rem,2vw,1rem)] 
                    px-[clamp(1rem,3vw,2rem)] 
                    py-[clamp(0.4rem,1.5vw,1rem)] 
                    rounded-3xl 
                    text-white 
                    cursor-pointer 
                    transition-colors
                    inline-block
                    w-[110px] md:w-auto
                ">
                    Shop by Category
                </button>

                <div
                    className="z-10 flex flex-col text-end text-[10px] lg:text-[12px]
                                self-end text-white sm:text-black w-[250px] sm:w-[400px]">
                    <div className="font-semibold mb-2">Description</div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Explicabo sapiente exercitationem necessitatibus quis earum tempore nam. 
                    </p>
                </div>

            </div>

            {/* Headphone Image */}
            <div className="absolute z-0 inset-0 flex justify-center items-center pointer-events-none">
                {headphone && (
                    <img
                    src={headphone}
                    alt="headphone"
                    className="w-[clamp(200px,25vw,400px)] 
                    h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
                    />
                )}
            </div>

        </div>

    );
}