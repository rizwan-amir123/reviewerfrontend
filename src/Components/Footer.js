const Footer = () => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-2 bg-gray-900 border-t border-gray-900 
        shadow md:flex 
        md:items-center md:justify-between md:p-4 border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#/" className="hover:underline">reViewer™</a>. All Rights Reserved.
            </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 
                sm:mt-0">
                    <li>
                        <a href="." className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline">Contact</a>
                    </li>
                </ul>
        </footer>
    );
};
export default Footer;