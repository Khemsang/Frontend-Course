
import { IoIosCall } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Logo } from "../../../images";

const Navbar = () => {
  return (
  <div className="flex justify-between p-10">
    <div className="flex gap-3">
      <img className="h-10 w-10" src={Logo}/>
      <p className="font-bold text-xl text-blue-700 uppercase">shield</p>
    </div>
    <div className="flex items-center gap-10 capitalize text-lg">
      <a href="#">explore</a>
      <a href="#">blog</a>
      <a href="#">Profile</a>
      <a href="#">data</a>
      <a href="#">clients</a>
    </div>
    <div className="flex items-center gap-7">
    <IoIosCall className=" bg-black text-white rounded-lg text-3xl"/>
    <VscAccount className=" bg-black text-white rounded-lg text-3xl" />
    <span className="bg-black text-white text-sm p-1 font-bold rounded-lg">Let's talk</span>
    </div>
  </div>
  )
}

export default Navbar