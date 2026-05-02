import PillNav from './PillNav';

export default function Navbar() {
    return (
        <div className="relative z-[1001] mt-5">
            <PillNav
                logo="" // Placeholder or add logo path if available
                logoAlt="Agency Logo"
                items={[
                    { label: 'Technology', href: '#technology' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'About', href: '#about' },
                    { label: 'Blog', href: '#blog' },
                    { label: 'View Demo', href: '#demo' }
                ]}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#ffffff"
                pillColor="#000000"
                hoveredPillTextColor="#000000"
                pillTextColor="#ffffff"
                theme="light"
                initialLoadAnimation={false}
            />
        </div>
    );
}
