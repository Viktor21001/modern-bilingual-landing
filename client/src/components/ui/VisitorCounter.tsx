import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  className?: string;
}

export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const isDev = process.env.NODE_ENV === 'development';

  // --- РЕЖИМ РАЗРАБОТКИ: эмуляция через localStorage ---
  if (isDev) {
    const [count, setCount] = useState<number>(() => {
      const stored = localStorage.getItem('dev_visitor_counter');
      return stored ? parseInt(stored, 10) : 42;
    });

    useEffect(() => {
      setCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('dev_visitor_counter', newCount.toString());
        return newCount;
      });
    }, []);

    return (
      <div 
        className={`flex items-center gap-1 text-sm font-medium text-muted-foreground ${className}`}
        data-testid="counter-footer-views-dev"
      >
        <span>👁️</span>
        <span>Visitors: {count}</span>
      </div>
    );
  }

  const namespace = 'my-english-online';
  const counterUrl = `https://api.counterapi.dev/v1/${namespace}/counter?style=flat&color=blue&label=Visitors`;

  return (
    <img
      src={counterUrl}
      alt="Visitor counter"
      className={`h-5 w-auto ${className}`}
      data-testid="counter-footer-views"
    />
  );
}