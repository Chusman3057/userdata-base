import React from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createUsers } from "../features/usersData/UserSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  user_name: "",
  phone_number: "",
  email: "",
};

const userSchema = Yup.object({
  user_name: Yup.string().min(2).max(25).required("Enter user name"),
  phone_number: Yup.number().min(5).required("Enter phone no."),
  email: Yup.string()
    .email("Invalid email address")
    .matches(/@gmail\.com$/, "Invalid email")
    .required("Enter email"),
});

function CreateUser() {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,

      onSubmit: (values, { resetForm }) => {
        dispatch(createUsers(values));
        resetForm();
        toast.success("User created successfully");
      },
    });

  return (
    <>
      <h2 className="text-center pt-5">Add User</h2>
      <div className="create-user">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={values.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2"
              placeholder="Enter name"
              autoComplete="off"
            />
            {errors.user_name && touched.user_name ? (
              <p className="form_error">{errors.user_name}</p>
            ) : null}
          </fieldset>

          <fieldset>
            <label>Phone No.</label>
            <input
              type="text"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2"
              placeholder="Enter phone no"
              autoComplete="off"
            />
            {errors.phone_number && touched.phone_number ? (
              <p className="form_error">{errors.phone_number}</p>
            ) : null}
          </fieldset>

          <fieldset>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2"
              placeholder="Enter email"
              autoComplete="off"
            />
            {errors.email && touched.email ? (
              <p className="form_error">{errors.email}</p>
            ) : null}
          </fieldset>

          <button type="submit">Add User</button>
        </form>

        <Toaster />
      </div>
    </>
  );
}

export default CreateUser;
