import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ServiceCard from './ServiceCard';

const PopularServices = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/services`)
            setServices(data)
        }
        loadData()
    },[])
    return (
        <div className='my-12'>
            <div className='max-w-3xl mx-auto mb-10'>
                <Fade direction="left">
                    <h2 className="text-4xl font-bold text-center my-8">Popular Services</h2>
                </Fade>
                <Fade direction="right">
                    <p className="text-center my-5">From leaky faucets to clogged drains, our plumbing experts are here to tackle any plumbing issue in your home. Whether it&apos;s repairing pipes, installing fixtures, or fixing water heaters, our plumbers deliver efficient and reliable solutions.</p>
                </Fade>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 6).map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default PopularServices;