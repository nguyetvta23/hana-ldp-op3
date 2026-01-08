import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Zap, Shield, Brain, ArrowRight, Check, Star, Users, Clock, Play, Chrome } from 'lucide-react';


// Import components
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { FeatureCard } from './components/FeatureCard';
import { StepCard } from './components/StepCard';
import { VideoPopup } from './components/VideoPopup';
import { PrivacyBadge } from './components/PrivacyBadge';
import { FAQSection } from './components/FAQSection';

// Import hình mockup
import extensionPopup from './assets/extension-popup.png';
import dashboardUI from './assets/dashboard-real.png';
import browserAction from './assets/browser-action.png';

// Link tới extension options
const EXTENSION_OPTIONS_URL = 'chrome-extension://aanhdfigalepndomldgkbhpdlihgnfoo/options.html';
const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/hana/ggafbdlheobfbbpdmonpcncbjidfilnd';

function App() {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      {/* Navigation - Clean minimal header */}
      <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-100">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-zinc-900">Hana</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#features" className="hover:text-teal-600 transition-colors">{t('nav.features')}</a>
            <a href="#how-it-works" className="hover:text-teal-600 transition-colors">{t('nav.howItWorks')}</a>
            <a href="#pricing" className="hover:text-teal-600 transition-colors">{t('nav.pricing')}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={EXTENSION_OPTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all text-sm font-medium"
            >
              {t('nav.signIn')}
            </a>
            {/* Add to Chrome Button */}
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-zen-primary text-sm"
            >
              <Chrome className="w-4 h-4" />
              {t('nav.addToChrome')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Generous whitespace */}
      <section className="relative z-10 pt-32 pb-40 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="badge-zen mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8 text-zinc-900"
          >
            {t('hero.headline1')}<br />
            <span className="text-zen-accent">
              {t('hero.headline2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-zen-primary flex items-center gap-2 px-8 py-4 text-base"
            >
              <Chrome className="w-5 h-5" />
              {t('hero.ctaPrimary')} <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-zen-secondary flex items-center gap-2 px-8 py-4 text-base"
            >
              <Play className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          {/* Stats - Minimal design */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-20 flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-zinc-100">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-zinc-600"><strong className="text-zinc-900">4.9/5</strong> {t('hero.stats.rating')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-zinc-100">
              <Users className="w-5 h-5 text-teal-600" />
              <span className="text-zinc-600"><strong className="text-zinc-900">10K+</strong> {t('hero.stats.users')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-zinc-100">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span className="text-zinc-600">{t('hero.stats.timeSaved')} <strong className="text-zinc-900">2h{t('hero.stats.perDay')}</strong></span>
            </div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mt-24 relative mx-auto max-w-6xl"
          >
            <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-md overflow-hidden">
              <img
                src={browserAction}
                alt={t('hero.imageAlt')}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-zinc-900">
              {t('howItWorks.title')}
            </h2>
            <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Extension Popup */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl border border-zinc-100 bg-zinc-50 shadow-sm overflow-hidden p-10 flex items-center justify-center">
                <img
                  src={extensionPopup}
                  alt={t('howItWorks.imageAlt')}
                  className="w-auto h-[500px] object-contain"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="order-1 md:order-2 space-y-12">
              <StepCard
                number="1"
                title={t('howItWorks.step1.title')}
                description={t('howItWorks.step1.description')}
              />
              <StepCard
                number="2"
                title={t('howItWorks.step2.title')}
                description={t('howItWorks.step2.description')}
              />
              <StepCard
                number="3"
                title={t('howItWorks.step3.title')}
                description={t('howItWorks.step3.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-32 relative bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-zinc-900">
              {t('dashboard.title')}
            </h2>
            <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-md overflow-hidden">
            <img
              src={dashboardUI}
              alt={t('dashboard.imageAlt')}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-zinc-900">
              {t('features.title')}
            </h2>
            <p className="text-zinc-600 text-lg">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-teal-600" />}
              title={t('features.feature1.title')}
              description={t('features.feature1.description')}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title={t('features.feature2.title')}
              description={t('features.feature2.description')}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-emerald-500" />}
              title={t('features.feature3.title')}
              description={t('features.feature3.description')}
            />
          </div>
        </div>
      </section>

      {/* Privacy Badge Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <PrivacyBadge />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section - Teal solid background */}
      <section id="pricing" className="py-32 px-6 text-center bg-teal-600">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-teal-100 mb-12 text-lg">
            {t('cta.subtitle')}
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-xl bg-white text-teal-700 font-bold hover:bg-zinc-50 transition-all shadow-sm inline-flex items-center gap-2"
          >
            <Chrome className="w-5 h-5" />
            {t('cta.button')}
          </a>
          <p className="mt-6 text-sm text-teal-100 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> {t('cta.badge1')}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> {t('cta.badge2')}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" /> {t('cta.badge3')}
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12 text-center text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold font-heading">Hana</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.twitter')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.support')}</a>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div >
  );
}

export default App;
