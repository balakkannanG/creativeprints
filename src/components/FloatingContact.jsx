import React from "react";
import { PhoneCall } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L.06 24l6.29-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.91-11.91a11.84 11.84 0 0 0-3.47-8.42Zm-8.45 18.32h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.91-9.93 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function FloatingContact({ phoneNumber, whatsappLink }) {
  return (
    <div
      className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex"
      aria-label="Contact Creative Prints"
    >
      <a
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1769d2] text-white shadow-[0_8px_24px_#17202c40] transition hover:-translate-y-1 hover:bg-[#1059b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1769d2]"
        href={`tel:${phoneNumber}`}
        aria-label="Call Creative Prints"
        title="Call us"
      >
        <PhoneCall size={23} aria-hidden="true" />
      </a>
      <a
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_#17202c40] transition hover:-translate-y-1 hover:bg-[#1fbd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366]"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Creative Prints on WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
