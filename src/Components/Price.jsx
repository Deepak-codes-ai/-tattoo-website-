import React from "react";

const Price = () => {
  const plans = [
    {
      title: "ALL START",
      price: "$20",
      features: ["1 Small Tattoo", "1 Month", "All Support"],
      cardBg: "bg-white",
      topBar: "bg-gray-300",
      textColor: "text-black",
      button: "bg-black text-white",
    },
    {
      title: "PROFESIONAL",
      price: "$24.90",
      features: ["2 Tattoo", "1 Month", "All Support"],
      cardBg: "bg-[#1f2b37]",
      topBar: "bg-orange-500",
      textColor: "text-white",
      button: "bg-white text-black",
    },
    {
      title: "EXPERT",
      price: "$49.90",
      features: ["4 Tattoo", "1 Month", "All Support"],
      cardBg: "bg-white",
      topBar: "bg-gray-300",
      textColor: "text-black",
      button: "bg-black text-white",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16 text-center" id="price">
      <h1 className="text-4xl text-orange-500">
        PRICING <span className="text-black">PLAN</span>
      </h1>
      <p className="text-gray-600 mt-4 italic max-w-xl mx-auto">
        At Unico Tattoo, we believe that exceptional ink should be accessible to
        everyone. Our pricing plans are designed to suit every style, budget,
        and body !
      </p>

      <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-[350px] h-[400px] rounded shadow-md ${plan.cardBg} overflow-hidden`}
          >
            {/* Top Bar */}
            <div
              className={`${plan.topBar} h-15 flex items-center justify-center`}
            >
              <h2
                className={`uppercase text-sm font-bold tracking-wide ${plan.textColor}`}
              >
                {plan.title}
              </h2>
            </div>

            {/* Price */}
            <div
              className={`py-7 text-lg font-bold ${
                plan.topBar === "bg-orange-500" ? "text-white" : "text-black"
              }`}
            >
              {plan.price}
            </div>

            {/* Features */}
            <div className={`px-6 pb-6 ${plan.textColor}`}>
              <ul className="text-2sm space-y-10">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-6 w-full py-2 rounded ${plan.button} font-semibold tracking-wide hover:bg-gradient-to-l hover:from-orange-400 hover:to-gray-400`}
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
