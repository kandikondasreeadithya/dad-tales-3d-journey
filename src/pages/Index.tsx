

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ArrowDown, Users, BookOpen, GraduationCap, Baby } from 'lucide-react';
import { TimelineStage } from '@/components/TimelineStage';
import { MemoryBubble } from '@/components/MemoryBubble';
import { StoryModal } from '@/components/StoryModal';

const Index = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      id: 'chaos',
      title: 'New Dad Chaos',
      quote: "Everything changed, overnight.",
      description: "The beautiful chaos of becoming a father - sleepless nights, endless love, and discovering strength you never knew you had.",
      image: '/lovable-uploads/ef82e253-9273-4b07-9bc2-69e88771dfcf.png',
      icon: Baby,
      color: 'from-blue-900/20 to-indigo-900/30'
    },
    {
      id: 'learning',
      title: 'The Learning Curve',
      quote: "Every day is a lesson in love.",
      description: "From first steps to first words, from scraped knees to bedtime stories - learning to be the dad your child needs.",
      image: '/lovable-uploads/162dd9ca-7251-421e-ab23-f3761b964d30.png',
      icon: BookOpen,
      color: 'from-amber-900/20 to-orange-900/30'
    },
    {
      id: 'teaching',
      title: 'Teaching Years',
      quote: "Watching them grow, learning as they learn.",
      description: "Teaching life lessons through bike rides, homework sessions, and heart-to-heart conversations that shape who they become.",
      image: '/lovable-uploads/0448c46f-1855-4529-872f-293259294a34.png',
      icon: BookOpen,
      color: 'from-green-900/20 to-emerald-900/30'
    },
    {
      id: 'letting-go',
      title: 'Letting Go',
      quote: "The hardest lesson is learning to let them fly.",
      description: "Graduation days, empty bedrooms, and the bittersweet pride of watching them become independent adults.",
      image: '/lovable-uploads/28d0a90c-1f21-41a4-9db4-219fcdd2209f.png',
      icon: GraduationCap,
      color: 'from-purple-900/20 to-violet-900/30'
    },
    {
      id: 'grandpa',
      title: 'Proud Grandpa',
      quote: "The journey never ends—it multiplies.",
      description: "The circle of life completes as you hold your grandchild, understanding that love truly knows no bounds.",
      image: '/lovable-uploads/5e0724c4-a07c-438b-93a2-935838022eed.png',
      icon: Users,
      color: 'from-rose-900/20 to-pink-900/30'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newStage = Math.min(Math.floor(scrollY / (windowHeight * 0.8)), stages.length - 1);
      setCurrentStage(newStage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openStoryModal = (stageIndex: number) => {
    setSelectedStage(stageIndex);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-stone-900 to-amber-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30 z-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse" />
        </div>
        
        <div className="text-center z-20 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Journey of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Fatherhood
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-300">
            A cinematic exploration through the stages of being a dad
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg animate-fade-in animation-delay-500"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Begin the Journey
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative">
        {stages.map((stage, index) => (
          <TimelineStage
            key={stage.id}
            stage={stage}
            index={index}
            isActive={currentStage === index}
            onAddStory={() => openStoryModal(index)}
          />
        ))}
      </div>

      {/* Floating Memory Bubbles */}
      <div className="fixed top-20 right-6 z-30 space-y-4">
        <MemoryBubble 
          memory="Teaching him to ride a bike was harder on me than him - watching him wobble away was my first lesson in letting go."
          author="Mike, Dad of 2"
        />
        <MemoryBubble 
          memory="The first time she said 'I love you daddy' - nothing in the world has ever sounded sweeter."
          author="James, New Dad"
        />
      </div>

      {/* Happy Father's Day Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="space-y-8 animate-fade-in">
            <div className="text-center md:text-left">
              <Heart className="h-16 w-16 text-red-400 mx-auto md:mx-0 mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Happy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
                  Father's Day
                </span>
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                Behind every father's smile lies a universe of silent sacrifices. The sleep he gave up to comfort your nightmares, 
                the dreams he postponed to fund yours, the fears he conquered to become your hero.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                He worked longer hours without complaint, carried worries he never shared, and found strength in moments when 
                he felt weakest—all because loving you became his greatest purpose. His rough hands tell stories of labor 
                and love, his tired eyes reflect years of watching over you, and his heart beats with a love so profound 
                it reshapes his very existence.
              </p>
              
              <p className="text-lg md:text-xl text-amber-200 leading-relaxed font-medium">
                Today we honor not just fathers, but the quiet heroes who transformed their lives the moment they held us. 
                Thank you, Dad, for every sacrifice seen and unseen, for being our first love and our forever protector.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg mt-8"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Celebrate All Fathers
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="animate-fade-in animation-delay-300">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Father and son embracing in a warm hug"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <StoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stageName={stages[selectedStage].title}
      />
    </div>
  );
};

export default Index;

