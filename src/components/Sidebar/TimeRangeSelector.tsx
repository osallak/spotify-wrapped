interface TimeRangeSelectorProps {
  timeRange: string;
  onChange: (range: 'short_term' | 'medium_term' | 'long_term') => void;
}

export function TimeRangeSelector({
  timeRange,
  onChange,
}: TimeRangeSelectorProps) {
  return (
    <div className="ml-9 mt-2 space-y-1">
      <button
        onClick={() => onChange('short_term')}
        className={`btn-global !p-1 !text-sm text-left w-full ${
          timeRange === 'short_term' ? '!text-spotify-green' : '!text-gray-400'
        }`}
      >
        Last 4 weeks
      </button>
      <button
        onClick={() => onChange('medium_term')}
        className={`btn-global !p-1 !text-sm text-left w-full ${
          timeRange === 'medium_term' ? '!text-spotify-green' : '!text-gray-400'
        }`}
      >
        Last 6 months
      </button>
      <button
        onClick={() => onChange('long_term')}
        className={`btn-global !p-1 !text-sm text-left w-full ${
          timeRange === 'long_term' ? '!text-spotify-green' : '!text-gray-400'
        }`}
      >
        All time
      </button>
    </div>
  );
}
