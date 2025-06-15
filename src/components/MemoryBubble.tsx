
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface MemoryBubbleProps {
  memory: string;
  author: string;
}

export const MemoryBubble = ({ memory, author }: MemoryBubbleProps) => {
  return (
    <Card className="max-w-xs p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-lg animate-fade-in hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className="flex items-start space-x-3">
        <Quote className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-sm text-gray-200 leading-relaxed mb-2">
            {memory}
          </p>
          <p className="text-xs text-amber-300 font-medium">
            — {author}
          </p>
        </div>
      </div>
    </Card>
  );
};
