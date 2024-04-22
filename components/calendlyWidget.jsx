// components/CalendlyWidget.jsx

import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/your-account/your-event"
      style={{ minWidth: '320px', height: '580px' }}
    />
  );
};

export default CalendlyWidget;
