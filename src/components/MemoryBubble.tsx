
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface MemoryBubbleProps {
  memory: string;
  author: string;
}

export const MemoryBubble = ({
  memory,
  author
}: MemoryBubbleProps) => {
  return (
    <Card className="max-w-xs bg-white/10 backdrop-blur-md border-white/20 p-4 shadow-lg animate-fade-in" style={{ animationDelay: '700ms' }}>
      <div className="flex items-start space-x-3">
        <Quote className="h-5 w-5 text-amber-300/80 flex-shrink-0 mt-1" />
        <div>
          <p className="text-sm text-white/90 italic">"{memory}"</p>
          <p className="text-xs text-right mt-2 text-amber-200/70">- {author}</p>
        </div>
      </div>
    </Card>
  );
};
