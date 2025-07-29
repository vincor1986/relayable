import trackingImg from "@/public/images/icons/track.png";
import WhyHeading from "./Why-heading";

const P = ({ children }) => <p className="text-navy mb-4">{children}</p>;

const TrackingSection = () => {
  return (
    <>
      <div id="tracking">
        <WhyHeading image={trackingImg} name="Keep on Track" />
      </div>
      <div className="bg-zinc-400/5 pt-4 px-4 mt-3 mb-6 border border-zinc-200 rounded-sm">
        <P>
          Keeping tabs on who has access to what — and for how long —
          shouldn&apos;t be a guessing game. Our built-in access tracking gives
          you a clear, organized view of all access requests, their current
          status, and any outstanding client actions. No more spreadsheets,
          scattered notes, or digging through email threads.
        </P>
        <P>
          But it&apos;s not just about staying organized — it&apos;s about
          protecting your clients and your reputation. When a project wraps up,
          you&apos;ll be reminded to revoke or transfer access, helping to close
          the loop and avoid unnecessary security risks. This not only builds
          client confidence, it shows you take your responsibilities seriously.
        </P>
        <P>
          Access tracking helps you stay professional, secure, and in control —
          from day one to handoff.
        </P>
      </div>
    </>
  );
};

export default TrackingSection;
