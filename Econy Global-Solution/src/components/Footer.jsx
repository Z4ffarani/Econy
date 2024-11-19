export default function Footer() {
    return ( 
        <>
            <footer className="flex justify-center items-center w-[100%] h-[50px] bg-[#00C174] | sm:flex sm:justify-end sm:h-[60px]">
                {/* LOGO MOBILE */}
                <img  className="w-[50px] | sm:hidden p-2" src="../../images/econyMiniLogo.png" alt="ECONY"/>
                {/* LOGO DESKTOP+ */}
                <img className="hidden | sm:flex sm:w-[150px] sm:mr-[20px]" src="../../images/econyLogo.png" alt="ECONY"/>
            </footer>
        </>
     );
}

