import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Contact() {
  const { t } = useTranslation();

  const mapUrl =
    "https://yandex.ru/map-widget/v1/?ll=37.171855%2C55.588552&z=17&pt=37.171855,55.588552,pm2rdm";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/50 to-background border rounded-3xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow w-full sm:w-[280px]"
                onClick={() => window.open('https://t.me/MaximYeliseyev', '_blank')}
                data-testid="button-contact-telegram"
              >
                <Send className="mr-2 h-5 w-5" />
                {t('contact.button')}
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg w-full sm:w-[280px]">
                    <MapPin className="mr-2 h-5 w-5" />
                    {t('contact.map_button')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{t('contact.map_title')}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                    <div className="w-full overflow-hidden rounded-xl border border-border">
                      <iframe
                        title="Yandex map"
                        src={mapUrl}
                        className="h-[320px] w-full md:h-[360px]"
                      />
                    </div>
                    <div className="text-left space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">
                          {t('contact.map_address_label')}
                        </div>
                        <div className="text-base">{t('contact.map_address_value')}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">
                          {t('contact.map_telegram_label')}
                        </div>
                        <a
                          href="https://t.me/MaximYeliseyev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-primary hover:underline"
                        >
                          @MaximYeliseyev
                        </a>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground">
                          {t('contact.map_note_label')}
                        </div>
                        <div className="text-base">{t('contact.map_note_value')}</div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
