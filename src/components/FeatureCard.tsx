interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group p-8 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
            <div className="mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-zinc-900">{title}</h3>
            <p className="text-zinc-600 leading-relaxed">{description}</p>
        </div>
    );
}
