import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./contactClient"), { ssr: true });

export {metadata} from "./metadata";

export default function contactPage() {
  return <ContactClient />;
}
