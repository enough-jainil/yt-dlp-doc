---
sidebar_position: 6
---

# SponsorBlock Integration in yt-dlp

yt-dlp integrates seamlessly with SponsorBlock, a crowdsourced database that identifies and marks sponsored segments, intros, outros, and other non-content parts of YouTube videos. This powerful integration allows you to automatically skip or remove unwanted segments during download.

## What is SponsorBlock?

SponsorBlock is a community-driven project that maintains a database of user-submitted timestamps for various types of segments in YouTube videos, including:

- **Sponsor segments** - Paid promotions and sponsorships
- **Introductions** - Intro sequences and channel introductions
- **Outros** - End screens and outro sequences
- **Self-promotion** - Creator promoting their own content
- **Interaction reminders** - "Like and subscribe" reminders
- **Non-music sections** - Talking over music in music videos
- **Preview segments** - Recap of upcoming content
- **Filler content** - Tangential or off-topic content
- **Highlight segments** - Points of interest marked by users

## SponsorBlock Categories

yt-dlp supports all SponsorBlock categories:

| Category         | Description                         | Common Use            |
| ---------------- | ----------------------------------- | --------------------- |
| `sponsor`        | Paid promotions, sponsorships       | Most commonly blocked |
| `intro`          | Intro sequences, channel branding   | Often skipped         |
| `outro`          | End screens, credits, outros        | Often skipped         |
| `selfpromo`      | Self-promotion of creator's content | Selectively blocked   |
| `preview`        | Recap or preview of video content   | Sometimes skipped     |
| `filler`         | Tangential or off-topic content     | Selectively blocked   |
| `interaction`    | "Like and subscribe" reminders      | Often skipped         |
| `music_offtopic` | Non-music sections in music videos  | Music-specific        |
| `poi_highlight`  | Points of interest (not blocked)    | For reference only    |
| `chapter`        | Chapter markers (not blocked)       | For navigation        |

### Special Category Groups

- `all` - All categories including poi_highlight and chapter
- `default` - Default categories: sponsor, intro, outro, selfpromo, preview, filler, interaction, music_offtopic

## Basic SponsorBlock Usage

### Enable SponsorBlock Processing

SponsorBlock is disabled by default. Enable it with:

Mark all default categories as chapters

```bash
yt-dlp --sponsorblock-mark default URL
```

Remove all default categories from video

```bash
yt-dlp --sponsorblock-remove default URL
```

Mark sponsors, remove intros and outros

```bash
yt-dlp --sponsorblock-mark sponsor --sponsorblock-remove intro,outro URL
```

### Mark vs Remove

**Marking** (`--sponsorblock-mark`):

- Adds chapter markers to the video file
- Segments remain in the video but are marked
- Allows viewers to skip manually or with compatible players
- Preserves original video length and continuity

**Removing** (`--sponsorblock-remove`):

- Physically cuts out the segments from the video
- Creates a shorter video without unwanted content
- Cannot be undone without re-downloading
- May affect video continuity

## Advanced SponsorBlock Options

### Category Selection

Mark specific categories

```bash
yt-dlp --sponsorblock-mark sponsor,intro,outro URL
```

Remove all except music_offtopic

```bash
yt-dlp --sponsorblock-remove default,-music_offtopic URL
```

Mark sponsors and highlights, remove intros

```bash
yt-dlp --sponsorblock-mark sponsor,poi_highlight --sponsorblock-remove intro URL
```

### Custom Chapter Titles

Customize how SponsorBlock segments are labeled:

Default chapter title format

```bash
yt-dlp --sponsorblock-mark default --sponsorblock-chapter-title "[SponsorBlock]: %(category)s" URL
```

Custom format with timestamps

```bash
yt-dlp --sponsorblock-mark default --sponsorblock-chapter-title "%(category_names)s (%(start_time)s-%(end_time)s)" URL
```

Simple category names

```bash
yt-dlp --sponsorblock-mark default --sponsorblock-chapter-title "%(category_names)s" URL
```

#### Available Template Fields

- `%(category)s` - Category name (e.g., "sponsor")
- `%(category_names)s` - Human-readable category name (e.g., "Sponsor")
- `%(start_time)s` - Segment start time (HH:MM:SS format)
- `%(end_time)s` - Segment end time (HH:MM:SS format)
- `%(duration)s` - Segment duration

### Custom SponsorBlock API

Use alternative SponsorBlock API servers:

Use custom API endpoint

```bash
yt-dlp --sponsorblock-api "https://sponsor.ajay.app" --sponsorblock-mark default URL
```

Use local SponsorBlock instance

```bash
yt-dlp --sponsorblock-api "http://localhost:8080" --sponsorblock-mark default URL
```

### Disable SponsorBlock

Explicitly disable SponsorBlock (useful in config files)

```bash
yt-dlp --no-sponsorblock URL
```

## Practical Usage Examples

### Content Creator Workflow

Download with sponsor segments marked for editing

```bash
yt-dlp --sponsorblock-mark sponsor,selfpromo --sponsorblock-chapter-title "Edit: Remove %(category_names)s" -f "bestvideo+bestaudio" URL
```

### Clean Viewing Experience

Remove all distractions for clean viewing

```bash
yt-dlp --sponsorblock-remove sponsor,intro,outro,interaction --embed-chapters -f "best[height<=1080]" URL
```

### Music Video Processing

Keep music, remove talking segments

```bash
yt-dlp --sponsorblock-remove music_offtopic --sponsorblock-mark sponsor,intro,outro -x --audio-format mp3 URL
```

### Educational Content

Remove sponsors but keep educational content

```bash
yt-dlp --sponsorblock-remove sponsor --sponsorblock-mark intro,outro --write-info-json URL
```

### Batch Processing with Archive

Process playlist with SponsorBlock and archiving

```bash
yt-dlp --sponsorblock-remove sponsor,intro,outro --download-archive processed.txt -o "%(uploader)s/%(title)s.%(ext)s" PLAYLIST_URL
```

## Integration with Other Features

### Combining with Format Selection

High-quality download with SponsorBlock

```bash
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" --sponsorblock-remove sponsor --merge-output-format mp4 URL
```

### With Subtitle Processing

Download with subtitles and SponsorBlock

```bash
yt-dlp --write-subs --embed-subs --sponsorblock-mark default --sub-langs en,en-US URL
```

### With Post-Processing

Convert to MP3 with sponsor removal

```bash
yt-dlp -x --audio-format mp3 --sponsorblock-remove sponsor,intro,outro --embed-metadata URL
```

### With Chapter Splitting

Split by chapters and remove sponsors

```bash
yt-dlp --split-chapters --sponsorblock-remove sponsor -o "%(title)s/%(section_title)s.%(ext)s" URL
```

## Configuration File Examples

### Default SponsorBlock Config

```conf
# ~/.config/yt-dlp/config
# Default SponsorBlock settings

# Mark sponsors and intros, remove outros
--sponsorblock-mark sponsor,intro
--sponsorblock-remove outro

# Custom chapter titles
--sponsorblock-chapter-title "[%(category_names)s]"
```

### Content-Specific Configs

**For music downloads:**

```conf
# ~/.config/yt-dlp/music.conf
--sponsorblock-remove sponsor,intro,outro,music_offtopic
--sponsorblock-mark interaction
-x --audio-format mp3
```

**For educational content:**

```conf
# ~/.config/yt-dlp/education.conf
--sponsorblock-remove sponsor,interaction
--sponsorblock-mark intro,outro
--write-subs --embed-subs
```

## Performance and Behavior

### Network Requests

SponsorBlock integration requires additional API calls:

- One request per video to fetch segment data
- Minimal impact on download speed
- Cached results for repeated downloads

### Processing Order

1. Video extraction and format selection
2. SponsorBlock API query for segment data
3. Video download
4. Segment processing (marking/removing)
5. Post-processing (if any)

### Error Handling

Continue if SponsorBlock data unavailable

```bash
yt-dlp --sponsorblock-mark default --ignore-errors URL
```

Verbose output for debugging

```bash
yt-dlp --sponsorblock-mark default --verbose URL
```

## Troubleshooting

### Common Issues

**No SponsorBlock data available:**

Check if video has SponsorBlock data

```bash
yt-dlp --simulate --verbose --sponsorblock-mark default URL
```

**API connectivity issues:**

Test API connectivity

```bash
curl "https://sponsor.ajay.app/api/skipSegments?videoID=VIDEO_ID"
```

Use alternative API

```bash
yt-dlp --sponsorblock-api "https://sponsor.ajay.app" URL
```

**Segment processing errors:**

Skip problematic segments

```bash
yt-dlp --sponsorblock-mark default --ignore-errors URL
```

Debug segment processing

```bash
yt-dlp --sponsorblock-mark default --verbose --keep-fragments URL
```

### Verification

Check chapter markers in output

```bash
ffprobe -v quiet -show_chapters -print_format csv output.mp4
```

Verify removed segments

```bash
ffprobe -v quiet -show_format -print_format json output.mp4
```

## Best Practices

### General Guidelines

1. **Start with marking** before removing to preview segments
2. **Use default categories** for most content
3. **Combine with format selection** for optimal results
4. **Test with `--simulate`** before batch processing
5. **Use configuration files** for consistent behavior

### Category Selection Strategy

**Conservative approach:**

```bash
yt-dlp --sponsorblock-remove sponsor --sponsorblock-mark intro,outro URL
```

**Aggressive cleaning:**

```bash
yt-dlp --sponsorblock-remove sponsor,intro,outro,interaction,selfpromo URL
```

**Content-aware:**

Music videos

```bash
yt-dlp --sponsorblock-remove music_offtopic URL
```

Educational content

```bash
yt-dlp --sponsorblock-remove sponsor,interaction URL
```

### Performance Optimization

Batch processing optimization

```bash
yt-dlp --sponsorblock-remove sponsor --concurrent-fragments 4 --sleep-interval 1 --batch-file urls.txt
```

## Ethical Considerations

### Responsible Usage

- **Respect content creators** who rely on sponsorships
- **Consider supporting creators** through other means
- **Use selectively** rather than blanket removal
- **Contribute to SponsorBlock** if you find it useful

### Legal and Platform Considerations

- SponsorBlock data is user-generated and may not be 100% accurate
- Removing segments may affect video context or creator intent
- Some sponsors may be integral to video content
- Consider platform terms of service regarding content modification

## Contributing to SponsorBlock

If you find SponsorBlock useful, consider contributing:

1. **Submit segments** through the SponsorBlock browser extension
2. **Vote on existing segments** to improve accuracy
3. **Report incorrect segments** to maintain quality
4. **Donate to the project** to support infrastructure

SponsorBlock integration in yt-dlp provides powerful content curation capabilities while respecting the community-driven nature of the project. Use it thoughtfully to enhance your viewing experience while supporting content creators appropriately.
