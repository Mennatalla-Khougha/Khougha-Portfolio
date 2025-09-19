import { AboutMe } from "@/components/chapters/AboutMe";
import { WorkExperience } from "@/components/chapters/WorkExperience";
import { Projects } from "@/components/chapters/Projects";
import { Writing } from "@/components/chapters/Writing";
import { EarlierCareer } from "@/components/chapters/EarlierCareer";
import { Contact } from "@/components/chapters/Contact";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Writing />
      <EarlierCareer />
      <Contact />
    </main>
  );
}
