
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Send } from 'lucide-react';
import { toast } from 'sonner';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  stageName: string;
}

export const StoryModal = ({ isOpen, onClose, stageName }: StoryModalProps) => {
  const [story, setStory] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim() || !name.trim()) return;
    
    toast.success('Thank you for sharing your memory!', {
      description: 'Your story has been added to our collection of fatherhood moments.',
      duration: 4000,
    });
    
    setStory('');
    setName('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-stone-900 border-amber-400/20 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <Heart className="h-6 w-6 text-red-400" />
            <span>Share Your {stageName} Memory</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-amber-300">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="How should we credit you?"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Label htmlFor="story" className="text-amber-300">Your Memory</Label>
            <Textarea
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Share a meaningful moment from this stage of fatherhood..."
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!story.trim() || !name.trim()}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Share Memory
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
