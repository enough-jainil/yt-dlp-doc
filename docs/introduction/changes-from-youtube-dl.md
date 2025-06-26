---
sidebar_position: 3
---

# Changes from YouTube-DL

yt-dlp is a feature-rich fork of youtube-dl with significant improvements and new capabilities. This page outlines the major changes and improvements.

## Project Origins

- **Forked from**: [yt-dlc@f9401f2](https://github.com/blackjack4494/yt-dlc/commit/f9401f2a91987068139c5f757b12fc711d4c0cee)
- **Merged with**: [youtube-dl@a08f2b7](https://github.com/ytdl-org/youtube-dl/commit/a08f2b7e4567cdc50c0614ee0a4ffdff49b8b6e6)
- **Base**: Includes most features from [animelover1984/youtube-dl](https://github.com/animelover1984/youtube-dl)

## New Features

### SponsorBlock Integration

- **Mark/remove sponsor segments** in YouTube videos using the [SponsorBlock](https://sponsor.ajay.app) API
- **Automatic chapter creation** for different segment types
- **Customizable segment removal** with fine-grained control

### Format Sorting

- **Improved default sorting** prioritizing higher resolution and better codecs over bitrate
- **Custom sort orders** using `-S` option with multiple criteria
- **More intuitive format selection** than simple `--format` usage

### YouTube Improvements

- **Clips and Stories support** (`ytstories:<channel UCID>`)
- **Enhanced search** with filters, YouTube Music Search, channel-specific search
- **Search prefixes** (`ytsearch:`, `ytsearchdate:`)
- **Mixes and Feeds** (`:ytfav`, `:ytwatchlater`, `:ytsubs`, `:ythistory`, `:ytrec`, `:ytnotif`)
- **N-sig based throttling fixes**
- **Livestream downloads from start** using `--live-from-start` (_experimental_)
- **Complete channel downloads** including shorts and live content
- **OAuth login support**

### Browser Integration

- **Automatic cookie extraction** from all major browsers using `--cookies-from-browser`
- **Multiple browser support** with profile and container selection
- **Keyring integration** for secure cookie decryption

### Advanced Download Features

- **Time range downloads** using `--download-sections` with timestamps or chapters
- **Chapter-based splitting** using `--split-chapters`
- **Multi-threaded fragment downloads** with `--concurrent-fragments`
- **Aria2c support** for DASH/HLS formats

### Enhanced Extractors

- **Many new extractors** for various platforms
- **Fixed existing extractors** with improved reliability
- **New MSOs** (Philo, Spectrum, SlingTV, Cablevision, RCN, etc.)
- **Subtitle extraction from manifests**

### Output and Organization

- **Multiple output templates** and download paths for different file types
- **Temporary path support** using `--paths`
- **Portable configuration** with automatic loading from multiple locations
- **Advanced output template features** with date-time formatting, numeric offsets, object traversal

### Metadata and Processing

- **Enhanced metadata parsing** with `--parse-metadata` and `--replace-in-metadata`
- **Advanced metadata operations** including custom field creation
- **Improved post-processing** with more options and control

### Additional Features

- **Plugin system** for custom extractors and post-processors
- **Self-updater** with multiple release channels (stable, nightly, master)
- **Automated builds** and continuous integration
- **Many new command-line options** for fine-tuned control

## Default Behavior Differences

yt-dlp's default behavior differs from youtube-dl in several important ways:

### Python Version Support

- **yt-dlp**: Supports Python 3.9+ (CPython) and 3.10+ (PyPy), with EOL version removal
- **youtube-dl**: Still supports Python 2.6+ and 3.2+

### Removed Features

- **No longer supported**: `--auto-number` (`-A`), `--title` (`-t`), `--literal` (`-l`)
- **No avconv support**: Only ffmpeg is supported for media processing

### Configuration

- **Different config locations**: yt-dlp uses slightly different paths than youtube-dl
- **See [Configuration](/docs/configuration)** for correct locations

### Output Templates

- **Default template**: `%(title)s [%(id)s].%(ext)s` (was `%(title)s-%(id)s.%(ext)s`)
- **Reason**: Changed before public release, now maintained for compatibility
- **Override**: Use `--compat-options filename` for old behavior

### Format Selection and Sorting

- **New default sorting**: Prefers higher resolution and better codecs over bitrate
- **Custom sorting**: Use `--format-sort` for any desired order
- **Compatibility**: Use `--compat-options format-sort` for youtube-dl sorting
- **VP9 preference**: Older versions preferred VP9; use `--compat-options prefer-vp9-sort` to revert

### Format Selector

- **Default**: `bv*+ba/b` (prefers combined format if better than best video-only)
- **youtube-dl behavior**: Use `-f bv+ba/b` or `--compat-options format-spec`

### Multi-stream Handling

- **Default**: Single audio/video streams (unlike youtube-dlc)
- **Enable multi-streams**: Use `--audio-multistreams` and `--video-multistreams`
- **Compatibility**: Use `--compat-options multistreams` for both

### Error Handling

- **Default**: `--no-abort-on-error` is enabled
- **Continue on errors** by default instead of aborting
- **Old behavior**: Use `--abort-on-error` or `--compat-options abort-on-error`

### Metadata Files

- **Playlist metadata**: Written by default for playlists when writing video metadata
- **Disable**: Use `--no-write-playlist-metafiles` or `--compat-options no-playlist-metafiles`

### Metadata Embedding

- **InfoJSON attachment**: Attached to MKV files when using `--add-metadata` with `--write-info-json`
- **Disable**: Use `--no-embed-info-json` or `--compat-options no-attach-info-json`
- **Different fields**: Some metadata mapped to different fields than youtube-dl
- **Revert**: Use `--compat-options embed-metadata`

### Playlist Indexing

- **Behavior change**: `playlist_index` behaves differently with `--playlist-reverse` and `--playlist-items`
- **Compatibility**: Use `--compat-options playlist-index` for old behavior

### Output Format

- **List formats**: New format for `-F` output
- **Old format**: Use `--compat-options list-formats`

### Live Chat

- **Treated as subtitles**: Live chats downloaded as subtitle tracks
- **Exclude**: Use `--sub-langs all,-live_chat`
- **Disable**: Use `--compat-options no-live-chat`

### YouTube Channel URLs

- **Download all uploads**: Channel URLs download entire channel content
- **Tab-specific**: Pass tab URLs for specific content
- **Error handling**: `/live` URLs error if no live videos
- **Disable redirects**: Use `--compat-options no-youtube-channel-redirect`

### YouTube Playlists

- **Unavailable videos**: Listed in playlists instead of silently skipped
- **Hide unavailable**: Use `--compat-options no-youtube-unavailable-videos`

### Date Handling

- **UTC dates**: YouTube upload dates extracted in UTC
- **Processing**: Downloading and merging in single step when possible with ffmpeg
- **Disable**: Use `--compat-options no-direct-merge`

### Thumbnail Embedding

- **Mutagen preferred**: Uses mutagen for MP4 thumbnail embedding when available
- **Force AtomicParsley**: Use `--compat-options embed-thumbnail-atomicparsley`

### InfoJSON Cleaning

- **Internal metadata removed**: Filenames and internal data removed by default
- **Keep all**: Use `--no-clean-infojson` or `--compat-options no-clean-infojson`

### Subtitle Embedding

- **Behavior**: When both `--embed-subs` and `--write-subs` used, subs are written and embedded
- **Old behavior**: Use `--compat-options no-keep-subs`

### SSL Certificates

- **Certifi used**: Uses certifi for SSL certificates when installed
- **System certificates**: Use `--compat-options no-certifi`

### Filename Sanitization

- **Improved sanitization**: Smarter invalid character handling
- **Old method**: Use `--compat-options filename-sanitization`

## Compatibility Options

For users migrating from youtube-dl or youtube-dlc, several compatibility modes are available:

### Quick Compatibility

```bash
# For youtube-dl users
--compat-options youtube-dl

# For youtube-dlc users
--compat-options youtube-dlc

# For specific years
--compat-options 2021  # Includes older behaviors
--compat-options 2022  # Includes some newer changes
--compat-options 2023  # More recent defaults
```

### Individual Options

```bash
# Specific compatibility options
--compat-options filename,format-sort,no-live-chat
```

### All Options (Not Recommended)

```bash
# Enable all compatibility options
--compat-options all
```

> **Warning**: Using `--compat-options all` is not recommended as it may include conflicting options.

## Deprecated Options

yt-dlp maintains compatibility with most youtube-dl options while providing improved alternatives:

### Almost Redundant

- `-j, --dump-json` → `--print "%()j"`
- `-F, --list-formats` → `--print formats_table`
- `--list-thumbnails` → `--print thumbnails_table`

### Redundant but Common

- `--get-title` → `--print title`
- `--get-id` → `--print id`
- `--get-url` → `--print urls`

### Not Recommended

- `--force-generic-extractor` → `--ies generic,default`
- `--all-formats` → `-f all`
- `--print-json` → `-j --no-simulate`

See the [complete list of deprecated options](https://github.com/yt-dlp/yt-dlp#deprecated-options) in the official documentation.

## Migration Guide

For users switching from youtube-dl:

1. **Install yt-dlp** using your preferred method
2. **Review new features** that may benefit your use case
3. **Update scripts** to use new options where beneficial
4. **Use compatibility options** temporarily if needed
5. **Gradually adopt** new features and improved defaults

The transition is generally seamless, with most youtube-dl commands working identically in yt-dlp while offering additional capabilities.
