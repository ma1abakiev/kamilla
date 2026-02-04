import { motion } from "motion/react"

export const Header = () => {
	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-black/30
        border-b border-white/10
      "
		>
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-xl font-bold text-white cursor-pointer"
					>
						LOGO
					</motion.div>

					{/* Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{["Главная", "Проекты", "О нас"].map((item) => (
							<motion.a
								key={item}
								href="#"
								whileHover={{ y: -2 }}
								transition={{ type: "spring", stiffness: 300 }}
								className="text-sm text-white/80 hover:text-white transition"
							>
								{item}
							</motion.a>
						))}

						{/* CTA Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="
                ml-4
                rounded-full
                bg-white px-5 py-2
                text-sm font-medium text-black
                hover:bg-white/90
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
