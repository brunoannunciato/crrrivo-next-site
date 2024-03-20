import { getAllPostIds, getPostData } from "../../utils/projects"
import Leo from '../../Layouts/Leo'
import LifeLab from '../../Layouts/LifeLab'
import Gol from '../../Layouts/Gol'
import Gioh from '../../Layouts/Gioh'
import Fyll from '../../Layouts/Fyll'
import Ana from '../../Layouts/Ana'
import Cafe from '../../Layouts/Cafe'

const  themes = {
    leo: Leo,
    gol: Gol,
    lifelab: LifeLab,
    Gioh: Gioh,
    Fyll: Fyll,
    "Ana Hirata": Ana, 
    "Cafe na Cama": Cafe
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