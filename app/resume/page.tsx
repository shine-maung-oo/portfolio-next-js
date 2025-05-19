import dynamic from "next/dynamic";

const ResumeClient = dynamic(() => import("./ResumeClient"), { ssr: true });

export {metadata} from "./metadata";

export default function ResumePage() {
  return <ResumeClient />;
}
