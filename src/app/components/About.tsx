import { Heart, Sparkles, TrendingUp } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function About() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.3 })

	const features = [
		{ title: "50+", text: "Проектов" },
		{ title: "5+", text: "Лет опыта" },
		{ title: "100%", text: "Системный подход" },
	]

	return (
		<section
			id="обо-мне"
			ref={ref}
			className="min-h-screen bg-white text-black py-20 px-6"
		>
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-6xl md:text-8xl font-bold mb-16">ОБО МНЕ</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<motion.div
							className="w-full h-[700px] bg-black rounded-lg overflow-hidden"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								className="w-full h-full flex items-center justify-center text-white text-6xl font-bold bg-[url(src/assets/about.jpg)] bg-cover  bg-center bg-no-repeat"
								// animate={{
								//   background: [
								//     'linear-gradient(45deg, #000 0%, #333 100%)',
								//     'linear-gradient(45deg, #333 0%, #000 100%)',
								//     'linear-gradient(45deg, #000 0%, #333 100%)',
								//   ],
								// }}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "linear",
								}}
							>
								
							</motion.div>
						</motion.div>
					</motion.div>

					<div className="space-y-8">
						<motion.p
							className="text-xl md:text-2xl leading-relaxed"
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Привет! Я Камилла — SMM-специалист с креативным подходом и
							вниманием к деталям. Помогаю брендам расти и развиваться в
							социальных сетях.
						</motion.p>

						<motion.div
							className=" flex flex-col md:flex-row gap-6"
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							{features.map((feature, i) => (
								<motion.div
									key={i}
									className="flex items-center flex-col gap-4 p-4 border-2 border-black"
									initial={{ opacity: 0, x: -50 }}
									animate={
										isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
									}
									transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
									whileHover={{
										scale: 1.05,
										backgroundColor: "#000",
										color: "#fff",
									}}
								>
                  <h3 className="text-center text-[50px]">{feature.title}</h3>
									{/* <feature.icon className="w-8 h-8" /> */}
									<span className="text-lg text-center">{feature.text}</span>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
