import timeImg from "@/public/images/icons/time-saving.png";
import WhyHeading from "./Why-heading";

const P = ({ children }) => <p className="text-navy mb-4">{children}</p>;

const TimeSavingSection = () => {
  return (
    <>
      <div id="time-saving">
        <WhyHeading image={timeImg} name="Time-saving Resources" />
      </div>
      <div className="bg-blue/5 pt-4 px-4 mt-3 mb-6 border border-zinc-200 rounded-sm">
        <P>
          Requesting access from clients shouldn&apos;t eat into your day. With
          ready-to-go, interactive guides, you can eliminate hours of writing
          out instructions, answering confused emails, and chasing incomplete
          credentials. Just select the service you need — we&apos;ll generate a
          clear, branded guide your client can follow step-by-step. Copy it to
          clipboard, download a polished PDF, or send a direct link —
          whatever&apos;s fastest.
        </P>
        <P>
          Beyond the guides, we offer a growing library of access-related blog
          articles, covering tricky permission setups and best practices, so you
          don&apos;t have to explain the same concepts over and over. And with
          built-in tracking, you&apos;ll know exactly which access requests are
          still pending — no more digging through emails or second-guessing
          progress.
        </P>
        <P>
          Spend less time explaining, and more time building. We make access
          simple — for you and your clients.
        </P>
      </div>
    </>
  );
};

export default TimeSavingSection;
