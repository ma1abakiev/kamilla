import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="flex items-center gap-2 text-sm"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span>Сделано с</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span>для вашего бизнеса</span>
          </motion.div>

          <motion.div
            className="text-6xl font-bold"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            КАМИЛЛА
          </motion.div>

          <div className="text-sm opacity-70">
            © {currentYear} SMM-специалист Камилла. Все права защищены.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
