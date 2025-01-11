import Navbar from "./Navbar";

function Header() {
    return ( 
        <header className="fixed top-0 left-0 w-full p-3 z-50 bg-transparent">
            <div className="flex flex-row items-center justify-between ml-3 mr-7">
                {/* Logo */}
                
                
                <Navbar />
           </div>
        </header>
    );
}

export default Header;