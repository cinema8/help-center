'use client';
import { useState } from 'react';
import PopupModal from '@components/popup/PopupModal';

export default function PopupModalTrigger({ portalId, formId, region }) {
  const [isOpen, setIsOpen] = useState(false);

  // Debugging: Log props to ensure they're passed correctly
  console.log("PopupModalTrigger Props:", { portalId, formId, region });

  if (!portalId || !formId || !region) {
    console.error("Missing portalId, formId, or region props in PopupModalTrigger.");
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 relative group"
      >
        Submit Ticket
      </button>

      <PopupModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        portalId={portalId} 
        formId={formId} 
        region={region} 
      />
    </>
  );
}
