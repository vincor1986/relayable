import trustImg from "@/public/images/icons/trust.png";
import WhyHeading from "./Why-heading";

const P = ({ children }) => <p className="text-navy mb-4">{children}</p>;

const TrustSection = () => {
  return (
    <>
      <div id="trust">
        <WhyHeading image={trustImg} name="Establish Trust and Security" />
      </div>
      <div className="pt-4 px-4 mt-3 mb-6 border border-zinc-200 rounded-sm">
        <P>
          Trust is the foundation of every great client relationship — and it
          starts long before the first line of code. Our platform helps
          freelance and professional developers set the right tone by offering a
          clear, secure, and professional way to request credentials,
          permissions, and access.
        </P>
        <P>
          Rather than sending messy email lists or vague instructions,
          you&apos;ll provide clients with organized checklists, interactive
          guides, and a dedicated portal — showing that you take their time and
          security seriously. This clarity doesn&apos;t just improve the
          client&apos;s experience; it communicates competence, care, and
          professionalism from the outset.
        </P>
        <P>
          With built-in tracking, reminders, and a client-friendly interface,
          your clients stay informed and in control — reducing friction,
          confusion, and second-guessing. You&apos;ll be remembered not only for
          the work you deliver, but for the confidence and trust you build along
          the way.
        </P>
      </div>
    </>
  );
};

export default TrustSection;
