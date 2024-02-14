import { getAllPostIds, getPostData } from "../../utils/projects"
import Leo from '../../Layouts/Leo'

const  themes = {
    leo: Leo
}

const Project = (data) => {
    const theme = data.theme[0].type
    const Layout = themes[theme]
    return(
        <Layout data={data} />
    )
}

export const getStaticPaths = (async () => {
    const paths = getAllPostIds()
    console.log({paths})

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