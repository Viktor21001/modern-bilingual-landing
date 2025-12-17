import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Baby, User, Users, GraduationCap } from 'lucide-react';

export default function TargetAudience() {
  const { t } = useTranslation();

  const audience = [
    { title: t('audience.child'), icon: Baby, color: "bg-blue-100 text-blue-600" },
    { title: t('audience.teen'), icon: User, color: "bg-purple-100 text-purple-600" },
    { title: t('audience.adult'), icon: Users, color: "bg-orange-100 text-orange-600" },
    { title: t('audience.levels'), icon: GraduationCap, color: "bg-green-100 text-green-600" },
  ];

  return (
    <section className="py-20 bg-background border-y border-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('audience.title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {audience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
