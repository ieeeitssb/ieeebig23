import React from "react";

export default function FormIIP() {
  return (
    <section className="min-h-screen w-full p-5 bg-patternLight dark:bg-patternDark bg-cover bg-fixed">
      <h1 className="dark:text-white text-center text-3xl font-semibold">
        Registration Form
      </h1>
      <hr className="mt-5  w-[250px] mx-auto border-t-4 border-t-teal-500" />
      <div className="container mt-3 selection:bg-blue-600 selection:text-white">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3 row justify-center">
            <div className="col-md-6">
              <label htmlFor="" className="form-label mylabel">
                Team Name
              </label>
              <input type="text" className="form-control myinput" required />
            </div>
            <div className="col-md-6">
              <label
                htmlFor=""
                className="form-label font-semibold dark:text-white text-xl"
              >
                Institution Name
              </label>
              <input
                type="text"
                required
                className="form-control bg-slate-300 border-teal-500 border-2 focus:bg-slate-100"
              />
            </div>
          </div>
          <div className="row mb-3 justify-center mt-5">
            <div className="col-md-6 px-4">
              <div className="row mb-3">
                <div className="col">
                  <h1 className="dark:text-white font-bold text-3xl text-center">
                    Team Leader
                  </h1>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Full Name
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Contact (Line/WhatsApp)
                </label>
                <input
                  required
                  type="text"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                />
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="row mb-3">
                <div className="col">
                  <h1 className="dark:text-white font-bold text-3xl text-center">
                    Team Member 1 <sup>st</sup>
                  </h1>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Full Name
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Contact (Line/WhatsApp)
                </label>
                <input
                  type="text"
                  placeholder="Optional"
                  className="form-control myinput"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3 justify-center mt-5">
            <div className="col-md-6 px-4">
              <div className="row mb-3">
                <div className="col">
                  <h1 className="dark:text-white font-bold text-3xl text-center">
                    Team Member 2 <sup>nd</sup>
                  </h1>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Full Name
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input required type="text" className="form-control myinput" />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Contact (Line/WhatsApp)
                </label>
                <input
                  type="text"
                  placeholder="Optional"
                  className="form-control myinput"
                />
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="row mb-3">
                <div className="col">
                  <h1 className="dark:text-white font-bold text-3xl text-center">
                    Team Member 2 <sup>nd</sup>
                  </h1>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Link of your drive (Student ID Card, Follow IG IEEEBIG
                    Proofment, Twibbon IG Proofment.)
                  </label>
                  <input required type="url" className="form-control myinput" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Link of your drive (Upload your Abstract/Executive
                    Summary..)
                  </label>
                  <input required type="url" className="form-control myinput" />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
