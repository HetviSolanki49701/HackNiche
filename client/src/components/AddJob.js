import React from "react";

const initialState = {
  title: "",
  description: "",
  noOfOpenings: 0,
  location: "",
  salary: 0,
};

const AddJob = () => {
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
        className="bg-bg4 text-white active:bg-bg4 font-[500] text-xs px-5 py-0.5 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-caption"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Post a Job
      </button>
      {showModal ? (
        <div className="font-main">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none p-7 w-[37rem]">
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold font-main">
                    Post a Job
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
                        Job Title
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
                    <div className="grid grid-cols-2">
                      <div>
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-neutralSecondary"
                        >
                          No. Of Openings
                        </label>
                        <input
                          type="test"
                          name="startDate"
                          id="startDate"
                          className="w-11/12 border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                          placeholder="Enter task name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="endDate"
                          className="block mb-2 text-sm font-medium text-neutralSecondary"
                        >
                          Salary
                        </label>
                        <input
                          type="test"
                          name="endDate"
                          id="endDate"
                          className="w-full border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                          placeholder="Enter task name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div>
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-neutralSecondary"
                        >
                          Location
                        </label>
                        <input
                          type="test"
                          name="startDate"
                          id="startDate"
                          className="w-11/12 border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] "
                          placeholder="Enter task name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="draft"
                              name="draft"
                              type="checkbox"
                              value="true"
                              onChange={handleChange}
                              className="w-4 h-4 mt-20 border border-red rounded bg-red focus:ring-1 focus:ring-buttons bg-buttons border-buttons  focus:ring-offset-buttons required"
                            />
                          </div>
                          <label
                            htmlFor="draft"
                            className="ml-2 mt-10 text-sm label-checked:bg-bg4 text-neutralPrimary font-normal"
                          >
                            Work From Home?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2  text-sm font-medium text-neutralSecondary"
                      >
                        Job Description (if any){" "}
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
                    <button
                      className="w-24 bg-buttons text-white active:bg-bg4 font-semibold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
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

export default AddJob;
