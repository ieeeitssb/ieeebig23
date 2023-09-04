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
          id="iip-form"
          onSubmit={(e) => {
            e.preventDefault();
            const btnSubmit = document.querySelector(".btn-submit"),
              btnLoading = document.querySelector(".btn-loading"),
              alert = document.querySelector(".alert");
            btnLoading.classList.toggle("hidden");
            btnSubmit.classList.toggle("hidden");
            fetch(
              "https://script.google.com/macros/s/AKfycbwLVthoUJz_9i3rCHOWc76GHhGt-lySINUyJqQkhsZeT3CY7tG07Q9amiCpvFTb-Usp/exec",
              {
                method: "POST",
                body: new FormData(document.getElementById("iip-form")),
              }
            )
              .then((response) => {
                console.log("Success! ", response);
                document.getElementById("iip-form").reset();
                btnLoading.classList.toggle("hidden");
                btnSubmit.classList.toggle("hidden");
                alert.classList.toggle("hidden");
                setTimeout(() => {
                  alert.classList.toggle("hidden");
                }, 3000);
              })
              .catch((err) => {
                console.log("Error : ", err.message);
              });
          }}
        >
          <div className="mb-3 row justify-center">
            <div className="col-md-6">
              <label htmlFor="" className="form-label mylabel">
                Team Name
              </label>
              <input
                autoComplete="off"
                type="text"
                name="team"
                className="form-control myinput"
                required
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor=""
                className="form-label font-semibold dark:text-white text-xl"
              >
                Institution Name
              </label>
              <input
                autoComplete="off"
                type="text"
                name="institution"
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
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="leader"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="major-leader"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="id-leader"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  required
                  autoComplete="off"
                  type="email"
                  name="email-leader"
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
                  autoComplete="off"
                  type="text"
                  name="contact-leader"
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
                <input
                  autoComplete="off"
                  type="text"
                  name="member1-name"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="member1-major"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="member1-id"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="member1-email"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Contact (Line/WhatsApp)
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="member1-contact"
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
                <input
                  autoComplete="off"
                  type="text"
                  name="member2-name"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Major
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="member2-major"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Student ID
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="member2-id"
                  className="form-control myinput"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Email
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="example@gmail.com"
                  className="form-control myinput"
                  name="member2-email"
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="form-label mylabel">
                  Contact (Line/WhatsApp)
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Optional"
                  name="member2-contact"
                  className="form-control myinput"
                />
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="row mb-3">
                <div className="col">
                  <h1 className="dark:text-white font-bold text-3xl text-center">
                    Link of requirements
                  </h1>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Link of your drive (Student ID Card, Follow IG IEEEBIG
                    Proofment, Twibbon IG Proofment.)
                  </label>
                  <input
                    required
                    autoComplete="off"
                    type="url"
                    name="requirement"
                    className="form-control myinput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Link of your drive (Upload your Abstract/Executive
                    Summary..)
                  </label>
                  <input
                    required
                    autoComplete="off"
                    type="url"
                    name="summary"
                    className="form-control myinput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-5 p-3 bg-teal-400 text-white w-full md:w-3/4 mx-auto lg:w-1/2 rounded-lg hidden alert">
                Thank You for submitting! Stay tune with our social media
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 btn-submit"
          >
            Submit
          </button>
          <button
            class="btn btn-primary btn-loading hidden"
            type="button"
            disabled
          >
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </button>
        </form>
      </div>
    </section>
  );
}
