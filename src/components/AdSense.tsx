import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string; // For placement-specific styles
}

export function AdSense({ slot, format = 'auto', responsive = true, className = '' }: AdSenseProps) {
  
  // Try to push ads immediately when mounted
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push failed:", e);
    }
  }, []);

  return (
    <div 
      className={`ad-container flex items-center justify-center bg-[#f5f5f5] border border-[#ddd] min-h-[250px] mx-auto my-5 ${className}`} 
      data-ad-status="unfilled" 
      aria-label="Advertisement placeholder"
    >
      <ins className="adsbygoogle"
           style={{display: "block", width: "100%"}}
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive={responsive ? "true" : "false"}></ins>
    </div>
  );
}
