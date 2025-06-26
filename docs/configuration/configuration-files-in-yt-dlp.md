---
sidebar_position: 1
---

# Configuration Files in yt-dlp

yt-dlp supports configuration files to store default options, making it easier to manage your preferred settings without repeatedly typing command-line arguments.

## Configuration File Locations

yt-dlp loads configuration from multiple locations in the following order:

### 1. Main Configuration

- **File given to `--config-location`** - Explicitly specified configuration file

### 2. Portable Configuration (Recommended for portable installations)

- **Binary installations**: `yt-dlp.conf` in the same directory as the binary
- **Source installations**: `yt-dlp.conf` in the parent directory of `yt_dlp`

### 3. Home Configuration

- **Custom home path**: `yt-dlp.conf` in the home path given to `-P`
- **Current directory**: If `-P` is not given, the current directory is searched

### 4. User Configuration

- **Linux/macOS**:
  - `${XDG_CONFIG_HOME}/yt-dlp.conf`
  - `${XDG_CONFIG_HOME}/yt-dlp/config` **(recommended on Linux/macOS)**
  - `${XDG_CONFIG_HOME}/yt-dlp/config.txt`
- **Windows**:
  - `${APPDATA}/yt-dlp.conf`
  - `${APPDATA}/yt-dlp/config` **(recommended on Windows)**
  - `${APPDATA}/yt-dlp/config.txt`
- **Universal**:
  - `~/yt-dlp.conf`
  - `~/yt-dlp.conf.txt`
  - `~/.yt-dlp/config`
  - `~/.yt-dlp/config.txt`

### 5. System Configuration

- `/etc/yt-dlp.conf`
- `/etc/yt-dlp/config`
- `/etc/yt-dlp/config.txt`

## Configuration File Format

Configuration files use the same options as command-line arguments, with these rules:

### Basic Syntax

- One option per line
- Options use the same format as command-line (with `--` prefix)
- **No whitespace** after `-` or `--` (e.g., `-o` not `- o`)
- Comments start with `#`, `;`, or `]`
- Empty lines are ignored

### Example Configuration

```conf
# yt-dlp configuration file
# Lines starting with # are comments

# Always extract audio
-x

# Do not copy the mtime
--no-mtime

# Use this proxy
--proxy 127.0.0.1:3128

# Save all videos under YouTube directory in your home directory
-o ~/YouTube/%(title)s.%(ext)s

# Prefer MP4 format
-f "best[ext=mp4]/best"

# Download subtitles
--write-subs
--sub-langs en,en-US

# Write metadata
--write-info-json
--embed-metadata

# Thumbnail options
--write-thumbnail
--embed-thumbnail
```

## Configuration Options Management

### Ignoring Configuration Files

```bash
# Ignore all configuration files for this run
yt-dlp --ignore-config URL

# Alternative syntax
yt-dlp --no-config URL
```

### Custom Configuration Location

```bash
# Use specific configuration file
yt-dlp --config-locations /path/to/custom-config.conf URL

# Use configuration from stdin
yt-dlp --config-locations - URL < config.conf

# Use multiple configuration files
yt-dlp --config-locations config1.conf --config-locations config2.conf URL
```

### Disable Custom Configuration Loading

```bash
# Do not load any custom configuration files (use only default locations)
yt-dlp --no-config-locations URL
```

## Configuration File Encoding

### Encoding Detection

- Configuration files are decoded according to UTF BOM if present
- Otherwise, the encoding from system locale is used

### Specifying Encoding

To force a specific encoding, add a coding declaration at the beginning:

```conf
# coding: utf-8
# Your configuration options below
-o "%(title)s.%(ext)s"
--write-subs
```

**Important**: The coding declaration must be the very first line with no characters before it, not even spaces or BOM.

### Encoding Examples

```conf
# coding: shift-jis
# Configuration using Shift-JIS encoding
```

```conf
# coding: iso-8859-1
# Configuration using Latin-1 encoding
```

## Advanced Configuration

### Conditional Configuration

While not directly supported, you can use multiple configuration files for different scenarios:

```bash
# Configuration for high quality downloads
yt-dlp --config-locations ~/.config/yt-dlp/high-quality.conf URL

# Configuration for mobile/low bandwidth
yt-dlp --config-locations ~/.config/yt-dlp/mobile.conf URL

# Configuration for audio-only downloads
yt-dlp --config-locations ~/.config/yt-dlp/audio-only.conf URL
```

### Network-Specific Configuration

Example configurations for different network conditions:

**High-speed connection** (`~/.config/yt-dlp/high-speed.conf`):

```conf
# High quality preferences
-f "bestvideo[height<=2160]+bestaudio/best"
-S "res,fps,vcodec,acodec"
--concurrent-fragments 8
```

**Limited bandwidth** (`~/.config/yt-dlp/low-bandwidth.conf`):

```conf
# Bandwidth-conscious settings
-f "best[height<=720]"
-S "+size,res:720"
--limit-rate 500K
--concurrent-fragments 2
```

### Site-Specific Configuration

**YouTube optimized** (`~/.config/yt-dlp/youtube.conf`):

```conf
# YouTube-specific settings
--extractor-args "youtube:player_client=tv,ios,web"
--sub-langs "en,en-US,en-GB"
--write-auto-subs
-f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best"
```

## Configuration Hierarchy and Precedence

### Loading Order

1. **System configuration** (lowest priority)
2. **User configuration**
3. **Home configuration**
4. **Portable configuration**
5. **Main configuration** (highest priority)
6. **Command-line arguments** (override all configuration files)

### Configuration Inheritance

- Later configurations override earlier ones
- Command-line arguments always take precedence
- Use `--ignore-config` to bypass all configuration files

### Example Hierarchy

If you have:

- System config: `/etc/yt-dlp.conf` with `-f best`
- User config: `~/.config/yt-dlp/config` with `-f "best[height<=1080]"`
- Command line: `-f "bestvideo+bestaudio"`

The final format selector will be `bestvideo+bestaudio` (command line wins).

## Environment Variables

Configuration also respects environment variables:

### XDG Base Directory Specification

- `${XDG_CONFIG_HOME}` - defaults to `~/.config`
- `${XDG_CACHE_HOME}` - defaults to `~/.cache`

### Platform-Specific Variables

- **Windows**: `${APPDATA}` - typically `C:\Users\<user>\AppData\Roaming`
- **All platforms**: `${HOME}` or `${USERPROFILE}`

### Setting Environment Variables

**Linux/macOS**:

```bash
export XDG_CONFIG_HOME="$HOME/.config"
yt-dlp URL  # Uses $XDG_CONFIG_HOME/yt-dlp/config
```

**Windows**:

```cmd
set APPDATA=C:\Users\MyUser\AppData\Roaming
yt-dlp URL
```

## Configuration Examples

### Complete Configuration Examples

**Comprehensive configuration** (`~/.config/yt-dlp/config`):

```conf
# yt-dlp comprehensive configuration

# Output and organization
-o "%(uploader)s/%(upload_date>%Y)s/%(title)s [%(id)s].%(ext)s"
--restrict-filenames
--trim-filenames 100

# Format selection
-f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best"
-S "res:1080,fps:60,vcodec:h264,acodec:aac"

# Subtitles
--write-subs
--write-auto-subs
--sub-langs "en.*,ja,ko"
--convert-subs srt

# Metadata and thumbnails
--write-info-json
--write-description
--write-thumbnail
--embed-metadata
--embed-subs
--embed-thumbnail

# Network and performance
--concurrent-fragments 4
--retries 10
--fragment-retries 10

# Archive and resume
--download-archive downloaded.txt
--continue

# Ignore errors and continue
--ignore-errors
--no-abort-on-error
```

**Audio-only configuration** (`~/.config/yt-dlp/audio.conf`):

```conf
# Audio extraction configuration

# Extract audio
-x
--audio-format mp3
--audio-quality 0

# Organization
-o "%(artist,uploader)s/%(album,playlist)s/%(track_number)02d - %(title)s.%(ext)s"

# Metadata
--embed-metadata
--write-info-json
--add-metadata

# Thumbnail as cover art
--write-thumbnail
--embed-thumbnail
```

**Archive configuration** (`~/.config/yt-dlp/archive.conf`):

```conf
# Archive/backup configuration

# Best available quality
-f "best"

# Complete metadata preservation
--write-info-json
--write-description
--write-thumbnail
--write-annotations
--write-all-thumbnails
--clean-info-json

# Subtitles in all available languages
--write-subs
--write-auto-subs
--sub-langs all

# Organization by platform and uploader
-o "%(extractor)s/%(uploader)s/%(upload_date)s - %(title)s [%(id)s].%(ext)s"

# Error handling for batch processing
--ignore-errors
--continue
--download-archive archive.txt
```

## Troubleshooting Configuration

### Testing Configuration

```bash
# Test configuration without downloading
yt-dlp --simulate --print filename URL

# Show effective configuration
yt-dlp --verbose --print config URL

# Test specific configuration file
yt-dlp --config-locations test-config.conf --simulate URL
```

### Common Configuration Issues

1. **Invalid syntax**: Check for extra spaces after `--`
2. **Encoding problems**: Add `# coding: utf-8` at the top
3. **Path issues**: Use absolute paths or proper escaping
4. **Option conflicts**: Later options override earlier ones

### Debug Configuration Loading

```bash
# Show which configuration files are loaded
yt-dlp --verbose URL 2>&1 | grep -i config

# Ignore all configs to test command-line only
yt-dlp --ignore-config --simulate URL
```

## Configuration Best Practices

### Organization Tips

1. **Use separate configs** for different use cases
2. **Comment your configuration** extensively
3. **Test configurations** with `--simulate` first
4. **Use portable paths** when possible
5. **Version control** your configuration files

### Security Considerations

1. **Protect sensitive configs** with appropriate file permissions
2. **Don't store passwords** in configuration files
3. **Use environment variables** for sensitive data
4. **Be careful with proxy settings** in shared environments

### Maintenance

1. **Regular updates**: Review configuration when updating yt-dlp
2. **Option validation**: Check for deprecated options
3. **Performance tuning**: Adjust based on your network and hardware
4. **Backup configurations**: Keep copies of working configurations

Configuration files are a powerful way to customize yt-dlp's behavior. Start with a simple configuration and gradually add options as you discover what works best for your use cases.
