import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children, className }) => {
  const router = useRouter()

  const isProject = router.pathname === '/projetos'

  return (
    <motion.div
      initial={{ y: isProject ? 500 : 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: isProject ? 500 : 0, opacity: 1 }}
      transition={{ duration: .4, type: "tween" }}
      className={className}
      layout
    >
      {children}
    </motion.div>
  );
}
export default Layout;