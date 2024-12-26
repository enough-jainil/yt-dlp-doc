---
sidebar_position: 1
---

# Configuration Files in yt-dlp

Configuration files allow you to set default options for yt-dlp, saving you from typing frequently used options every time you run the program. This guide explains how to create and use configuration files effectively.

## Location of Configuration Files

yt-dlp looks for configuration files in several locations, in the following order:

### Main Configuration

- Specified by `--config-location`

### Portable Configuration

- `yt-dlp.conf` in the same directory as the yt-dlp binary
- `yt-dlp.conf` in the parent directory of yt-dlp's source code (if running from source)

### Home Configuration

- `yt-dlp.conf` in the directory specified by `-P`
- If `-P` is not used, it checks the current directory
- `${XDG_CONFIG_HOME}/yt-dlp/config` (recommended on Linux/macOS)
- `${XDG_CONFIG_HOME}/yt-dlp/config.txt`
- `${APPDATA}/yt-dlp/config` (recommended on Windows)
- `${APPDATA}/yt-dlp/config.txt`
- `~/yt-dlp.conf`
- `~/.yt-dlp/config`

### System Configuration

- `/etc/yt-dlp.conf`
- `/etc/yt-dlp/config`
- `/etc/yt-dlp/config.txt`

## Creating a Configuration File

1. Create a new text file named `config` or `yt-dlp.conf` in one of the above locations.
2. Add one option per line, exactly as they would appear on the command line.
3. Lines starting with `#` are treated as comments.

### Example Configuration File

```plaintext
# Always extract audio
-x

# Prefer mp4 format
-f mp4

# Use a specific output template
-o "%(title)s-%(id)s.%(ext)s"

# Set a default archive file
--download-archive ~/yt-dlp-archive.txt
```

## Using Configuration Files

Once you've set up a configuration file, yt-dlp will automatically use these options every time it runs.

### To Ignore the Configuration File for a Single Run

```sh
yt-dlp --ignore-config URL
```

### Overriding Configuration Options

Command-line options take precedence over options in configuration files. For example, if your config file sets `-f mp4` but you run:

```sh
yt-dlp -f webm URL
```

The video will be downloaded in `webm` format.

### Multiple Configuration Files

yt-dlp reads all found configuration files, not just the first one. Options in later files override earlier ones.

### Environment Variables

Some options can be set using environment variables. These take precedence over options in configuration files. For example:

```sh
export YTD_LP_PASSWORD=your_password
```

## Tips for Using Configuration Files

- Use configuration files for options you use frequently.
- Keep sensitive information (like passwords) in a separate, secure configuration file.
- Use `--verbose` to see which configuration files are being read.
- Consider having different configuration files for different purposes (e.g., one for audio extraction, another for video downloading).

## Example Configurations

### Audio Extraction Setup

```plaintext
# Extract audio
-x
# Convert to mp3
--audio-format mp3
# Set audio quality
--audio-quality 0
# Add metadata
--add-metadata
```

### Video Download Setup

```plaintext
# Prefer 1080p mp4
-f 'bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'
# Include subtitles
--write-sub
--sub-lang en
# Use a specific output template
-o '%(uploader)s/%(title)s-%(id)s.%(ext)s'
```

### Playlist Download Setup

```plaintext
# Download full playlists
--yes-playlist
# Number the videos
-o '%(playlist)s/%(playlist_index)s-%(title)s.%(ext)s'
# Use an archive file
--download-archive playlist-archive.txt
```

Configuration files in yt-dlp provide a powerful way to customize your default settings, making it easier and faster to use the tool for your specific needs. By understanding how to create and use these files effectively, you can streamline your workflow and ensure consistent behavior across different downloads.
