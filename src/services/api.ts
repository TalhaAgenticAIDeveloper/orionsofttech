import type { ContactFormData } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        error:
          errorData.detail ||
          errorData.message ||
          `Request failed with status ${response.status}`,
        status: response.status,
      };
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch {
    return {
      error: 'Unable to connect to the server. Please check your network connection.',
      status: 0,
    };
  }
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    }),
};

/**
 * Submits the corporate inquiry form.
 * Prepared for future FastAPI backend integration (/api/v1/contact).
 * Provides graceful user messaging and client validation if backend is unconfigured.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Honeypot spam protection: bots fill in the hidden honeypot field
  if (data.honeypot && data.honeypot.length > 0) {
    return {
      success: false,
      message: 'Invalid submission detected. Please try again.',
    };
  }

  // If no backend endpoint is configured in .env, provide an honest, professional notification
  if (!API_BASE_URL) {
    return {
      success: false,
      message:
        'The inquiry backend endpoint is not yet configured for production. Please reach out to us directly via WhatsApp, Phone, or Email listed on this page to receive an immediate quotation.',
    };
  }

  const response = await api.post<{ message: string }>('/api/v1/contact', data);

  if (response.error) {
    return {
      success: false,
      message: response.error,
    };
  }

  return {
    success: true,
    message:
      response.data?.message ||
      'Thank you! Your inquiry has been submitted successfully. Our team will review your requirements and respond promptly.',
  };
}

