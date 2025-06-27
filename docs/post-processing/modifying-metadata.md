---
sidebar_position: 8
---

# Modifying Metadata

yt-dlp allows you to modify the metadata obtained by extractors using `--parse-metadata` and `--replace-in-metadata`. This powerful feature lets you customize video information, create custom fields, and enhance the metadata embedded in downloaded files.

## Overview

Metadata modification happens **before** format selection, post-extraction, and other post-processing operations. Some fields may be added or changed during these steps, potentially overriding your modifications.

## Text Replacement in Metadata

Replace text in any metadata field using Python regular expressions with backreferences support.

### Basic Syntax

```bash
--replace-in-metadata FIELDS REGEX REPLACE
```

### Examples

#### Replace Spaces and Underscores with Dashes

```bash
yt-dlp --replace-in-metadata "title,uploader" "[ _]" "-" URL
```

#### Remove Brackets from Titles

```bash
yt-dlp --replace-in-metadata "title" "\[.*?\]" "" URL
```

#### Clean Up Channel Names

```bash
yt-dlp --replace-in-metadata "uploader" "Official|Channel" "" URL
```

#### Advanced Regex with Backreferences

Move text in parentheses to the beginning

```bash
yt-dlp --replace-in-metadata "title" "^(.*?)\s*\((.*?)\)$" "(\2) \1" URL
```

## Parsing Additional Metadata

Extract data from one field and interpret it as another format.

### Basic Syntax

```bash
--parse-metadata FROM:TO
```

### FROM Field Options

1. **Field name**: Extract from existing metadata field
2. **Output template**: Use yt-dlp template syntax
3. **Python regex**: Use named capture groups

### TO Field Options

1. **Field name**: Store in specific field
2. **Output template**: Use template syntax with `%(field)s` formatting
3. **Python regex**: Use named capture groups

## Common Use Cases

### 1. Extract Artist and Title from Video Title

#### From "Artist - Title" Format

```bash
yt-dlp --parse-metadata "title:%(artist)s - %(title)s" URL
```

#### Using Regex

```bash
yt-dlp --parse-metadata "title:Artist - (?P<artist>.+)" URL
```

### 2. Create Custom Series Episode Format

```bash
yt-dlp --parse-metadata "%(series)s S%(season_number)02dE%(episode_number)02d:%(title)s" URL
```

### 3. Extract Information from Description

Extract artist from description

```bash
yt-dlp --parse-metadata "description:Artist - (?P<artist>.+)" URL
```

Extract multiple fields

```bash
yt-dlp --parse-metadata "description:Artist: (?P<artist>.+?)\nAlbum: (?P<album>.+)" URL
```

### 4. Modify Upload Date Format

```bash
yt-dlp --parse-metadata "upload_date:%(upload_date>%Y-%m-%d)s:%(upload_date_formatted)s" URL
```

## Special Metadata Operations

### 1. Download Additional URLs

Set the `additional_urls` field to download related content:

```bash
yt-dlp --parse-metadata "description:(?P<additional_urls>https?://www\.vimeo\.com/\d+)" URL
```

This will download the first Vimeo video found in the description.

### 2. Modify Embedded Metadata

Use the `meta_` prefix to change metadata embedded in the media file:

Set custom description in the file

```bash
yt-dlp --parse-metadata "title:(?P<meta_description>Custom: %(title)s)" --embed-metadata URL
```

Set artist as uploader

```bash
yt-dlp --parse-metadata "%(uploader|)s:%(meta_artist)s" --embed-metadata URL
```

Override default synopsis

```bash
yt-dlp --parse-metadata "description:(?s)(?P<meta_comment>.+)" --embed-metadata URL
```

### 3. Stream-Specific Metadata

Use `meta<n>_` prefix for individual streams:

Set language for first stream

```bash
yt-dlp --parse-metadata "detected_lang:(?P<meta1_language>.+)" URL
```

### 4. Remove Default Metadata

Set fields to empty to remove them:

Remove synopsis from embedded metadata

```bash
yt-dlp --parse-metadata ":(?P<meta_synopsis>)" --embed-metadata URL
```

Remove formats field from infojson

```bash
yt-dlp --parse-metadata "video::(?P<formats>)" --write-info-json URL
```

## Advanced Examples

### Complex Title Parsing

Parse "[Channel] Title (Year)" format

```bash
yt-dlp --parse-metadata "title:\[(?P<uploader>.+?)\]\s*(?P<title>.+?)\s*\((?P<year>\d{4})\)" URL
```

### Multi-line Description Parsing

Extract multi-line comments correctly

```bash
yt-dlp --parse-metadata "description:(?s)(?P<meta_comment>.+)" --embed-metadata URL
```

### Conditional Metadata

Set artist as uploader only if artist doesn't exist

```bash
yt-dlp --parse-metadata "%(uploader|)s:%(meta_artist)s" --embed-metadata URL
```

### Date Formatting

Convert timestamp to readable date

```bash
yt-dlp --parse-metadata "timestamp:%(timestamp>%Y-%m-%d %H:%M:%S)s:%(formatted_date)s" URL
```

## Processing Order and Timing

You can specify when metadata processing occurs using the `WHEN` prefix:

```bash
yt-dlp --parse-metadata "pre_process:title:%(title)s - Downloaded:%(custom_title)s" URL
```

```bash
yt-dlp --parse-metadata "post_process:filepath:%(filepath)s:%(final_path)s" URL
```

**Available timing options**:

- `pre_process` - After video extraction (default)
- `after_filter` - After video passes filter
- `video` - After format selection
- `before_dl` - Before each video download
- `post_process` - After each video download
- `after_move` - After moving video to final location
- `after_video` - After downloading all formats
- `playlist` - At end of playlist

## Default Metadata Fields

yt-dlp adds these fields to embedded metadata by default:

| Metadata Field            | Source                                                                |
| ------------------------- | --------------------------------------------------------------------- |
| `title`                   | `track` or `title`                                                    |
| `date`                    | `upload_date`                                                         |
| `description`, `synopsis` | `description`                                                         |
| `purl`, `comment`         | `webpage_url`                                                         |
| `track`                   | `track_number`                                                        |
| `artist`                  | `artist`, `artists`, `creator`, `creators`, `uploader`, `uploader_id` |
| `composer`                | `composer` or `composers`                                             |
| `genre`                   | `genre` or `genres`                                                   |
| `album`                   | `album`                                                               |
| `album_artist`            | `album_artist` or `album_artists`                                     |
| `disc`                    | `disc_number`                                                         |
| `show`                    | `series`                                                              |
| `season_number`           | `season_number`                                                       |
| `episode_id`              | `episode` or `episode_id`                                             |
| `episode_sort`            | `episode_number`                                                      |
| `language`                | Format's `language`                                                   |

## Complete Workflow Examples

### 1. Music Video Processing

```bash
yt-dlp --parse-metadata "title:(?P<artist>.+?) - (?P<title>.+)" \
       --parse-metadata "%(artist)s:%(meta_artist)s" \
       --parse-metadata "%(title)s:%(meta_title)s" \
       --replace-in-metadata "artist,title" "\s+\(.*?\)" "" \
       --embed-metadata \
       -x --audio-format mp3 \
       URL
```

### 2. Podcast Processing

```bash
yt-dlp --parse-metadata "title:(?P<series>.+?) #(?P<episode_number>\d+)" \
       --parse-metadata "%(episode_number)s:%(meta_track)s" \
       --parse-metadata "%(series)s:%(meta_album)s" \
       --parse-metadata "%(uploader)s:%(meta_artist)s" \
       --embed-metadata \
       URL
```

### 3. Educational Content

```bash
yt-dlp --parse-metadata "playlist:(?P<meta_album>.+)" \
       --parse-metadata "playlist_index:%(meta_track)s" \
       --parse-metadata "uploader:(?P<meta_artist>.+)" \
       --parse-metadata "title:%(title)s [%(uploader)s]:%(meta_title)s" \
       --embed-metadata \
       URL
```

### 4. Archive with Custom Organization

```bash
yt-dlp --parse-metadata "%(uploader)s/%(upload_date>%Y)s/%(title)s:%(archive_path)s" \
       --parse-metadata "%(view_count)s views on %(upload_date>%Y-%m-%d)s:%(meta_comment)s" \
       -o "%(archive_path)s.%(ext)s" \
       --embed-metadata \
       URL
```

## Important Notes

- **Format Support**: Not all file formats support all metadata fields
- **Processing Order**: Metadata modification preserves relative order of options
- **Field Creation**: Any field created can be used in output templates
- **Overwrites**: `meta_` fields overwrite all default values
- **Regex Syntax**: Uses Python regular expression syntax
- **Case Sensitivity**: Field names are case-sensitive

## Troubleshooting

### Common Issues

1. **Metadata not appearing**: Check if the output format supports the metadata field
2. **Regex not matching**: Test your regex pattern separately
3. **Fields being overwritten**: Later operations may modify your custom fields
4. **Empty fields**: Some extractors may not provide certain metadata

### Debug Tips

See all available metadata fields

```bash
yt-dlp -j URL | jq .
```

Test metadata modifications without downloading

```bash
yt-dlp --simulate --print "%(meta_artist)s - %(meta_title)s" --parse-metadata "title:(?P<meta_artist>.+?) - (?P<meta_title>.+)" URL
```

This powerful metadata system allows you to customize exactly how your downloaded content is organized and tagged, making it perfect for building organized media libraries.
