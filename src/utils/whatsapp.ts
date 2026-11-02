import { siteConfig } from '@/config/siteConfig';

export function generateWhatsAppUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/[^\d+]/g, '');
  if (!phone) {
    console.warn('WhatsApp number not configured in siteConfig');
    return '#';
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function generateProductInquiryMessage(productName: string): string {
  return `Hello Orion Software & Trading, I am interested in ${productName}. Please share the availability, specifications, and quotation.`;
}

export function generateServiceInquiryMessage(serviceName: string): string {
  return `Hello Orion Software & Trading, I am interested in your ${serviceName} services. I would like to discuss my requirements and get a quotation.`;
}

export function generateGeneralInquiryMessage(): string {
  return `Hello Orion Software & Trading, I would like to inquire about your services. Please share more details.`;
}
