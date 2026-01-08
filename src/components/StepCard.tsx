interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
    return (
        <div className="flex gap-6">
            {/* Step Number - minimalist */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-teal-600">{number}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold mb-3 text-zinc-900">{title}</h3>
                <p className="text-zinc-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
