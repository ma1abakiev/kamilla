import { Check } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function Pricing() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.3 })

	const included = [
		"Анализ и упаковка страницы",
		"Контент-стратегия",
		"Контент-план",
		"12 Reels в месяц",
		"Съёмка и монтаж видео",
		"Сопровождение проекта",
	]

	const extra = [
		{ name: "Консультация (2 часа)", price: "5 000 сом" },
		{ name: "Распаковка личности (2–2,5 часа)", price: "5 000 сом" },
		{ name: "Разовая съёмка", price: "5 000 сом" },
	]

	return (
		<section
			id="стоимость"
			ref={ref}
			className="min-h-screen bg-black text-white py-32 px-6"
		>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-8xl font-bold mb-6">
						СТОИМОСТЬ УСЛУГ
					</h2>
					<p className="text-xl opacity-70">
						Ведение Instagram — от <span className="font-bold">25 000 сом</span>{" "}
						в месяц
					</p>
				</motion.div>

				{/* Main card */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={
						isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
					}
					transition={{ duration: 0.6 }}
					className="border border-white/30 p-10 mb-20"
				>
					<h3 className="text-3xl font-bold mb-8">В стоимость входит</h3>

					<ul className="grid md:grid-cols-2 gap-6">
						{included.map((item, i) => (
							<motion.li
								key={i}
								initial={{ opacity: 0, x: -20 }}
								animate={
									isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
								}
								transition={{ delay: i * 0.1 }}
								className="flex items-start gap-4"
							>
								<Check className="w-5 h-5 mt-1 flex-shrink-0" />
								<span className="text-lg">{item}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>

				{/* Extra services */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold mb-8">Дополнительные услуги</h3>

					<div className="grid md:grid-cols-3 gap-6">
						{extra.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
								}
								transition={{ delay: i * 0.2 }}
								whileHover={{ y: -6 }}
								className="border border-white/30 p-6"
							>
								<p className="text-lg font-medium mb-2">{item.name}</p>
								<p className="text-2xl font-bold">{item.price}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Note */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: 0.6 }}
					className="text-sm opacity-60 max-w-3xl"
				>
					Если вы планируете дальнейшее сотрудничество, консультация входит в
					стоимость ведения (кроме распаковки личности).
				</motion.p>
			</div>
		</section>
	)
}
