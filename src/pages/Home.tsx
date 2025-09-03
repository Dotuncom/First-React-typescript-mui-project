import Hero from "../components/Hero";
import mobile1 from "../assets/mob4-1.png";
import mobile2 from "../assets/mob41-1.png";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-60 w-full bg-amber-300 ">
        <div className="max-w-7xl px-5 pt-20 text-center space-y-10 py-6  ">
          <h1 className="text-5xl tracking-wide ">
            <span className="font-bold"> Online and Safe</span>
            Payments Gateways
          </h1>
          <p>
            Get fraud alerts if we detect any suspicious activity on your
            account, so you can verify each charges.
          </p>
        </div>
      </div>
      <div className="lg:max-w-7xl  w-full  flex flex-col md:flex-row  text-justify md:text-left px-2 py-4 md:px-6 lg:py-0">
       
       <div className="border-b-2 w-full border-gray-700  flex flex-col md:flex-row md:gap-20 text-justify md:text-left md:pt-12 ">
         <div>
          <h1 className="md:text-3xl text-center md:text-left text-gray-700">
            Information
          </h1>
          <h2 className="md:text-4xl text-center md:text-left ">
            <span className="font-bold  "> What is </span> Xtra Application ?
          </h2>
          <div className="max-w-2xl">
            <p className="leading-8 md:text-[20px] text-base">
              Track recent charges and payments with a timeline of your
              activity. Check your spending power to find out if your charges
              will be approved, so you can make purchases with confidence.
              Before you arrive, check in from the train, plane, or road. As you
              depart, leave your key and hit the road.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:mt-40 lg:mt-60 gap-6 md:flex-row">
            <div className="">
              <span className="text-6xl ">81</span>
              <span className="text-2xl mt-20 text-gray-500 ">Top Review</span>
            </div>
            <div className="">
              <span className="text-6xl ">57</span>
              <span className="text-2xl mt-20 text-gray-500 ">User Rating</span>
            </div>
          </div>
        </div>
        <div className=" md:mt-60 lg:mt-12 ">
          <img src={mobile1} alt="mobile phone" />
        </div>

        </div>   
           </div>
            <div className="md:max-w-7xl  w-full  flex flex-col md:flex-row  text-justify lg:text-left px-2 py-4 lg:px-6 lg:py-0">
              <div className="mt-0">
                          <img src={mobile2} alt="mobile phone" />

              </div>
              <div className="">
                dddjjdjd
              </div>
            </div>
    </div>
  );
};

export default Home;
