import { Mail, Send, MessageCircle } from "lucide-react";
const Contact = () => {
	return (
		<section id="contact" className="relative mt-20 border-t border-neutral-800">
			<div className="my-20 flex flex-col items-center">
				<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide items-center">
					Contact
				</h2>
				<p className="mt-10 mb-20 text-lg items-center text-neutral-500 max-w-4xl">
					Have questions or need more information? Get in touch with us, and we will be
					happy to assist you.
				</p>
				<div className="flex flex-col lg:flex-row justify-around mx-4 gap-4">
					<div className="flex mb-8 lg:mb-0">
						<Mail className="text-3xl mr-4 text-orange-500" />
						<div>
							<p className="text-lg font-semibold ">Email</p>
							<p className="text-neutral-600">agredajose7@gmail.com</p>
						</div>
					</div>
					<div className="flex mb-8 lg:mb-0">
						<Send className="text-3xl mr-4 text-orange-500" />
						<div>
							<p className="text-lg font-semibold ">Telegram</p>
							<p className="text-neutral-600">@Antuan01</p>
						</div>
					</div>
					<div className="flex mb-8 lg:mb-0">
						<MessageCircle className="text-3xl mr-4 text-orange-500" />
						<div>
							<p className="text-lg font-semibold ">WhatsApp</p>
							<p className="text-neutral-600">+58 412 1124677</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
