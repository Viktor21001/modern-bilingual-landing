import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface YandexMapDialogProps {
  mapUrl: string;
  telegramUrl: string;
  telegramLabel: string;
  className?: string;
}

export default function YandexMapDialog({
  mapUrl,
  telegramUrl,
  telegramLabel,
  className = "",
}: YandexMapDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className={className}>
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
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-primary hover:underline"
              >
                {telegramLabel}
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
  );
}
