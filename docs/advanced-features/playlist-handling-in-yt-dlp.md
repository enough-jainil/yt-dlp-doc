---
sidebar_position: 3
---

# Playlist Handling in yt-dlp

yt-dlp offers robust features for downloading and managing playlists. This guide covers the key aspects of playlist handling.

## Basic Playlist Download

To download all videos in a playlist, simply provide the playlist URL:

```sh
yt-dlp https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxx
```

## Playlist Options

### Playlist Selection

- `--playlist-start NUMBER`: Start downloading at this playlist index (default is 1)
- `--playlist-end NUMBER`: Stop downloading at this playlist index
- `--playlist-items ITEM_SPEC`: Comma-separated playlist item specification
  - Example: `--playlist-items 1,2,5-8,10-N` (N means last video)

### Playlist Control

- `--no-playlist`: Download only the video, if URL refers to both a video and a playlist
- `--yes-playlist`: Download the playlist, if URL refers to both a video and a playlist

### Playlist Ordering

- `--playlist-reverse`: Download playlist videos in reverse order
- `--playlist-random`: Download playlist videos in random order

## Advanced Playlist Handling

### Download Archive

Avoid re-downloading videos using a download archive:

```sh
yt-dlp --download-archive archive.txt PLAYLIST_URL
```

This creates/updates `archive.txt` with video IDs, skipping already downloaded videos in future runs.

### Naming and Organization

Use output templates for organized playlist downloads:

```sh
yt-dlp -o '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s' PLAYLIST_URL
```

This creates a folder with the playlist name and numbers each video.

### Filtering Playlist Videos

Use `--match-filter` to download only specific videos from a playlist:

```sh
yt-dlp --match-filter "duration > 600" PLAYLIST_URL
```

This example downloads only videos longer than 10 minutes.

### Playlist Metadata

- `--write-info-json`: Write video metadata to a `.info.json` file
- `--write-playlist-metafiles`: Write playlist metadata in addition to video metadata

## Examples

### Download the first 5 videos of a playlist:

```sh
yt-dlp --playlist-end 5 PLAYLIST_URL
```

### Download all videos in a playlist except the first 3:

```sh
yt-dlp --playlist-start 4 PLAYLIST_URL
```

### Download specific videos from a playlist:

```sh
yt-dlp --playlist-items 1,3,5-7 PLAYLIST_URL
```

### Download playlist, naming files by video number and title:

```sh
yt-dlp -o '%(playlist_index)s-%(title)s.%(ext)s' PLAYLIST_URL
```

### Download only new videos from a playlist:

```sh
yt-dlp --download-archive archive.txt PLAYLIST_URL
```

## Tips for Playlist Handling

- Use `--simulate` to preview which videos will be downloaded.
- Combine with format selection for precise control over video quality.
- Use `--verbose` to see detailed information during the download process.
- For large playlists, consider using `--max-downloads` to limit the number of videos downloaded.
- Utilize `--playlist-reverse` or `--playlist-random` for different viewing orders.

Playlist handling in yt-dlp provides flexible options for managing large collections of videos. By combining these features, you can efficiently download and organize content from various playlist sources.
