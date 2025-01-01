import { Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 player-gradient border-t border-white/10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Album art"
            className="h-14 w-14 rounded-md object-cover"
          />
          <div>
            <h3 className="font-medium">Summer Nights</h3>
            <p className="text-sm text-muted-foreground">Acoustic Covers</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:glass-effect">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glass-effect">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="icon" className="h-8 w-8 bg-primary hover:bg-primary/80">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glass-effect">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glass-effect">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 w-[400px]">
            <span className="text-sm">2:14</span>
            <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
            <span className="text-sm">3:45</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 min-w-[150px]">
          <Volume2 className="h-4 w-4" />
          <Slider defaultValue={[70]} max={100} step={1} className="w-[80px]" />
        </div>
      </div>
    </div>
  );
}