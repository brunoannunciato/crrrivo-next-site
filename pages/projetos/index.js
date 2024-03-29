import ProjectsPage from "../../Layouts/Projects";
import { getAllPosts } from "../../utils/projects";

export default function Projects({allPostsData}) {
  return (
    <ProjectsPage posts={allPostsData}/>
  );
}

export const getStaticProps = () => {
  const allPostsData = getAllPosts()
 
   return {
     props: {
       allPostsData
     }
   }
 }