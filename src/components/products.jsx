import earphone from '../assets/img/earphone.png'
import watch from '../assets/img/watch.png'
import laptop from '../assets/img/laptop.png'
import console from '../assets/img/console.png'
import oculus from '../assets/img/oculus.png'
import speaker from '../assets/img/speaker.png'

function ProductCategoryDesignLabel({ prodName, label1, label2, isrectangle = false}) {
    return (
        <div className="leading-9">
            <h3 className="text-lg md:text-2xl">{label1}</h3>
            <h2 className="text-2xl md:text-4xl font-semibold">{label2}</h2>
            {
                isrectangle ? (
                    <h1 className="font-bold uppercase text-4xl md:text-6xl lg:text-8xl opacity-40">
                        {prodName}
                    </h1>
                ) : (
                    <h1 className="font-bold uppercase text-4xl md:text-6xl opacity-40">
                        {prodName}
                    </h1>
                )
            }
        </div>
    );
}


export default function Products() {
    return (
        <div className="w-full flex flex-col gap-4">
            {/* Grid wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                
                {/* Earphone Card */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute bottom-16 left-6 md:left-8">
                        <ProductCategoryDesignLabel prodName="Earphone" label1="Enjoy" label2="With" />
                        <button className="mt-2 bg-red-600 p-1 md:p-2 hover:bg-red-700 rounded-2xl w-28">
                            Browse
                        </button>
                    </div>
                    <div className="absolute bottom-0 right-12">
                        {earphone && (
                            <img 
                                src={earphone} 
                                alt="earphone" 
                                className="w-[120px] md:w-[200px] lg:w-[150px] lg:h-90 h-auto"
                            />
                        )}
                    </div>
                </div>

                {/* Watch Card */}
                <div className="relative bg-yellow-400 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute bottom-16 left-6 md:left-8">
                        <ProductCategoryDesignLabel prodName="Gadgets" label1="Enjoy" label2="Wear" />
                        <button className="mt-2 bg-gray-50 text-sm p-1 md:p-2 hover:bg-gray-200 rounded-2xl w-28 text-yellow-400">
                            Browse
                        </button>
                    </div>
                    <div className="absolute top-8 lg:top-11 right-4">
                        {watch && (
                            <img 
                                src={watch} 
                                alt="watch" 
                                className="w-[120px] md:w-[200px] lg:w-[150px] lg:h-42 h-auto"
                            />
                        )}
                    </div>
                </div>

                {/* Laptop Card */}
                <div className="relative sm:col-span-2 bg-red-600 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute bottom-16 left-8 sm:left-42 md:left-16 lg:left-12">
                        <ProductCategoryDesignLabel prodName="Laptop" label1="Trend" label2="Devices" isrectangle={true}/>
                        <button className="mt-2 bg-gray-50 p-1 md:p-2 hover:bg-gray-200 rounded-2xl w-28 text-red-600">
                            Browse
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 sm:right-32 md:right-24 lg:right-0 flex items-center">
                        {laptop && (
                            <img 
                                src={laptop} 
                                alt="laptop" 
                                className="w-[150px] md:w-[320px] h-auto transform rotate-x-30 -rotate-y-10"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                
                {/* Gaming Console Card */}
                <div className="relative sm:col-span-2 bg-gray-300 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute bottom-16 left-6 sm:left-42 md:left-16 lg:left-12">
                        <div className="leading-9">
                            <h3 className="text-lg md:text-2xl text-black">Best</h3>
                            <h2 className="text-2xl md:text-4xl font-semibold text-black">Gaming</h2>
                            <h1 className="font-bold text-gray-100 uppercase text-4xl md:text-6xl lg:text-8xl">
                                Console
                            </h1>
                        </div>
                        <button className="mt-2 bg-red-600 p-1 md:p-2 hover:bg-red-700 rounded-2xl w-28">
                            Browse
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 sm:right-32 md:right-10 lg:right-0 flex items-center">
                        {console && (
                            <img 
                                src={console} 
                                alt="console" 
                                className="w-[250px] md:w-[420px] h-auto transform rotate-x-30 -rotate-y-10"
                            />
                        )}
                    </div>
                </div>


                {/* Oculus Card */}
                <div className="relative bg-green-500 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute top-16 left-6 md:left-8">
                        <div className="leading-9">
                            <h3 className="text-lg md:text-2xl">Play</h3>
                            <h2 className="text-2xl md:text-4xl font-semibold">Game</h2>
                            <h1 className="font-bold uppercase text-4xl md:text-6xl opacity-40">
                                Oculus
                            </h1>
                        </div>
                        <button className="mt-2 bg-gray-50 text-sm p-1 md:p-2 hover:bg-gray-200 rounded-2xl w-28 text-green-500">
                            Browse
                        </button>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        {oculus && (
                            <img
                                src={oculus} 
                                alt="oculus" 
                                className="w-[200px] h-46 md:w-[200px] lg:w-[300px] md:h-62 lg:h-76"
                            />
                        )}
                    </div>
                </div>


                {/* Speaker Card */}
                <div className="relative bg-cyan-500 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                    <div className="absolute top-16 left-6 md:left-8">
                        <div className="leading-9">
                            <h3 className="text-lg md:text-2xl">Wow</h3>
                            <h2 className="text-2xl md:text-4xl font-semibold">Amazon</h2>
                            <h1 className="font-bold uppercase text-4xl md:text-6xl opacity-40">
                                Speaker
                            </h1>
                        </div>
                        <button className="mt-2 bg-gray-50 text-sm p-1 md:p-2 hover:bg-gray-200 rounded-2xl w-28 text-cyan-500">
                            Browse
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 sm:right-32 md:right-5 lg:right-0 flex items-center">
                        {earphone && (
                            <img 
                                src={speaker} 
                                alt="speaker" 
                                className="w-[200px] h-46 md:w-[200px] lg:w-[220px] md:h-52 lg:h-62 transform rotate-45"
                            />
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}
