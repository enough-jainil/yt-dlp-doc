---
sidebar_position: 1
---

# Using yt-dlp in Python Scripts

yt-dlp can be easily integrated into your Python scripts, allowing you to programmatically download videos and extract information. This guide will show you how to use yt-dlp's Python API in your own scripts.

## Installation

First, ensure yt-dlp is installed in your Python environment:

```sh
pip install yt-dlp
```

## Basic Usage

Here's a simple example of how to use yt-dlp in a Python script:

```python
import yt_dlp

def download_video(url):
    ydl_opts = {}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_video('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

## Customizing Options

You can customize the download behavior by passing options to `YoutubeDL`:

```python
ydl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
    'outtmpl': '%(title)s.%(ext)s'
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

## Extracting Video Information

To extract information without downloading:

```python
def get_video_info(url):
    ydl_opts = {}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=False)
    return info

# Usage
info = get_video_info('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
print(f"Title: {info['title']}")
print(f"Duration: {info['duration']} seconds")
```

## Handling Playlists

yt-dlp can handle playlists as well:

```python
def download_playlist(url):
    ydl_opts = {
        'outtmpl': '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s',
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_playlist('https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-')
```

## Error Handling

It's important to handle potential errors:

```python
from yt_dlp.utils import DownloadError

def safe_download(url):
    ydl_opts = {}
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
    except DownloadError as e:
        print(f"Error downloading {url}: {str(e)}")

# Usage
safe_download('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

## Progress Hooks

You can add a progress hook to track the download progress:

```python
def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')

ydl_opts = {
    'progress_hooks': [my_hook],
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

## Working with Cookies

If you need to use cookies for authenticated downloads:

```python
ydl_opts = {
    'cookiefile': 'cookies.txt'
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.example.com/private_video'])
```

## Logging

yt-dlp uses Python's logging module. You can configure it in your scripts:

```python
import logging

logging.basicConfig(level=logging.DEBUG)

ydl_opts = {
    'logger': logging.getLogger(__name__),
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

## Best Practices

- Always handle exceptions to prevent your script from crashing.
- Use context managers (`with` statements) when working with `YoutubeDL` objects.
- Be mindful of rate limiting and respect the terms of service of the websites you're downloading from.
- Use progress hooks for better user feedback in longer-running scripts.
- Consider using async operations for handling multiple downloads efficiently.

## Advanced Usage

For more advanced usage, including custom extractors and post-processors, refer to the yt-dlp documentation and source code.

Remember, when using yt-dlp in your Python scripts, you have the full power of Python at your disposal. This allows for complex workflows, integration with other libraries, and building full-fledged applications around video downloading and processing.
