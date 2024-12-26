---
sidebar_position: 2
---

# Examples of Embedding yt-dlp

This page provides various examples of how to embed yt-dlp functionality in your Python scripts. These examples cover a range of common use cases and demonstrate the flexibility of yt-dlp's API.

## 1. Basic Video Download

Download a single video with default options:

```python
import yt_dlp

def download_video(url):
    ydl_opts = {}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_video('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

## 2. Download Audio Only

Extract audio from a video and save it as an MP3:

```python
import yt_dlp

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

## 3. Extract Video Information

Get metadata about a video without downloading it:

```python
import yt_dlp

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

## 4. Download Playlist

Download all videos from a playlist:

```python
import yt_dlp

def download_playlist(url):
    ydl_opts = {
        'outtmpl': '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s',
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_playlist('https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-')
```

## 5. Custom Output Template

Use a custom output template to organize downloads:

```python
import yt_dlp

ydl_opts = {
    'outtmpl': '%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s'
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

## 6. Download with Progress Callback

Implement a progress callback to track download progress:

```python
import yt_dlp

def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')
    elif d['status'] == 'downloading':
        print(f"Downloading: {d['filename']} - {d['_percent_str']} complete")

ydl_opts = {
    'progress_hooks': [my_hook],
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

## 7. Error Handling

Implement error handling for robustness:

```python
import yt_dlp
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

## 8. Batch Download from File

Download videos listed in a text file:

```python
import yt_dlp

def batch_download(file_path):
    with open(file_path, 'r') as f:
        urls = [line.strip() for line in f]

    ydl_opts = {}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download(urls)

# Usage
batch_download('video_urls.txt')
```

## 9. Download with Authentication

Download content that requires authentication:

```python
import yt_dlp

ydl_opts = {
    'username': 'your_username',
    'password': 'your_password',
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.example.com/private_video'])
```

## 10. Custom Format Selection

Select a specific format for download:

```python
import yt_dlp

ydl_opts = {
    'format': 'bestvideo[height<=1080]+bestaudio/best[height<=1080]'
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
```

These examples demonstrate various ways to embed yt-dlp functionality in your Python scripts. You can combine and modify these examples to suit your specific needs. Remember to handle exceptions, respect website terms of service, and consider performance implications when working with large numbers of videos or playlists.
