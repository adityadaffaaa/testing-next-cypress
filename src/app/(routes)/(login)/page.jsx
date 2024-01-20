"use client";

import React, { useState } from "react";
import icons from "@/app/utils/icons";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const { ArrowRightIcon, EyeCloseIcon, EyeIcon } =
  icons.authScreenIcon;

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const email = "aditya@gmail.com";
    const password = "password";

    try {
      if (
        data.email === email &&
        data.password === password
      ) {
        window.location.pathname = "/dashboard";
      } else {
        setError("root", { message: "Login failed!" });
      }
    } catch (error) {
      setError("root", { message: "Login failed!" });
      console.log("Something wrong!", error);
    }
  };

  return (
    <div className="container grid place-items-center px-5 lg:px-0">
      <div className="flex flex-col justify-center gap-9 bg-white w-full p-10 max-w-2xl rounded-xl">
        <p className="self-center text-red-500 text-paragraphBold">
          {errors?.root?.message}
        </p>
        <article className="text-textBlack flex flex-col items-center">
          <h1
            data-test="login-header"
            className="text-title"
          >
            Login
          </h1>
          <p className="text-paragraph">
            Hello there, sign in to continue
          </p>
        </article>
        <section className="flex flex-col items-center gap-9">
          <FormLogin
            onSubmit={handleSubmit(onSubmit)}
            formData={register}
            errors={errors}
            handleOpen={handleOpen}
            isOpen={open}
          />
        </section>
      </div>
    </div>
  );
};

const FormLogin = ({
  handleOpen = () => {},
  onSubmit,
  isOpen,
  formData,
  errors = {},
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full lg:max-w-md items-end"
      data-test="login-form"
    >
      <Input
        id="email"
        variant="bordered"
        placeholder={"Email"}
        type={"email"}
        {...formData("email", {
          required: {
            value: true,
            message: "Email wajib diisi!",
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email tidak valid!",
          },
        })}
        errorMessage={errors?.email?.message}
      />
      <Input
        id="password"
        variant="bordered"
        placeholder={"Password"}
        endContent={
          <Button
            data-test="button-password"
            isIconOnly
            variant="flat"
            onClick={handleOpen}
          >
            {isOpen ? <EyeIcon /> : <EyeCloseIcon />}
          </Button>
        }
        type={isOpen ? "text" : "password"}
        name={"password"}
        {...formData("password", {
          required: {
            value: true,
            message: "Password wajib diisi!",
          },
          minLength: {
            value: 8,
            message: "Password minimal 8 karakter!",
          },
        })}
        errorMessage={errors?.password?.message}
      />

      <div className="flex flex-col mt-4 w-full gap-8">
        <Button
          type="submit"
          radius="sm"
          color="primary"
          endContent={<ArrowRightIcon />}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
