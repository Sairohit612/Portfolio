// import logo from "../assets/saiRohit.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitter} from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex-shrink-zero items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/sairohit612"> <FaLinkedin/></a>
        <a href="https://github.com/Sairohit612"> <FaGithub/> </a>
        <a href="#"> <FaTwitter/></a>

        
        
        </div>
        
    </nav>
  )
}

export default Navbar