---
sidebar_position: 1
---

# yt-dlp Command-line Syntax

yt-dlp is a powerful command-line tool with a wide range of options. This guide covers the basic syntax and structure of yt-dlp commands.

Basic Syntax
The general syntax for yt-dlp commands is:

```bash
yt-dlp [OPTIONS] URL [URL...]
```

Where:

- `[OPTIONS]` are optional flags and parameters that modify the behavior of yt-dlp
- `URL` is the address of the video or playlist you want to download
- Multiple URLs can be specified to download multiple videos in a single command

Simple Usage Examples
Download a single video:

```bash
yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Download a playlist:

```bash
yt-dlp https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-
```

Download audio only:

```bash
yt-dlp -x https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Common Options

- `-F, --list-formats`: List all available formats of requested videos
- `-f FORMAT, --format FORMAT`: Video format code, see "FORMAT SELECTION" for more details
- `-o TEMPLATE, --output TEMPLATE`: Output filename template, see "OUTPUT TEMPLATE" for details
- `-x, --extract-audio`: Convert video files to audio-only files
- `--audio-format FORMAT`: Specify audio format (e.g., mp3, m4a, wav)
- `-v, --verbose`: Print various debugging information
- `--playlist-start NUMBER`: Playlist video to start at (default is 1)
- `--playlist-end NUMBER`: Playlist video to end at (default is last)

Option Types
Boolean options:

- Enable with `--option-name` or `-short-option`
- Disable with `--no-option-name`

Options with arguments:

- Specified as `--option value` or `--option=value`
- For short options: `-o value` or `-ovalue`

Cumulative options:

- Can be specified multiple times to add more items
- Example: `--postprocessor-args ffmpeg:-option1 --postprocessor-args ffmpeg:-option2`

Using Configuration Files
You can use configuration files to store frequently used options:

- Create a configuration file (e.g., yt-dlp.conf)
- Add options to the file, one per line
- Use the configuration file with:

```bash
yt-dlp --config-location /path/to/yt-dlp.conf URL
```

Quoting and Escaping
Use quotes around URLs or options containing special characters
On Unix-like systems, use single quotes to prevent shell expansion
On Windows, use double quotes for paths with spaces
Example:

```bash
yt-dlp "https://www.youtube.com/watch?v=some&special=characters"
```

Getting Help
For a full list of options:

```bash
yt-dlp --help
```

For information on a specific option:

```bash
yt-dlp -h --option-name
```

Remember, yt-dlp is highly customizable, and these examples cover only basic usage. Refer to the full documentation for advanced features and detailed explanations of each option.
