import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .max(20, 'Phone number must not exceed 20 characters')
    .regex(/^[+]?[\d\s()-]+$/, 'Please enter a valid phone number'),
  company: z
    .string()
    .max(200, 'Company name must not exceed 200 characters')
    .optional()
    .or(z.literal('')),
  inquiryType: z.enum(
    [
      'software-development',
      'it-hardware',
      'installation-services',
      'technical-support',
      'general-inquiry',
    ],
    { error: 'Please select an inquiry type' }
  ),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must not exceed 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must not exceed 5000 characters'),
  honeypot: z.string().max(0).optional(), // Must be empty - spam trap
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
