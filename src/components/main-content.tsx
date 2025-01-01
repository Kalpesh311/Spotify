import { Play, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const featuredPlaylists = [
  {
    title: 'Chill Lofi Beats',
    description: 'Perfect for studying and relaxation',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    songs: '234 songs'
  },
  {
    title: 'Workout Energy',
    description: 'High-energy tracks for your workout',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    songs: '180 songs'
  },
  {
    title: 'Jazz Classics',
    description: 'Timeless jazz masterpieces',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    songs: '156 songs'
  },
  {
    title: 'Indie Discoveries',
    description: 'Fresh indie tracks you need to hear',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    songs: '198 songs'
  }
];

export function MainContent() {
  return (
    <ScrollArea className="flex-1 px-6 py-4">
      <div className="space-y-6 relative z-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">Good afternoon</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredPlaylists.map((playlist, i) => (
              <div
                key={`${playlist.title}-${i}`}
                className="group relative glass-effect rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold mb-1">{playlist.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {playlist.description}
                </p>
                <p className="text-sm text-muted-foreground">{playlist.songs}</p>
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/80"
                >
                  <Play className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:glass-effect"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}