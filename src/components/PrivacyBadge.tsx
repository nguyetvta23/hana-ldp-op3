import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function PrivacyBadge() {
    const { t } = useTranslation();

    const features = [
        {
            icon: Lock,
            key: 'localProcessing',
            color: 'text-teal-600',
            bgColor: 'bg-teal-50',
            borderColor: 'border-teal-100'
        },
        {
            icon: Eye,
            key: 'noTracking',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-100'
        },
        {
            icon: Shield,
            key: 'noUpload',
            color: 'text-teal-700',
            bgColor: 'bg-teal-50',
            borderColor: 'border-teal-100'
        },
        {
            icon: FileCheck,
            key: 'securityAudit',
            color: 'text-emerald-700',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-100'
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl border border-zinc-100 bg-gradient-to-br from-white to-zinc-50 p-12 overflow-hidden"
        >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
                {/* Header - Centered */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-600 mb-6">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-zinc-900 mb-3">
                        {t('privacy.title')}
                    </h3>
                    <p className="text-zinc-600 text-lg">{t('privacy.subtitle')}</p>
                </div>

                {/* Features grid - 2x2 on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                            className={`flex flex-col items-center text-center p-6 rounded-2xl bg-white border ${feature.borderColor} hover:shadow-md transition-all duration-300`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>

                            {/* Title */}
                            <p className="text-sm font-heading font-semibold text-zinc-900 mb-2">
                                {t(`privacy.features.${feature.key}.title`)}
                            </p>

                            {/* Description */}
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                {t(`privacy.features.${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison note - More prominent */}
                <div className="pt-8 border-t border-zinc-100">
                    <div className="flex items-start gap-3 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-5 h-5 text-teal-600" />
                        </div>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            {t('privacy.comparison')}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
