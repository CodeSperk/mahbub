"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface CardProps {
  id: number;
  title: string;
  bgColor: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: 1,
    title: "AI দিয়ে পার্সোনালাইজড লার্নিং",
    bgColor: "bg-yellow-400",
    description: "আধুনিক প্রযুক্তি দিয়ে শেখা আরও সহজ এবং মজাদার করুন।",
  },
  {
    id: 2,
    title: "রিমোট জব/ইন্টার্ন",
    bgColor: "bg-purple-600",
    description: "৬৩০০+ স্টুডেন্ট এর সফল রিমোট কাজের গল্প শুনুন।",
  },
  {
    id: 3,
    title: "ক্রিজ লেভেলের সাপোর্ট",
    bgColor: "bg-teal-500",
    description: "চ্যালেঞ্জ মোকাবেলায় সবসময় আমাদের পাশে পাবেন।",
  },
];

const ScrollStackCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Adjust for scroll duration
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((_, index) => {
      tl.fromTo(
        `.card-${index}`, 
        { 
          y: index * 10, // Initial offset for overlap
          opacity: 1 
        }, 
        { 
          y: -index * 100, // Final y position for stacking
          scale: 1 - index * 0.1, 
          opacity: 1 - (index * 0.3), // Fade out slightly for depth
          duration: 1.5, // Adjust animation duration
          ease: "power2.out" // Add easing for smoother animation
        }, 
        index * 0.2 // Stagger card animations
      );
    });

    // Optional: Reverse animation on scroll up
    tl.reverse(); 
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Stacking Section */}
      <div ref={containerRef} className="relative h-screen">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-x-0 mx-auto w-3/4 max-w-3xl h-64 card-${index} ${card.bgColor} shadow-lg rounded-lg p-6 transform transition-transform duration-500`}
            style={{
              zIndex: cards.length - index, // Ensure correct z-index for overlap
            }}
          >
            <h2 className="text-2xl font-bold text-white">{card.title}</h2>
            <p className="text-lg text-white mt-4">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Next Section */}
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Welcome to the Next Section!</h2>
      </div>
    </div>
  );
};

export default ScrollStackCards;