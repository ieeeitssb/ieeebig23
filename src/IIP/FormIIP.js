import React from "react";

export default function FormIIP() {
  function uploadAbstract(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      document
        .querySelector(".loading-abstract-ipc")
        .classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbxp8epBZsqZqb_welUS62jqNpHPCJzOD59ZTZSuYQnrjArD-mMj6AS-Cr-J_J-ZspqdqQ/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          document
            .querySelector(".loading-abstract-ipc")
            .classList.toggle("hidden");
          document
            .querySelector(".done-abstract-ipc")
            .classList.toggle("hidden");
          document.getElementById("abstract_val").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }
  function uploadTwibbon(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      document.querySelector(".loading-twibbon-ipc").classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbz_xa5lyjWxpdeyInVw9TdyNRezRUZHgpF4G-Mz43rHenfZUYEUlZH1FjPyFhck7pag/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          document
            .querySelector(".loading-twibbon-ipc")
            .classList.toggle("hidden");
          document
            .querySelector(".done-twibbon-ipc")
            .classList.toggle("hidden");
          document.getElementById("twibbon_val").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }
  function uploadKTM(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      document.querySelector(".loading-ktm-ipc").classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbxNEpXctgyxFfOTtHzZZcCQKg1AI9iq4G782HApvansbwETJR0_rLeMkhN5tmATxtlC/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          document.querySelector(".loading-ktm-ipc").classList.toggle("hidden");
          document.querySelector(".done-ktm-ipc").classList.toggle("hidden");
          document.getElementById("ktm_val").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }
  function uploadFollow(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      document.querySelector(".loading-follow-ipc").classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbyE1_vei0fDlggrRaR0uKaWOV66WnkhR3g3mdQepsSYnQmg1i7sU2LyDZmN0QjCk8b8/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          document
            .querySelector(".loading-follow-ipc")
            .classList.toggle("hidden");
          document.querySelector(".done-follow-ipc").classList.toggle("hidden");
          document.getElementById("follow_val").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }

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
              "https://script.google.com/macros/s/AKfycbzjfaTvTMGNXz108TE2feVydW8zJdcgJw2Y2ufeJk2lBfCkjLlSUK6k2MjbF0c6lfR41g/exec",
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
                    Requirements (All in PDF)
                  </h1>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Abstract
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    id="customFile"
                    className="form-control myinput"
                    onChange={(e) => uploadAbstract(e)}
                  />
                  <button
                    class="btn btn-primary mt-2 hidden loading-abstract-ipc"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Uploading...</span>
                  </button>
                  <div className="badge bg-primary done-abstract-ipc hidden mt-2">
                    Done!
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Twibbon
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="form-control myinput"
                    onChange={(e) => uploadTwibbon(e)}
                  />
                  <button
                    class="btn btn-primary mt-2 hidden loading-twibbon-ipc"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Uploading...</span>
                  </button>
                  <div className="badge bg-primary done-twibbon-ipc hidden mt-2">
                    Done!
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    KTM
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="form-control myinput"
                    onChange={(e) => uploadKTM(e)}
                  />
                  <button
                    class="btn btn-primary mt-2 hidden loading-ktm-ipc"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Uploading...</span>
                  </button>
                  <div className="badge bg-primary done-ktm-ipc hidden mt-2">
                    Done!
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label mylabel">
                    Following Proofment
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="form-control myinput"
                    onChange={(e) => uploadFollow(e)}
                  />
                  <button
                    class="btn btn-primary mt-2 hidden loading-follow-ipc"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> Uploading...</span>
                  </button>
                  <div className="badge bg-primary done-follow-ipc hidden mt-2">
                    Done!
                  </div>
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
          <input type="hidden" name="abstract" value="" id="abstract_val" />
          <input type="hidden" name="twibbon" value="" id="twibbon_val" />
          <input type="hidden" name="ktm" value="" id="ktm_val" />
          <input type="hidden" name="follow" value="" id="follow_val" />
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
