
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TimelineStageProps {
  stage: {
    id: string;
    title: string;
    quote: string;
    description: string;
    image: string;
    icon: LucideIcon;
    color: string;
  };
  index: number;
  isActive: boolean;
  onAddStory: () => void;
}

export const TimelineStage = ({ stage, index, isActive, onAddStory }: TimelineStageProps) => {
  const IconComponent = stage.icon;
  
  return (
    <section className={`min-h-screen flex items-center justify-center p-6 relative transition-all duration-1000 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
    }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`} />
      
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-1000 ${
          index % 2 === 0 ? 'md:order-1' : 'md:order-2'
        } ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-80'}`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <span className="text-white/60 text-lg font-semibold">Stage {index + 1}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {stage.title}
          </h2>
          
          <blockquote className="text-2xl md:text-3xl text-amber-300 italic font-light mb-6 border-l-4 border-amber-400 pl-6">
            "{stage.quote}"
          </blockquote>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {stage.description}
          </p>
          
          <Button
            onClick={onAddStory}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 text-lg group transition-all duration-300 hover:scale-105"
          >
            <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            Share Your Memory
          </Button>
        </div>
        
        <div className={`transition-all duration-1000 ${
          index % 2 === 0 ? 'md:order-2' : 'md:order-1'
        } ${isActive ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-8 opacity-80 scale-95'}`}>
          <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="aspect-square overflow-hidden">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </Card>
        </div>
      </div>
      
      {/* Connecting Path */}
      {index < 4 && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-amber-400/60 to-transparent" />
      )}
    </section>
  );
};
