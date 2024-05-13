import { useLoaderData } from "react-router-dom";


const BookedService = () => {
    const bookedData = useLoaderData()
    console.log(bookedData);
//    useEffect(()=>{
//     const bookedData = async axios(`${import.meta.env.VITE_API_URL}`)
//    },[])
    return (
      <div></div>
    );
};

export default BookedService;