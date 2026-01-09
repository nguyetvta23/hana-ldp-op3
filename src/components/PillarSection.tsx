import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface PillarSectionProps {
    // Pillar headline (e.g., "AI that understands.")
    headline: string;
    // Brief description (1-2 sentences)
    description: string;
    // Product image source
    imageSrc?: string;
    // Image alt text
    imageAlt?: string;
    // Layout variant: 'center', 'left', 'right'
    layout?: 'center' | 'left' | 'right';
    // Optional icon row for security section
    icons?: ReactNode;
    // Background color
    bgColor?: 'white' | 'zinc';
    // Image size: 'small', 'default', 'large'
    imageSize?: 'small' | 'default' | 'large';
}

/**
 * PillarSection - Apple Minimalist style section component
 * 
 * Mỗi pillar bao gồm:
 * - Large headline (text-headline)
 * - Brief description (text-subheadline)
 * - Optional product image hoặc icons
 * 
 * Supports 3 layouts:
 * - center: Text centered, image below
 * - left: Text left, image right
 * - right: Text right, image left
 */
export function PillarSection({
    headline,
    description,
    imageSrc,
    imageAlt = 'Product screenshot',
    layout = 'center',
    icons,
    bgColor = 'white',
    imageSize = 'default',
}: PillarSectionProps) {
    const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-zinc-50';

    // Image size classes
    const imageSizeClass = {
        small: 'max-w-md',
        default: 'max-w-2xl',
        large: 'max-w-4xl',
    }[imageSize];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    // Centered layout
    if (layout === 'center') {
        return (
            <section className={`py-section ${bgClass}`}>
                <div className="max-w-content mx-auto px-6">
                    {/* Text content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        variants={fadeInUp}
                        className="text-container mb-16"
                    >
                        <h2 className="text-headline text-zinc-900 mb-6">
                            {headline}
                        </h2>
                        <p className="text-subheadline text-zinc-500">
                            {description}
                        </p>
                    </motion.div>

                    {/* Icons row (for security section) */}
                    {icons && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={fadeInUp}
                            className="flex justify-center gap-12 flex-wrap"
                        >
                            {icons}
                        </motion.div>
                    )}

                    {/* Product image */}
                    {imageSrc && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            variants={fadeInUp}
                        >
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className={`product-image ${imageSizeClass} mx-auto`}
                            />
                        </motion.div>
                    )}
                </div>
            </section>
        );
    }

    // Left/Right alternating layout
    const isLeft = layout === 'left';

    return (
        <section className={`py-section ${bgClass}`}>
            <div className="max-w-content mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-16 items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={fadeInUp}
                        className={isLeft ? 'order-2 md:order-1' : 'order-2'}
                    >
                        {imageSrc && (
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full rounded-2xl shadow-product"
                            />
                        )}
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        variants={fadeInUp}
                        className={`${isLeft ? 'order-1 md:order-2 text-right' : 'order-1 text-left'}`}
                    >
                        <h2 className="text-headline text-zinc-900 mb-6">
                            {headline}
                        </h2>
                        <p className="text-xl text-zinc-500 leading-relaxed max-w-md ${isLeft ? 'ml-auto' : ''}">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
