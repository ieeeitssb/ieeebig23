import React from "react";

export default function FormBCC() {
  function uploadProof(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    const loadingProof = document.querySelector(".loading-proof"),
      doneProof = document.querySelector(".done-proof");
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      loadingProof.classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbzJ5GoOoQ9XXUoxkJZYtdAKxIufpQxyO36Z7F2sT9E5FSzXFNELZc-KEMiVzx2QpYV4/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          loadingProof.classList.toggle("hidden");
          doneProof.classList.toggle("hidden");
          setTimeout(() => {
            doneProof.classList.toggle("hidden");
          }, 3000);
          document.getElementById("proof_val_bpc").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }
  function uploadPaper(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    const loadingPaper = document.querySelector(".loading-paper"),
      donePaper = document.querySelector(".done-paper");
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var rawLog = reader.result.split(",")[1];
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      loadingPaper.classList.toggle("hidden");
      fetch(
        "https://script.google.com/macros/s/AKfycbz_6gfoQp3NvEQp051HC49mXZk8F0w5fERv_ytA4iHAh376FXRI_ntvnLh5gDm3gFRT/exec",
        { method: "POST", body: JSON.stringify(dataSend) }
      )
        .then((res) => res.json())
        .then((a) => {
          console.log(a.url);
          loadingPaper.classList.toggle("hidden");
          donePaper.classList.toggle("hidden");
          setTimeout(() => {
            donePaper.classList.toggle("hidden");
          }, 3000);
          document.getElementById("paper_val_bpc").value = a.url;
        })
        .catch((e) => console.log(e));
    };
  }
  return (
    <section className="min-h-screen w-full p-5 bg-patternLight dark:bg-patternDark bg-cover bg-fixed">
      <h1 className="dark:text-white text-center text-3xl font-semibold">
        Form
      </h1>
      <hr className="mt-2  w-[250px] mx-auto border-t-4 border-t-teal-500" />
      <form
        action=""
        id="bpc-form"
        onSubmit={(e) => {
          e.preventDefault();
          const scriptURL =
            "https://script.google.com/macros/s/AKfycbxawbzykiabYeSxvJtWAUNSSElNcxzXJsQMsu6POr7q2K1u9qgbhEiSfO-GRq-eTbVb/exec";
          const btnSubmit = document.querySelector(".submit-bpc"),
            btnLoading = document.querySelector(".loading-bpc"),
            myalert = document.querySelector(".alert");
          btnLoading.classList.toggle("hidden");
          btnSubmit.classList.toggle("hidden");
          fetch(scriptURL, {
            method: "POST",
            body: new FormData(document.getElementById("bpc-form")),
          }).then((response) => {
            console.log("Success ! ", response);
            btnLoading.classList.toggle("hidden");
            btnSubmit.classList.toggle("hidden");
            myalert.classList.toggle("hidden");
            document.getElementById("bpc-form").reset();
            setTimeout(() => {
              myalert.classList.toggle("hidden");
            }, 3000);
          });
        }}
      >
        <div className="container mt-3 selection:bg-blue-600 selection:text-white font-oswald">
          <div className="row justify-center">
            <div className="col-md-8">
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Team Name :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control myinput"
                  name="team"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Leader :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control myinput"
                  name="leader"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Email :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control myinput"
                  placeholder="example@gmail.com"
                  name="email-leader"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Contact :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control myinput"
                  name="kontak-leader"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Name of Member 1<sup>st</sup> :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      name="member-1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Email :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      placeholder="example@gmail.com"
                      name="email-member-1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Contact :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      name="kontak-member-1"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Name of Member 2<sup>nd</sup> :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      name="member-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Email :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      placeholder="example@gmail.com"
                      name="email-member-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="mylabel">
                      Contact :{" "}
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control myinput"
                      name="kontak-member-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Proof of payment :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="file"
                  accept="application/pdf"
                  className="form-control myinput"
                  onChange={(e) => uploadProof(e)}
                />
                <button
                  class="btn btn-primary mt-2 loading-proof hidden"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> Uploading...</span>
                </button>
                <div className="badge done-proof bg-blue-800 hidden">Done</div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="mylabel">
                  Full Paper :{" "}
                </label>
                <input
                  autoComplete="off"
                  type="file"
                  className="form-control myinput"
                  accept="application/pdf"
                  onChange={(e) => uploadPaper(e)}
                />
                <button
                  class="btn btn-primary mt-2 loading-paper hidden"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> Uploading...</span>
                </button>
                <div className="badge done-paper bg-blue-800 hidden">Done</div>
              </div>
              <input type="hidden" name="proof" value="" id="proof_val_bpc" />
              <input type="hidden" name="paper" value="" id="paper_val_bpc" />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 rounded-md font-oswald hover:bg-blue-800 text-white submit-bpc"
              >
                Submit
              </button>
              <button
                class="btn btn-primary loading-bpc hidden"
                type="button"
                disabled
              >
                <span
                  class="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="my-3 p-3 bg-teal-400 text-white w-full md:w-3/4 mx-auto lg:w-1/2 rounded-lg hidden alert">
                Thank You for submitting! Stay tune with our social media
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
