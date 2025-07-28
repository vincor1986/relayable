import TextInput from "@/components/ui/Text-input";
import Textarea from "../ui/Textarea";

const RequestReviewForm = ({ formData, updateFormData }) => {
  return (
    <>
      <TextInput
        label="Your Name"
        value={formData.name}
        onChange={updateFormData}
        placeholder="Your name, username or alias"
        type="text"
        name="name"
      />
      <TextInput
        label="Your Email"
        value={formData.email}
        onChange={updateFormData}
        placeholder="Your email address, e.g. 'your.name@example.com'"
        type="email"
        name="email"
      />
      <Textarea
        label="Reason for review"
        value={formData.reason}
        onChange={updateFormData}
        rows={4}
        placeholder="A brief description of why you are requesting a review"
        name="reason"
      />
    </>
  );
};

export default RequestReviewForm;
