import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  className?: string;
}

export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const namespace = 'my-english-online';
    const key = 'visitors';
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setCount(data.value);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error('Visitor counter error:', err);
        setError(true);
      });
  }, []);

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