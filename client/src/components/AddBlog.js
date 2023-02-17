import React from "react";

const initialState = {
  title: "",
  description: "",
  noOfOpenings: 0,
  location: "",
  salary: 0,
};

const AddBlog = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        className="bg-bg4 text-black bg-white active:bg-bg4 font-[500] text-xs p-5 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-captions"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Post your Blog
      </button>
      {showModal ? (
        <div className="font-main">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none p-7 w-[37rem]">
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold font-main">
                    Post your Blog
                  </h3>
                  <button
                    className="text-neutralPrimary background-transparent font-bold text-sm m-1 float-right p-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-neutralSecondary"
                      >
                        Blog Title
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                        placeholder="Enter task name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2  text-sm font-medium text-neutralSecondary"
                      >
                        Blog{" "}
                      </label>
                      <textarea
                        name="description"
                        id=""
                        cols="59"
                        rows="7"
                        className="border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                        placeholder="Enter task name"
                        required
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-neutralSecondary"
                      >
                        Upload Thumbnail
                      </label>
                      <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        className="border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                        placeholder="Enter task name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    
                    <button
                      className="w-24 bg-buttons bg-black/90 text-white active:bg-bg4 font-semibold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default AddBlog;
