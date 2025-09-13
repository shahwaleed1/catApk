import React, { useState } from 'react'
import axios from 'axios'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';



const UploadAPK = () => {
    const [icon, setIcon] = useState(null);
    const [screenshort, setScreenShort] = useState([]);


    const baseURL = 'https://catapk-production.up.railway.app'

    const [formData, setFormData] = useState({
        name: '',
        version: '',
        description: '',
        features: '',
        link: '',
        icon: '',
        // images: ''
    });

    const [errors, setErrors] = useState({})


    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        }
    });





    const handleChange = (e) => {
        // if(formData.name == ''){
        //     setErrors(prev => ({...prev , name: 'Enter App name'}))
        // }
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!formData.name) newErrors.name = "App Name is required";
        if (!formData.version) newErrors.version = "Version is required";
        if (!formData.description) newErrors.description = "Description is required";
        if (!formData.features) newErrors.features = "Features is required";
        if (!formData.link) newErrors.link = "Link is required";
        if (!formData.icon) newErrors.icon = "icon is required";
        // if (!formData.images) newErrors.images = "image is required";

        setErrors(newErrors)


        if (Object.keys(newErrors).length > 0){
            notyf.error(`All form fields are required.`);
            return;  
        } 

        try {
            const response = await axios.post(`${baseURL}/api/publish`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log(response.data)

            if (response.status == 200) {
                notyf.success("You data saved in database.")
            }
        }
        catch (error) {
            console.error('Error posting to backend:', error);
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, icon: file})
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIcon(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    const handleManyImageChange = (e) => {
        const files = Array.from(e.target.files);
        

        setFormData({ ...formData, image: files})
        if (files) {
            const reader = new FileReader();
            reader.onload = () => {
                setScreenShort(reader.result)
            }
            reader.readAsDataURL(files);
        }
    }

    return (
        <div className=''>
            <div className='container min-w-xl max-w-7xl m-auto rounded-lg p-4'>
                <div className='m-auto flex'>
                    <form onSubmit={handleSubmit}>
                        <label className="cursor-pointer inline-block bg-lime-600 text-white my-3 px-4 py-2 rounded">
                            Upload App icon
                            <input type="file" hidden accept='image/*' onChange={handleImageChange} />
                        </label>
                        <label className="cursor-pointer inline-block bg-lime-600 text-white my-3 ms-6 px-4 py-2 rounded">
                            Upload ScreenShort
                            <input type="file" hidden accept='image/*' multiple onChange={handleManyImageChange} />
                        </label>

                        <input className='p-2 w-full border-2 rounded border-zinc-200 focus:outline-zinc-400' type="text" placeholder='App Name' name='name' onChange={handleChange} value={formData.name} />
                        {errors.name && <p className="text-red-500 ps-1">{errors.name}</p>}
                        <input className='p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400' type="text" placeholder='App Version' name='version' onChange={handleChange} value={formData.version} />
                        {errors.version && <p className="text-red-500 ps-1">{errors.version}</p>}
                        <textarea rows={7} className='p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400 resize-none' type="text" placeholder='App Description' name='description' onChange={handleChange} value={formData.description} />
                        {errors.description && <p className="text-red-500 ps-1">{errors.description}</p>}
                        <div className='p-2'>
                            <label for="cars">Choose a Category:</label>
                            <select className='ms-8' name="" id="">
                                <option value="">Apps</option>
                                <option value="">Games</option>
                                <option value="">Blog</option>
                            </select>
                        </div>
                        <input className='p-2 w-full border-2 rounded border-zinc-200 focus:outline-zinc-400' type="text" placeholder='MOD Features' name='features' onChange={handleChange} value={formData.features} />
                        {errors.features && <p className="text-red-500 ps-1">{errors.features}</p>}
                        <input className='p-2 w-full  mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400' type="text" placeholder='Paste app link here' name='link' onChange={handleChange} value={formData.link} />
                        {errors.link && <p className="text-red-500 ps-1">{errors.link}</p>}
                        <button onSubmit={handleSubmit} type='submit' className='cursor-pointer w-full inline-block bg-lime-600 text-white mt-6 py-2 rounded'>Publish</button>
                    </form>
                    <div className='w-1/2'>
                        <div>
                            <img className='w-30 m-auto mt-8 rounded-xl' src={icon} alt="App.image" />
                            {errors.icon && <p className="text-red-500 ps-1 text-center">{errors.icon}</p>}
                            <h4 className='text-3xl font-semibold text-center mt-6 mb-1'>ScreenShorts</h4>
                            {screenshort.map((image, index) => (
                                <img className='w-70 m-auto' key={index} src={URL.createObjectURLimage(image)} alt="image" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadAPK