import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, Lock, Zap, Shield, Check, Chrome, Play } from 'lucide-react';

// Import components
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { PillarSection } from './components/PillarSection';
import { ProductImage } from './components/ProductImage';
import { VideoPopup } from './components/VideoPopup';

// Import hình mockup
import bannerImage from './assets/banner.png';
import chatHana from './assets/chat-hana.png';
import quickTranslate from './assets/quick-translate.png';
import contextManagement from './assets/context-management.png';

// Links
const EXTENSION_OPTIONS_URL = 'chrome-extension://aanhdfigalepndomldgkbhpdlihgnfoo/options.html';
const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/hana/ggafbdlheobfbbpdmonpcncbjidfilnd';

function App() {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      {/* Navigation - Ultra minimal */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4 bg-white/80 backdrop-blur-sm" aria-label="Main navigation">
        <div className="flex justify-between items-center max-w-content mx-auto">
          <a href="/" className="flex items-center gap-2" aria-label="Hana - Home">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center" aria-hidden="true">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight">Hana</span>
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={EXTENSION_OPTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Sign in to Hana"
            >
              {t('nav.signIn')}
            </a>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple text-sm flex items-center gap-2"
              aria-label="Add Hana to Chrome browser"
            >
              <Chrome className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{t('nav.addToChrome')}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full viewport, centered */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-hero text-zinc-900 mb-6"
          >
            {t('hero.headline1')}<br />
            <span className="text-teal-600">{t('hero.headline2')}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-500 mb-10 max-w-2xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple inline-flex items-center gap-2"
            >
              <Chrome className="w-5 h-5" />
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-apple-secondary inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase - Real extension screenshot */}
      <section className="py-16 bg-zinc-50">
        <ProductImage
          src={bannerImage}
          alt={t('productShowcase.imageAlt')}
          caption={t('productShowcase.caption')}
          size="large"
        />
      </section>

      {/* Pillar 1: AI That Understands */}
      <PillarSection
        headline={t('pillars.ai.headline')}
        description={t('pillars.ai.description')}
        imageSrc={chatHana}
        imageAlt="Hana AI Chat Interface"
        layout="center"
        imageSize="small"
      />

      {/* Pillar 2: Context That Persists */}
      <PillarSection
        headline={t('pillars.context.headline')}
        description={t('pillars.context.description')}
        imageSrc={contextManagement}
        imageAlt="Project Context & Glossary Management"
        layout="left"
        bgColor="zinc"
      />

      {/* Pillar 3: Workflow That Flows */}
      <PillarSection
        headline={t('pillars.workflow.headline')}
        description={t('pillars.workflow.description')}
        imageSrc={quickTranslate}
        imageAlt="Quick Translation Feature"
        layout="right"
      />

      {/* Pillar 4: Security - Icons instead of image */}
      <PillarSection
        headline={t('pillars.security.headline')}
        description={t('pillars.security.description')}
        layout="center"
        bgColor="zinc"
        icons={
          <>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-8 h-8 text-teal-600" />
              </div>
              <span className="text-sm text-zinc-600">{t('pillars.security.features.encrypted')}</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <span className="text-sm text-zinc-600">{t('pillars.security.features.fast')}</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <span className="text-sm text-zinc-600">{t('pillars.security.features.secure')}</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-teal-600" />
              </div>
              <span className="text-sm text-zinc-600">{t('pillars.security.features.private')}</span>
            </div>
          </>
        }
      />

      {/* Social Proof - Minimal */}
      <section className="py-section bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <p className="text-2xl md:text-3xl text-zinc-900 italic mb-4">
            "{t('socialProof.quote')}"
          </p>
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            ★★★★★
          </div>
          <p className="text-sm text-zinc-500">
            {t('socialProof.rating')} • {t('socialProof.author')}
          </p>
        </motion.div>
      </section>

      {/* FAQ - Minimal */}
      <section className="py-section bg-zinc-50">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-headline text-center mb-16"
          >
            {t('faq.title')}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq.questions.isFree')}</h3>
              <p className="text-zinc-500">{t('faq.questions.isFreeAnswer')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq.questions.dataProtection')}</h3>
              <p className="text-zinc-500">{t('faq.questions.dataProtectionAnswer')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq.questions.browserSpeed')}</h3>
              <p className="text-zinc-500">{t('faq.questions.browserSpeedAnswer')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Ultra simple */}
      <section className="py-section-lg bg-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-xl mx-auto px-6"
        >
          <h2 className="text-headline mb-10">{t('cta.title')}</h2>

          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple inline-flex items-center gap-2 text-lg"
          >
            <Chrome className="w-6 h-6" aria-hidden="true" />
            {t('cta.button')}
          </a>
        </motion.div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-zinc-900 py-8 text-center text-zinc-400 text-sm">
        <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">Hana</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.support')}</a>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
