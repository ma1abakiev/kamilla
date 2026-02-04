import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, Layout, BarChart3, MessageCircle, Camera, Zap } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const services = [
    {
      icon: Instagram,
      title: 'SMM-стратегия',
      description: 'Разработка комплексной стратегии продвижения в социальных сетях',
    },
    {
      icon: Layout,
      title: 'Контент-план',
      description: 'Создание продуманного контент-плана для вашего бренда',
    },
    {
      icon: Camera,
      title: 'Создание контента',
      description: 'Разработка визуального и текстового контента высокого качества',
    },
    {
      icon: BarChart3,
      title: 'Аналитика',
      description: 'Глубокий анализ метрик и корректировка стратегии',
    },
    {
      icon: Zap,
      title: 'Реклама',
      description: 'Настройка и ведение таргетированной рекламы',
    },
  ];

  return (
    <section id="услуги" ref={ref} className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold text-white">
            ЧЕМ Я МОГУ
            <br />
            БЫТЬ ПОЛЕЗНА
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative p-8 border border-white group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 group-hover:text-black transition-colors duration-300">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <service.icon className="w-12 h-12 mb-6" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
