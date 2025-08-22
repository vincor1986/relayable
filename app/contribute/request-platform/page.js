"use client";

import { useState } from "react";

import SectionTitle from "@/components/ui/Section-title";
import TextInput from "@/components/ui/Text-input";
import Textarea from "@/components/ui/Textarea";

const DEFAULT_STATE = {
  vendorName: "",
  userName: "",
  userEmail: "",
  reason: "",
};

const RequestVendorPage = () => {
  const [formData, setFormData] = useState(DEFAULT_STATE);

  const handleUpdateState = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... do something
  };

  return (
    <section className="p-4">
      <SectionTitle>Request a New Platform</SectionTitle>
      <p className="p-4 mb-6">
        If you&apos;d like to create a new interactive guide but the platform /
        resource you&apos;re looking for is not available, please complete the
        below form and your request will be reviewed. We will notify you of the
        result via email once your request has been processed.
      </p>
      <form onSubmit={handleSubmit} className="mx-auto max-w-[800px]">
        <TextInput
          label="Platform Name"
          name="vendorName"
          value={formData.vendorName}
          onChange={handleUpdateState}
          autoFocus={true}
        />
        <TextInput
          label="Your Name"
          name="userName"
          type="text"
          value={formData.userName}
          onChange={handleUpdateState}
        />
        <TextInput
          label="Your Email"
          name="userEmail"
          type="email"
          value={formData.userEmail}
          onChange={handleUpdateState}
        />
        <Textarea
          label="Reason for Request"
          name="reason"
          value={formData.reason}
          onChange={handleUpdateState}
          rows={2}
        />
        <div className="flex mt-12 items-center gap-4">
          <button className="py-2 px-4 rounded-sm bg-navy text-white font-bold hover:bg-blue transition-colors duration-300 cursor-pointer">
            Submit for review
          </button>
          <p
            className="text-red-800 cursor-pointer hover:text-red-600"
            onClick={() => setFormData(DEFAULT_STATE)}
          >
            Clear
          </p>
        </div>
      </form>
    </section>
  );
};

export default RequestVendorPage;
