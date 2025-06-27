---
sidebar_position: 2
---

# Command Line Options Reference

This comprehensive reference covers all available command line options in yt-dlp, organized by category for easy navigation.

## General Options

### Help and Information

Print help text and exit

```bash
-h
```

or

```bash
--help
```

Print program version and exit

```bash
--version
```

List all supported extractors and exit

```bash
--list-extractors
```

Output descriptions of all supported extractors

```bash
--extractor-descriptions
```

Display the current user-agent and exit

```bash
--dump-user-agent
```

### Updates

Update to latest version

```bash
-U
```

or

```bash
--update
```

Do not check for updates (default)

```bash
--no-update
```

Upgrade/downgrade to specific version
CHANNEL: stable, nightly, master
Example: --update-to nightly

```bash
--update-to [CHANNEL]@[TAG]
```

### Error Handling

Ignore download and postprocessing errors

```bash
-i
```

or

```bash
--ignore-errors
```

Continue with next video on download errors (default)

```bash
--no-abort-on-error
```

Abort downloading if error occurs

```bash
--abort-on-error
```

### Extractors

Extractors to use (comma-separated)
Example: --use-extractors youtube,twitter

```bash
--use-extractors NAMES
```

Prefix for unqualified URLs
Example: --default-search "ytsearch:"

```bash
--default-search PREFIX
```

### Configuration

Do not load configuration files

```bash
--ignore-config
```

Do not load custom configuration files

```bash
--no-config-locations
```

Location of configuration file

```bash
--config-locations PATH
```

Additional plugin directories

```bash
--plugin-dirs PATH
```

Clear plugin directories

```bash
--no-plugin-dirs
```

### Playlist Options

Do not extract playlist entries

```bash
--flat-playlist
```

Fully extract playlist videos (default)

```bash
--no-flat-playlist
```

Download livestreams from start

```bash
--live-from-start
```

Download livestreams from current time (default)

```bash
--no-live-from-start
```

Wait for scheduled streams

```bash
--wait-for-video MIN[-MAX]
```

Do not wait for scheduled streams (default)

```bash
--no-wait-for-video
```

Mark videos watched

```bash
--mark-watched
```

Do not mark videos watched (default)

```bash
--no-mark-watched
```

### Appearance

Color output policy
Options: always, auto, never, no_color

```bash
--color [STREAM:]POLICY
```

### Compatibility

Compatibility options for youtube-dl

```bash
--compat-options OPTS
```

Create custom aliases

```bash
--alias ALIASES OPTIONS
```

Apply predefined aliases
Presets: mp3, aac, mp4, mkv, sleep

```bash
-t
```

or

```bash
--preset-alias PRESET
```

## Network Options

### Proxy and Connection

Use specified HTTP/HTTPS/SOCKS proxy

```bash
--proxy URL
```

Time to wait before giving up

```bash
--socket-timeout SECONDS
```

Client-side IP address to bind to

```bash
--source-address IP
```

Client to impersonate for requests

```bash
--impersonate CLIENT[:OS]
```

List available impersonation targets

```bash
--list-impersonate-targets
```

Make all connections via IPv4

```bash
-4
```

or

```bash
 --force-ipv4
```

Make all connections via IPv6

```bash
-6
```

or

```bash
--force-ipv6
```

Enable file:// URLs

```bash
--enable-file-urls
```

### Geo-restriction

Proxy to verify IP for geo-restricted sites

```bash
--geo-verification-proxy URL
```

How to fake X-Forwarded-For HTTP header
Options: default, never, IP_BLOCK, COUNTRY_CODE

```bash
--xff VALUE
```

## Video Selection

### Playlist and Item Selection

Comma separated playlist items to download
Example: -I 1:3,7,-5::2

```bash
-I
```

or

```bash
--playlist-items ITEM_SPEC
```

Abort if filesize smaller than SIZE

```bash
--min-filesize SIZE
```

Abort if filesize larger than SIZE

```bash
--max-filesize SIZE
```

Download only videos uploaded on date

```bash
--date DATE
```

Download videos uploaded before date

```bash
--datebefore DATE
```

Download videos uploaded after date

```bash
--dateafter DATE
```

### Filtering

Generic video filter
Example: --match-filters "like_count>100"

```bash
--match-filters FILTER
```

Do not use any match filters

```bash
--no-match-filters
```

Same as match-filters but stops download

```bash
--break-match-filters FILTER
```

Do not use break-match-filters

```bash
--no-break-match-filters
```

### Playlist Behavior

Download only the video, not playlist

```bash
--no-playlist
```

Download the playlist if URL refers to both

```bash
--yes-playlist
```

Download only videos suitable for age

```bash
--age-limit YEARS
```

Download only videos not listed in archive

```bash
--download-archive FILE
```

Do not use archive file

```bash
--no-download-archive
```

Abort after downloading NUMBER files

```bash
--max-downloads NUMBER
```

Stop when encountering file in archive

```bash
--break-on-existing
```

Reset break conditions per input URL

```bash
--break-per-input
```

Skip playlist after N failures

```bash
--skip-playlist-after-errors N
```

## Download Options

### Performance and Concurrency

Number of fragments to download concurrently

```bash
-N
```

or

```bash
--concurrent-fragments N
```

Maximum download rate (e.g., 50K, 4.2M)

```bash
-r
```

or

```bash
--limit-rate RATE
```

Minimum rate below which re-extract data

```bash
--throttled-rate RATE
```

Number of retries (default: 10, or "infinite")

```bash
-R
```

or

```bash
--retries RETRIES
```

Retries for file access errors

```bash
--file-access-retries RETRIES
```

Retries for fragments

```bash
--fragment-retries RETRIES
```

Sleep time between retries

```bash
--retry-sleep [TYPE:]EXPR
```

### Fragment Handling

Skip unavailable fragments (default)

```bash
--skip-unavailable-fragments
```

Abort if fragment unavailable

```bash
--abort-on-unavailable-fragments
```

Keep downloaded fragments on disk

```bash
--keep-fragments
```

Delete fragments after download (default)

```bash
--no-keep-fragments
```

### HLS Options

Use mpegts container for HLS videos

```bash
--hls-use-mpegts
```

Do not use mpegts container

```bash
--no-hls-use-mpegts
```

### Download Behavior

Download buffer size (default: 1024)

```bash
--buffer-size SIZE
```

Auto-resize buffer (default)

```bash
--resize-buffer
```

Do not auto-resize buffer

```bash
--no-resize-buffer
```

Chunk size for HTTP downloading

```bash
--http-chunk-size SIZE
```

Download playlist in random order

```bash
--playlist-random
```

Process playlist entries as received

```bash
--lazy-playlist
```

Process entire playlist first (default)

```bash
--no-lazy-playlist
```

Set file xattribute with expected size

```bash
--xattr-set-filesize
```

### Sections and Chapters

Download only matching chapters/time-ranges
Example: --download-sections "\*10:15-inf"

```bash
--download-sections REGEX
```

### External Downloaders

External downloader to use
Example: --downloader aria2c

```bash
--downloader [PROTO:]NAME
```

Arguments for external downloader

```bash
--downloader-args NAME:ARGS
```

## Filesystem Options

### Input and Output Paths

File containing URLs to download

```bash
-a
```

or

```bash
 --batch-file FILE
```

Do not read URLs from batch file

```bash
--no-batch-file
```

### Internet Shortcut Options

Write internet shortcut file

```bash
--write-link
```

Write .url Windows shortcut

```bash
--write-url-link
```

Write .webloc macOS shortcut

```bash
--write-webloc-link
```

Write .desktop Linux shortcut

```bash
--write-desktop-link
```

Download paths for different file types

```bash
-P
```

or

```bash
--paths [TYPES:]PATH
```

Output filename template

```bash
-o
```

or

```bash
 --output [TYPES:]TEMPLATE
```

Placeholder for unavailable fields

```bash
--output-na-placeholder TEXT
```

### Filename Handling

Restrict to ASCII characters only

```bash
--restrict-filenames
```

Allow Unicode and special characters

```bash
--no-restrict-filenames
```

Force Windows-compatible filenames

```bash
--windows-filenames
```

Minimal filename sanitization

```bash
--no-windows-filenames
```

Limit filename length

```bash
--trim-filenames LENGTH
```

### File Overwrite Behavior

Do not overwrite any files

```bash
-w
```

or

```bash
--no-overwrites
```

Overwrite all files

```bash
--force-overwrites
```

Do not overwrite video files (default)

```bash
--no-force-overwrites
```

Resume partially downloaded files (default)

```bash
-c
```

or

```bash
--continue
```

Restart download entirely

```bash
--no-continue
```

Use .part files (default)

```bash
--part
```

Write directly to output file

```bash
--no-part
```

Use Last-modified header for file time

```bash
--mtime
```

Do not use Last-modified header

```bash
--no-mtime
```

### Metadata Files

Write video description to file

```bash
--write-description
```

Do not write description (default)

```bash
--no-write-description
```

Write video metadata to JSON file

```bash
--write-info-json
```

Do not write metadata (default)

```bash
--no-write-info-json
```

Write playlist metadata (default)

```bash
--write-playlist-metafiles
```

Do not write playlist metadata

```bash
--no-write-playlist-metafiles
```

Remove internal metadata from infojson (default)

```bash
--clean-info-json
```

Write all fields to infojson

```bash
--no-clean-info-json
```

Retrieve video comments

```bash
--write-comments
```

Do not retrieve comments

```bash
--no-write-comments
```

Load video info from JSON file

```bash
--load-info-json FILE
```

### Cookies and Cache

Read/write cookies from/to file

```bash
--cookies FILE
```

Do not read/dump cookies (default)

```bash
--no-cookies
```

Load cookies from browser

```bash
--cookies-from-browser BROWSER[+KEYRING][:PROFILE][::CONTAINER]
```

Do not load cookies from browser (default)

```bash
--no-cookies-from-browser
```

Filesystem cache directory

```bash
--cache-dir DIR
```

Disable filesystem caching

```bash
--no-cache-dir
```

Delete all cache files

```bash
--rm-cache-dir
```

## Format Selection

### Basic Format Selection

Video format code
Examples: `-f best`, `-f "best[height<=720]"`

```bash
-f
```

or

```bash
--format FORMAT
```

Sort formats by specified fields

```bash
-S
```

or

```bash
--format-sort SORTORDER
```

Force user-specified sort order

```bash
--format-sort-force
```

Allow some fields to override sort order

```bash
--no-format-sort-force
```

List available formats

```bash
-F
```

or

```bash
 --list-formats
```

### Multi-stream Options

Allow multiple video streams

```bash
--video-multistreams
```

Only one video stream (default)

```bash
--no-video-multistreams
```

Allow multiple audio streams

```bash
--audio-multistreams
```

Only one audio stream (default)

```bash
--no-audio-multistreams
```

### Format Preferences

Prefer free containers over non-free

```bash
--prefer-free-formats
```

No special preference for free formats

```bash
--no-prefer-free-formats
```

Check if formats are downloadable

```bash
--check-formats
```

Check all formats for downloadability

```bash
--check-all-formats
```

Do not check format availability

```bash
--no-check-formats
```

Container for merging formats

```bash
--merge-output-format FORMAT
```

## Subtitle Options

Write subtitle file

```bash
--write-subs
```

Do not write subtitles (default)

```bash
--no-write-subs
```

Write automatically generated subtitles

```bash
--write-auto-subs
```

Do not write auto-generated subtitles

```bash
--no-write-auto-subs
```

List available subtitles

```bash
--list-subs
```

Subtitle format preference

```bash
--sub-format FORMAT
```

Languages of subtitles to download

```bash
--sub-langs LANGS
```

## Thumbnail Options

Write thumbnail image to disk

```bash
--write-thumbnail
```

Do not write thumbnail (default)

```bash
--no-write-thumbnail
```

Write all thumbnail formats

```bash
--write-all-thumbnails
```

List available thumbnails

```bash
--list-thumbnails
```

## Authentication Options

Login with account ID

```bash
-u
```

or

```bash
 --username USERNAME
```

Account password

```bash
-p
```

or

```bash
 --password PASSWORD
```

Two-factor authentication code

```bash
-2
```

or

```bash
--twofactor TWOFACTOR
```

Use .netrc authentication data

```bash
-n
```

or

```bash
 --netrc
```

Location of .netrc file

```bash
--netrc-location PATH
```

Command to get credentials

```bash
--netrc-cmd NETRC_CMD
```

Video-specific password

```bash
--video-password PASSWORD
```

### Adobe Pass Options

Adobe Pass MSO identifier

```bash
--ap-mso MSO
```

MSO account login

```bash
--ap-username USERNAME
```

MSO account password

```bash
--ap-password PASSWORD
```

List supported MSOs

```bash
--ap-list-mso
```

### Client Certificate Options

Path to client certificate

```bash
--client-certificate CERTFILE
```

Path to private key

```bash
--client-certificate-key KEYFILE
```

Private key password

```bash
--client-certificate-password PASSWORD
```

## Post-Processing Options

### Audio Extraction

Convert video files to audio-only

```bash
-x
```

or

```bash
--extract-audio
```

Audio format for conversion
Formats: best, aac, alac, flac, m4a, mp3, opus, vorbis, wav

```bash
--audio-format FORMAT
```

Audio quality (0-10 or bitrate like 128K)

```bash
--audio-quality QUALITY
```

### Video Processing

Remux video to different container

```bash
--remux-video FORMAT
```

Re-encode video to different format

```bash
--recode-video FORMAT
```

Arguments for postprocessors

```bash
--postprocessor-args NAME:ARGS
```

Keep intermediate video file

```bash
-k
```

or

```bash
--keep-video
```

Delete intermediate video file (default)

```bash
--no-keep-video
```

Overwrite post-processed files (default)

```bash
--post-overwrites
```

Do not overwrite post-processed files

```bash
--no-post-overwrites
```

### Embedding Options

Embed subtitles in video

```bash
--embed-subs
```

Do not embed subtitles (default)

```bash
--no-embed-subs
```

Embed thumbnail as cover art

```bash
--embed-thumbnail
```

Do not embed thumbnail (default)

```bash
--no-embed-thumbnail
```

Embed metadata in video file

```bash
--embed-metadata
```

Do not embed metadata (default)

```bash
--no-embed-metadata
```

Add chapter markers

```bash
--embed-chapters
```

Do not add chapter markers (default)

```bash
--no-embed-chapters
```

Embed infojson as attachment

```bash
--embed-info-json
```

Do not embed infojson

```bash
--no-embed-info-json
```

### Metadata Modification

Parse additional metadata

```bash
--parse-metadata [WHEN:]FROM:TO
```

Replace metadata text

```bash
--replace-in-metadata [WHEN:]FIELDS REGEX REPLACE
```

Write metadata to xattrs

```bash
--xattrs
```

### Advanced Processing

Concatenate playlist videos
Options: never, always, multi_video

```bash
--concat-playlist POLICY
```

Automatically correct file faults
Options: never, warn, detect_or_warn, force

```bash
--fixup POLICY
```

Location of ffmpeg binary

```bash
--ffmpeg-location PATH
```

Execute command after processing

```bash
--exec [WHEN:]CMD
```

Remove previously defined exec commands

```bash
--no-exec
```

Enable plugin postprocessors

```bash
--use-postprocessor NAME[:ARGS]
```

### Format Conversion

Convert subtitles to format
Formats: ass, lrc, srt, vtt

```bash
--convert-subs FORMAT
```

Convert thumbnails to format
Formats: jpg, png, webp

```bash
--convert-thumbnails FORMAT
```

Split video by chapters

```bash
--split-chapters
```

Do not split by chapters (default)

```bash
--no-split-chapters
```

Remove chapters matching regex

```bash
--remove-chapters REGEX
```

Do not remove chapters (default)

```bash
--no-remove-chapters
```

Force keyframes when cutting

```bash
--force-keyframes-at-cuts
```

Do not force keyframes (default)

```bash
--no-force-keyframes-at-cuts
```

## SponsorBlock Options

Create chapters for SponsorBlock categories

```bash
--sponsorblock-mark CATS
```

Remove SponsorBlock categories from video

```bash
--sponsorblock-remove CATS
```

Title template for SponsorBlock chapters

```bash
--sponsorblock-chapter-title TEMPLATE
```

Disable SponsorBlock

```bash
--no-sponsorblock
```

SponsorBlock API location

```bash
--sponsorblock-api URL
```

**Available Categories**: `sponsor`, `intro`, `outro`, `selfpromo`, `preview`, `filler`, `interaction`, `music_offtopic`, `poi_highlight`, `chapter`, `all`, `default`

## Verbosity and Simulation Options

### Output Control

Activate quiet mode

```bash
-q
```

or

```bash
--quiet
```

Deactivate quiet mode (default)

```bash
--no-quiet
```

Ignore warnings

```bash
--no-warnings
```

Do not download, simulate only

```bash
-s
```

or

```bash
--simulate
```

Download even with print options

```bash
--no-simulate
```

Ignore "No video formats" error

```bash
--ignore-no-formats-error
```

Throw error when no formats (default)

```bash
--no-ignore-no-formats-error
```

Do not download but write related files

```bash
--skip-download
```

### Information Output

Print field/template to screen

```bash
-O
```

or

```bash
--print [WHEN:]TEMPLATE
```

Print template to file

```bash
--print-to-file [WHEN:]TEMPLATE FILE
```

Print JSON information for each video

```bash
-j
```

or

```bash
 --dump-json
```

Print JSON for entire playlist in single line

```bash
-J
```

or

```bash
 --dump-single-json
```

Force write archive entries

```bash
--force-write-archive
```

### Progress Display

Output progress as new lines

```bash
--newline
```

Do not print progress bar

```bash
--no-progress
```

Show progress bar in quiet mode

```bash
--progress
```

Display progress in console title

```bash
--console-title
```

Template for progress output

```bash
--progress-template [TYPES:]TEMPLATE
```

Time between progress outputs

```bash
--progress-delta SECONDS
```

### Debug Options

Print debugging information

```bash
-v
```

or

```bash
 --verbose
```

Print downloaded pages (base64 encoded)

```bash
--dump-pages
```

Write intermediary pages to files

```bash
--write-pages
```

Display HTTP traffic

```bash
--print-traffic
```

## Workaround Options

### Network Workarounds

Force specified encoding

```bash
--encoding ENCODING
```

Allow connections to legacy servers

```bash
--legacy-server-connect
```

Suppress HTTPS certificate validation

```bash
--no-check-certificates
```

Use HTTP instead of HTTPS when possible

```bash
--prefer-insecure
```

Add custom HTTP headers

```bash
--add-headers FIELD:VALUE
```

### System Workarounds

Work around bidirectional text issues

```bash
--bidi-workaround
```

Sleep between requests during extraction

```bash
--sleep-requests SECONDS
```

Sleep before each download

```bash
--sleep-interval SECONDS
```

Maximum sleep time

```bash
--max-sleep-interval SECONDS
```

Sleep before each subtitle download

```bash
--sleep-subtitles SECONDS
```

## Extractor Options

Retries for known extractor errors

```bash
--extractor-retries RETRIES
```

Process dynamic DASH manifests (default)

```bash
--allow-dynamic-mpd
```

Do not process dynamic DASH manifests

```bash
--ignore-dynamic-mpd
```

Split HLS at discontinuities

```bash
--hls-split-discontinuity
```

Do not split HLS (default)

```bash
--no-hls-split-discontinuity
```

Pass arguments to extractors

```bash
--extractor-args IE_KEY:ARGS
```

## Preset Aliases

Pre-configured option combinations for common use cases:
Download best audio and convert to MP3

```bash
-t mp3
```

Download best audio and convert to AAC

```bash
-t aac
```

Download best video in MP4 container

```bash
-t mp4
```

Download best video in MKV container

```bash
-t mkv
```

Enable various sleep options

```bash
-t sleep
```

### Preset Details

**mp3**: `-f "ba[acodec^=mp3]/ba/b" -x --audio-format mp3`

**aac**: `-f "ba[acodec^=aac]/ba[acodec^=mp4a.40.]/ba/b" -x --audio-format aac`

**mp4**: `--merge-output-format mp4 --remux-video mp4 -S vcodec:h264,lang,quality,res,fps,hdr:12,acodec:aac`

**mkv**: `--merge-output-format mkv --remux-video mkv`

**sleep**: `--sleep-subtitles 5 --sleep-requests 0.75 --sleep-interval 10 --max-sleep-interval 20`

## Practical Examples

### Basic Usage

Download best quality

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

Download specific format

```bash
yt-dlp -f "best[height<=720]" URL
```

Download audio only as MP3

```bash
yt-dlp -x --audio-format mp3 URL
```

Download with custom output template

```bash
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL
```

### Advanced Usage

Download playlist with custom naming and archive

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
       --download-archive archive.txt PLAYLIST_URL
```

Download with SponsorBlock integration and metadata

```bash
yt-dlp --sponsorblock-remove sponsor,intro,outro \
       --embed-metadata --embed-thumbnail URL
```

Download with specific quality and format preferences

```bash
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
       --merge-output-format mp4 URL
```

Download with proxy and rate limiting

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 \
       --limit-rate 1M URL
```

### Filtering Examples

Download only videos longer than 5 minutes

```bash
yt-dlp --match-filters "duration > 300" PLAYLIST_URL
```

Download videos with more than 1000 views

```bash
yt-dlp --match-filters "view_count > 1000" URL
```

Download videos uploaded in the last week

```bash
yt-dlp --dateafter "today-1week" CHANNEL_URL
```

---

This reference covers the most commonly used options. For the complete list of options, run `yt-dlp --help` or visit the [official documentation](https://github.com/yt-dlp/yt-dlp).
