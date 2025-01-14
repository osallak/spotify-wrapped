import { Clock, ListMusic, Mic2, Music, User2 } from 'lucide-react';
import { NavLink } from './NavLink';
import IconSpotify from '@/icons/spotify';
import IconGithub from '@/icons/github';

export function Sidebar() {
  return (
    <>
      {/* Desktop Slim Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[88px] bg-black sm:block">
        <div className="flex h-full flex-col items-center pt-6">
          <div className="w-16 h-16 text-[#1DB954] hover:text-[#1ed760] transition-colors cursor-pointer mb-32 ">
            <IconSpotify />
          </div>
          <div className="flex flex-col items-center gap-4 mt-16">
            <NavLink href="/profile" icon={User2} label="Profile" vertical />
            <NavLink
              href="/top-artists"
              icon={Mic2}
              label="Top Artists"
              vertical
            />
            <NavLink
              href="/top-tracks"
              icon={Music}
              label="Top Tracks"
              vertical
            />
            <NavLink href="/recent" icon={Clock} label="Recent" vertical />
            <NavLink
              href="/playlists"
              icon={ListMusic}
              label="Playlists"
              vertical
            />
          </div>
          <a
            href="https://github.com/osallak"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto mb-8 w-8 h-8 text-white/60 hover:text-white transition-colors"
          >
            <IconGithub />
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-gray-800 bg-black sm:hidden">
        <div className="mx-auto grid h-16 max-w-lg grid-cols-5">
          <NavLink href="/profile" icon={User2} label="Profile" />
          <NavLink href="/top-artists" icon={Mic2} label="Artists" />
          <NavLink href="/top-tracks" icon={Music} label="Tracks" />
          <NavLink href="/recent" icon={Clock} label="Recent" />
          <NavLink href="/playlists" icon={ListMusic} label="Playlists" />
        </div>
      </nav>
    </>
  );
}
