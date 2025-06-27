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

Download items 1, 3, and 5-10

```bash
yt-dlp -I 1,3,5-10 "PLAYLIST_URL"
```

Download first 5 items

```bash
yt-dlp -I 1:5 "PLAYLIST_URL"
```

Download items starting from 10

```bash
yt-dlp -I 10: "PLAYLIST_URL"
```

Download last 5 items

```bash
yt-dlp -I -5: "PLAYLIST_URL"
```

## Playlist vs Single Video

### Force Playlist Download

When URL could be either playlist or single video

```bash
yt-dlp --yes-playlist "URL"
```

### Download Only Single Video

Skip playlist, download only the specific video

```bash
yt-dlp --no-playlist "URL"
```

## Playlist Organization

### Output Templates for Playlists

Organize by playlist name

```bash
yt-dlp -o "%(playlist)s/%(title)s.%(ext)s" "PLAYLIST_URL"
```

Include playlist index

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

Full organization template

```bash
yt-dlp -o "%(uploader)s/%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

## Advanced Playlist Options

### Playlist Behavior Control

Reverse playlist order

```bash
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

Random playlist order

```bash
yt-dlp --playlist-random "PLAYLIST_URL"
```

Start from specific item

```bash
yt-dlp --playlist-start NUMBER "PLAYLIST_URL"
```

End at specific item

```bash
yt-dlp --playlist-end NUMBER "PLAYLIST_URL"
```

### Archive Management

Use archive file to skip already downloaded videos

```bash
yt-dlp --download-archive downloaded.txt "PLAYLIST_URL"
```

Break on existing files

```bash
yt-dlp --break-on-existing "PLAYLIST_URL"
```

Skip playlist after N consecutive failures

```bash
yt-dlp --skip-playlist-after-errors 3 "PLAYLIST_URL"
```

### Lazy Playlist Processing

Process playlist entries as they're received (for large playlists)

```bash
yt-dlp --lazy-playlist "PLAYLIST_URL"
```

Flat playlist mode (extract URLs only, no metadata)

```bash
yt-dlp --flat-playlist "PLAYLIST_URL"
```

## Channel Downloads

### Download All Channel Videos

YouTube channel

```bash
yt-dlp "https://www.youtube.com/@channelname/videos"
```

Channel uploads

```bash
yt-dlp "https://www.youtube.com/c/channelname/videos"
```

User uploads

```bash
yt-dlp "https://www.youtube.com/user/username/videos"
```

### Channel-Specific Options

Download only recent uploads (last 30 days)

```bash
yt-dlp --dateafter "30 days ago" "CHANNEL_URL"
```

Download specific number of videos

```bash
yt-dlp --max-downloads 10 "CHANNEL_URL"
```

Download with view count filter

```bash
yt-dlp --match-filters "view_count > 1000" "CHANNEL_URL"
```

## Playlist Filtering

### Date-Based Filtering

Videos from specific date

```bash
yt-dlp --date "20240101" "PLAYLIST_URL"
```

Videos after specific date

```bash
yt-dlp --dateafter "2024-01-01" "PLAYLIST_URL"
```

Videos before specific date

```bash
yt-dlp --datebefore "2024-12-31" "PLAYLIST_URL"
```

Date range

```bash
yt-dlp --dateafter "2024-01-01" --datebefore "2024-12-31" "PLAYLIST_URL"
```

### Content Filtering

Filter by duration (videos longer than 10 minutes)

```bash
yt-dlp --match-filters "duration > 600" "PLAYLIST_URL"
```

Filter by view count

```bash
yt-dlp --match-filters "view_count > 10000" "PLAYLIST_URL"
```

Multiple filters

```bash
yt-dlp --match-filters "duration > 300 & view_count > 1000" "PLAYLIST_URL"
```

Exclude specific uploaders

```bash
yt-dlp --match-filters "uploader !*= 'BadUploader'" "PLAYLIST_URL"
```

## Batch File Operations

### Using File with URLs

Download from file containing URLs

```bash
yt-dlp --batch-file urls.txt
```

Batch file with different options per URL

```bash
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

Download multiple videos simultaneously

```bash
yt-dlp --concurrent-fragments 4 "PLAYLIST_URL"
```

External downloader for better performance

```bash
yt-dlp --external-downloader aria2c --external-downloader-args "-x 4 -s 4" "PLAYLIST_URL"
```

### Rate Limiting

Limit download rate to avoid being blocked

```bash
yt-dlp --limit-rate 1M "PLAYLIST_URL"
```

Add sleep between downloads

```bash
yt-dlp --sleep-interval 2 "PLAYLIST_URL"
```

Random sleep interval

```bash
yt-dlp --sleep-interval 1:5 "PLAYLIST_URL"
```

## Error Handling

### Robust Playlist Downloads

Continue on errors

```bash
yt-dlp --ignore-errors "PLAYLIST_URL"
```

Skip unavailable videos

```bash
yt-dlp --no-abort-on-error "PLAYLIST_URL"
```

Retry failed downloads

```bash
yt-dlp --retries 5 "PLAYLIST_URL"
```

### Progress Tracking

Show progress for each video

```bash
yt-dlp --progress "PLAYLIST_URL"
```

Verbose output for debugging

```bash
yt-dlp --verbose "PLAYLIST_URL"
```

Log to file

```bash
yt-dlp --verbose --log-file playlist.log "PLAYLIST_URL"
```

## Platform-Specific Examples

### YouTube

All videos from a channel

```bash
yt-dlp "https://www.youtube.com/@channelname/videos"
```

Channel playlists

```bash
yt-dlp "https://www.youtube.com/@channelname/playlists"
```

Specific playlist

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLxxxxxx"
```

User's liked videos (requires authentication)

```bash
yt-dlp --cookies-from-browser firefox "https://www.youtube.com/playlist?list=LL"
```

### Other Platforms

Twitch VODs

```bash
yt-dlp "https://www.twitch.tv/username/videos"
```

SoundCloud playlists

```bash
yt-dlp "https://soundcloud.com/user/sets/playlist-name"
```

Vimeo albums

```bash
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
