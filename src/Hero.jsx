import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const revealGroupRef = useRef(null);
    const headlineRef = useRef(null); 
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Initial positions
            gsap.set(".car-image", { x: "-10vw" });
            gsap.set(revealGroupRef.current, { x: "0vw" });

            gsap.from(headlineRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: true,
                    pin: true,
                },
            });

            // Move car + mask together
            tl.to(revealGroupRef.current, {
                x: "120vw",
                ease: "none",
                duration: 3,
            });

            // Cards animation
            tl.from(cardsRef.current, {
                opacity: 0,
                y: 80,
                stagger: 0.3,
                duration: 1,
            }, 1);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#0f1115]"
        >
            {/* Green Strip */}
            <div className="absolute top-[30%] left-0 w-full h-[320px] flex items-center justify-center bg-gradient-to-r from-emerald-400 to-green-500">
                <h1
                    ref={headlineRef}   
                    className="text-[9vw] font-extrabold text-black tracking-tight"
                >
                    WELCOME ITZFIZZ
                </h1>
            </div>

            {/* Moving Group (Mask + Car Together) */}
            <div
                ref={revealGroupRef}
                className="absolute top-[30%] left-0 w-full h-[320px] flex items-center z-30"
            >
                <div className="absolute inset-0 bg-black z-10" />

                <img
                    src="/src/assets/bugatti.png"
                    alt="Car"
                    className="car-image relative z-20 mt-14 w-[950px] h-[650px] will-change-transform drop-shadow-2xl"
                />
            </div>

            {/* Cards */}
            <div className="absolute bottom-40 w-full flex justify-center gap-14 z-40">
                {[
                    { text: "58%", desc: "Increase in pick up point use" },
                    { text: "23%", desc: "Decreased in customer phone calls" },
                    { text: "40%", desc: "Customer retention boost" },
                ].map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="relative 
                 bg-white/5 
                 backdrop-blur-xl 
                 border border-white/10 
                 shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                 p-12 
                 rounded-2xl 
                 w-[420px] 
                 text-center 
                 transition-all 
                 duration-300 
                 hover:-translate-y-3 
                 hover:shadow-[0_35px_70px_rgba(0,0,0,0.5)]"
                    >
                        <h2 className="text-6xl font-bold text-white tracking-tight">
                            {card.text}
                        </h2>

                        <p className="mt-5 text-gray-400 text-lg leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;