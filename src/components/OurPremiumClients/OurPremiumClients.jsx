import Marquee from "react-fast-marquee";

const OurPremiumClients = () => {
    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center my-12">Our Premium Clients</h2>
            <Marquee>
                <div className="flex ">
                    <img className="w-[300px]" src="https://i.ibb.co/jZQT3Fm/singer-bangladesh-ltd5923-logowik-com.webp" alt="" />
                    <img className="w-[300px]" src="https://i.ibb.co/xj7bf4w/dhaka-stock-exchange-ltd6137-logowik-com.webp" alt="" />
                    <img className="w-[300px]" src="https://i.ibb.co/nn2Fy1s/walls-ice-cream16529-logowik-com.webp" alt="" />
                    <img className="w-[300px]" src="https://i.ibb.co/xjpLsHq/domino-espresso4311-logowik-com.webp" alt="" />
                    <img className="w-[300px]" src="https://i.ibb.co/256t5QH/grammer8530-logowik-com.webp" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default OurPremiumClients;