import { getAllPostIds, getPostData } from "../../utils/projects"
import Leo from '../../Layouts/Leo'
import Gol from '../../Layouts/Gol'


const  themes = {
    leo: Leo,
    gol: Gol
}

const Project = (data) => {
    const theme = data.theme[0].type
    const Layout = themes[theme]
    console.log(data)
    return(
        <Layout data={data} />
    )
}

export const getStaticPaths = (async () => {
    const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
})

export const getStaticProps = async ({params}) => {
    const project = await getPostData(params.id)
    return {
      props: project
    }
  }

export default Project