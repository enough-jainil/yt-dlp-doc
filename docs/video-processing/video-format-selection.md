---
sidebar_position: 1
---

# Video Format Selection

yt-dlp offers sophisticated video format selection capabilities, allowing precise control over video quality, codecs, and container formats.

## Understanding Format Selection

### List Available Formats

```bash
# List all available formats
yt-dlp -F "VIDEO_URL"

# List formats with more details
yt-dlp -F --list-formats "VIDEO_URL"

# List formats for specific extractor
yt-dlp -F --list-formats --force-generic-extractor "VIDEO_URL"
```

### Format Code Structure

Format codes in yt-dlp follow patterns like:

- `137` - Video only (1080p)
- `140` - Audio only (128kbps AAC)
- `best` - Best quality available
- `worst` - Lowest quality available

## Basic Format Selection

### Simple Format Selection

```bash
# Download best quality (default)
yt-dlp "VIDEO_URL"

# Download specific format by code
yt-dlp -f 137 "VIDEO_URL"

# Download worst quality
yt-dlp -f worst "VIDEO_URL"

# Download best video + best audio
yt-dlp -f "bestvideo+bestaudio" "VIDEO_URL"
```

### Quality-Based Selection

```bash
# Best quality up to 1080p
yt-dlp -f "best[height<=1080]" "VIDEO_URL"

# Best quality up to 720p
yt-dlp -f "best[height<=720]" "VIDEO_URL"

# Specific resolution
yt-dlp -f "best[height=1080]" "VIDEO_URL"

# Best quality with minimum resolution
yt-dlp -f "best[height>=720]" "VIDEO_URL"
```

## Advanced Format Selection

### Container Format Preferences

```bash
# Prefer MP4 format
yt-dlp -f "best[ext=mp4]/best" "VIDEO_URL"

# Prefer WebM format
yt-dlp -f "best[ext=webm]/best" "VIDEO_URL"

# Avoid specific formats
yt-dlp -f "best[ext!=flv]" "VIDEO_URL"

# Multiple container preferences
yt-dlp -f "best[ext=mp4]/best[ext=webm]/best" "VIDEO_URL"
```

### Codec Selection

```bash
# Prefer H.264 codec
yt-dlp -f "best[vcodec=avc1]/best[vcodec^=avc1]/best" "VIDEO_URL"

# Prefer VP9 codec
yt-dlp -f "best[vcodec=vp9]/best" "VIDEO_URL"

# Avoid AV1 codec
yt-dlp -f "best[vcodec!=av01]/best" "VIDEO_URL"

# Audio codec preference
yt-dlp -f "best[acodec=aac]/best[acodec=mp3]/best" "VIDEO_URL"
```

### Bitrate Control

```bash
# Maximum video bitrate
yt-dlp -f "best[vbr<=2000]" "VIDEO_URL"

# Minimum video bitrate
yt-dlp -f "best[vbr>=1000]" "VIDEO_URL"

# Audio bitrate preference
yt-dlp -f "best[abr>=128]" "VIDEO_URL"

# Combined video and audio bitrate
yt-dlp -f "best[vbr<=5000][abr>=128]" "VIDEO_URL"
```

## Complex Format Selection

### Combining Video and Audio

```bash
# Best video + best audio (separate streams)
yt-dlp -f "bestvideo+bestaudio" "VIDEO_URL"

# Specific video + audio combination
yt-dlp -f "bestvideo[height<=1080]+bestaudio[abr>=128]" "VIDEO_URL"

# Fallback to combined stream
yt-dlp -f "bestvideo+bestaudio/best" "VIDEO_URL"

# Force merge even if container doesn't support it
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 "VIDEO_URL"
```

### Conditional Selection

```bash
# Different quality based on duration
yt-dlp -f "best[height<=720][duration<=600]/best[height<=480]" "VIDEO_URL"

# Quality based on file size
yt-dlp -f "best[filesize<=100M]/best[height<=720]" "VIDEO_URL"

# Selection with multiple conditions
yt-dlp -f "best[height<=1080][ext=mp4][vcodec!=av01]" "VIDEO_URL"
```

### Platform-Specific Selection

```bash
# YouTube-specific selection
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" "YOUTUBE_URL"

# Twitch-specific (avoid source quality for VODs)
yt-dlp -f "best[height<=1080]" "TWITCH_URL"

# Live stream selection
yt-dlp -f "best[protocol=m3u8_native]" "LIVE_URL"
```

## Video Quality Control

### Resolution Selection

```bash
# Common resolution selections
yt-dlp -f "best[height=2160]" "VIDEO_URL"  # 4K
yt-dlp -f "best[height=1440]" "VIDEO_URL"  # 1440p
yt-dlp -f "best[height=1080]" "VIDEO_URL"  # 1080p
yt-dlp -f "best[height=720]" "VIDEO_URL"   # 720p
yt-dlp -f "best[height=480]" "VIDEO_URL"   # 480p

# Aspect ratio consideration
yt-dlp -f "best[height<=1080][width<=1920]" "VIDEO_URL"
```

### Frame Rate Selection

```bash
# Specific frame rate
yt-dlp -f "best[fps=60]" "VIDEO_URL"

# Maximum frame rate
yt-dlp -f "best[fps<=30]" "VIDEO_URL"

# Minimum frame rate
yt-dlp -f "best[fps>=24]" "VIDEO_URL"

# Prefer higher frame rates
yt-dlp -f "best[fps>=60]/best[fps>=30]/best" "VIDEO_URL"
```

## Format Selection Examples

### Common Use Cases

```bash
# Best quality MP4 (most compatible)
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" "VIDEO_URL"

# High quality for archival
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mkv "VIDEO_URL"

# Mobile-friendly format
yt-dlp -f "best[height<=720][ext=mp4]" "VIDEO_URL"

# Streaming-optimized
yt-dlp -f "best[height<=1080][vbr<=2000][ext=mp4]" "VIDEO_URL"

# Bandwidth-conscious
yt-dlp -f "best[filesize<=50M]/best[height<=720]" "VIDEO_URL"
```

### Content-Type Specific

```bash
# Music videos (prefer audio quality)
yt-dlp -f "bestvideo[height<=1080]+bestaudio[abr>=256]/best" "MUSIC_VIDEO_URL"

# Live streams
yt-dlp -f "best[protocol=m3u8_native]/best" "LIVE_URL"

# Gaming content (prefer 60fps)
yt-dlp -f "best[fps>=60][height<=1080]/best[height<=1080]" "GAMING_URL"

# Educational content (balance quality and size)
yt-dlp -f "best[height<=720][vbr<=1500]/best[height<=720]" "EDUCATIONAL_URL"
```

## Format Sorting

### Custom Sorting

```bash
# Sort by resolution, then by fps
yt-dlp -f "best" -S "height,fps" "VIDEO_URL"

# Sort by bitrate (descending)
yt-dlp -f "best" -S "+vbr" "VIDEO_URL"

# Complex sorting (resolution desc, fps desc, bitrate desc)
yt-dlp -f "best" -S "res:1080,fps:60,vbr" "VIDEO_URL"

# Prefer certain codecs
yt-dlp -f "best" -S "codec:h264,res,fps" "VIDEO_URL"
```

### Sorting Fields

Available sorting fields:

- `res`, `resolution` - Video resolution
- `fps`, `framerate` - Frame rate
- `vbr`, `videorate` - Video bitrate
- `abr`, `audiorate` - Audio bitrate
- `codec`, `vcodec` - Video codec
- `acodec` - Audio codec
- `size`, `filesize` - File size
- `ext`, `extension` - File extension

## Troubleshooting Format Selection

### Common Issues

```bash
# When best format fails, use fallbacks
yt-dlp -f "bestvideo+bestaudio/best/worst" "VIDEO_URL"

# Force format even if merge fails
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 --ignore-errors "VIDEO_URL"

# Skip unavailable formats
yt-dlp -f "best[height<=1080]/best" --no-abort-on-error "VIDEO_URL"
```

### Debug Format Issues

```bash
# Verbose format information
yt-dlp -F -v "VIDEO_URL"

# Test format selection without downloading
yt-dlp -f "FORMAT_SELECTOR" --skip-download "VIDEO_URL"

# List supported protocols
yt-dlp --list-extractors | grep -i protocol
```

## Video Post-Processing

### Container Conversion

```bash
# Convert to MP4 after download
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 "VIDEO_URL"

# Convert to MKV
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mkv "VIDEO_URL"

# Remux without re-encoding
yt-dlp --remux-video mp4 "VIDEO_URL"
```

### Video Processing

```bash
# Embed subtitles in video
yt-dlp --embed-subs --sub-lang en "VIDEO_URL"

# Embed thumbnail
yt-dlp --embed-thumbnail "VIDEO_URL"

# Add metadata
yt-dlp --add-metadata "VIDEO_URL"

# All post-processing
yt-dlp --embed-subs --embed-thumbnail --add-metadata "VIDEO_URL"
```

## Performance Considerations

### Optimization Tips

1. **Use specific format codes** for fastest selection
2. **Prefer combined streams** over separate video+audio when possible
3. **Use fallback selectors** to handle format availability issues
4. **Consider bandwidth limits** with filesize filters
5. **Test format selectors** with `-F` before batch operations

### Format Selection Strategy

```bash
# Balanced approach
yt-dlp -f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]/best" "VIDEO_URL"

# Quality-first approach
yt-dlp -f "bestvideo+bestaudio/best" --merge-output-format mkv "VIDEO_URL"

# Compatibility-first approach
yt-dlp -f "best[ext=mp4]/best" "VIDEO_URL"
```

Format selection in yt-dlp provides granular control over video quality and characteristics, enabling optimal downloads for any use case while balancing quality, compatibility, and file size requirements.
