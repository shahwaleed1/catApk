import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const Formui = ({ editForm, setEditForm, editId, handlerUpdate }) => {
    const [open, setOpen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlerUpdate(editId);
        setOpen(false);
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
            >
                Edit Button
            </button>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mb-4">
                                    Update Your App
                                </DialogTitle>

                                <label className="cursor-pointer inline-block bg-lime-600 text-white my-3 px-4 py-2 rounded">
                                    Upload App Icon
                                    {/* File input can go here */}
                                </label>

                                <input
                                    className="p-2 w-full border-2 rounded border-zinc-200 focus:outline-zinc-400"
                                    type="text"
                                    name="name"
                                    placeholder="App Name"
                                    value={editForm.name}
                                    onChange={handleChange}
                                />

                                <input
                                    className="p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400"
                                    type="text"
                                    name="version"
                                    placeholder="App Version"
                                    value={editForm.version}
                                    onChange={handleChange}
                                />

                                <textarea
                                    rows={4}
                                    className="p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400 resize-none"
                                    name="description"
                                    placeholder="App Description"
                                    value={editForm.description}
                                    onChange={handleChange}
                                />

                                <input
                                    className="p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400"
                                    type="text"
                                    name="features"
                                    placeholder="MOD Features"
                                    value={editForm.features}
                                    onChange={handleChange}
                                />

                                <input
                                    className="p-2 w-full mt-3 border-2 rounded border-zinc-200 focus:outline-zinc-400"
                                    type="text"
                                    name="link"
                                    placeholder="Paste app link here"
                                    value={editForm.link}
                                    onChange={handleChange}
                                />

                                <div className="flex justify-end mt-6 gap-2">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Formui




// import { useState, useEffect } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

// const Formui = ({
//   editForm,
//   setEditForm,
//   editId,
//   handlerUpdate,
//   setEditId,
//   mode,
//   fetchApps
// }) => {
//   const [open, setOpen] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [icon, setIcon] = useState(null)
//   const [images, setImages] = useState([])

//   // Open dialog automatically on edit
//   useEffect(() => {
//     if (mode === 'edit' && editId) setOpen(true)
//   }, [editId, mode])

//   const validate = () => {
//     const newErrors = {}
//     if (!editForm.name) newErrors.name = 'App name is required'
//     if (!editForm.version) newErrors.version = 'Version is required'
//     if (!editForm.link) newErrors.link = 'App link is required'
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setEditForm({ ...editForm, [name]: value })
//   }

//   const handleIconChange = (e) => {
//     setIcon(e.target.files[0])
//   }

//   const handleImagesChange = (e) => {
//     setImages([...e.target.files])
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validate()) return

//     const formData = new FormData()
//     for (let key in editForm) {
//       formData.append(key, editForm[key])
//     }
//     if (icon) formData.append('icon', icon)
//     images.forEach((img) => formData.append('images', img))

//     try {
//       if (mode === 'edit') {
//         await handlerUpdate(editId, formData)
//       } else {
//         await axios.post('http://localhost:5000/api/apps', formData)
//       }
//       fetchApps()
//       closeDialog()
//     } catch (err) {
//       console.error('Submit Error:', err)
//     }
//   }

//   const closeDialog = () => {
//     setOpen(false)
//     setEditId(null)
//     setEditForm({
//       name: '',
//       version: '',
//       description: '',
//       features: '',
//       link: '',
//       icon: '',
//       images: ''
//     })
//     setIcon(null)
//     setImages([])
//     setErrors({})
//   }

//   return (
//     <div>
//       {mode === 'add' && (
//         <button
//           onClick={() => setOpen(true)}
//           className="rounded bg-green-500 px-4 py-2 text-white"
//         >
//           + Add New App
//         </button>
//       )}
//       <Dialog open={open} onClose={closeDialog} className="relative z-10">
//         <DialogBackdrop className="fixed inset-0 bg-black/30" />
//         <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
//           <DialogPanel className="w-full max-w-lg rounded bg-white p-6 shadow-xl">
//             <DialogTitle className="text-lg font-semibold mb-4">
//               {mode === 'edit' ? 'Edit App' : 'Add New App'}
//             </DialogTitle>
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="App Name"
//                 value={editForm.name}
//                 onChange={handleChange}
//                 className="w-full border p-2"
//               />
//               {errors.name && <p className="text-red-500">{errors.name}</p>}

//               <input
//                 type="text"
//                 name="version"
//                 placeholder="Version"
//                 value={editForm.version}
//                 onChange={handleChange}
//                 className="w-full border p-2"
//               />
//               {errors.version && <p className="text-red-500">{errors.version}</p>}

//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 rows={3}
//                 value={editForm.description}
//                 onChange={handleChange}
//                 className="w-full border p-2"
//               />

//               <input
//                 type="text"
//                 name="features"
//                 placeholder="MOD Features"
//                 value={editForm.features}
//                 onChange={handleChange}
//                 className="w-full border p-2"
//               />

//               <input
//                 type="text"
//                 name="link"
//                 placeholder="Download Link"
//                 value={editForm.link}
//                 onChange={handleChange}
//                 className="w-full border p-2"
//               />
//               {errors.link && <p className="text-red-500">{errors.link}</p>}

//               <label className="block">
//                 <span className="text-gray-700">App Icon</span>
//                 <input type="file" onChange={handleIconChange} />
//               </label>

//               <label className="block">
//                 <span className="text-gray-700">Screenshots</span>
//                 <input type="file" multiple onChange={handleImagesChange} />
//               </label>

//               <div className="flex justify-end space-x-2 pt-4">
//                 <button
//                   type="button"
//                   onClick={closeDialog}
//                   className="px-4 py-2 bg-gray-300 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded"
//                 >
//                   {mode === 'edit' ? 'Update' : 'Add'}
//                 </button>
//               </div>
//             </form>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </div>
//   )
// }

// export default Formui
