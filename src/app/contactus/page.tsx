"use client";
import CompontInput from "@/componts/CompontInput";
import { dataFormType } from "@/type";
import Image from "next/image";
import { useState } from "react";

function page() {
  const [dataForm, setDataForm] = useState<dataFormType>({
    name: "",
    company: "",
    email: "",
    message: "",
    title: "",
  });
  const [validationError, setValidationError] = useState<dataFormType>({
    name: "",
    company: "",
    email: "",
    message: "",
    title: "",
  });
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setValidationError({ ...validationError, [e.target.name]:"" });
  };
  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDataForm((prev) => ({
      ...prev,
      message: e.target.value,
    }));
    setValidationError(
      {...validationError,message:""}
    )
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors:dataFormType={
      name: "",
    company: "",
    email: "",
    message: "",
    title: "",
    }
    Object.entries(dataForm).map(([key, value]) => {
      if (value.trim() == "") {
        errors[key as keyof dataFormType]="This field is required"
      }
    });
    setValidationError(errors)
  };
  

  return (
    <div
      className="edge pb-36 grid xl:grid-cols-[1fr_1fr]
      bg-[url(/images/bg-pattern-contact-2.svg)] bg-no-repeat 
    bg-position-[right_-6rem_bottom_-6rem] md:bg-[url(/images/bg-pattern-contact-2.svg),url(/images/bg-pattern-about-2-contact-1.svg)] 
    md:bg-position-[right_-6rem_bottom,left_-6.25rem_top]"
    >
      <div className="">
        <div className="text-center xl:text-left">
          <p className="text-4xl md:text-7xl text-white font-bold mb-5">
            Contact
          </p>
          <p className="text-4xl text-primary-light-coral font-bold mb-6">
            Ask us about
          </p>
        </div>

        <div className="text-white grid gap-7">
          <div className="flex items-center gap-6">
            <div className="">
              <Image
                src="/images/icon-person.svg"
                alt="person"
                width={70}
                height={70}
              />
            </div>
            <p className="text-lg font-bold">
              The quality of our talent network
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="">
              <Image
                src="/images/icon-cog.svg"
                alt="cog"
                width={70}
                height={70}
              />
            </div>
            <p className="text-lg font-bold">
              Usage & implementation of our software
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="">
              <Image
                src="/images/icon-chart.svg"
                alt="chart"
                width={70}
                height={70}
              />
            </div>
            <p className="text-lg font-bold">How we help drive innovation</p>
          </div>
        </div>
      </div>

      <div className="pt-12 xl:pt-0">
        <form action="" className="grid gap-7" onSubmit={onSubmitForm}>
          <CompontInput
            type="text"
            placeholder="Name"
            name="name"
            value={dataForm.name}
            onChange={onChangeInput}
            error={validationError.name}
          />
          <CompontInput
            type="email"
            placeholder="Email Address"
            name="email"
            value={dataForm.email}
            onChange={onChangeInput}
            error={validationError.email}
          />
          <CompontInput
            type="text"
            placeholder="Company Name"
            name="company"
            value={dataForm.company}
            onChange={onChangeInput}
            error={validationError.company}
          />
          <CompontInput
            type="text"
            placeholder="Title"
            name="title"
            value={dataForm.title}
            onChange={onChangeInput}
            error={validationError.title}
          />
          <textarea
            name="message"
            id=""
            onChange={onChangeTextarea}
            value={dataForm.message}
            placeholder="Message"
            className={`w-full h-[100px] outline-none text-white font-[550] border-b pl-4 py-1 
            focus:border-secondary-rapture-blue  ${
              validationError.message !== ""
                ? "border-primary-light-coral placeholder:text-primary-light-coral/70"
                : "border-white placeholder:text-gray-400"
            }`}
          ></textarea>
          <p className={`font-[550] pl-4 text-[13px] text-primary-light-coral`}>
            {validationError.message}
          </p>
          <button
            type="submit"
            className="py-2 px-3 w-[110px] bg-white font-bold rounded-full
             border-2 border-gray-300 hover:border-secondary-rapture-blue hover:bg-secondary-rapture-blue cursor-pointer"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
