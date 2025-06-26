---
sidebar_position: 1
---

# Format Selection in yt-dlp

Format selection in yt-dlp is a powerful feature that allows you to choose specific video and audio qualities, codecs, and containers for download. By default, yt-dlp tries to download the best available quality, but you can customize this behavior extensively.

## Default Behavior

By default, yt-dlp uses the following format selection logic:

- **Standard**: `-f bestvideo*+bestaudio/best` (best video + best audio, fallback to best combined)
- **With multistreams**: `-f bestvideo+bestaudio/best` (when `--audio-multistreams` is enabled)
- **Without ffmpeg**: `-f best/bestvideo+bestaudio` (fallback if ffmpeg unavailable)
- **Streaming to stdout**: `-f best/bestvideo+bestaudio` (when using `-o -`)

## Basic Format Selection

### Viewing Available Formats

Before selecting formats, list all available options:

```bash
# List all available formats
yt-dlp -F "https://www.youtube.com/watch?v=BaW_jenozKc"

# List formats in a more compact way
yt-dlp --list-formats "URL"
```

### Simple Format Selection

```bash
# Download specific format by ID
yt-dlp -f 22 URL

# Download best mp4 format
yt-dlp -f mp4 URL

# Download best webm format
yt-dlp -f webm URL

# Interactive format selection
yt-dlp -f - URL
```

## Special Format Selectors

<<<<<<< HEAD
### Quality Selectors
=======
- `best`: Select the best quality format.
- `worst`: Select the worst quality format.
- `worstvideo`: Select the worst quality video-only format.
- `worstaudio`: Select the worst quality audio-only format.
- `bestvideo`: Select the best quality video-only format.
- `bestaudio`: Select the best quality audio-only format.
- `mp4`: Select the best mp4 format.
- `136+140`: Select format code 136 for video and 140 for audio.
>>>>>>> d63945e832c3131326a1db820869f94460e632e3

```bash
# Best quality formats
-f best              # Best combined video+audio format
-f best*             # Best format (video or audio or both)
-f bestvideo         # Best video-only format
-f bestvideo*        # Best format containing video
-f bestaudio         # Best audio-only format
-f bestaudio*        # Best format containing audio

# Worst quality formats
-f worst             # Worst combined video+audio format
-f worst*            # Worst format (video or audio or both)
-f worstvideo        # Worst video-only format
-f worstvideo*       # Worst format containing video
-f worstaudio        # Worst audio-only format
-f worstaudio*       # Worst format containing audio
```

### Special Selectors

```bash
# Download all formats separately
-f all

# Download and merge all formats (requires --audio-multistreams/--video-multistreams)
-f mergeall

# Select nth best format
-f best.2            # 2nd best combined format
-f bestvideo.3       # 3rd best video format
```

## Format Filtering

### Numeric Comparisons

Filter formats using numeric field comparisons:

```bash
# Video dimensions
-f "best[height=720]"           # Exactly 720p height
-f "best[height<=720]"          # 720p or lower
-f "best[height>=1080]"         # 1080p or higher
-f "best[width<1920]"           # Width less than 1920
-f "best[width*height<=1000000]" # Total pixels limit

# Bitrates and quality
-f "best[tbr<=1000]"            # Total bitrate ≤ 1000 kbps
-f "best[vbr>=500]"             # Video bitrate ≥ 500 kbps
-f "best[abr<=128]"             # Audio bitrate ≤ 128 kbps
-f "best[fps>30]"               # Frame rate > 30 fps
-f "best[asr=48000]"            # Audio sample rate = 48kHz

# File size
-f "best[filesize<50M]"         # File size less than 50MB
-f "best[filesize_approx<100M]" # Approximate size < 100MB
```

### String Comparisons

Filter formats using string field comparisons:

```bash
# Extensions and containers
-f "best[ext=mp4]"              # MP4 container
-f "best[ext^=mp]"              # Extension starts with "mp"
-f "best[ext$=4]"               # Extension ends with "4"
-f "best[ext*=p4]"              # Extension contains "p4"

# Codecs
-f "best[vcodec=h264]"          # H.264 video codec
-f "best[vcodec^=h26]"          # Video codec starts with "h26"
-f "best[acodec=aac]"           # AAC audio codec
-f "best[acodec!=none]"         # Has audio codec (not audio-only)
-f "best[vcodec!=none]"         # Has video codec (not video-only)

# Protocol
-f "best[protocol=https]"       # HTTPS protocol only
-f "best[protocol^=http]"       # HTTP or HTTPS protocol

# Language
-f "best[language=en]"          # English language
-f "best[language~=en.*]"       # English language (regex)
```

### Advanced Filtering

```bash
# Multiple conditions (AND)
-f "best[height<=720][fps<=30]"

# Unknown values (use ? to include unknown)
-f "best[height<=?720]"         # 720p or lower, include unknown heights

# Negation
-f "best[!height>720]"          # NOT height > 720 (equivalent to height<=720)

# Grouping with parentheses
-f "(mp4,webm)[height<480]"     # MP4 or WebM with height < 480

# Complex conditions
-f "best[height<=720][tbr>500][ext=mp4]"
```

## Format Merging

### Basic Merging

```bash
# Merge best video with best audio
yt-dlp -f "bestvideo+bestaudio" URL

# Merge specific formats
yt-dlp -f "136+140" URL          # Format IDs 136 (video) + 140 (audio)

# Merge with fallback
yt-dlp -f "bestvideo+bestaudio/best" URL
```

### Advanced Merging

```bash
# Merge multiple formats (requires multistream options)
yt-dlp -f "bestvideo+bestaudio+bestaudio.2" --audio-multistreams URL

# Merge all audio formats
yt-dlp -f "bestvideo+mergeall[vcodec=none]" --audio-multistreams URL

# Merge with container preference
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" URL
```

## Format Selection with Preferences

### Preference Order

Use `/` to specify preference order (left has higher priority):

```bash
# Try specific format first, fallback to best
yt-dlp -f "22/best" URL

# Multiple fallbacks
yt-dlp -f "22/17/18/best" URL

# Complex preference with merging
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" URL
```

### Multiple Downloads

Use `,` to download multiple formats:

```bash
# Download multiple formats separately
yt-dlp -f "22,17,18" URL

# Download best video and audio separately
yt-dlp -f "bestvideo,bestaudio" URL

# Use different output template for multiple formats
yt-dlp -f "bestvideo,bestaudio" -o "%(title)s.f%(format_id)s.%(ext)s" URL
```

## Format Sorting (`-S` Option)

The `-S` option provides advanced sorting capabilities:

### Available Sort Fields

```bash
# Quality and technical specs
-S "height"          # Sort by video height (higher first)
-S "width"           # Sort by video width
-S "res"             # Sort by resolution (smallest dimension)
-S "fps"             # Sort by frame rate
-S "tbr"             # Sort by total bitrate
-S "vbr"             # Sort by video bitrate
-S "abr"             # Sort by audio bitrate
-S "br"              # Sort by bitrate (tbr/vbr/abr)
-S "asr"             # Sort by audio sample rate

# Codecs and containers
-S "vcodec"          # Sort by video codec preference
-S "acodec"          # Sort by audio codec preference
-S "codec"           # Sort by codec (vcodec,acodec)
-S "ext"             # Sort by extension preference
-S "vext"            # Sort by video extension
-S "aext"            # Sort by audio extension

# File properties
-S "size"            # Sort by file size
-S "filesize"        # Sort by exact file size
-S "fs_approx"       # Sort by approximate file size

# Other fields
-S "proto"           # Sort by protocol preference
-S "lang"            # Sort by language preference
-S "quality"         # Sort by quality preference
-S "source"          # Sort by source preference
-S "hdr"             # Sort by dynamic range
-S "channels"        # Sort by audio channels
```

### Sort Modifiers

```bash
# Reverse order (ascending)
-S "+height"         # Prefer smaller height
-S "+size"           # Prefer smaller file size

# Preferred values
-S "height:720"      # Prefer 720p, larger is better but cap at 720p
-S "res:480"         # Prefer 480p resolution
-S "codec:h264:aac"  # Prefer H.264 video and AAC audio

# Nearest value
-S "filesize~100M"   # Prefer size closest to 100MB

# Multiple sort criteria
-S "height,fps,vcodec"           # Sort by height, then fps, then codec
-S "res:720,fps,hdr:12,vcodec"   # Complex multi-field sorting
```

### Sort Examples

```bash
# Download smallest video
yt-dlp -S "+size,+br" URL

# Download best quality under 720p
yt-dlp -S "res:720" URL

# Prefer H.264 and AAC
yt-dlp -S "vcodec:h264,acodec:aac" URL

# Prefer file size closest to 500MB
yt-dlp -S "filesize~500M" URL

# Complex sorting for best quality under constraints
yt-dlp -S "res:1080,fps:60,vcodec:h264,size" URL
```

## Practical Examples

### YouTube Specific

```bash
# Best quality avoiding VP9 (for compatibility)
yt-dlp -S "vcodec:h264,res,fps" URL

# Best audio quality
yt-dlp -f "bestaudio[ext=m4a]/bestaudio" URL

# 720p MP4 with AAC audio
yt-dlp -f "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]" URL

# Download with subtitle preference
yt-dlp -f "best[height<=1080]" --sub-langs "en,en-US" --write-subs URL
```

### Size-Conscious Downloads

```bash
# Best quality under 100MB
yt-dlp -f "best[filesize<100M]" URL

# Smallest file with decent quality
yt-dlp -S "+size,res:480" URL

# Best quality preferring smaller codecs
yt-dlp -S "vcodec:h264,+size" URL
```

### High-Quality Downloads

```bash
# Best possible quality
yt-dlp -S "res,fps,vcodec,acodec" URL

# 4K with best audio
yt-dlp -f "bestvideo[height>=2160]+bestaudio" URL

# HDR content preference
yt-dlp -S "hdr,res,fps" URL
```

### Compatibility-Focused

```bash
# MP4 container with H.264/AAC for maximum compatibility
yt-dlp -f "bestvideo[ext=mp4][vcodec^=avc1]+bestaudio[ext=m4a][acodec^=mp4a]/best[ext=mp4]" URL

# WebM for modern browsers
yt-dlp -f "bestvideo[ext=webm]+bestaudio[ext=webm]/best[ext=webm]" URL

# Avoid problematic formats
yt-dlp -f "best[vcodec!=vp9][acodec!=opus]" URL
```

## Format Selection Best Practices

### General Guidelines

1. **Use `-F` first**: Always check available formats before choosing
2. **Prefer merging**: Use `bestvideo+bestaudio` for best quality
3. **Set fallbacks**: Use `/` to provide alternatives
4. **Container compatibility**: Match video/audio containers when possible
5. **Size awareness**: Use file size filters for bandwidth constraints

### Common Patterns

```bash
# Balanced quality and size
yt-dlp -S "res:720,fps:30,+size" URL

# Maximum compatibility
yt-dlp -f "best[ext=mp4]/best" URL

# Best quality with size limit
yt-dlp -f "best[filesize<200M]/worst" URL

# Audio extraction
yt-dlp -f "bestaudio" -x --audio-format mp3 URL
```

### Troubleshooting

```bash
# Force format checking
yt-dlp --check-formats -f "your_format_selector" URL

# List all formats for debugging
yt-dlp -F --list-formats URL

# Use verbose output for format selection details
yt-dlp -v -f "your_format_selector" URL
```

Format selection in yt-dlp is extremely flexible and powerful. Start with simple selectors and gradually build complexity as needed. The key is understanding your priorities: quality, file size, compatibility, or specific technical requirements.
