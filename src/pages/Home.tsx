import Hero from "../components/Hero";
import mobile1 from "../assets/mob4-1.png";
import mobile2 from "../assets/mob41-1.png";
import cardBackgroud from "../assets/para-1-1.jpg";
import { FaCheck } from "react-icons/fa6";
import Card from "../components/ui/Card";
import { data } from "../data";
import ImageCard from "../components/ui/ImageCard";
import formBackground from "../assets/parallax2-1.jpg";
import app1 from "../assets/app1-1.jpg";
import app2 from "../assets/app2-1.jpg";
import app3 from "../assets/app3-1.jpg";
import app4 from "../assets/app4-1.jpg";
import PlanCard from "../components/ui/PlanCard";
import ContactForm from "../components/Auth/ContactForm";
import SocialIcon from '../components/SocialIcon'

type chooseProps = {
  id: number;
  name: string;
};

interface PricingFeature {
  name: string;
  included?: boolean;
}

type PricingPlan = {
  id: string;
  name: string;
  price: number;
  features: PricingFeature[];
  isPopular?: boolean;
};

const Home = () => {
  const choose: chooseProps[] = [
    { id: 1, name: "Easy to Use" },
    { id: 2, name: "Mobile Check-In" },
    { id: 3, name: "Account Activity" },
    { id: 4, name: "Fast Connection" },
    { id: 5, name: "Great Security" },
    { id: 6, name: "Friendly Support" },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 19,
      features: [
        { name: "Basic Version", included: true },
        { name: "6 Months Support", included: true },
        { name: "Free Installation", included: true },
        { name: "Full Version", included: false },
        { name: "Lifetime Updates", included: false },
      ],
    },
    {
      id: "personal",
      name: "Personal Plan",
      price: 29,
      features: [
        { name: "Basic Version", included: true },
        { name: "6 Months Support", included: true },
        { name: "Free Installation", included: true },
        { name: "Full Version", included: true },
        { name: "Lifetime Updates", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 49,
      isPopular: true,
      features: [
        { name: "Basic Version", included: true },
        { name: "12 Months Support", included: true },
        { name: "Free Installation", included: true },
        { name: "Full Version", included: true },
        { name: "Lifetime Updates", included: true },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      price: 99,
      features: [
        { name: "Premium Version", included: true },
        { name: "24/7 Support", included: true },
        { name: "Free Installation", included: true },
        { name: "Full Version", included: true },
        { name: "Lifetime Updates", included: true },
      ],
    },
  ];

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
      <div className="lg:max-w-7xl   w-full  flex flex-col md:flex-row  text-justify md:text-left px-2 py-4 md:px-6 lg:py-0">
        <div className="border-b-2  w-full  border-gray-700  flex flex-col md:flex-row md:gap-20 text-justify md:text-left md:pt-12 ">
          <div>
            <h1 className="text-3xl text-center md:text-left text-gray-700">
              Information
            </h1>
            <h2 className="text-4xl text-center md:text-left ">
              <span className="font-bold  "> What is </span> Xtra Application ?
            </h2>
            <div className="max-w-2xl">
              <p className="leading-8 md:text-[20px] text-base">
                Track recent charges and payments with a timeline of your
                activity. Check your spending power to find out if your charges
                will be approved, so you can make purchases with confidence.
                Before you arrive, check in from the train, plane, or road. As
                you depart, leave your key and hit the road.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-40 lg:mt-60 gap-6 md:flex-row">
              <div className="">
                <span className="text-6xl ">81</span>
                <span className="text-2xl mt-20 text-gray-500 ">
                  Top Review
                </span>
              </div>
              <div className="">
                <span className="text-6xl ">57</span>
                <span className="text-2xl mt-20 text-gray-500 ">
                  User Rating
                </span>
              </div>
            </div>
          </div>
          <div className=" md:mt-60 lg:mt-12 ">
            <img src={mobile1} alt="mobile phone" />
          </div>
        </div>
      </div>
      <div className="md:max-w-7xl mt-0  w-full justify-between flex flex-col md:flex-row  text-justify lg:text-left px-2  lg:px-6 lg:py-0">
        <div className="mt-0  lg:pl-20 ">
          <img src={mobile2} className="w-full h-full" alt="mobile phone" />
        </div>
        <div className="px-10 md:pt-20">
          <h1 className="text-3xl text-center md:text-left text-gray-700">
            Reasons
          </h1>
          <h2 className="text-4xl text-center md:text-left ">
            <span className="font-bold  "> Why </span> Choose Xtra Application ?
          </h2>
          <p className="max-w-lg text-[18px] mt-10">
            Before you arrive, check in from the train, plane, or road. As you
            depart, leave your key and hit the road. Track recent charges and
            payments with a timeline of your activity. Check your spending power
            to find out if your charges will be approved, so you can make
            purchases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:gap-6">
            {choose.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p- rounded-lg transition-colors"
              >
                <div className="flex items-center justify-center bg-amber-400 rounded-full h-10 w-10 min-w-[2.5rem] hover:bg-black hover:text-amber-400 transition-colors">
                  <FaCheck />
                </div>
                <span className="font-medium text-lg">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${cardBackgroud})` }}
      >
        <div className="max-w-7xl mx-auto py-30 lg:py-40">
          <div className="gap-x-2 gap-y-25 lg:gap-y-30  place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            {data.map((item) => (
              <Card
                icon={item.icon}
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-15 px-10">
        <div className=" ">
          <div>
            <h1 className="text-3xl text-center md:text-left text-gray-700">
              Images
            </h1>
            <h2 className="text-4xl text-center md:text-left ">
              <span className="font-bold  "> Xtra Application </span>
              Gallery
            </h2>
          </div>
          <p className="leading-10 mt-6 lg:mt-12">
            **Xtra** has officially launched! We've poured our hearts into
            creating an app that empowers you, and now it's ready for you to
            explore. Dive in, discover new possibilities, and let your
            creativity soar with **Xtra**. Download today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10  place-items-center gap-4">
            <ImageCard imageUrl={app1} />
            <ImageCard imageUrl={app2} />
            <ImageCard imageUrl={app3} />

            <ImageCard imageUrl={app4} />
          </div>
        </div>
      </div>

      <div className="py-15 px-10">
        <div className=" md:px-10">
          <div>
            <h1 className="text-3xl text-center md:text-left text-gray-700">
              Offers
            </h1>
            <h2 className="text-4xl text-center md:text-left ">
              <span className="font-bold  "> Packages </span>
              and Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {pricingPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-screen py-8 px-10"
        style={{ backgroundImage: `url(${formBackground})` }}
      >
        <div className=" md:px-10 lg:px-10 space-y-8">
          <div>
            <h1 className="text-3xl text-center md:text-left text-gray-700">
              Contact Us
            </h1>
            <h2 className="text-4xl text-center md:text-left text-white ">
              <span className="font-bold  "> Need Help </span>
              fill the form Below
            </h2>
          </div>

          <div className="flex  flex-col lg:flex-row  gap-7">
            <div>
              <ContactForm />
            </div>
            <div className="flex flex-col w-60  gap-4 items-center justify-center ">
              <div className="flex items-center   gap-2 w-50">
                <div className="flex items-center justify-center rounded-full bg-amber-400 h-12 w-12">
                  oooo
                </div>
                <div className="text-white">
                  <h3> Phone</h3>
                  <h1>0813 866 2406</h1>
                </div>
              </div>
              <div className="flex items-center  gap-2   w-50 ">
                <div className="flex items-center justify-center rounded-full bg-amber-400 h-12 w-12">
                  oooo
                </div>
                <div className="text-white">
                  <h3> email</h3>
                  <h1>myemail.com</h1>
                </div>
              </div>
              <div className="flex items-center gap-2  w-50">
                <div className="flex items-center justify-center rounded-full bg-amber-400 h-12 w-12">
                  oooo
                </div>
                <div className="text-white">
                  <h3> Address</h3>
                  <h1>my address </h1>
                </div>
              </div>
              <div className="flex items-center gap-2  w-50 ">
                <div className="flex items-center justify-center rounded-full bg-amber-400 h-12 w-12">
                  oooo
                </div>
                <div className="text-white">
                  <h3>social media</h3>
                  <h1>0813 866 2406</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl min-h-60 py-20">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-around">
          <div>
            <h1 className="text-3xl text-center md:text-left text-gray-700">
              Downloading
            </h1>
            <h2 className="text-4xl text-center md:text-left text-black ">
              <span className="font-bold "> Download </span>
              Trail Version
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row gap-2'>
            <button className='w-50 bg-amber-300  h-20 rounded-full font-bold   text-white '>
              hffhhf
            </button>
            <button className='w-50 bg-amber-300 h-20 rounded-full font-bold   text-white '>
              hffhhf
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-30 bg-amber-300 flex items-center justify-center">
              <SocialIcon/>
      </div>
      <div className=" h-10 flex items-center justify-center min-h-20 bg-black text-white  text-center">
        @copyright olamidotun 
      </div>
    </div>
  ); 
};

export default Home;
