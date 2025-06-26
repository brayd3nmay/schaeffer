'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'tank-repair', label: 'Tank Repair' },
    { value: 'trailer-service', label: 'Trailer Service' },
    { value: 'meter-calibration', label: 'Meter Calibration' },
    { value: 'fabrication', label: 'Custom Fabrication' },
    { value: 'inspection', label: 'Inspection & Certification' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show notification, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-safety-yellow rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-steel-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-oswald text-xl font-semibold text-steel-blue mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-4">
          Your message has been sent successfully. We&apos;ll get back to you
          within 24 hours.
        </p>
        <CTAButton
          onClick={() => setSubmitted(false)}
          variant="secondary"
          size="sm"
        >
          Send Another Message
        </CTAButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-yellow focus:border-transparent transition-colors duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-yellow focus:border-transparent transition-colors duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-yellow focus:border-transparent transition-colors duration-200"
            placeholder="(330) 555-0123"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-yellow focus:border-transparent transition-colors duration-200"
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-yellow focus:border-transparent transition-colors duration-200 resize-vertical"
          placeholder="Please describe your service needs or any questions you have..."
        />
      </div>

      <div className="text-center">
        <CTAButton
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full md:w-auto min-w-[200px]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </CTAButton>
      </div>

      <p className="text-sm text-gray-500 text-center">
        * Required fields. We&apos;ll respond within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
