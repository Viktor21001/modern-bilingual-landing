interface VisitorCounterProps {
    className?: string;
  }
  
  export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
    const siteUrl = 'https://my-english.online';
    const encodedUrl = encodeURIComponent(siteUrl);
    const countBg = '%233498db';
    const titleBg = '%23334155';
    const title = 'Visitors';
  
    return (
      <img
        src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodedUrl}&count_bg=${countBg}&title_bg=${titleBg}&title=${title}&edge_flat=true`}
        alt="Visitor counter"
        className={`h-5 w-auto ${className}`}
        data-testid="counter-footer-views"
      />
    );
  }