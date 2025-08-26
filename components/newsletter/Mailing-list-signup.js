"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import TextInput from "../ui/Text-input";
import SmallButton from "../ui/SmallButton";

import { EMAIL_REGEX } from "@/util/regex";

import faqImg from "@/public/images/icons/faq.png";
import { emailSignUp } from "@/actions/emailSignUp";

const MailingListSignup = () => {
  const emailInputRef = useRef(null);
  const [sending, isSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value.trim();

    if (email.includes(" ") || !EMAIL_REGEX.test(email)) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    isSending(true);
    await emailSignUp(email);
    isSending(false);
    setSubscribed(true);
  };

  return (
    <div className="relative flex items-center justify-center flex-col m-4 pt-16 py-8 px-4 rounded-sm max-w-[800px] md:mx-auto my-20 bg-blue/15">
      <div className="absolute top-0 left-1/2 -translate-1/2 w-[300px] mx-auto flex justify-center p-4 mb-10 bg-blue rounded-sm shadow-md">
        <h2 className="font-bold text-xl text-white">Join our mailing list</h2>
      </div>
      <Image
        src={faqImg}
        alt="Speech bubble icon"
        className="absolute top-4 left-[calc(50%+100px)] -translate-y-1/2 h-20 w-auto"
      />
      <p className="mb-4 mx-8 text-center text-zinc-800">
        Stay in the loop with fresh tips, smart shortcuts, and updates that make
        client access easier. Quick reads, real value—no spam.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <TextInput
          ref={emailInputRef}
          type="email"
          placeholder="Enter your email"
          name="email"
          className="h-12 w-full mt-4 mb-2  md:w-[400px] lg:w-[600px]"
          inputClassName="bg-white h-12"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          label=""
          required={false}
          autoComplete="email"
        />
        {showError ? (
          <div className="flex justify-center px-2 py-3 rounded-sm bg-red-800 text-white font-bold">
            <p className="text-center">Please enter a valid email address</p>
          </div>
        ) : subscribed ? (
          <div className="flex justify-center px-2 py-3 rounded-sm bg-green-800 font-bold text-white">
            <p className="text-center">
              Thank you for subscribing! We&apos;ll add you to our mailing list
            </p>
          </div>
        ) : (
          <SmallButton
            className="flex justify-center w-full md:max-w-[400px]"
            onClick={handleSubmit}
            submit={true}
          >
            {sending ? "Subscribing..." : "Subscribe"}
          </SmallButton>
        )}
      </form>
    </div>
  );
};

export default MailingListSignup;
