---
sidebar_position: 2
---

# Common Options and Flags for yt-dlp

yt-dlp offers a wide range of options to customize your download experience. This page covers some of the most commonly used options and flags.

## General Options

- `-h`, `--help`: Display the help message and exit
- `--version`: Print program version and exit
- `-U`, `--update`: Update this program to the latest version
- `-i`, `--ignore-errors`: Continue on download errors, e.g., to skip unavailable videos in a playlist
- `--no-abort-on-error`: Continue with next video on extraction errors
- `--default-search PREFIX`: Use this prefix for unqualified URLs (e.g., "ytsearch:")

## Video Selection

- `--playlist-start NUMBER`: Playlist video to start at (default is 1)
- `--playlist-end NUMBER`: Playlist video to end at (default is last)
- `--playlist-items ITEM_SPEC`: Comma-separated playlist_index of the items to download
- `--match-filter FILTER`: Generic video filter (e.g., "!is_live", "like_count>?100")
- `--no-playlist`: Download only the video, if the URL refers to a video and a playlist
- `--yes-playlist`: Download the playlist, if the URL refers to a video and a playlist
- `--age-limit YEARS`: Download only videos suitable for the given age

## Download Options

- `-f FORMAT`, `--format FORMAT`: Video format code, see "FORMAT SELECTION" for more details
- `-F`, `--list-formats`: List all available formats of requested videos
- `--merge-output-format FORMAT`: If a merge is required, output to given container format
- `-r RATE`, `--limit-rate RATE`: Maximum download rate in bytes per second (e.g., 50K or 4.2M)
- `-R RETRIES`, `--retries RETRIES`: Number of retries (default is 10), or "infinite"
- `--fragment-retries RETRIES`: Number of retries for a fragment (default is 10)
- `--skip-unavailable-fragments`: Skip unavailable fragments (default)
- `--abort-on-unavailable-fragment`: Abort downloading when a fragment is unavailable
- `--keep-fragments`: Keep downloaded fragments on disk after downloading is finished
- `--buffer-size SIZE`: Size of download buffer (e.g., 1024 or 16K) (default is 1024)
- `--no-resize-buffer`: Do not automatically adjust the buffer size

## Filesystem Options

- `-o TEMPLATE`, `--output TEMPLATE`: Output filename template, see "OUTPUT TEMPLATE" for details
- `--restrict-filenames`: Restrict filenames to only ASCII characters, and avoid "&" and spaces
- `-w`, `--no-overwrites`: Do not overwrite files
- `-c`, `--continue`: Force resume of partially downloaded files

## Thumbnail Options

- `--write-thumbnail`: Write thumbnail image to disk
- `--write-all-thumbnails`: Write all thumbnail image formats to disk
- `--list-thumbnails`: List all available thumbnails of each video

## Verbosity / Simulation Options

- `-q`, `--quiet`: Activate quiet mode
- `--no-warnings`: Ignore warnings
- `-s`, `--simulate`: Do not download the video and do not write anything to disk
- `--skip-download`: Do not download the video
- `-g`, `--get-url`: Simulate, quiet but print URL
- `-e`, `--get-title`: Simulate, quiet but print title
- `--get-id`: Simulate, quiet but print id
- `--get-thumbnail`: Simulate, quiet but print thumbnail URL
- `--get-description`: Simulate, quiet but print video description
- `--get-duration`: Simulate, quiet but print video length
- `--get-filename`: Simulate, quiet but print output filename
- `--get-format`: Simulate, quiet but print output format
- `-j`, `--dump-json`: Simulate, quiet but print JSON information
- `-J`, `--dump-single-json`: Simulate, quiet but print JSON information for each command-line argument

## Workarounds

- `--no-check-certificate`: Suppress HTTPS certificate validation
- `--prefer-insecure`: Use an unencrypted connection to retrieve information about the video
- `--user-agent UA`: Specify a custom user agent
- `--referer URL`: Specify a custom referer, use if the video access is restricted to one domain
- `--add-header FIELD:VALUE`: Specify a custom HTTP header and its value
- `--bidi-workaround`: Work around terminals that lack bidirectional text support

## Video Format Options

- `-f FORMAT`, `--format FORMAT`: Video format code, see the "FORMAT SELECTION" for more details
- `--all-formats`: Download all available video formats
- `--prefer-free-formats`: Prefer free video formats unless a specific one is requested
- `--no-prefer-free-formats`: Don't prefer free video formats
- `--youtube-skip-dash-manifest`: Do not download the DASH manifests and related data on YouTube videos
- `--merge-output-format FORMAT`: If a merge is required, output to given container format

Remember to consult the full documentation or use `yt-dlp --help` for a complete list of options and more detailed explanations.
