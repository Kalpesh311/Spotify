import { Home, Library, Plus, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SpotifyLogo } from './icons/spotify-logo';

const playlists = [
  'Discover Weekly',
  'Release Radar',
  'Daily Mix 1',
  'Daily Mix 2',
  'Liked Songs',
  'Your Episodes',
  'Top Hits 2024',
  'Chill Vibes',
  'Workout Essentials',
  'Road Trip Mix',
];

export function Sidebar() {
  return (
    <div className="pb-12 w-[300px] sidebar-gradient">
      <div className="p-6">
        <SpotifyLogo />
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Navigation</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start glass-effect">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:glass-effect">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:glass-effect">
              <Library className="mr-2 h-4 w-4" />
              Your Library
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Playlists</h2>
          <Button variant="outline" className="w-full justify-start mb-2 glass-effect">
            <Plus className="mr-2 h-4 w-4" />
            Create Playlist
          </Button>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              {playlists.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal hover:glass-effect"
                >
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}