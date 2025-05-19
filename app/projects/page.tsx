import dynamic from "next/dynamic";

const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  ssr: true, 
});

export { metadata } from "./metadata";

export default function ProjectsPage() {
  return <ProjectsClient />;
}
