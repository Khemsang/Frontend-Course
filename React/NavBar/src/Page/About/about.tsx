import { NavBar } from "../../components/import";
import { people } from "../../images";


const about = () => {
  return (
    <>
      <NavBar/>
    <div className=" p-10 flex mt-12 container px-5 py-3  ">
      

       <div className="md: w-full h-70 p-10">
        <img src={people} className="w-full h-full cursor-crosshair"/>
      </div>



      <div className="flex gap-10 p-10">
      <div className="md: flex-col"> 
        <h1 className="font-bold relative">About Us</h1>
        <h3 className="font-bold ">Empowering Your Digital Journey with Shield</h3>
        <p>
          At Shield, we believe that powerful hosting should be simple,
          reliable, and affordable. Our mission is to provide cutting-edge cloud
          and web hosting solutions designed to scale with your ambitions.
        </p>
        <p>
          Whether you're launching a personal blog, building a business website,
          or creating a complex application, we're here to back you with
          world-class technology and dedicated support.
        </p>
      </div>

      <div>
        <h3 className="font-bold ">Why Choose Shield?</h3>
        <ul className="list-disc pl-10">
          <li>
            Full Control: Get full root access and customize your hosting
            environment the way you want.
          </li>
          <li>
            Seamless Scaling: As you grow, your hosting solution grows with you.
          </li>
          <li>
            Dedicated Support: Our friendly experts are available 24/7 to help
            you succeed.
          </li>
          <li>
            Security First: We prioritize your safety with robust security
            protocols at every layer.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Our Vision</h3>
        <p>
          To build a world where everyone, from startups to enterprises, can
          unlock their full digital potential without worrying about
          infrastructure.
        </p>
      </div>

      <div >
        <h3 className="font-bold">Our Promise</h3>
        <p>Reliable Performance. Transparent Pricing. Unmatched Support.</p>
      </div>
      </div>
      </div>
    
    </>
  );
};

export default about;
