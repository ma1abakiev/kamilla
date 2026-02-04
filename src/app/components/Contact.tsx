import { Instagram, MessageCircle } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"

export function Contact() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.3 })
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formData)
	}

	const socialLinks = [
		{
			icon: Instagram,
			label: "@kamillla.1",
			href: "https://instagram.com/kamillla.1",
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			href: "https://wa.me/996504205195", // ← замени номер
		},
	]

	return (
		<section
			id="контакты"
			ref={ref}
			className="min-h-screen bg-white text-black py-20 px-6"
		>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<h2 className="text-5xl md:text-8xl font-bold mb-6">КОНТАКТЫ</h2>
					<p className="text-2xl">Готовы начать сотрудничество?</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-16">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="space-y-8"
					>
						<motion.div
							className="space-y-6"
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{socialLinks.map((link, i) => (
								<motion.a
									key={i}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="
                    flex items-center gap-4 p-6
                    border-2 border-black
                    group hover:bg-black hover:text-white
                    transition-colors duration-300
                  "
									initial={{ opacity: 0, x: -30 }}
									animate={
										isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
									}
									transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
									whileHover={{ scale: 1.05, x: 10 }}
								>
									<motion.div
										animate={{ rotate: [0, 15, -15, 0] }}
										transition={{
											duration: 2,
											delay: i * 0.2,
											repeat: Infinity,
										}}
									>
										<link.icon className="w-8 h-8" />
									</motion.div>
									<span className="text-xl font-medium">{link.label}</span>
								</motion.a>
							))}
						</motion.div>

						<motion.div
							className="mt-12 p-8 bg-black text-white"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={
								isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
							}
							transition={{ duration: 0.8, delay: 1 }}
						>
							<p className="text-lg leading-relaxed">
								Напишите мне в Instagram или WhatsApp — обсудим ваш проект и
								формат сотрудничества.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
