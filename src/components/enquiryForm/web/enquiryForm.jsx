import { Box, styled } from "@mui/material";
import { useState } from "react";
import { FormInput } from "../../widgets/formInput";
import { FormButton } from "../../widgets/formButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, FormContainer } from "./enquiryFormWeb.styles";

export const EnquiryForm = ({ name }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}$/;

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().required("Email is required").matches(emailRegex, "Invalid email address"),
    Phone: Yup.string()
      .required("Phone number is required")
      .max(10, "too long")
      .min(10, "too short")
      .matches(phoneRegExp, "only numbers allowed"),
    Message: Yup.string().required("Message is required"),
  });
  const formik = useFormik({
    initialValues: { Name: "", Phone: "", Email: "", Message: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log(values, formik.isValidating, "sd");
    },
  });

  return (
    <Container>
      <h2>Enquiry For</h2>
      <p>{name}</p>
      <form className="form" onSubmit={formik.handleSubmit}>
        <FormContainer>
          <FormInput
            label="Name"
            placeholder={"John Carter"}
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
          />
          {formik.touched.Name && formik.errors.Name ? <div>{formik.errors.Name}</div> : null}
          <FormInput
            label="Phone"
            placeholder={"(+91) 924 - 789567"}
            value={formik.values.Phone}
            onChange={formik.handleChange}
            name="Phone"
          />
          {formik.touched.Phone && formik.errors.Phone ? <div>{formik.errors.Phone}</div> : null}
          <FormInput
            label="Email"
            placeholder={"example@email.com"}
            value={formik.values.Email}
            onChange={formik.handleChange}
            name="Email"
          />
          {formik.touched.Email && formik.errors.Email ? <div>{formik.errors.Email}</div> : null}
        </FormContainer>
        <FormInput
          label="Leave a message"
          placeholder={"Please Leave your message here..."}
          multiline
          value={formik.values.Message}
          onChange={formik.handleChange}
          name="Message"
        />
        {formik.touched.Message && formik.errors.Message ? <div>{formik.errors.Message}</div> : null}

        <FormButton type="submit" disabled={!formik.isValid || !formik.dirty} />
      </form>
    </Container>
  );
};
