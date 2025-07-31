"use client";

import { useState, useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";

import GuideBadge from "@/components/guides/Guide-badge";
import SectionTitle from "@/components/ui/Section-title";
import LoadingModal from "@/components/ui/Loading-modal";
import RequestReviewForm from "@/components/guides/Request-review-form";

import { getGuideById, markGuideForReview } from "@/actions/guides";
import useNotificationCtx from "@/store/useNotificationCtx";

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  reason: "",
};

const RequestReviewPage = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [guide, setGuide] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const { id } = use(params);

  const { notifyUser } = useNotificationCtx();
  const router = useRouter();

  useEffect(() => {
    getGuideById(id).then(([fetchedGuide, error]) => {
      if (error) {
        notifyUser("warning", error);
      } else {
        setGuide(fetchedGuide);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <LoadingModal isLoading={loading} message="Loading guide..." />;
  }

  if (!guide) {
    return notFound();
  }

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [_, error] = await markGuideForReview({ ...formData, id: guide.id });

    if (error) {
      notifyUser("warning", error);
    } else {
      notifyUser("success", "Review request submitted successfully!");
      router.push(`/guides/${guide.vendorSlug}/${guide.slug}`);
    }
  };

  const formNotValid = Object.values(formData).some(
    (value) => value.trim() === ""
  );

  return (
    <section className="p-4">
      <SectionTitle>Request Guide Review</SectionTitle>
      <p className="font-bold text-navy">
        You are requesting a review of the following {guide.vendor} guide:
      </p>
      <GuideBadge
        guide={guide}
        href={`/guides/${guide.vendorSlug}/${guide.slug}`}
      />
      <p className="mt-12 mb-4 font-bold text-navy text-center">
        Please complete the following form to submit your request:
      </p>
      <form className="mx-auto max-w-[800px] p-4" onSubmit={handleSubmit}>
        <RequestReviewForm
          formData={formData}
          updateFormData={updateFormData}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="mx-auto w-full max-w-[400px] px-4 py-2 bg-navy text-white font-bold rounded-sm hover:bg-blue transition-colors duration-300 cursor-pointer outline-none"
            disabled={formNotValid}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default RequestReviewPage;
