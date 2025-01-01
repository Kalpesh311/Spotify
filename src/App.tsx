import { Sidebar } from '@/components/sidebar';
import { Player } from '@/components/player';
import { MainContent } from '@/components/main-content';

export default function App() {
  return (
    <div className="min-h-screen bg-spotify-gradient">
      <div className="flex h-screen pb-[88px]">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  );
}