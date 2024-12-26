---
sidebar_position: 3
---

# yt-dlp Output Templates

Output templates in yt-dlp allow you to customize the filenames and directory structure of your downloads. They are powerful tools for organizing your downloaded content.

## Basic Syntax

The basic syntax for using an output template is:

```bash
yt-dlp -o "TEMPLATE" URL
```

Where TEMPLATE is a string that can include plain text and special format strings.

## Format Strings

Format strings are placeholders that get replaced with metadata from the video. They are enclosed in `%(...)s`. For example:

- `%(title)s`: The video title - This is the main title of the video as displayed on the platform
- `%(id)s`: The video identifier - A unique string that identifies the specific video
- `%(ext)s`: The filename extension - The format of the downloaded file (mp4, webm, etc.)

## Basic Example

To save videos with a filename format of "Video Title - Video ID.extension":

```bash
yt-dlp -o "%(title)s - %(id)s.%(ext)s" URL
```

## Available Format Strings

Here are some commonly used format strings:

### Video Information

- `%(title)s`: Video title - The main title of the video as shown on the platform
- `%(alt_title)s`: A secondary title of the video - Alternative or translated titles when available
- `%(id)s`: Video identifier - The unique ID assigned by the platform
- `%(url)s`: Video URL - The complete web address of the video
- `%(ext)s`: Video filename extension - The format of the downloaded file

### Channel and Uploader Details

- `%(uploader)s`: Full name of the video uploader - The content creator's display name
- `%(channel)s`: Full name of the channel - The channel where the video is hosted
- `%(channel_id)s`: ID of the channel - The unique identifier for the channel

### Metadata and Statistics

- `%(upload_date)s`: Video upload date (YYYYMMDD) - When the video was published
- `%(timestamp)s`: UNIX timestamp of the upload date - The upload time in UNIX format
- `%(duration)s`: Length of the video in seconds - Total playback duration
- `%(view_count)s`: How many users have watched the video
- `%(like_count)s`: Number of positive ratings
- `%(dislike_count)s`: Number of negative ratings
- `%(comment_count)s`: Number of comments on the video

## Advanced Usage

### Numbered Sequences

Create automatically numbered files:

```bash
yt-dlp -o "%(autonumber)s-%(title)s.%(ext)s" URL
```

### Directory Structure

Organize downloads in folders:

```bash
yt-dlp -o "%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" URL
```

### Sanitizing Filenames

Limit title length to prevent issues:

```bash
yt-dlp -o "%(title).100B.%(ext)s" URL
```

## Practical Examples

### Organize by Uploader and Date

```bash
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" URL
```

### Include Video Quality

```bash
yt-dlp -o "%(title)s - %(resolution)s.%(ext)s" URL
```

### Playlist Organization

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

### Thumbnail Handling

```bash
yt-dlp -o "%(title)s.%(ext)s" --write-thumbnail -o "thumbnail:%(title)s.%(ext)s" URL
```

**Note**: Always enclose your output template in quotes, especially if it contains special characters or spaces. Test your templates with the `-s` (simulate) option first to ensure they produce the desired results.
