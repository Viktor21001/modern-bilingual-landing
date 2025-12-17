import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Testimonials() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([
    { name: "Elena K.", role: "Parent", text: t('reviews.placeholder_1'), rating: 5 },
    { name: "Sergey M.", role: "Adult Student", text: t('reviews.placeholder_2'), rating: 5 },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert("Review submitted for moderation!");
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('reviews.title')}</h2>
            <div className="flex items-center gap-2 text-yellow-500">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <span className="text-muted-foreground ml-2 text-sm">(5.0 Average)</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{t('reviews.leave_review')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t('reviews.leave_review')}</DialogTitle>
                <DialogDescription>
                  Share your experience with others.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t('reviews.form.name')}</Label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-2">
                  <Label>{t('reviews.form.type')}</Label>
                  <RadioGroup defaultValue="adult">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="adult" id="adult" />
                      <Label htmlFor="adult">{t('reviews.form.type_adult')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parent" id="parent" />
                      <Label htmlFor="parent">{t('reviews.form.type_parent')}</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="review">{t('reviews.form.review')}</Label>
                  <Textarea id="review" required />
                </div>
                <Button type="submit">{t('reviews.form.submit')}</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-secondary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">"{review.text}"</p>
            </motion.div>
          ))}
          
          {/* Placeholder for "More coming soon" or empty state */}
          <div className="bg-transparent border-2 border-dashed border-secondary rounded-2xl p-6 flex items-center justify-center text-muted-foreground text-center">
             More reviews appearing soon...
          </div>
        </div>
      </div>
    </section>
  );
}
