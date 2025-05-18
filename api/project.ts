// api/project.ts
export interface Project {
  title: string;
  image: string;
  languages: string;
  url: string;
  category?: number;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch('data/projects.json');
  console.log(res);
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};
