export default function Footer() {
    return ( 
        <>
            <footer className="flex justify-end items-center w-[100%] h-[50px] bg-gray-300 | sm:h-[65px]">
                {/* LOGO MOBILE */}
                <img  className="w-[50px] | sm:hidden p-2 mr-2" src="../../images/econyMiniLogo.png" alt="ECONY"/>
                {/* LOGO DESKTOP+ */}
                <img className="hidden | sm:flex sm:w-[150px] sm:mr-[20px]" src="../../images/econyLogo.png" alt="ECONY"/>
            </footer>
        </>
     );
}

