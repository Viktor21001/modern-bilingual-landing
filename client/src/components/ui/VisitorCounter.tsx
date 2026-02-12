import { useEffect, useState } from 'react';
import { Counter } from 'counterapi';

interface VisitorCounterProps {
  className?: string;
}

export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const counterClient = new Counter({
      version: 'v1',
      namespace: 'my-english-online',
      debug: process.env.NODE_ENV === 'development',
    });

    counterClient
      .up('visitors')
      .then((result) => {
        if (result && typeof result.value === 'number') {
          setCount(result.value);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error('CounterAPI error:', err);
        setError(true);
      });
  }, []); // Один раз при монтировании

  if (count === null && !error) {
    return null;
  }
  if (error) {
    return (
      <span className={`text-xs text-muted-foreground ${className}`}>
        🧮 ?
      </span>
    );
  }

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium ${className}`}
      data-testid="counter-footer-views"
    >
      <span>👥</span>
      <span>{count}</span>
    </div>
  );
}