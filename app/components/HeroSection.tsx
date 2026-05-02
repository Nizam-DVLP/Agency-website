import Grainient from './Grainient';
import Navbar from './Navbar';

export default function HeroSection() {
    return (
        <section className="bg-white px-4 py-1 md:px-4">
            <Navbar />
            <div className="mx-auto max-w-9xl relative overflow-hidden rounded-[2.5rem] bg-[#F3F4F6] p-8 md:p-12 lg:p-16 min-h-[650px] flex flex-col justify-between">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0">
                    <Grainient
                        color1="#aba6ab"
                        color2="#8175b3"
                        color3="#B497CF"
                        timeSpeed={0.30}
                        colorBalance={0}
                        warpStrength={1}
                        warpFrequency={5}
                        warpSpeed={2}
                        warpAmplitude={50}
                        blendAngle={0}
                        blendSoftness={0.05}
                        rotationAmount={500}
                        noiseScale={2}
                        grainAmount={0.1}
                        grainScale={2}
                        grainAnimated={false}
                        contrast={1.5}
                        gamma={1}
                        saturation={1}
                        centerX={0}
                        centerY={0}
                        zoom={0.9}
                    />
                </div>


                {/* Hero Content */}
                <div className="relative z-10 mt-auto grid grid-cols-1 items-end lg:grid-cols-2 gap-12 pb-8">
                    <div className="max-w-xl">
                        <p className="mb-6 text-sm font-semibold text-black/60 leading-relaxed uppercase tracking-widest font-poppins">
                            Save time and money.<br />
                            Automated Inventory Management
                        </p>
                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-black leading-[0.9]">
                            Optimize,<br />
                            Outperform
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
