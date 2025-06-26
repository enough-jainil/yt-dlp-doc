---
sidebar_position: 3
---

# Output Templates in yt-dlp

Output templates in yt-dlp allow you to customize the naming and organization of downloaded files. The `-o` option specifies the output filename template, while `-P` sets the download paths for different file types.

## Basic Syntax

The simplest usage is to specify a fixed filename:

```bash
# Fixed filename (not recommended for multiple videos)
yt-dlp -o "funny_video.mp4" "https://some/video"

# Template with video title and ID
yt-dlp -o "%(title)s [%(id)s].%(ext)s" URL
```

## Template Format

Template sequences use the format: `%(field_name)s`

The general syntax for complex field operations is:

```
%(name[.keys][addition][>strf][,alternate][&replacement][|default])[flags][width][.precision][length]type
```

### Available Fields

#### Basic Video Information

- `id` - Video identifier
- `title` - Video title
- `fulltitle` - Video title ignoring live timestamp and generic title
- `alt_title` - Secondary title of the video
- `description` - Video description
- `display_id` - Alternative identifier for the video
- `ext` - Video filename extension

#### Uploader Information

- `uploader` - Full name of the video uploader
- `uploader_id` - Nickname or id of the video uploader
- `uploader_url` - URL to the video uploader's profile
- `channel` - Full name of the channel the video is uploaded on
- `channel_id` - Id of the channel
- `channel_url` - URL of the channel
- `channel_follower_count` - Number of followers of the channel
- `channel_is_verified` - Whether the channel is verified

#### Date and Time

- `timestamp` - UNIX timestamp of when video became available
- `upload_date` - Video upload date in UTC (YYYYMMDD)
- `release_timestamp` - UNIX timestamp of when video was released
- `release_date` - Release date (YYYYMMDD) in UTC
- `release_year` - Year when video/album was released
- `modified_timestamp` - UNIX timestamp of last modification
- `modified_date` - Last modification date (YYYYMMDD) in UTC

#### Video Properties

- `duration` - Length of video in seconds
- `duration_string` - Length of video (HH:mm:ss)
- `view_count` - Number of views
- `concurrent_view_count` - Current live viewers
- `like_count` - Number of positive ratings
- `dislike_count` - Number of negative ratings
- `repost_count` - Number of reposts
- `average_rating` - Average rating given by users
- `comment_count` - Number of comments

#### Technical Details

- `width` - Video width in pixels
- `height` - Video height in pixels
- `fps` - Frame rate
- `tbr` - Total bitrate
- `vbr` - Video bitrate
- `abr` - Audio bitrate
- `asr` - Audio sample rate
- `vcodec` - Video codec
- `acodec` - Audio codec
- `container` - Container format
- `filesize` - File size in bytes
- `filesize_approx` - Approximate file size

#### Playlist Information

- `playlist` - Playlist title (or ID if title unavailable)
- `playlist_id` - Identifier of the playlist
- `playlist_title` - Name of the playlist
- `playlist_count` - Total number of items in playlist
- `playlist_index` - Index of video in playlist (padded with zeros)
- `playlist_autonumber` - Position in download queue
- `playlist_uploader` - Full name of playlist uploader
- `playlist_uploader_id` - Nickname/ID of playlist uploader
- `playlist_channel` - Channel that uploaded the playlist
- `playlist_channel_id` - ID of channel that uploaded playlist

#### Series and Episodes

- `series` - Title of the series/program
- `series_id` - ID of the series/program
- `season` - Title of the season
- `season_number` - Number of the season
- `season_id` - ID of the season
- `episode` - Title of the episode
- `episode_number` - Number of the episode within season
- `episode_id` - ID of the episode

#### Music and Audio

- `track` - Title of the track
- `track_number` - Number of track within album/disc
- `track_id` - ID of the track
- `artist` - Artist(s) of the track (comma-separated)
- `artists` - List of artists
- `album` - Title of the album
- `album_type` - Type of the album
- `album_artist` - All artists on album (comma-separated)
- `album_artists` - List of all album artists
- `genre` - Genre(s) (comma-separated)
- `genres` - List of genres
- `composer` - Composer(s) (comma-separated)
- `composers` - List of composers
- `disc_number` - Number of disc/physical medium

#### Other Fields

- `webpage_url` - URL of the video webpage
- `webpage_url_basename` - Basename of webpage URL
- `webpage_url_domain` - Domain of webpage URL
- `original_url` - Original URL given by user
- `extractor` - Name of the extractor
- `extractor_key` - Key name of the extractor
- `age_limit` - Age restriction (years)
- `live_status` - Live status (not_live, is_live, is_upcoming, was_live, post_live)
- `is_live` - Whether video is a live stream
- `was_live` - Whether video was originally live
- `location` - Physical location where video was filmed
- `categories` - List of categories
- `tags` - List of tags
- `language` - Language code

## Field Operations

### Object Traversal

Navigate through dictionaries and lists using dot notation:

```bash
# Access first tag
%(tags.0)s

# Access last subtitle
%(subtitles.en.-1.ext)s

# Python slicing
%(id.3:7)s
%(formats.:.format_id)s

# Build dictionaries with specific keys
%(formats.:.{format_id,height})#j
```

### Arithmetic Operations

Perform simple math on numeric fields:

```bash
# Add to playlist index
%(playlist_index+10)03d

# Calculate remaining items
%(n_entries+1-playlist_index)d

# Multiply duration
%(duration*2)d
```

### Date/Time Formatting

Format date/time fields using strftime:

```bash
# Format duration as HH-MM-SS
%(duration>%H-%M-%S)s

# Format upload date
%(upload_date>%Y-%m-%d)s

# Format with timezone offset
%(epoch-3600>%H-%M-%S)s
```

### Alternative Fields

Specify fallback values with comma separation:

```bash
# Use release_date, fallback to upload_date, then "Unknown"
%(release_date>%Y,upload_date>%Y|Unknown)s

# Use multiple alternatives
%(artist,creator,uploader|Unknown Artist)s
```

### Replacement Values

Use `&` to provide replacement text when field is not empty:

```bash
# Replace with custom text if chapters exist
%(chapters&has chapters|no chapters)s

# Format title with custom template
%(title&TITLE={:>20}|NO TITLE)s
```

### Default Values

Use `|` to specify default values for empty fields:

```bash
# Default uploader if unknown
%(uploader|Unknown)s

# Default language
%(language|en)s
```

### Format Conversions

Special conversion types beyond standard Python formatting:

```bash
# Bytes conversion
%(filesize)B

# JSON formatting
%(formats)j          # Compact JSON
%(formats)#j         # Pretty-printed JSON
%(formats)+j         # Unicode JSON

# HTML escaping
%(description)h

# List formatting
%(tags)l             # Comma-separated list
%(tags)#l            # Newline-separated list

# Shell quoting
%(title)q            # Quote for terminal
%(tags)#q            # Split list into separate arguments

# Decimal suffixes
%(filesize)D         # 10M, 1.5G, etc.
%(filesize)#D        # Use 1024 as factor

# Filename sanitization
%(title)S            # Sanitize for filename
%(title)#S           # Restricted sanitization

# Unicode normalization
%(title)U            # NFC normalization
%(title)#U           # NFD normalization
%(title)+U           # NFKC normalization
```

## Output Template Examples

### Basic Examples

```bash
# Simple filename with title and ID
yt-dlp -o "%(title)s [%(id)s].%(ext)s" URL

# Include uploader name
yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" URL

# Add upload date
yt-dlp -o "%(upload_date)s - %(title)s.%(ext)s" URL

# Restrict filename characters
yt-dlp -o "%(title)s.%(ext)s" --restrict-filenames URL
```

### Hierarchical Organization

```bash
# Organize by uploader
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL

# Organize by upload year
yt-dlp -o "%(upload_date>%Y)s/%(title)s.%(ext)s" URL

# Complex hierarchy
yt-dlp -o "%(uploader)s/%(upload_date>%Y)s/%(title)s [%(id)s].%(ext)s" URL
```

### Playlist Organization

```bash
# Organize playlist with index
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL

# Separate playlists by uploader
yt-dlp -o "%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL

# Chapter organization for courses
yt-dlp -o "%(playlist)s/%(chapter_number)s - %(chapter)s/%(title)s.%(ext)s" COURSE_URL
```

### Series and Episodes

```bash
# TV series organization
yt-dlp -o "%(series)s/Season %(season_number)02d/S%(season_number)02dE%(episode_number)02d - %(episode)s.%(ext)s" URL

# Alternative series format
yt-dlp -o "%(series)s/%(season_number)s - %(season)s/%(episode_number)s - %(episode)s.%(ext)s" URL
```

### Music Organization

```bash
# Album organization
yt-dlp -o "%(artist)s/%(album)s/%(track_number)02d - %(track)s.%(ext)s" URL

# Various artists compilation
yt-dlp -o "%(album_artist)s/%(album)s/%(track_number)02d - %(artist)s - %(track)s.%(ext)s" URL

# Single tracks
yt-dlp -o "%(artist)s - %(track)s.%(ext)s" URL
```

### Advanced Examples

```bash
# Conditional formatting
yt-dlp -o "%(playlist_index&{} - |)s%(title)s.%(ext)s" URL

# Size-based organization
yt-dlp -o "%(filesize>1000000000&Large/|Normal/)s%(title)s.%(ext)s" URL

# Quality-based naming
yt-dlp -o "%(title)s [%(height)sp].%(ext)s" URL

# Multi-field fallbacks
yt-dlp -o "%(creator,uploader,channel|Unknown)s - %(title)s.%(ext)s" URL
```

## File Type Specific Templates

Set different templates for different file types:

```bash
# Different templates for videos and thumbnails
yt-dlp -o "%(title)s.%(ext)s" -o "thumbnail:%(title)s/%(title)s.%(ext)s" URL

# Separate subtitle organization
yt-dlp -o "%(title)s.%(ext)s" -o "subtitle:%(title)s/subs/%(title)s.%(ext)s" URL --write-subs

# Info JSON in separate directory
yt-dlp -o "videos/%(title)s.%(ext)s" -o "infojson:metadata/%(title)s.%(ext)s" URL --write-info-json
```

### Available File Types

- `subtitle` - Subtitle files
- `thumbnail` - Thumbnail images
- `description` - Description files
- `annotation` - Annotation files (deprecated)
- `infojson` - Video metadata JSON files
- `link` - Internet shortcut files
- `pl_thumbnail` - Playlist thumbnails
- `pl_description` - Playlist descriptions
- `pl_infojson` - Playlist metadata JSON
- `chapter` - Chapter files (when splitting)
- `pl_video` - Playlist videos (when concatenating)

## Path Configuration

Use `-P` to set base paths for different file types:

```bash
# Set different base paths
yt-dlp -P "~/Videos" -P "subtitle:~/Videos/Subs" -P "thumbnail:~/Videos/Thumbs" URL

# Temporary directory for intermediate files
yt-dlp -P "~/Videos" -P "temp:/tmp/yt-dlp" URL

# Home directory override
yt-dlp -P "home:~/Downloads" -o "%(title)s.%(ext)s" URL
```

## Best Practices

### Filename Safety

```bash
# Use restricted filenames for cross-platform compatibility
yt-dlp -o "%(title)S.%(ext)s" --restrict-filenames URL

# Limit filename length
yt-dlp -o "%(title).100s.%(ext)s" --trim-filenames 100 URL

# Avoid special characters
yt-dlp -o "%(title)s.%(ext)s" --windows-filenames URL
```

### Organization Strategies

```bash
# By content type
yt-dlp -o "%(extractor)s/%(uploader)s/%(title)s.%(ext)s" URL

# By date with fallbacks
yt-dlp -o "%(release_date>%Y,upload_date>%Y|Unknown)s/%(title)s.%(ext)s" URL

# Comprehensive organization
yt-dlp -o "%(extractor)s/%(uploader)s/%(upload_date>%Y)s/%(title)s [%(id)s].%(ext)s" URL
```

### Handling Missing Fields

```bash
# Provide defaults for all important fields
yt-dlp -o "%(uploader|Unknown)s/%(title|Untitled)s [%(id)s].%(ext)s" URL

# Use field availability checks
yt-dlp -o "%(uploader&%(uploader)s/|)s%(title)s.%(ext)s" URL
```

## Troubleshooting

### Testing Templates

```bash
# Print filename without downloading
yt-dlp --print filename -o "your_template" URL

# Check all available fields
yt-dlp -j URL | jq .

# Test template with simulation
yt-dlp -s -o "your_template" URL
```

### Common Issues

1. **Invalid characters**: Use `%(title)S` for sanitization
2. **Path too long**: Use `--trim-filenames` or shorter templates
3. **Missing fields**: Always provide defaults with `|`
4. **Unicode issues**: Use `%(title)U` for normalization

The output template system is extremely flexible and can accommodate virtually any file organization scheme. Start simple and add complexity as needed.
