import { bannerImg } from "../../../images";

const HeroSection = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center  mt-20 max-w-7xl mx-auto px-5 py-3">
        <div className="max-w-xl">
          <span className="font-bold text-5xl leading-tight">
            Fully managed cloud & web hosting
          </span>

          <span className="text-lg text-gray-600 mt-6">
            <p>
              deidcated resources, full root access,& easy scaling. Its the
              virtual private server you've been cravin
            </p>
          </span>

          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-700 transition">
              View Pricing{" "}
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={bannerImg}
            className="max-w-lg w-full object-cover sm:left-1/2 m-2 sm:m-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
