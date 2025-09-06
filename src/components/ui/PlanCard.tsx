import React from "react";

type PricingFeature = {
  name: string;
  included?: boolean;
};

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: PricingFeature[];
  isPopular?: boolean;
}

type PricingPlanProps = {
  plan: PricingPlan;
};
const PlanCard = ({ plan }: PricingPlanProps) => {
  return (
    <div className="relative p-4 w-65 h-120 group rounded-2xl border-2 overflow-hidden border-gray-400/50 transform hover:-translate-y-5 ">
      <div className="flex flex-col items-center space-y-6 ">
        <h4 className="text-gray-500"> {plan.name}</h4>
        <h1 className="text-4xl font-bold">${plan.price}</h1>
        <div className="w-full flex  flex-col ">
          {plan.features.map((feature, index) => (
            <span
            className=" border-b border-gray-400 p-2"
             key={index}>{feature.name}</span>
          ))}
        </div>

        <button
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
            plan.isPopular
              ? "bg-yellow-400 hover:bg-yellow-500 text-black"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
