"use server";

import { submitGuide } from "@/actions/guides";

import generatePrompt from "./generatePrompt";
import gptRequest from "./gptRequest";

const generateGuide = async ({ title, vendor, notes, token }) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  };

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    params
  );

  const { success } = await response.json();

  if (!success) return [false, "Failed reCAPTCHA verification"];

  const prompt = generatePrompt(vendor, title, notes);
  const guideData = await gptRequest(prompt, vendor);

  if (guideData) {
    return await submitGuide(guideData, true);
  } else {
    return [null, "Failed to generate guide. Please try again later."];
  }
};

export default generateGuide;
