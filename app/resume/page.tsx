import dynamic from "next/dynamic";

const ResumeClient = dynamic(() => import("./resumeClient"), { ssr: true });

export {metadata} from "./metadata";

export default function ResumePage() {
  return <ResumeClient />;
}
