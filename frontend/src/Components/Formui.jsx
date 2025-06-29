import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const Formui = ({ 
  editForm, 
  setEditForm, 
  editId, 
  handlerUpdate, 
  open, 
  setOpen 
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlerUpdate(editId); // editId is required to know which item to update
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mb-4">
                Update Your App
              </DialogTitle>

              {/* Icon Upload Placeholder */}
              <label className="cursor-pointer inline-block bg-lime-600 text-white my-3 px-4 py-2 rounded">
                Upload App Icon
                <input type="file" hidden />
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
                  className="rounded-md bg-lime-600 px-4 py-2 text-sm font-semibold text-white hover:bg-lime-500"
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
  );
};

export default Formui;
