---
sidebar_position: 2
---

# Output Templates in yt-dlp

Output templates in yt-dlp allow you to customize the filenames and directory structure of your downloads. They are powerful tools for organizing your downloaded content.

## Basic Syntax

The basic syntax for using an output template is:

```sh
yt-dlp -o "TEMPLATE" URL
```

Where `TEMPLATE` is a string that can include plain text and special format strings.

## Format Strings

Format strings are placeholders that get replaced with metadata from the video. They are enclosed in `%(...)s`. For example:

- `%(title)s`: The video title
- `%(id)s`: The video identifier
- `%(ext)s`: The filename extension

## Basic Example

To save videos with a filename format of "Video Title - Video ID.extension":

```sh
yt-dlp -o "%(title)s - %(id)s.%(ext)s" URL
```

## Available Format Strings

Here are some commonly used format strings:

- `%(title)s`: Video title
- `%(id)s`: Video identifier
- `%(url)s`: Video URL
- `%(ext)s`: Video filename extension
- `%(alt_title)s`: A secondary title of the video
- `%(display_id)s`: An alternative identifier for the video
- `%(uploader)s`: Full name of the video uploader
- `%(upload_date)s`: Video upload date (YYYYMMDD)
- `%(timestamp)s`: UNIX timestamp of the upload date
- `%(channel)s`: Full name of the channel the video is uploaded on
- `%(channel_id)s`: ID of the channel
- `%(duration)s`: Length of the video in seconds
- `%(view_count)s`: How many users have watched the video on the platform
- `%(like_count)s`: Number of positive ratings of the video
- `%(dislike_count)s`: Number of negative ratings of the video
- `%(repost_count)s`: Number of reposts of the video
- `%(average_rating)s`: Average rating given by users
- `%(comment_count)s`: Number of comments on the video
- `%(age_limit)s`: Age restriction for the video (years)
- `%(is_live)s`: Whether this video is a live stream or a fixed-length video
- `%(was_live)s`: Whether this video was originally a live stream
- `%(playlist_index)s`: Index of the video in the playlist
- `%(playlist)s`: Name or id of the playlist that contains the video

## Advanced Usage

### Numbered Sequences

Use `%(autonumber)s` to number the files sequentially:

```sh
yt-dlp -o "%(autonumber)s-%(title)s.%(ext)s" URL
```

### Directory Structure

Create directory structures using forward slashes:

```sh
yt-dlp -o "%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" URL
```

### Conditional Formatting

Use ternary operator `?` for conditional formatting:

```sh
yt-dlp -o "%(title)s-%(id)s.%(ext)s" --output "thumbnail:%(title)s-%(id)s.%(ext)s" URL
```

### Sanitizing Filenames

Use `%(title).100B` to limit the title to 100 bytes:

```sh
yt-dlp -o "%(title).100B.%(ext)s" URL
```

## Output Template Examples

### Organize by Uploader and Upload Date

```sh
yt-dlp -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" URL
```

### Include Video Quality in Filename

```sh
yt-dlp -o "%(title)s - %(resolution)s.%(ext)s" URL
```

### Playlist Videos with Numbers

```sh
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

### Separate Thumbnail with Same Name as Video

```sh
yt-dlp -o "%(title)s.%(ext)s" --write-thumbnail -o "thumbnail:%(title)s.%(ext)s" URL
```

### Using Autonumber for Unique Filenames

```sh
yt-dlp -o "%(autonumber)s - %(title)s.%(ext)s" URL
```

Remember to enclose your output template in quotes, especially if it contains special characters or spaces. Always test your output templates with the `-s` (simulate) option first to ensure they produce the desired results.
