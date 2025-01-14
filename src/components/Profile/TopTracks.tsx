import Image from 'next/image';
import { Track } from '@/types/spotify';

interface TopTracksProps {
  tracks: Track[];
}

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function TopTracks({ tracks }: TopTracksProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[18px] font-bold mr-6">Top Tracks of All Time</h3>
        <button className="btn-general">SEE MORE</button>
      </div>

      <div>
        <ul className="space-y-2">
          {tracks.map((track, i) => (
            <li key={i}>
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-md hover:bg-[#282828] transition-colors group h-[64px]"
              >
                <div className="relative w-[48px] h-[48px] flex-shrink-0">
                  <Image
                    src={track.album.images[0].url}
                    alt={track.name}
                    width={48}
                    height={48}
                    className="rounded object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0 flex justify-between items-center">
                  <div className="min-w-0 flex-grow">
                    <div className="text-sm font-medium truncate">
                      {track.name}
                    </div>
                    <div className="text-sm text-zinc-400 truncate">
                      {track.artists.map(a => a.name).join(', ')} •{' '}
                      {track.album.name}
                    </div>
                  </div>
                  <div className="text-sm text-zinc-400 flex-shrink-0 ml-4">
                    {formatDuration(track.duration_ms)}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
