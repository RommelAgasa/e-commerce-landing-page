import boots from '../assets/img/boots.png'
import tablet from '../assets/img/tablet.png'
import drone from '../assets/img/drone.png'
import oculus from '../assets/img/oculus1.png'


function ProductCard(props){
    const { img, productName, price, isSale = false } = props;

    return (
        <div className="w-full">
            <div className="bg-zinc-200 flex justify-center items-center p-6 rounded-3xl relative h-[220px]">
                <div
                className={`${isSale ? "block" : "hidden"} text-xs absolute 
                    top-3 left-2 font-bold p-3 bg-red-600 text-white rounded-[50%]`}
                >
                Sale
                </div>
                <div className="flex justify-center items-center h-full">
                {img && (
                    <img
                    src={img}
                    className="max-h-full object-contain"
                    />
                )}
                </div>
            </div>
            <div className="mt-4">
                <h1>{productName}</h1>
                <h2 className="font-bold">&#36;{price}</h2>
            </div>
        </div>

    );
}


export default function BestSeller(){

    return (
        <div className='mt-12'>
            <div>
                <div className='text-center mb-12 leading-8'>
                    <h1 className='text-3xl font-extrabold'>Best Seller Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque</p>
                </div>
                <div className='flex flex-wrap md:grid md:grid-cols-4 gap-4'>
                    <ProductCard img={boots} productName="Boots" price={3}/>
                    <ProductCard img={tablet} productName="Tablet" price={7}/>
                    <ProductCard img={drone} productName="Drone" price={5}/>
                    <ProductCard img={oculus} productName="Oculus" price={1} isSale={true}/>
                </div>
            </div>
        </div>
    );
}