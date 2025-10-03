
function Perks({ perksName, description, icon }) {
    return (
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 flex items-center justify-center text-2xl text-red-600">
                <i className={icon}></i>
            </div>

            <div>
                <h2 className="text-sm font-bold">{perksName}</h2>
                <h3 className="text-sm opacity-55">{description}</h3>
            </div>
        </div>
    );
}



export default function Avail(){

    return (
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-10 w-full mt-10">
            <Perks 
                perksName="Free Shipping" 
                description="Free Shipping On All Order" 
                icon="fa-solid fa-truck"
            />

            <Perks 
                perksName="Money Guarantee" 
                description="10 Days Money Guarantee" 
                icon="fa-solid fa-certificate"
            />

            <Perks 
                perksName="Online Support 24/7" 
                description="Technical Support 24/7" 
                icon="fa-solid fa-headphones"
            />

            <Perks 
                perksName="Secure Payment" 
                description="All Cards Accepted" 
                icon="fa-solid fa-wallet"
            />
        </div>
    );
}