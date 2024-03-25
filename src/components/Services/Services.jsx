import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className="mt-16 mb-20">
            <div className="text-center space-y-4">
                <h1 className="text-xl font-bold text-[#FF3811]">Services</h1>
                <h1 className="text-5xl font-bold text-[#151515]">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-14">
                     {
                        services.map(service => <Service key={service.service_id} service={service}></Service>)
                     }
            </div>
        </div>
    );
};

export default Services;