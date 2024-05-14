import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../../components/PopularServices/ServiceCard";


const AllServices = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        const loadData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/servicesSearch?search=${search}`)
            setServices(data)
        }
        loadData()
    }, [search])
    const handleSearch = e => {
        e.preventDefault()

        setSearch(searchText)
    }
    const handleReset = () => {
        setSearch('')
        setSearchText('')
    }
    return (
        <div className='my-12'>
            <Helmet>
                <title>HomeFixPro | Services</title>
            </Helmet>
            <div className="flex items-center gap-3 justify-center">
                <form
                    className="my-12"
                    onSubmit={handleSearch}>
                    <div
                        className='flex items-center justify-center max-w-[400px]'>
                        <input
                            className='px-6 py-[10px] text-gray-700 placeholder-gray-500 w-full bg-white border  outline-none focus:placeholder-transparent rounded-l-md'
                            type='text'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            name='search'
                            placeholder='Search By Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium  text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none rounded-l-none'>
                            Search
                        </button>
                    </div>
                </form>
                <button onClick={handleReset} className='btn'>
                    Reset
                </button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;