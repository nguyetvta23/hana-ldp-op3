import { motion } from 'framer-motion';

interface ProductImageProps {
    // Image source
    src: string;
    // Alt text for accessibility
    alt: string;
    // Optional caption below image
    caption?: string;
    // Size variant
    size?: 'default' | 'large' | 'full';
}

/**
 * ProductImage - Apple-style product showcase image
 * 
 * Features:
 * - Deep shadow (shadow-product)
 * - Rounded corners (rounded-2xl)
 * - Responsive sizing
 * - Optional caption
 * - Scroll-triggered animation
 */
export function ProductImage({
    src,
    alt,
    caption,
    size = 'default',
}: ProductImageProps) {
    // Size classes
    const sizeClasses = {
        default: 'max-w-4xl',
        large: 'max-w-5xl',
        full: 'max-w-6xl',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`${sizeClasses[size]} mx-auto px-6`}
        >
            <div className="relative rounded-2xl shadow-product overflow-hidden bg-zinc-100">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            {caption && (
                <p className="text-center text-sm text-zinc-400 mt-4">
                    {caption}
                </p>
            )}
        </motion.div>
    );
}
