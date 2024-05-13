import { useLoaderData } from "react-router-dom";

const ServiceToDo = () => {
    const bookingService = useLoaderData();
    console.log(bookingService);
    return (
        <div>
            serserviceToDo
        </div>
    );
};

export default ServiceToDo;