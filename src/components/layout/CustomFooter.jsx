'use client'

import Image from 'next/image'
import GetNewsForm from '../popup/GetNewsForm';
export default function Footer() {
  return (
    <footer className="bg-dark mt-12 bg-[#080217] [background-image:linear-gradient(90deg,#1900FA,#A101FF_33%,#E91F54_67%,#FF8D10)] bg-no-repeat [background-position:0_0] [background-size:100%_6px]">
      <div className="container pt-8  pt-md-7 pb-7 mx-auto">
        <div className="grid grid-cols-5 mb-[35px] mt-3 max-w-5xl mx-auto gap-[1rem] lg:gap-[25px] px-4 lg:px-0">
          <Image
            className="w-full !h-auto"
            width={391}
            height={240}
            quality={100}
            src="https://cinema8.com/static/img/certificates/ISO_27001.webp"
            alt="ISO 27001"
          />
          <Image
            className="w-full !h-auto"
            width={391}
            height={240}
            quality={100}
            src="https://cinema8.com/static/img/certificates/ISO_9001.webp"
            alt="ISO 9001"
          />
          <Image
            className="w-full !h-auto"
            width={391}
            height={240}
            quality={100}
            src="https://cinema8.com/static/img/certificates/ISO_10002.webp"
            alt="ISO 10002"
          />
          <Image
            className="w-full !h-auto"
            width={391}
            height={240}
            quality={100}
            src="https://cinema8.com/static/img/certificates/ISO_45001.webp"
            alt="ISO 45001"
          />
          <Image
            className="w-full !h-auto"
            width={391}
            height={240}
            quality={100}
            src="https://cinema8.com/static/img/certificates/BESA.webp"
            alt="BESA - British Educational Suppliers"
          />
        </div>

        <div className="grid grid-cols-12 gap-6 px-4 lg:px-24">
          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className="text-white mb-3 text-xl font-medium">
                COMPANY
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/about" title="About Us">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/contact-us" title="Contact Us">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/security" title="Security">
                    Security
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-[#a101ff]"
                    href="https://stats.uptimerobot.com/03nJECJ7Xx"
                    title="System Status"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    System Status
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#a101ff]"
                    href="https://chromewebstore.google.com/detail/cinema8-screen-recording/gjemcanlcocfmigndcnbaggojlmmkafa"
                    title="Screen recording extension"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Screen recording extension
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className=" text-white mb-3 text-xl font-medium">
                PLATFORM
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/platform-overview" title="Platform overview">
                    Platform overview
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-hosting" title="Video hosting">
                    Video hosting
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-library" title="Video library">
                    Video library
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/live-streaming" title="Live streaming">
                    Live streaming
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-player" title="Ad free player">
                    Ad free player
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-monetisation" title="Video monetisation">
                    Video monetisation
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/screen-recording" title="Screen recording">
                    Screen recording
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-editor" title="Video editing">
                    Video editing
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/ai-automated-workflows" title="AI automated workflows">
                    AI automated workflows
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-analytics" title="Analytics And Reporting">
                    Video analytics
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-ab-test" title="Video A/B testing">
                    Video A/B testing
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-streaming" title="Video streaming">
                    Video Streaming
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-cdn" title="Video cdn">
                    Video CDN
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className=" text-white mb-3 text-xl font-medium">
                INTERACTIVITY
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-video" title="Interactive Video">
                    Interactive Video
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-360-video" title="Interactive 360 Video">
                    Interactive 360 Video
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-branching" title="Video branching">
                    Video branching
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-personalisation" title="Personalisation">
                    Video Personalisation
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-gamification" title="Gamification">
                    Video Gamification
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/shoppable-video" title="Shoppable videos">
                    Shoppable videos
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/cta-and-hotspot" title="CTAs and hotspots">
                    CTAs and hotspots
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/lead-gen-forms" title="Lead Gen Forms">
                    Lead Gen Forms
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/popup-cards" title="Pop-up cards">
                    Pop-up cards
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/video-collaboration" title="Video collaboration">
                    Video collaboration
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/ai-automated-workflows" title="AI-driven interactivity">
                    AI-driven interactivity
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/sticky-hotspot" title="Sticky hotspots">
                    Sticky hotspots
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className="text-white mb-3 text-xl font-medium">
                OTHER FEATURES
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/widget-development" title="Drag and drop widgets">
                    Drag and drop widgets
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/widget-library" title="Widget library">
                    Widget library
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/integrations" title="Integrations">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/customisations" title="Customisations">
                    Customisations
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/branching-editor" title="Branching Editor">
                    Branching Editor
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/after-effects" title="After Effects">
                    Adobe After Effects
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/scorm-lti" title="Scorm LTI">
                    Scorm LTI export
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/webhooks" title="Webhooks">
                    Webhook
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/conditional-decisions" title="Conditional Decisions">
                    Conditional Decisions
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/lp" title="Landing Pages">
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/solutions" title="Solutions">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/tools" title="Tools">
                    Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className="text-white mb-3 text-xl font-medium">
                CINEMA8 FOR
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/enterprise/consolidate-everything" title="Enterprises">
                    Enterprises
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-e-learning" title="E-learning designers">
                    E-learning designers
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-onboarding" title="Onboarding designers">
                    Onboarding designers
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-video-marketing-and-sales" title="Sales teams">
                    Sales teams
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-e-commerce" title="E-commerce">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-video-marketing-and-sales" title="Video marketers">
                    Video marketers
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/interactive-video-for-startups" title="Interactive video for startups">
                    Interactive video for startups
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/use-cases/grow-your-brand" title="Grow Your Brand">
                    Grow Your Brand
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/use-cases/lead-generation" title="Lead Generation">
                    Lead Generation
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/use-cases/product-explainers" title="Product Explainers">
                    Product Explainers
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/use-cases/agency-collaboration" title="Agency Collaboration">
                    Agency Collaboration
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/lead-gen-forms" title="Lead gen forms">
                    Lead gen forms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div>
              <div className="mt-0 text-white mb-3 text-xl font-medium">
                RESOURCES
              </div>
              <ul className="list-unstyled font-light tracking-normal text-sm mb-0 leading-7 text-[#CACACA]">
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/showcase" title="Examples">
                    Examples
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/blog" title="Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-[#a101ff]"
                    href="https://help.cinema8.com"
                    title="Support Center"
                    rel="noreferrer noopener"
                  >
                    Help and support
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#a101ff]"
                    href="https://help.cinema8.com"
                    title="API & Developers"
                    rel="noreferrer noopener"
                  >
                    API & Developers
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/partners" title="Partners">
                    Partners
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#a101ff]" href="https://cinema8.com/glossary" title="Glossary">
                    Glossary
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <GetNewsForm />
        <hr className="mb-7 mt-4" />
        <div className="flex flex-col lg:flex-row lg:items-start justify-between px-4">
          <div className="lg:w-1/2 flex flex-col justify-center mb-4 lg:mb-0">
            <p className="mb-0  text-[#CACACA]">
              ©  Cinema8 Ltd. All rights reserved.
            </p>
            <p className="text-sm  text-[#CACACA]">
              Cambridge Office (HQ). St John&apos;s Innovation Centre,
              <br />
              Cowley Road Cambridge CB4 0WS
            </p>
            <nav className="text-md-start flex flex-row gap-3 lg:mt-6 text-[#CACACA]">
              <a
                href="https://cinema8.com/terms-and-conditions"
                title="Terms & Conditions"
                className="fs-sm me-3 hover:text-[#a101ff]"
              >
                Terms & Conditions
              </a>
              <a
                href="https://cinema8.com/privacy"
                title="Privacy"
                className="fs-sm me-3 hover:text-[#a101ff]"
              >
                Privacy
              </a>
              <a
                href="https://cinema8.com/cookie-policy"
                title="Cookie Policy"
                className="fs-sm hover:text-[#a101ff]"
              >
                Cookie Policy
              </a>
            </nav>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start lg:items-end">
            <p className="text-sm mb-2 max-w-lg text-left text-[#CACACA]">
              Cinema8 is a secure video hosting platform, offering a smarter way to host, share and analyse video content. Our all-in-one platform combines powerful video management with advanced analytics and interactive tools like CTAs, lead generation forms, and shoppable video features. Cinema8 is ideal for video marketing, interactive learning, and video agencies looking to scale with smarter, data-driven video experiences.
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-2 lg:gap-4 w-full lg:justify-end">
              {/* Social media links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/cinema8.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/cinema8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Cinema8official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="text-white hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/cinema8official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/c/Cinema8official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to us on YouTube"
                  className="text-white hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
                <a
                  href="mailto:support@cinema8.com"
                  aria-label="Email us"
                  className="text-white hover:text-indigo-400 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};