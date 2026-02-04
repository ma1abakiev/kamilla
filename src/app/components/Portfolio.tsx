import { motion } from "motion/react"
import img1 from "../../assets/partners/1.jpeg"
import img10 from "../../assets/partners/10.jpeg"
import img11 from "../../assets/partners/11.jpeg"
import img12 from "../../assets/partners/12.jpeg"
import img13 from "../../assets/partners/13.jpeg"
import img14 from "../../assets/partners/14.jpeg"
import img2 from "../../assets/partners/2.jpeg"
import img3 from "../../assets/partners/3.jpeg"
import img4 from "../../assets/partners/4.jpeg"
import img5 from "../../assets/partners/5.jpeg"
import img6 from "../../assets/partners/6.jpeg"
import img7 from "../../assets/partners/7.jpeg"
import img8 from "../../assets/partners/8.jpeg"
import img9 from "../../assets/partners/9.jpeg"

import photo1 from "../../assets/projects/1.jpeg"
import photo10 from "../../assets/projects/10.jpeg"
import photo11 from "../../assets/projects/11.jpeg"
import photo12 from "../../assets/projects/12.jpeg"
import photo13 from "../../assets/projects/13.jpeg"
import photo14 from "../../assets/projects/14.jpeg"
import photo15 from "../../assets/projects/15.jpeg"
import photo2 from "../../assets/projects/2.jpeg"
import photo3 from "../../assets/projects/3.jpeg"
import photo4 from "../../assets/projects/4.jpeg"
import photo5 from "../../assets/projects/5.jpeg"
import photo6 from "../../assets/projects/6.jpeg"
import photo7 from "../../assets/projects/7.jpeg"
import photo8 from "../../assets/projects/8.jpeg"
import photo9 from "../../assets/projects/9.jpeg"

const projects: string[] = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
]

const partners: string[] = [
	photo1,
	photo2,
	photo3,
	photo4,
	photo5,
	photo6,
	photo7,
	photo8,
	photo9,
	photo10,
	photo11,
	photo12,
	photo13,
	photo14,
	photo15,
]

type MarqueeRowProps = {
	direction?: "left" | "right"
	speed?: number
	items: string[]
	size?: "cover" | "contain"
}

const MarqueeRow = ({
	direction = "left",
	speed = 30,
	items,
	size = "cover",
}: MarqueeRowProps) => {
	const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]

	return (
		<motion.div
			className="flex gap-6 w-max"
			animate={{ x }}
			transition={{
				duration: speed,
				ease: "linear",
				repeat: Infinity,
			}}
		>
			{[...items, ...items].map((image, i) => (
				<div
					key={i}
					className="
            relative
            w-[200px] h-[200px]
            overflow-hidden
            bg-black
            cursor-pointer
            group
          "
				>
					<img
						src={image}
						alt="Partner"
						className={`
              w-full h-full
              transition-transform duration-500
              group-hover:scale-110
              object-${size}
            `}
					/>
				</div>
			))}
		</motion.div>
	)
}

export function Portfolio() {
	return (
		<section
			id="работы"
			className="bg-white text-black py-32 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 mb-16">
				<h2 className="text-6xl md:text-8xl font-bold">РАБОТЫ И КЕЙСЫ</h2>
			</div>

			<div className="relative space-y-8">
				<MarqueeRow
					direction="left"
					speed={28}
					items={projects}
          size="cover"
				/>

				<MarqueeRow
					direction="right"
					speed={32}
					items={partners}
          size="contain"
				/>
			</div>
		</section>
	)
}
