import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

export const Imageinput = ({ onImageSelect }) => {
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)


    const handlerImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));

            onImageSelect(file);
        }
    }

    const clear = () => {
        setImage(null);
        setPreview(null);

        onImageSelect(null);
    }

    

    return (
        <div className='p-3'>
            {!image ? (<label className="cursor-pointer mx-auto w-35 h-35 flex items-center justify-center flex-col bg-zinc-100/50 border-dashed border-2 border-primary-dark text-primary-dark rounded-full hover:bg-zinc-100">
                <CgProfile className='text-xl ' />
                <span className='text-[0.8rem] '>Upload Your Picture</span>
                <input type="file" hidden accept='image/*' name='image' onChange={handlerImageChange} />
            </label>) : (
                <div>
                    <img src={preview} alt="Preview" onClick={clear} className="p-1 mx-auto w-35 h-35 flex items-center justify-center flex-col bg-zinc-100/50 border-dashed border-2 border-primary-dark text-primary-dark rounded-full hover:bg-zinc-100" />
                </div>
            )}
        </div>
    )
}
