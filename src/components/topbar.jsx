

export default function TopBar(){
    
    return (
        <>
            <div className="flex flex-wrap gap-3 justify-between">
                <div className="flex flex-wrap w-full sm:w-auto md:gap-9 justify-center items-center">
                    <div className="uppercase font-bold text-2xl tracking-[5px] cursor-pointer">
                        Phlox
                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <div className="flex gap-4 md:gap-7 justify-center items-center">
                        <div className="cursor-pointer">login</div>
                        <div className="cursor-pointer">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="cursor-pointer">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}