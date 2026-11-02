import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/schemas/contactSchema';
import { submitContactForm } from '@/services/api';
import { inquiryTypes } from '@/data/inquiryTypes';
import { Button } from '@/components/buttons/Button';

interface ContactFormProps {
  defaultInquiryType?: string;
  defaultSubject?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultInquiryType = 'general-inquiry',
  defaultSubject = '',
  className = '',
}) => {
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: defaultInquiryType as ContactFormValues['inquiryType'],
      subject: defaultSubject,
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmissionStatus({ type: null, message: '' });

    try {
      const response = await submitContactForm(values);

      if (response.success) {
        setSubmissionStatus({
          type: 'success',
          message: response.message,
        });
        reset();
      } else {
        setSubmissionStatus({
          type: 'error',
          message: response.message,
        });
      }
    } catch {
      setSubmissionStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please reach out to us directly via WhatsApp or phone.',
      });
    }
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-sm ${className}`}>
      {/* Feedback Banner */}
      {submissionStatus.type && (
        <div
          role="alert"
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm ${
            submissionStatus.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
              : 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
          }`}
        >
          {submissionStatus.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="leading-relaxed">{submissionStatus.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Anti-spam Honeypot field (hidden from view) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_field">Leave this field blank</label>
          <input
            id="hp_field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('honeypot')}
          />
        </div>

        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. John Doe"
              {...register('fullName')}
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border ${
                errors.fullName
                  ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500'
              } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              {...register('email')}
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border ${
                errors.email
                  ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500'
              } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors`}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Phone / WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+92 300 1234567"
              {...register('phone')}
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border ${
                errors.phone
                  ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500'
              } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors`}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Company / Organization <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Acme Corp"
              {...register('company')}
              className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Inquiry Type & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="inquiryType"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              {...register('inquiryType')}
              className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Dell Servers Quotation & Installation"
              {...register('subject')}
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border ${
                errors.subject
                  ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500'
              } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors`}
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
          >
            Project Details / Hardware Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Please describe your software requirements, desired hardware quantities, installation location, or any specific technical questions..."
            {...register('message')}
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border ${
              errors.message
                ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500'
            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors resize-y`}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            isLoading={isSubmitting}
            icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            iconPosition="right"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <p className="mt-2.5 text-xs text-slate-500 dark:text-slate-400">
            We value your privacy. Your information is strictly used to evaluate your inquiry and prepare quotations.
          </p>
        </div>
      </form>
    </div>
  );
};

