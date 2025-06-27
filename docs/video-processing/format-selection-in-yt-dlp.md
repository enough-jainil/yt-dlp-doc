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

List all available formats

```bash
yt-dlp -F "https://www.youtube.com/watch?v=BaW_jenozKc"
```

List formats in a more compact way

```bash
yt-dlp --list-formats "URL"
```

### Simple Format Selection

Download specific format by ID

```bash
yt-dlp -f 22 URL
```

Download best mp4 format

```bash
yt-dlp -f mp4 URL
```

Download best webm format

```bash
yt-dlp -f webm URL
```

Interactive format selection

```bash
yt-dlp -f - URL
```

## Special Format Selectors

### Quality Selectors

Best quality formats

```bash
-f best
```

Best combined video+audio format

```bash
-f best*
```

Best format (video or audio or both)

```bash
-f bestvideo
```

Best video-only format

```bash
-f bestvideo*
```

Best format containing video

```bash
-f bestaudio
```

Best audio-only format

```bash
-f bestaudio*
```

Best format containing audio

Worst quality formats

```bash
-f worst
```

Worst combined video+audio format

```bash
-f worst*
```

Worst format (video or audio or both)

```bash
-f worstvideo
```

Worst video-only format

```bash
-f worstvideo*
```

Worst format containing video

```bash
-f worstaudio
```

Worst audio-only format

```bash
-f worstaudio*
```

Worst format containing audio

### Special Selectors

Download all formats separately

```bash
-f all
```

Download and merge all formats (requires --audio-multistreams/--video-multistreams)

```bash
-f mergeall
```

Select nth best format

```bash
-f best.2
```

2nd best combined format

```bash
-f bestvideo.3
```

3rd best video format

## Format Filtering

### Numeric Comparisons

Filter formats using numeric field comparisons:

Video dimensions

```bash
-f "best[height=720]"
```

Exactly 720p height

```bash
-f "best[height<=720]"
```

720p or lower

```bash
-f "best[height>=1080]"
```

1080p or higher

```bash
-f "best[width<1920]"
```

Width less than 1920

```bash
-f "best[width*height<=1000000]"
```

Total pixels limit

Bitrates and quality

```bash
-f "best[tbr<=1000]"
```

Total bitrate ≤ 1000 kbps

```bash
-f "best[vbr>=500]"
```

Video bitrate ≥ 500 kbps

```bash
-f "best[abr<=128]"
```

Audio bitrate ≤ 128 kbps

```bash
-f "best[fps>30]"
```

Frame rate > 30 fps

```bash
-f "best[asr=48000]"
```

Audio sample rate = 48kHz

File size

```bash
-f "best[filesize<50M]"
```

File size less than 50MB

```bash
-f "best[filesize_approx<100M]"
```

Approximate size < 100MB

### String Comparisons

Filter formats using string field comparisons:

Extensions and containers

```bash
-f "best[ext=mp4]"
```

MP4 container

```bash
-f "best[ext^=mp]"
```

Extension starts with "mp"

```bash
-f "best[ext$=4]"
```

Extension ends with "4"

```bash
-f "best[ext*=p4]"
```

Extension contains "p4"

Codecs

```bash
-f "best[vcodec=h264]"
```

H.264 video codec

```bash
-f "best[vcodec^=h26]"
```

Video codec starts with "h26"

```bash
-f "best[acodec=aac]"
```

AAC audio codec

```bash
-f "best[acodec!=none]"
```

Has audio codec (not audio-only)

```bash
-f "best[vcodec!=none]"
```

Has video codec (not video-only)

Protocol

```bash
-f "best[protocol=https]"
```

HTTPS protocol only

```bash
-f "best[protocol^=http]"
```

HTTP or HTTPS protocol

Language

```bash
-f "best[language=en]"
```

English language

```bash
-f "best[language~=en.*]"
```

English language (regex)

### Advanced Filtering

Multiple conditions (AND)

```bash
-f "best[height<=720][fps<=30]"
```

Unknown values (use ? to include unknown)

```bash
-f "best[height<=?720]"
```

720p or lower, include unknown heights

Negation

```bash
-f "best[!height>720]"
```

`NOT height > 720 (equivalent to height<=720)`

Grouping with parentheses

```bash
-f "(mp4,webm)[height<480]"
```

MP4 or WebM with height < 480

Complex conditions

```bash
-f "best[height<=720][tbr>500][ext=mp4]"
```

## Format Merging

### Basic Merging

Merge best video with best audio

```bash
yt-dlp -f "bestvideo+bestaudio" URL
```

Merge specific formats

```bash
yt-dlp -f "136+140" URL
```

Format IDs 136 (video) + 140 (audio)

Merge with fallback

```bash
yt-dlp -f "bestvideo+bestaudio/best" URL
```

### Advanced Merging

Merge multiple formats (requires multistream options)

```bash
yt-dlp -f "bestvideo+bestaudio+bestaudio.2" --audio-multistreams URL
```

Merge all audio formats

```bash
yt-dlp -f "bestvideo+mergeall[vcodec=none]" --audio-multistreams URL
```

Merge with container preference

```bash
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" URL
```

## Format Selection with Preferences

### Preference Order

Use `/` to specify preference order (left has higher priority):

Try specific format first, fallback to best

```bash
yt-dlp -f "22/best" URL
```

Multiple fallbacks

```bash
yt-dlp -f "22/17/18/best" URL
```

Complex preference with merging

```bash
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" URL
```

### Multiple Downloads

Use `,` to download multiple formats:

Download multiple formats separately

```bash
yt-dlp -f "22,17,18" URL
```

Download best video and audio separately

```bash
yt-dlp -f "bestvideo,bestaudio" URL
```

Use different output template for multiple formats

```bash
yt-dlp -f "bestvideo,bestaudio" -o "%(title)s.f%(format_id)s.%(ext)s" URL
```

## Format Sorting (`-S` Option)

The `-S` option provides advanced sorting capabilities:

### Available Sort Fields

Quality and technical specs

```bash
-S "height"
```

Sort by video height (higher first)

```bash
-S "width"
```

Sort by video width

```bash
-S "res"
```

Sort by resolution (smallest dimension)

```bash
-S "fps"
```

Sort by frame rate

```bash
-S "tbr"
```

Sort by total bitrate

```bash
-S "vbr"
```

Sort by video bitrate

```bash
-S "abr"
```

Sort by audio bitrate

```bash
-S "br"
```

Sort by bitrate (tbr/vbr/abr)

```bash
-S "asr"
```

Sort by audio sample rate

Codecs and containers

```bash
-S "vcodec"
```

Sort by video codec preference

```bash
-S "acodec"
```

Sort by audio codec preference

```bash
-S "codec"
```

Sort by codec (vcodec,acodec)

```bash
-S "ext"
```

Sort by extension preference

```bash
-S "vext"
```

Sort by video extension

```bash
-S "aext"
```

Sort by audio extension

File properties

```bash
-S "size"
```

Sort by file size

```bash
-S "filesize"
```

Sort by exact file size

```bash
-S "fs_approx"
```

Sort by approximate file size

Other fields

```bash
-S "proto"
```

Sort by protocol preference

```bash
-S "lang"
```

Sort by language preference

```bash
-S "quality"
```

Sort by quality preference

```bash
-S "source"
```

Sort by source preference

```bash
-S "hdr"
```

Sort by dynamic range

```bash
-S "channels"
```

Sort by audio channels

### Sort Modifiers

Reverse order (ascending)

```bash
-S "+height"
```

Prefer smaller height

```bash
-S "+size"
```

Prefer smaller file size

Preferred values

```bash
-S "height:720"
```

Prefer 720p, larger is better but cap at 720p

```bash
-S "res:480"
```

Prefer 480p resolution

```bash
-S "codec:h264:aac"
```

Prefer H.264 video and AAC audio

Nearest value

```bash
-S "filesize~100M"
```

Prefer size closest to 100MB

Multiple sort criteria

```bash
-S "height,fps,vcodec"
```

Sort by height, then fps, then codec

```bash
-S "res:720,fps,hdr:12,vcodec"
```

Complex multi-field sorting

### Sort Examples

Download smallest video

```bash
yt-dlp -S "+size,+br" URL
```

Download best quality under 720p

```bash
yt-dlp -S "res:720" URL
```

Prefer H.264 and AAC

```bash
yt-dlp -S "vcodec:h264,acodec:aac" URL
```

Prefer file size closest to 500MB

```bash
yt-dlp -S "filesize~500M" URL
```

Complex sorting for best quality under constraints

```bash
yt-dlp -S "res:1080,fps:60,vcodec:h264,size" URL
```

## Practical Examples

### YouTube Specific

Best quality avoiding VP9 (for compatibility)

```bash
yt-dlp -S "vcodec:h264,res,fps" URL
```

Best audio quality

```bash
yt-dlp -f "bestaudio[ext=m4a]/bestaudio" URL
```

720p MP4 with AAC audio

```bash
yt-dlp -f "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]" URL
```

Download with subtitle preference

```bash
yt-dlp -f "best[height<=1080]" --sub-langs "en,en-US" --write-subs URL
```

### Size-Conscious Downloads

Best quality under 100MB

```bash
yt-dlp -f "best[filesize<100M]" URL
```

Smallest file with decent quality

```bash
yt-dlp -S "+size,res:480" URL
```

Best quality preferring smaller codecs

```bash
yt-dlp -S "vcodec:h264,+size" URL
```

### High-Quality Downloads

Best possible quality

```bash
yt-dlp -S "res,fps,vcodec,acodec" URL
```

4K with best audio

```bash
yt-dlp -f "bestvideo[height>=2160]+bestaudio" URL
```

HDR content preference

```bash
yt-dlp -S "hdr,res,fps" URL
```

### Compatibility-Focused

MP4 container with H.264/AAC for maximum compatibility

```bash
yt-dlp -f "bestvideo[ext=mp4][vcodec^=avc1]+bestaudio[ext=m4a][acodec^=mp4a]/best[ext=mp4]" URL
```

WebM for modern browsers

```bash
yt-dlp -f "bestvideo[ext=webm]+bestaudio[ext=webm]/best[ext=webm]" URL
```

Avoid problematic formats

```bash
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

Balanced quality and size

```bash
yt-dlp -S "res:720,fps:30,+size" URL
```

Maximum compatibility

```bash
yt-dlp -f "best[ext=mp4]/best" URL
```

Best quality with size limit

```bash
yt-dlp -f "best[filesize<200M]/worst" URL
```

Audio extraction

```bash
yt-dlp -f "bestaudio" -x --audio-format mp3 URL
```

### Troubleshooting

Force format checking

```bash
yt-dlp --check-formats -f "your_format_selector" URL
```

List all formats for debugging

```bash
yt-dlp -F --list-formats URL
```

Use verbose output for format selection details

```bash
yt-dlp -v -f "your_format_selector" URL
```

Format selection in yt-dlp is extremely flexible and powerful. Start with simple selectors and gradually build complexity as needed. The key is understanding your priorities: quality, file size, compatibility, or specific technical requirements.
