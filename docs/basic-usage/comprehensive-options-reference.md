---
sidebar_position: 5
---

# Comprehensive Options Reference

This comprehensive reference covers all available command line options in yt-dlp, organized by category for easy navigation.

## General Options

### Help and Information

```bash
-h, --help                      # Print help text and exit
--version                       # Print program version and exit
--list-extractors               # List all supported extractors and exit
--extractor-descriptions        # Output descriptions of all supported extractors
--dump-user-agent              # Display the current user-agent and exit
```

### Updates

```bash
-U, --update                    # Update to latest version
--no-update                     # Do not check for updates (default)
--update-to [CHANNEL]@[TAG]     # Upgrade/downgrade to specific version
                                # CHANNEL: stable, nightly, master
                                # Example: --update-to nightly
```

### Error Handling

```bash
-i, --ignore-errors             # Ignore download and postprocessing errors
--no-abort-on-error            # Continue with next video on download errors (default)
--abort-on-error               # Abort downloading if error occurs
```

### Extractors

```bash
--use-extractors NAMES          # Extractors to use (comma-separated)
                                # Example: --use-extractors youtube,twitter
--default-search PREFIX         # Prefix for unqualified URLs
                                # Example: --default-search "ytsearch:"
```

### Configuration

```bash
--ignore-config                 # Don't load configuration files
--no-config-locations          # Do not load custom configuration files
--config-locations PATH         # Location of configuration file
--plugin-dirs PATH             # Additional plugin directories
--no-plugin-dirs               # Clear plugin directories
```

### Playlist Options

```bash
--flat-playlist                # Do not extract playlist entries
--no-flat-playlist             # Fully extract playlist videos (default)
--live-from-start              # Download livestreams from start
--no-live-from-start           # Download livestreams from current time (default)
--wait-for-video MIN[-MAX]     # Wait for scheduled streams
--no-wait-for-video            # Do not wait for scheduled streams (default)
--mark-watched                 # Mark videos watched
--no-mark-watched              # Do not mark videos watched (default)
```

### Appearance

```bash
--color [STREAM:]POLICY        # Color output policy
                               # Options: always, auto, never, no_color
```

### Compatibility

```bash
--compat-options OPTS          # Compatibility options for youtube-dl
--alias ALIASES OPTIONS        # Create custom aliases
-t, --preset-alias PRESET      # Apply predefined aliases
                               # Presets: mp3, aac, mp4, mkv, sleep
```

## Network Options

### Proxy and Connection

```bash
--proxy URL                     # Use specified HTTP/HTTPS/SOCKS proxy
                                # Example: --proxy socks5://127.0.0.1:1080
--socket-timeout SECONDS        # Time to wait before giving up
--source-address IP             # Client-side IP address to bind to
--impersonate CLIENT[:OS]       # Client to impersonate for requests
                                # Example: --impersonate chrome:windows-10
--list-impersonate-targets     # List available impersonation targets
-4, --force-ipv4               # Make all connections via IPv4
-6, --force-ipv6               # Make all connections via IPv6
--enable-file-urls             # Enable file:// URLs (disabled by default)
```

### Geo-restriction

```bash
--geo-verification-proxy URL    # Proxy to verify IP for geo-restricted sites
--xff VALUE                     # How to fake X-Forwarded-For HTTP header
                                # Options: default, never, IP_BLOCK, COUNTRY_CODE
```

## Video Selection

### Playlist and Item Selection

```bash
-I, --playlist-items ITEM_SPEC  # Comma separated playlist items to download
                                # Example: -I 1:3,7,-5::2
--min-filesize SIZE             # Abort if filesize smaller than SIZE
--max-filesize SIZE             # Abort if filesize larger than SIZE
--date DATE                     # Download only videos uploaded on date
--datebefore DATE               # Download videos uploaded before date
--dateafter DATE                # Download videos uploaded after date
```

### Filtering

```bash
--match-filters FILTER          # Generic video filter
                                # Example: --match-filters "like_count>100"
--no-match-filters             # Do not use any match filters
--break-match-filters FILTER    # Same as match-filters but stops download
--no-break-match-filters       # Do not use break-match-filters
```

### Playlist Behavior

```bash
--no-playlist                   # Download only the video, not playlist
--yes-playlist                  # Download the playlist if URL refers to both
--age-limit YEARS              # Download only videos suitable for age
--download-archive FILE         # Download only videos not listed in archive
--no-download-archive          # Do not use archive file
--max-downloads NUMBER          # Abort after downloading NUMBER files
--break-on-existing            # Stop when encountering file in archive
--break-per-input              # Reset break conditions per input URL
--skip-playlist-after-errors N  # Skip playlist after N failures
```

## Download Options

### Performance and Concurrency

```bash
-N, --concurrent-fragments N    # Number of fragments to download concurrently
-r, --limit-rate RATE          # Maximum download rate (e.g., 50K, 4.2M)
--throttled-rate RATE          # Minimum rate below which re-extract data
-R, --retries RETRIES          # Number of retries (default: 10, or "infinite")
--file-access-retries RETRIES   # Retries for file access errors
--fragment-retries RETRIES      # Retries for fragments
--retry-sleep [TYPE:]EXPR       # Sleep time between retries
                                # Example: --retry-sleep linear=1::2
```

### Fragment Handling

```bash
--skip-unavailable-fragments    # Skip unavailable fragments (default)
--abort-on-unavailable-fragments # Abort if fragment unavailable
--keep-fragments               # Keep downloaded fragments on disk
--no-keep-fragments            # Delete fragments after download (default)
```

### Download Behavior

```bash
--buffer-size SIZE             # Download buffer size (default: 1024)
--resize-buffer                # Auto-resize buffer (default)
--no-resize-buffer             # Do not auto-resize buffer
--http-chunk-size SIZE         # Chunk size for HTTP downloading
--playlist-random              # Download playlist in random order
--lazy-playlist               # Process playlist entries as received
--no-lazy-playlist            # Process entire playlist first (default)
--xattr-set-filesize          # Set file xattribute with expected size
```

### HLS Options

```bash
--hls-use-mpegts              # Use mpegts container for HLS videos
--no-hls-use-mpegts           # Do not use mpegts container
```

### Sections and Chapters

```bash
--download-sections REGEX      # Download only matching chapters/time-ranges
                               # Example: --download-sections "*10:15-inf"
```

### External Downloaders

```bash
--downloader [PROTO:]NAME      # External downloader to use
                               # Example: --downloader aria2c
--downloader-args NAME:ARGS    # Arguments for external downloader
```

## Filesystem Options

### Input and Output Paths

```bash
-a, --batch-file FILE          # File containing URLs to download
--no-batch-file               # Do not read URLs from batch file
-P, --paths [TYPES:]PATH       # Download paths for different file types
-o, --output [TYPES:]TEMPLATE  # Output filename template
--output-na-placeholder TEXT   # Placeholder for unavailable fields
```

### Filename Handling

```bash
--restrict-filenames           # Restrict to ASCII characters only
--no-restrict-filenames        # Allow Unicode and special characters (default)
--windows-filenames            # Force Windows-compatible filenames
--no-windows-filenames         # Minimal filename sanitization
--trim-filenames LENGTH        # Limit filename length (excluding extension)
```

### File Overwrite Behavior

```bash
-w, --no-overwrites           # Do not overwrite any files
--force-overwrites            # Overwrite all video and metadata files
--no-force-overwrites         # Do not overwrite video files (default)
-c, --continue                # Resume partially downloaded files (default)
--no-continue                 # Restart download entirely
--part                        # Use .part files (default)
--no-part                     # Write directly to output file
--mtime                       # Use Last-modified header for file time (default)
--no-mtime                    # Do not use Last-modified header
```

### Metadata Files

```bash
--write-description           # Write video description to file
--no-write-description        # Do not write description (default)
--write-info-json            # Write video metadata to JSON file
--no-write-info-json         # Do not write metadata (default)
--write-playlist-metafiles   # Write playlist metadata (default)
--no-write-playlist-metafiles # Do not write playlist metadata
--clean-info-json            # Remove internal metadata from infojson (default)
--no-clean-info-json         # Write all fields to infojson
--write-comments             # Retrieve video comments
--no-write-comments          # Do not retrieve comments
--load-info-json FILE        # Load video info from JSON file
```

### Cookies and Cache

```bash
--cookies FILE                # Read/write cookies from/to file
--no-cookies                 # Do not read/dump cookies (default)
--cookies-from-browser BROWSER[+KEYRING][:PROFILE][::CONTAINER]
                              # Load cookies from browser
--no-cookies-from-browser     # Do not load cookies from browser (default)
--cache-dir DIR               # Filesystem cache directory
--no-cache-dir               # Disable filesystem caching
--rm-cache-dir               # Delete all cache files
```

## Thumbnail Options

```bash
--write-thumbnail            # Write thumbnail image to disk
--no-write-thumbnail         # Do not write thumbnail (default)
--write-all-thumbnails       # Write all thumbnail formats
--list-thumbnails            # List available thumbnails
```

## Internet Shortcut Options

```bash
--write-link                 # Write internet shortcut file
--write-url-link             # Write .url Windows shortcut
--write-webloc-link          # Write .webloc macOS shortcut
--write-desktop-link         # Write .desktop Linux shortcut
```

## Verbosity and Simulation Options

### Output Control

```bash
-q, --quiet                # Activate quiet mode
--no-quiet                 # Deactivate quiet mode (default)
--no-warnings              # Ignore warnings
-s, --simulate             # Do not download, simulate only
--no-simulate              # Download even with print options
--ignore-no-formats-error  # Ignore "No video formats" error
--no-ignore-no-formats-error # Throw error when no formats (default)
--skip-download            # Do not download but write related files
```

### Information Output

```bash
-O, --print [WHEN:]TEMPLATE # Print field/template to screen
--print-to-file [WHEN:]TEMPLATE FILE # Print template to file
-j, --dump-json            # Print JSON information for each video
-J, --dump-single-json     # Print JSON for entire playlist in single line
--force-write-archive      # Force write archive entries
```

### Progress Display

```bash
--newline                  # Output progress as new lines
--no-progress              # Do not print progress bar
--progress                 # Show progress bar in quiet mode
--console-title            # Display progress in console title
--progress-template [TYPES:]TEMPLATE # Template for progress output
--progress-delta SECONDS   # Time between progress outputs
```

### Debug Options

```bash
-v, --verbose              # Print debugging information
--dump-pages               # Print downloaded pages (base64 encoded)
--write-pages              # Write intermediary pages to files
--print-traffic            # Display HTTP traffic
```

## Workaround Options

### Network Workarounds

```bash
--encoding ENCODING        # Force specified encoding
--legacy-server-connect    # Allow connections to legacy servers
--no-check-certificates    # Suppress HTTPS certificate validation
--prefer-insecure          # Use HTTP instead of HTTPS when possible
--add-headers FIELD:VALUE  # Add custom HTTP headers
```

### System Workarounds

```bash
--bidi-workaround          # Work around bidirectional text issues
--sleep-requests SECONDS   # Sleep between requests during extraction
--sleep-interval SECONDS   # Sleep before each download
--max-sleep-interval SECONDS # Maximum sleep time
--sleep-subtitles SECONDS  # Sleep before each subtitle download
```

## Video Format Options

### Basic Format Selection

```bash
-f, --format FORMAT           # Video format code
                              # Examples: -f best, -f "best[height<=720]"
-S, --format-sort SORTORDER   # Sort formats by specified fields
--format-sort-force          # Force user-specified sort order
--no-format-sort-force       # Allow some fields to override sort order
-F, --list-formats           # List available formats
```

### Multi-stream Options

```bash
--video-multistreams         # Allow multiple video streams
--no-video-multistreams      # Only one video stream (default)
--audio-multistreams         # Allow multiple audio streams
--no-audio-multistreams      # Only one audio stream (default)
```

### Format Preferences

```bash
--prefer-free-formats        # Prefer free containers over non-free
--no-prefer-free-formats     # No special preference for free formats (default)
--check-formats              # Check if formats are downloadable
--check-all-formats          # Check all formats for downloadability
--no-check-formats           # Do not check format availability (default)
--merge-output-format FORMAT # Container for merging formats
```

## Subtitle Options

```bash
--write-subs                 # Write subtitle file
--no-write-subs              # Do not write subtitles (default)
--write-auto-subs            # Write automatically generated subtitles
--no-write-auto-subs         # Do not write auto-generated subtitles (default)
--list-subs                  # List available subtitles
--sub-format FORMAT          # Subtitle format preference
--sub-langs LANGS            # Languages of subtitles to download
```

## Authentication Options

### Basic Authentication

```bash
-u, --username USERNAME      # Login with account ID
-p, --password PASSWORD      # Account password (will prompt if omitted)
-2, --twofactor TWOFACTOR   # Two-factor authentication code
-n, --netrc                 # Use .netrc authentication data
--netrc-location PATH       # Location of .netrc file
--netrc-cmd NETRC_CMD       # Command to get credentials
--video-password PASSWORD   # Video-specific password
```

### Adobe Pass Options

```bash
--ap-mso MSO                # Adobe Pass MSO identifier
--ap-username USERNAME       # MSO account login
--ap-password PASSWORD       # MSO account password
--ap-list-mso               # List supported MSOs
```

### Client Certificate Options

```bash
--client-certificate CERTFILE    # Path to client certificate
--client-certificate-key KEYFILE # Path to private key
--client-certificate-password PASSWORD # Private key password
```

## Post-Processing Options

### Audio Extraction

```bash
-x, --extract-audio         # Convert video files to audio-only
--audio-format FORMAT       # Audio format for conversion
                            # Formats: best, aac, alac, flac, m4a, mp3, opus, vorbis, wav
--audio-quality QUALITY     # Audio quality (0-10 or bitrate like 128K)
```

### Video Processing

```bash
--remux-video FORMAT        # Remux video to different container
--recode-video FORMAT       # Re-encode video to different format
--postprocessor-args NAME:ARGS # Arguments for postprocessors
-k, --keep-video           # Keep intermediate video file
--no-keep-video            # Delete intermediate video file (default)
--post-overwrites          # Overwrite post-processed files (default)
--no-post-overwrites       # Do not overwrite post-processed files
```

### Embedding Options

```bash
--embed-subs               # Embed subtitles in video
--no-embed-subs            # Do not embed subtitles (default)
--embed-thumbnail          # Embed thumbnail as cover art
--no-embed-thumbnail       # Do not embed thumbnail (default)
--embed-metadata           # Embed metadata in video file
--no-embed-metadata        # Do not embed metadata (default)
--embed-chapters           # Add chapter markers
--no-embed-chapters        # Do not add chapter markers (default)
--embed-info-json          # Embed infojson as attachment (mkv/mka)
--no-embed-info-json       # Do not embed infojson
```

### Metadata Modification

```bash
--parse-metadata [WHEN:]FROM:TO # Parse additional metadata
--replace-in-metadata [WHEN:]FIELDS REGEX REPLACE # Replace metadata text
--xattrs                   # Write metadata to xattrs
```

### Advanced Processing

```bash
--concat-playlist POLICY    # Concatenate playlist videos
                           # Options: never, always, multi_video
--fixup POLICY             # Automatically correct file faults
                           # Options: never, warn, detect_or_warn, force
--ffmpeg-location PATH     # Location of ffmpeg binary
--exec [WHEN:]CMD          # Execute command after processing
--no-exec                  # Remove previously defined exec commands
```

### Format Conversion

```bash
--convert-subs FORMAT      # Convert subtitles to format
                           # Formats: ass, lrc, srt, vtt
--convert-thumbnails FORMAT # Convert thumbnails to format
                           # Formats: jpg, png, webp
--split-chapters           # Split video by chapters
--no-split-chapters        # Do not split by chapters (default)
--remove-chapters REGEX    # Remove chapters matching regex
--no-remove-chapters       # Do not remove chapters (default)
--force-keyframes-at-cuts  # Force keyframes when cutting
--no-force-keyframes-at-cuts # Do not force keyframes (default)
```

### Custom Post-processors

```bash
--use-postprocessor NAME[:ARGS] # Enable plugin postprocessors
```

## SponsorBlock Options

```bash
--sponsorblock-mark CATS    # Create chapters for SponsorBlock categories
--sponsorblock-remove CATS  # Remove SponsorBlock categories from video
--sponsorblock-chapter-title TEMPLATE # Title template for SponsorBlock chapters
--no-sponsorblock          # Disable SponsorBlock
--sponsorblock-api URL     # SponsorBlock API location
```

**Available Categories**: `sponsor`, `intro`, `outro`, `selfpromo`, `preview`, `filler`, `interaction`, `music_offtopic`, `poi_highlight`, `chapter`, `all`, `default`

## Extractor Options

```bash
--extractor-retries RETRIES # Retries for known extractor errors
--allow-dynamic-mpd        # Process dynamic DASH manifests (default)
--ignore-dynamic-mpd       # Do not process dynamic DASH manifests
--hls-split-discontinuity  # Split HLS at discontinuities
--no-hls-split-discontinuity # Do not split HLS (default)
--extractor-args IE_KEY:ARGS # Pass arguments to extractors
```

## Preset Aliases

Pre-configured option combinations for common use cases:

```bash
-t mp3   # -f 'ba[acodec^=mp3]/ba/b' -x --audio-format mp3
-t aac   # -f 'ba[acodec^=aac]/ba[acodec^=mp4a.40.]/ba/b' -x --audio-format aac
-t mp4   # --merge-output-format mp4 --remux-video mp4 -S vcodec:h264,lang,quality,res,fps,hdr:12,acodec:aac
-t mkv   # --merge-output-format mkv --remux-video mkv
-t sleep # --sleep-subtitles 5 --sleep-requests 0.75 --sleep-interval 10 --max-sleep-interval 20
```

## Practical Examples

### Basic Usage

```bash
# Download best quality
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"

# Download specific format
yt-dlp -f "best[height<=720]" URL

# Download audio only as MP3
yt-dlp -x --audio-format mp3 URL

# Download with custom output template
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL
```

### Advanced Usage

```bash
# Download playlist with custom naming and archive
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
       --download-archive archive.txt PLAYLIST_URL

# Download with SponsorBlock integration and metadata
yt-dlp --sponsorblock-remove sponsor,intro,outro \
       --embed-metadata --embed-thumbnail URL

# Download with specific quality and format preferences
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
       --merge-output-format mp4 URL

# Download with proxy and rate limiting
yt-dlp --proxy socks5://127.0.0.1:1080 \
       --limit-rate 1M URL
```

### Filtering Examples

```bash
# Download only videos longer than 5 minutes
yt-dlp --match-filters "duration > 300" PLAYLIST_URL

# Download videos with more than 1000 views
yt-dlp --match-filters "view_count > 1000" URL

# Download videos uploaded in the last week
yt-dlp --dateafter "today-1week" CHANNEL_URL
```

---

This reference covers the most commonly used options. For the complete list and latest updates, run `yt-dlp --help` or visit the [official repository](https://github.com/yt-dlp/yt-dlp).
