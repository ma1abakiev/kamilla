import { motion } from "motion/react"

export const Header = () => {
	return (
		<motion.header
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="
        fixed top-0 left-0 w-full z-50
        bg-black/60 backdrop-blur-md
      "
		>
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex h-20 items-center justify-between">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-xl font-bold text-white cursor-pointer"
					>
						Kamilla
					</motion.div>

					{/* Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{["Обо мне", "Услуги", "Работы", "Стоимость", "Контакты"].map(
							(item) => (
								<motion.a
									key={item}
									href="#"
									whileHover={{ y: -2 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="text-sm text-white/80 hover:text-white transition"
								>
									{item}
								</motion.a>
							),
						)}

						{/* CTA */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="
                ml-4
                rounded-full
                border border-white/30
                px-5 py-2
                text-sm font-medium text-white
                hover:bg-white hover:text-black
                transition
              "
						>
							Связаться
						</motion.button>
					</nav>
				</div>
			</div>
		</motion.header>
	)
}
