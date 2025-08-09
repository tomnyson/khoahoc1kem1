import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a 
        href="tel:+84123456789" 
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Gọi điện"
      >
        <Phone size={24} />
      </a>
      <a 
        href="https://zalo.me/0123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Chat Zalo"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}