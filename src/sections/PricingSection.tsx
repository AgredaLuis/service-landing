import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../data/Pricing";

const Pricing = () => {
	return (
		<section className="mt-20" id="pricing">
			<div className="text-center">
				<span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
					{/* Pricing */}{" "}
				</span>
				<h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide">
					Take advantage of{" "}
					<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
						our offer.
					</span>
				</h2>
			</div>
			<div className="flex flex-wrap justify-center mt-10">
				{pricingOptions.map((option, index) => (
					<div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
						<div className="p-10 border border-neutral-700 rounded-xl">
							<p className="text-4xl mb-8">
								{option.title}
								{option.title === "Free" && (
									<span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
										(Limited)
									</span>
								)}
							</p>
							<p className="mb-8">
								<span className="text-5xl mt-6 mr-2">{option.price}</span>
								<span className="text-neutral-400 tracking-tight">/Month</span>
							</p>
							<ul>
								{option.features.map((feature, index) => (
									<li key={index} className="mt-8 flex items-center">
										<CheckCircle2 className="text-green-500"/>
										<span className="ml-2">{feature}</span>
									</li>
								))}
							</ul>
							<a
								href="https://t.me/antuan01?start=Hello%20%20I%20am%20interested%20in%20your%20services"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
							>
								Get Started
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Pricing;
