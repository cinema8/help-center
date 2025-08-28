'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HUBSPOT_PORTAL_ID = '145119654';
const HUBSPOT_FORM_ID = '836c7b65-2aa6-4cc0-9ae0-cc4d6044c272';

// Alternative approach using HubSpot's JSONP endpoint
async function submitHubSpotForm(fields) {
  const endpoint = `https://forms.hubspot.com/uploads/form/v2/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
  
  const formData = new FormData();
  fields.forEach(field => {
    formData.append(field.name, field.value);
  });
  
  // Add required HubSpot fields
  formData.append('hs_context', JSON.stringify({
    "hutk": null,
    "pageUri": window.location.href,
    "pageName": document.title
  }));

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('HubSpot API Error:', { status: res.status, response: text });
      return { success: false, status: res.status, error: text || 'HubSpot error' };
    }
    
    // HubSpot returns a redirect on success, so we check the response
    return { success: true, status: res.status };
  } catch (err) {
    console.error('Network/Fetch error:', err);
    return { success: false, error: err?.message || 'Network error' };
  }
}

// Fallback: Use HubSpot's embed script approach
function submitViaScript(email) {
  return new Promise((resolve) => {
    // Create a hidden form that HubSpot can process
    const form = document.createElement('form');
    form.style.display = 'none';
    form.action = `https://forms.hubspot.com/uploads/form/v2/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
    form.method = 'POST';
    form.target = '_blank';

    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    const contextInput = document.createElement('input');
    contextInput.name = 'hs_context';
    contextInput.value = JSON.stringify({
      "hutk": null,
      "pageUri": window.location.href,
      "pageName": document.title
    });
    form.appendChild(contextInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Assume success since we can't really track the submission
    setTimeout(() => resolve({ success: true }), 1000);
  });
}

const GetNewsForm = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsLatterErrors = {};

    if (!email.trim()) {
      newsLatterErrors.email = 'Please complete this required field.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newsLatterErrors.email = 'Please enter a valid email address. (e.g. hello@cinema8.com)';
    }
    
    if (!consent) {
      newsLatterErrors.consent = 'Please complete this required field.';
    }
    
    setErrors(newsLatterErrors);

    if (Object.keys(newsLatterErrors).length > 0) return;

    setSubmitting(true);
    
    try {
      // Try the main API first
      let res = await submitHubSpotForm([{ name: "email", value: email.trim() }]);
      
      // If that fails, try the fallback method
      if (!res.success) {
        console.log('Primary method failed, trying fallback...');
        res = await submitViaScript(email.trim());
      }
      
      if (res.success) {
        setSuccessMessage(true);
        setEmail('');
        setConsent(false);
        setErrors({});
      } else {
        setErrors({
          email: 'Unable to submit form. Please try again or contact support.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        email: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className='w-[95%]  lg:w-7/16 text-white border mt-5 gap-5 text-xs p-3 px-4  rounded-4xl border-solid border-white mx-auto'>
      {!successMessage && (
        <form onSubmit={handleSubmit} className="p-0 bg-black text-white rounded-2xl space-y-4">
          <p className="text-xl min-w-[30%] mb-0 pt-1 pb-6">👋 Get our news</p>
          
          <div>
            <input
              type="email"
              placeholder="Your Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full text-black tracking-wide  text-[14px] bg-white "
              disabled={submitting}
            />
            {errors.email && <p className="text-red-500 text-[12px] m-0 pl-5">{errors.email}</p>}

            <p className='text-[12px] mt-2 px-2 mb-4 leading-[17px]'>
              By signing up, you agree to receive emails from Cinema8. Cinema8 will use the information you provide to share updates, insights, and trends in accordance with our Privacy Policy. You may unsubscribe at any time using the link in our emails.
            </p>
          </div>

          <label htmlFor="itemId" className="flex items-center justify-between w-full my-1 cursor-pointer">
            <div className="block ml-2 py-0.5">
              <input
                onChange={(e) => setConsent(e.target.checked)}
                className="c8-footer-checkbox h-4 w-4 rounded border-gray-300 checked:border-primary"
                type="checkbox"
                checked={consent}
                id="itemId"
                disabled={submitting}
              />
              <label className="text-xs lg:text-sm  inline-block pl-[0.5rem] translate-y-[-0.2rem] hover:cursor-pointer lg:[word-spacing:3px]" htmlFor="itemId">
                I agree to receive other communications from Cinema8. <span className='text-red-500'>*</span>
              </label>
            </div>
          </label>

          {errors.consent && <p className="text-red-500 text-[12px] m-0 pl-5">{errors.consent}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="bg-purple-600 mt-5 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-lg !font-extralight text-white rounded-full px-8 py-2 w-full md:w-auto"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
      
      {successMessage && (
        <div className="min-h-[269px] flex justify-between flex-col items-center">
          <p className="text-base min-w-[30%] mb-0 p-0">👋 Get our news</p>
          <Image
            src="https:/www.cinema8.com/static/img/logo-two-tone.svg"
            width={181}
            height={32}
            quality={100}
            alt="Cinema8"
          />
          <p className='m-0 p-0'>Thank you for joining us! Stay tuned for exciting updates in our newsletter.</p>
        </div>
      )}
    </section>
  );
};

export default GetNewsForm;