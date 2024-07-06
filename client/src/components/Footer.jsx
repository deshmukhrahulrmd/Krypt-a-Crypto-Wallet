import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-34" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer"> <a href="https://coinmarketcap.com/"/> Market</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer"> <a href=""/> Exchange</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer"> <a href="https://academy.binance.com/en/articles/a-complete-guide-to-cryptocurrency-trading-for-beginners?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=HDYAHEES&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dLl-J1gK4ZnshlyP8OxgSeuzZErkKp5k5l6LDsthC5kJmozeW2xDRhoCOa0QAvD_BwE"/> Tutorials</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer"> <a href="https://goerli.etherscan.io/address/0xc80296a8b1328a5b2b68b84f801dd3ce2cdf1071"/> Wallets</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Come join us for the unexpected miracle</p>
                <p className="text-white text-sm text-center font-medium mt-2">info@krypt.com</p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">@krypt2022</p>
                <p className="text-white text-right text-xs">All rights reserved By RD & Teams</p>
            </div>
        </div>
    );
}

export default Footer;