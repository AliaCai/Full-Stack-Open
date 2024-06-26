import {Link} from "react-router-dom"
import About from "./About"

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='about'>About</Link>
  
    </footer>
  )
}

export default Footer
