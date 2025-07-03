import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Appdetails from '../Components/Appdetails';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [appdetails, setAppDetails] = useState([]);

    const navigate = useNavigate()


    async function fetchData() {
        try {

            const response = await axios.get(`http://localhost:5000/api/apps/`);
            setData(response.data);
        }
        catch (err) {
            console.log(err)
        }
        finally {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log("Data updated:", data);  // for console or debuging
    // }, [data]);


    return (
        <div>
            <Slider />
            <div className='container mt-8'>
                <h2 className='mb-3 text-2xl font-semibold'>New🔥</h2>
                <div className='flex gap-5 overflow-x-scroll overflow-y-hidden p-1'>
                    {data.map((app) => (
                        <div key={app._id} onClick={() => navigate(`/appdetails/${app._id}`)} className='w-[9rem] p-1 rounded-xl pb-3  shadow-md shadow-gray-300 hover:scale-110 transition-all duration-150 ease-in hover:cursor-pointer'>
                            <img className='min-w-[8rem] rounded-lg' src={app.image || app.icon} alt={app.name} />
                            <div className='px-1 leading-5'>
                                <h2 className='font-semibold'>{app.name}</h2>
                                <small>game gater</small>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-10'>
                    <h2 className='mb-4 text-2xl font-semibold'>Apps</h2>
                    <div className='flex gap-5'>
                        <div className='w-[10rem] p-1 rounded-xl pb-3 shadow-md shadow-gray-300 hover:scale-110 transition-all duration-150 ease-in'>
                            <img className='w-[10rem] mx-auto' src="appimg.png" alt="" />
                            <div className='px-2 leading-5 flex flex-col'>
                                <h2 className='font-semibold'>App Name</h2>
                                <small>Descirption</small>
                                <small className='font-semibold'>version</small>
                                <small className='font-semibold'>50 MB</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home