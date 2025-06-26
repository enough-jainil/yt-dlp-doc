---
sidebar_position: 1
---

# Downloading Playlists

yt-dlp provides powerful features for downloading entire playlists, channels, and managing bulk video operations.

## Basic Playlist Download

### Download Entire Playlist

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxx"
```

### Download Only Specific Items

```bash
# Download items 1, 3, and 5-10
yt-dlp -I 1,3,5-10 "PLAYLIST_URL"

# Download first 5 items
yt-dlp -I 1:5 "PLAYLIST_URL"

# Download items starting from 10
yt-dlp -I 10: "PLAYLIST_URL"

# Download last 5 items
yt-dlp -I -5: "PLAYLIST_URL"
```

## Playlist vs Single Video

### Force Playlist Download

```bash
# When URL could be either playlist or single video
yt-dlp --yes-playlist "URL"
```

### Download Only Single Video

```bash
# Skip playlist, download only the specific video
yt-dlp --no-playlist "URL"
```

## Playlist Organization

### Output Templates for Playlists

```bash
# Organize by playlist name
yt-dlp -o "%(playlist)s/%(title)s.%(ext)s" "PLAYLIST_URL"

# Include playlist index
yt-dlp -o "%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"

# Full organization template
yt-dlp -o "%(uploader)s/%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

## Advanced Playlist Options

### Playlist Behavior Control

```bash
# Reverse playlist order
yt-dlp --playlist-reverse "PLAYLIST_URL"

# Random playlist order
yt-dlp --playlist-random "PLAYLIST_URL"

# Start from specific item
yt-dlp --playlist-start NUMBER "PLAYLIST_URL"

# End at specific item
yt-dlp --playlist-end NUMBER "PLAYLIST_URL"
```

### Archive Management

```bash
# Use archive file to skip already downloaded videos
yt-dlp --download-archive downloaded.txt "PLAYLIST_URL"

# Break on existing files
yt-dlp --break-on-existing "PLAYLIST_URL"

# Skip playlist after N consecutive failures
yt-dlp --skip-playlist-after-errors 3 "PLAYLIST_URL"
```

### Lazy Playlist Processing

```bash
# Process playlist entries as they're received (for large playlists)
yt-dlp --lazy-playlist "PLAYLIST_URL"

# Flat playlist mode (extract URLs only, no metadata)
yt-dlp --flat-playlist "PLAYLIST_URL"
```

## Channel Downloads

### Download All Channel Videos

```bash
# YouTube channel
yt-dlp "https://www.youtube.com/@channelname/videos"

# Channel uploads
yt-dlp "https://www.youtube.com/c/channelname/videos"

# User uploads
yt-dlp "https://www.youtube.com/user/username/videos"
```

### Channel-Specific Options

```bash
# Download only recent uploads (last 30 days)
yt-dlp --dateafter "30 days ago" "CHANNEL_URL"

# Download specific number of videos
yt-dlp --max-downloads 10 "CHANNEL_URL"

# Download with view count filter
yt-dlp --match-filters "view_count > 1000" "CHANNEL_URL"
```

## Playlist Filtering

### Date-Based Filtering

```bash
# Videos from specific date
yt-dlp --date "20240101" "PLAYLIST_URL"

# Videos after specific date
yt-dlp --dateafter "2024-01-01" "PLAYLIST_URL"

# Videos before specific date
yt-dlp --datebefore "2024-12-31" "PLAYLIST_URL"

# Date range
yt-dlp --dateafter "2024-01-01" --datebefore "2024-12-31" "PLAYLIST_URL"
```

### Content Filtering

```bash
# Filter by duration (videos longer than 10 minutes)
yt-dlp --match-filters "duration > 600" "PLAYLIST_URL"

# Filter by view count
yt-dlp --match-filters "view_count > 10000" "PLAYLIST_URL"

# Multiple filters
yt-dlp --match-filters "duration > 300 & view_count > 1000" "PLAYLIST_URL"

# Exclude specific uploaders
yt-dlp --match-filters "uploader !*= 'BadUploader'" "PLAYLIST_URL"
```

## Batch File Operations

### Using File with URLs

```bash
# Download from file containing URLs
yt-dlp --batch-file urls.txt

# Batch file with different options per URL
yt-dlp --batch-file batch.txt
```

**Example batch.txt:**

```
# Lines starting with # are comments
https://www.youtube.com/playlist?list=PLxxxxxx
--format mp4 https://www.youtube.com/watch?v=xxxxx
--extract-audio https://www.youtube.com/watch?v=yyyyy
```

## Performance Optimization

### Concurrent Downloads

```bash
# Download multiple videos simultaneously
yt-dlp --concurrent-fragments 4 "PLAYLIST_URL"

# External downloader for better performance
yt-dlp --external-downloader aria2c --external-downloader-args "-x 4 -s 4" "PLAYLIST_URL"
```

### Rate Limiting

```bash
# Limit download rate to avoid being blocked
yt-dlp --limit-rate 1M "PLAYLIST_URL"

# Add sleep between downloads
yt-dlp --sleep-interval 2 "PLAYLIST_URL"

# Random sleep interval
yt-dlp --sleep-interval 1:5 "PLAYLIST_URL"
```

## Error Handling

### Robust Playlist Downloads

```bash
# Continue on errors
yt-dlp --ignore-errors "PLAYLIST_URL"

# Skip unavailable videos
yt-dlp --no-abort-on-error "PLAYLIST_URL"

# Retry failed downloads
yt-dlp --retries 5 "PLAYLIST_URL"
```

### Progress Tracking

```bash
# Show progress for each video
yt-dlp --progress "PLAYLIST_URL"

# Verbose output for debugging
yt-dlp --verbose "PLAYLIST_URL"

# Log to file
yt-dlp --verbose --log-file playlist.log "PLAYLIST_URL"
```

## Platform-Specific Examples

### YouTube

```bash
# All videos from a channel
yt-dlp "https://www.youtube.com/@channelname/videos"

# Channel playlists
yt-dlp "https://www.youtube.com/@channelname/playlists"

# Specific playlist
yt-dlp "https://www.youtube.com/playlist?list=PLxxxxxx"

# User's liked videos (requires authentication)
yt-dlp --cookies-from-browser firefox "https://www.youtube.com/playlist?list=LL"
```

### Other Platforms

```bash
# Twitch VODs
yt-dlp "https://www.twitch.tv/username/videos"

# SoundCloud playlists
yt-dlp "https://soundcloud.com/user/sets/playlist-name"

# Vimeo albums
yt-dlp "https://vimeo.com/album/123456"
```

## Best Practices

1. **Use Archive Files**: Always use `--download-archive` for large playlists to avoid re-downloading
2. **Organize Output**: Use meaningful output templates to organize downloaded content
3. **Filter Content**: Use filters to download only relevant content
4. **Monitor Progress**: Use verbose output for large downloads
5. **Handle Errors**: Use error handling options for robust downloads
6. **Respect Rate Limits**: Add delays between downloads to avoid being blocked
7. **Backup Metadata**: Consider using `--write-info-json` for metadata preservation

Playlist handling in yt-dlp provides extensive flexibility for bulk downloads while maintaining control over content selection and organization.
