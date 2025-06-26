---
sidebar_position: 1
---

# Using yt-dlp in Python Scripts

yt-dlp provides a powerful Python API that allows you to programmatically download videos, extract metadata, and integrate video processing into your applications. This comprehensive guide covers everything from basic usage to advanced integration patterns.

## Installation and Setup

### **Installing yt-dlp**

```bash
# Install latest version
pip install yt-dlp

# Install with optional dependencies
pip install yt-dlp[default]

# Install development version
pip install git+https://github.com/yt-dlp/yt-dlp.git

# Install in virtual environment (recommended)
python -m venv yt-dlp-env
source yt-dlp-env/bin/activate  # Linux/macOS
# yt-dlp-env\Scripts\activate   # Windows
pip install yt-dlp
```

### **Basic Import and Setup**

```python
import yt_dlp
import os
import sys
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
```

## Core API Usage

### **Basic Video Download**

```python
def download_video(url, output_path='.'):
    """Download a single video with basic options"""
    ydl_opts = {
        'outtmpl': os.path.join(output_path, '%(title)s.%(ext)s'),
        'format': 'best[height<=1080]',  # Limit to 1080p
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([url])
            logger.info(f"Successfully downloaded: {url}")
        except Exception as e:
            logger.error(f"Error downloading {url}: {str(e)}")
            raise

# Usage
download_video('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

### **Information Extraction**

```python
def extract_video_info(url):
    """Extract comprehensive video information"""
    ydl_opts = {
        'quiet': True,  # Suppress output
        'no_warnings': False,
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info = ydl.extract_info(url, download=False)

            # Extract key information
            video_info = {
                'id': info.get('id'),
                'title': info.get('title'),
                'description': info.get('description'),
                'uploader': info.get('uploader'),
                'upload_date': info.get('upload_date'),
                'duration': info.get('duration'),
                'view_count': info.get('view_count'),
                'like_count': info.get('like_count'),
                'thumbnail': info.get('thumbnail'),
                'formats': len(info.get('formats', [])),
                'subtitles': list(info.get('subtitles', {}).keys()),
                'categories': info.get('categories', []),
                'tags': info.get('tags', []),
            }

            return video_info

        except Exception as e:
            logger.error(f"Error extracting info from {url}: {str(e)}")
            return None

# Usage
info = extract_video_info('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
if info:
    print(f"Title: {info['title']}")
    print(f"Duration: {info['duration']} seconds")
    print(f"Views: {info['view_count']:,}")
```

## Advanced Configuration Options

### **Comprehensive Download Configuration**

```python
class VideoDownloader:
    def __init__(self, output_dir='downloads', quality='best'):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        self.quality = quality

    def get_ydl_opts(self, custom_opts=None):
        """Get comprehensive yt-dlp options"""
        base_opts = {
            # Output configuration
            'outtmpl': {
                'default': str(self.output_dir / '%(uploader)s/%(title)s.%(ext)s'),
                'playlist': str(self.output_dir / 'playlists/%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s'),
            },

            # Format selection
            'format': self.quality,
            'merge_output_format': 'mp4',

            # Download behavior
            'ignoreerrors': True,
            'no_overwrites': True,
            'continue_dl': True,
            'retries': 3,
            'fragment_retries': 3,
            'skip_unavailable_fragments': True,

            # Metadata and info
            'writeinfojson': True,
            'writethumbnail': True,
            'writesubtitles': True,
            'writeautomaticsub': True,
            'subtitleslangs': ['en', 'en-US'],

            # Post-processing
            'postprocessors': [
                {
                    'key': 'FFmpegVideoConvertor',
                    'preferedformat': 'mp4',
                },
                {
                    'key': 'EmbedSubs',
                    'already_have_subtitle': False
                },
                {
                    'key': 'FFmpegMetadata',
                    'add_metadata': True,
                },
            ],

            # Network and performance
            'socket_timeout': 30,
            'http_chunk_size': 10485760,  # 10MB chunks
            'concurrent_fragment_downloads': 4,

            # Logging
            'logger': logger,
        }

        if custom_opts:
            base_opts.update(custom_opts)

        return base_opts

    def download(self, urls, custom_opts=None):
        """Download videos with comprehensive error handling"""
        if isinstance(urls, str):
            urls = [urls]

        ydl_opts = self.get_ydl_opts(custom_opts)

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            results = []
            for url in urls:
                try:
                    ydl.download([url])
                    results.append({'url': url, 'status': 'success'})
                except Exception as e:
                    error_msg = str(e)
                    logger.error(f"Failed to download {url}: {error_msg}")
                    results.append({'url': url, 'status': 'error', 'error': error_msg})

            return results

# Usage
downloader = VideoDownloader(output_dir='my_videos', quality='best[height<=720]')
results = downloader.download([
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=oHg5SJYRHA0'
])
```

### **Audio-Only Downloads**

```python
def download_audio(url, output_dir='audio', format='mp3', quality='192'):
    """Download audio with specific format and quality"""
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': os.path.join(output_dir, '%(title)s.%(ext)s'),
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': format,
            'preferredquality': quality,
        }],
        'writeinfojson': True,
        'writethumbnail': True,
        'postprocessor_args': [
            '-metadata', 'title=%(title)s',
            '-metadata', 'artist=%(uploader)s',
            '-metadata', 'album=%(playlist)s',
        ],
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_audio('https://www.youtube.com/watch?v=dQw4w9WgXcQ', format='flac', quality='best')
```

## Playlist and Channel Handling

### **Smart Playlist Processing**

```python
class PlaylistProcessor:
    def __init__(self, output_dir='playlists'):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)

    def process_playlist(self, url, max_videos=None, date_filter=None):
        """Process playlist with advanced filtering"""
        ydl_opts = {
            'quiet': True,
            'extract_flat': True,  # Don't download, just get URLs
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            playlist_info = ydl.extract_info(url, download=False)

        if playlist_info['_type'] != 'playlist':
            raise ValueError("URL is not a playlist")

        entries = playlist_info.get('entries', [])

        # Apply filters
        if max_videos:
            entries = entries[:max_videos]

        if date_filter:
            # Filter by upload date (requires full extraction)
            filtered_entries = []
            for entry in entries:
                try:
                    video_info = self.get_video_info(entry['url'])
                    if self._matches_date_filter(video_info.get('upload_date'), date_filter):
                        filtered_entries.append(entry)
                except:
                    continue
            entries = filtered_entries

        return {
            'title': playlist_info.get('title'),
            'uploader': playlist_info.get('uploader'),
            'entry_count': len(entries),
            'entries': entries
        }

    def download_playlist(self, url, **kwargs):
        """Download entire playlist with options"""
        playlist_info = self.process_playlist(url, **kwargs)

        ydl_opts = {
            'outtmpl': str(self.output_dir / f"{playlist_info['title']}/%(playlist_index)02d - %(title)s.%(ext)s"),
            'writeinfojson': True,
            'ignoreerrors': True,
        }

        urls = [entry['url'] for entry in playlist_info['entries']]

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download(urls)

        return playlist_info

    def _matches_date_filter(self, upload_date, date_filter):
        """Check if upload date matches filter"""
        # Implementation for date filtering
        return True  # Simplified for example

# Usage
processor = PlaylistProcessor()
playlist_info = processor.download_playlist(
    'https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-',
    max_videos=10
)
```

## Progress Monitoring and Callbacks

### **Advanced Progress Tracking**

```python
import time
from threading import Lock

class ProgressTracker:
    def __init__(self):
        self.downloads = {}
        self.lock = Lock()

    def create_hook(self, download_id):
        """Create a progress hook for a specific download"""
        def progress_hook(d):
            with self.lock:
                if d['status'] == 'downloading':
                    self.downloads[download_id] = {
                        'filename': d.get('filename', 'Unknown'),
                        'percent': d.get('_percent_str', '0%'),
                        'speed': d.get('_speed_str', 'Unknown'),
                        'eta': d.get('_eta_str', 'Unknown'),
                        'downloaded': d.get('downloaded_bytes', 0),
                        'total': d.get('total_bytes', 0),
                        'status': 'downloading'
                    }
                elif d['status'] == 'finished':
                    self.downloads[download_id]['status'] = 'finished'
                    print(f"✓ Finished downloading: {d['filename']}")
                elif d['status'] == 'error':
                    self.downloads[download_id]['status'] = 'error'
                    print(f"✗ Error downloading: {d.get('filename', 'Unknown')}")

        return progress_hook

    def get_status(self, download_id):
        """Get current status of a download"""
        with self.lock:
            return self.downloads.get(download_id, {})

    def print_progress(self):
        """Print progress for all active downloads"""
        with self.lock:
            for download_id, info in self.downloads.items():
                if info['status'] == 'downloading':
                    print(f"{download_id}: {info['percent']} - {info['speed']} - ETA: {info['eta']}")

def download_with_progress(urls, output_dir='downloads'):
    """Download multiple videos with progress tracking"""
    tracker = ProgressTracker()

    for i, url in enumerate(urls):
        download_id = f"download_{i}"

        ydl_opts = {
            'outtmpl': os.path.join(output_dir, '%(title)s.%(ext)s'),
            'progress_hooks': [tracker.create_hook(download_id)],
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            try:
                ydl.download([url])
            except Exception as e:
                logger.error(f"Error downloading {url}: {e}")

# Usage
urls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=oHg5SJYRHA0'
]
download_with_progress(urls)
```

## Error Handling and Resilience

### **Robust Error Management**

```python
from yt_dlp.utils import DownloadError, ExtractorError, UnavailableVideoError
import json
import traceback

class RobustDownloader:
    def __init__(self, max_retries=3, retry_delay=5):
        self.max_retries = max_retries
        self.retry_delay = retry_delay
        self.failed_downloads = []

    def download_with_retry(self, url, ydl_opts=None):
        """Download with automatic retry logic"""
        if ydl_opts is None:
            ydl_opts = {}

        for attempt in range(self.max_retries):
            try:
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    ydl.download([url])
                return True

            except UnavailableVideoError as e:
                logger.error(f"Video unavailable: {url} - {str(e)}")
                self.failed_downloads.append({
                    'url': url,
                    'error': 'unavailable',
                    'message': str(e)
                })
                return False

            except ExtractorError as e:
                logger.error(f"Extractor error for {url}: {str(e)}")
                if attempt < self.max_retries - 1:
                    logger.info(f"Retrying in {self.retry_delay} seconds...")
                    time.sleep(self.retry_delay)
                    continue
                else:
                    self.failed_downloads.append({
                        'url': url,
                        'error': 'extractor_error',
                        'message': str(e)
                    })
                    return False

            except Exception as e:
                logger.error(f"Unexpected error for {url}: {str(e)}")
                logger.debug(traceback.format_exc())
                if attempt < self.max_retries - 1:
                    time.sleep(self.retry_delay)
                    continue
                else:
                    self.failed_downloads.append({
                        'url': url,
                        'error': 'unexpected',
                        'message': str(e),
                        'traceback': traceback.format_exc()
                    })
                    return False

        return False

    def batch_download(self, urls, ydl_opts=None):
        """Download multiple URLs with error tracking"""
        results = {
            'successful': [],
            'failed': [],
            'total': len(urls)
        }

        for url in urls:
            if self.download_with_retry(url, ydl_opts):
                results['successful'].append(url)
            else:
                results['failed'].append(url)

        return results

    def save_failed_downloads(self, filename='failed_downloads.json'):
        """Save failed downloads for later retry"""
        with open(filename, 'w') as f:
            json.dump(self.failed_downloads, f, indent=2)
        logger.info(f"Saved {len(self.failed_downloads)} failed downloads to {filename}")

# Usage
downloader = RobustDownloader(max_retries=5, retry_delay=10)
results = downloader.batch_download([
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=invalid_video_id',
    'https://www.youtube.com/watch?v=oHg5SJYRHA0'
])

print(f"Successful: {len(results['successful'])}")
print(f"Failed: {len(results['failed'])}")
downloader.save_failed_downloads()
```

## Authentication and Cookies

### **Handling Authentication**

```python
def setup_authentication(username=None, password=None, cookie_file=None, netrc=False):
    """Setup authentication options"""
    auth_opts = {}

    if username and password:
        auth_opts.update({
            'username': username,
            'password': password,
        })

    if cookie_file and os.path.exists(cookie_file):
        auth_opts['cookiefile'] = cookie_file

    if netrc:
        auth_opts['usenetrc'] = True

    return auth_opts

def download_private_content(url, auth_method='cookies'):
    """Download private or restricted content"""
    base_opts = {
        'outtmpl': '%(title)s.%(ext)s',
        'writeinfojson': True,
    }

    if auth_method == 'cookies':
        # Extract cookies from browser
        auth_opts = {
            'cookiesfrombrowser': ('chrome', None, None, None),  # Browser, profile, keyring, container
        }
    elif auth_method == 'login':
        auth_opts = setup_authentication(
            username=input("Username: "),
            password=input("Password: ")
        )
    else:
        auth_opts = {}

    ydl_opts = {**base_opts, **auth_opts}

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_private_content('https://example.com/private_video', auth_method='cookies')
```

## Custom Post-Processing

### **Advanced Post-Processing Pipeline**

```python
def create_custom_postprocessors():
    """Create custom post-processing pipeline"""
    return [
        # Extract audio
        {
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
            'when': 'post_process'
        },

        # Add metadata
        {
            'key': 'FFmpegMetadata',
            'add_metadata': True,
        },

        # Embed subtitles
        {
            'key': 'EmbedSubs',
            'already_have_subtitle': False
        },

        # Custom processor for file organization
        {
            'key': 'MoveFiles',
            'already_have_subtitle': False
        },

        # Cleanup temporary files
        {
            'key': 'FFmpegFixupM4a',
        }
    ]

def download_with_custom_processing(url):
    """Download with comprehensive post-processing"""
    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': '%(uploader)s - %(title)s.%(ext)s',
        'writesubtitles': True,
        'writeautomaticsub': True,
        'subtitleslangs': ['en', 'es', 'fr'],
        'postprocessors': create_custom_postprocessors(),
        'postprocessor_args': [
            # FFmpeg arguments for quality optimization
            '-c:v', 'libx264',
            '-preset', 'medium',
            '-crf', '23',
            '-c:a', 'aac',
            '-b:a', '128k'
        ]
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_with_custom_processing('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

## Integration Patterns

### **Async/Await Integration**

```python
import asyncio
import concurrent.futures
from typing import List, Dict, Any

class AsyncVideoDownloader:
    def __init__(self, max_workers=4):
        self.max_workers = max_workers
        self.executor = concurrent.futures.ThreadPoolExecutor(max_workers=max_workers)

    async def download_video_async(self, url: str, ydl_opts: Dict[str, Any] = None) -> Dict[str, Any]:
        """Download single video asynchronously"""
        loop = asyncio.get_event_loop()

        def download_sync():
            if ydl_opts is None:
                ydl_opts_local = {'outtmpl': '%(title)s.%(ext)s'}
            else:
                ydl_opts_local = ydl_opts.copy()

            try:
                with yt_dlp.YoutubeDL(ydl_opts_local) as ydl:
                    ydl.download([url])
                return {'url': url, 'status': 'success'}
            except Exception as e:
                return {'url': url, 'status': 'error', 'error': str(e)}

        return await loop.run_in_executor(self.executor, download_sync)

    async def download_batch_async(self, urls: List[str], ydl_opts: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        """Download multiple videos concurrently"""
        tasks = [self.download_video_async(url, ydl_opts) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        # Handle exceptions
        processed_results = []
        for result in results:
            if isinstance(result, Exception):
                processed_results.append({
                    'status': 'error',
                    'error': str(result)
                })
            else:
                processed_results.append(result)

        return processed_results

    def close(self):
        """Clean up executor"""
        self.executor.shutdown(wait=True)

# Usage
async def main():
    downloader = AsyncVideoDownloader(max_workers=3)

    urls = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        'https://www.youtube.com/watch?v=9bZkp7q19f0'
    ]

    try:
        results = await downloader.download_batch_async(urls)

        successful = [r for r in results if r['status'] == 'success']
        failed = [r for r in results if r['status'] == 'error']

        print(f"Downloaded {len(successful)} videos successfully")
        print(f"Failed to download {len(failed)} videos")

    finally:
        downloader.close()

# Run async example
# asyncio.run(main())
```

### **Web API Integration**

```python
from flask import Flask, request, jsonify, send_file
import tempfile
import threading
import uuid

app = Flask(__name__)

class WebVideoDownloader:
    def __init__(self):
        self.downloads = {}
        self.lock = threading.Lock()

    def start_download(self, url, options=None):
        """Start download and return job ID"""
        job_id = str(uuid.uuid4())

        with self.lock:
            self.downloads[job_id] = {
                'status': 'starting',
                'url': url,
                'progress': 0,
                'error': None,
                'filename': None
            }

        # Start download in background thread
        thread = threading.Thread(
            target=self._download_worker,
            args=(job_id, url, options)
        )
        thread.daemon = True
        thread.start()

        return job_id

    def _download_worker(self, job_id, url, options):
        """Background worker for downloading"""
        temp_dir = tempfile.mkdtemp()

        def progress_hook(d):
            with self.lock:
                if job_id in self.downloads:
                    if d['status'] == 'downloading':
                        percent = d.get('_percent_str', '0%').replace('%', '')
                        try:
                            self.downloads[job_id]['progress'] = float(percent)
                        except:
                            pass
                    elif d['status'] == 'finished':
                        self.downloads[job_id]['status'] = 'completed'
                        self.downloads[job_id]['filename'] = d['filename']

        ydl_opts = {
            'outtmpl': os.path.join(temp_dir, '%(title)s.%(ext)s'),
            'progress_hooks': [progress_hook],
        }

        if options:
            ydl_opts.update(options)

        try:
            with self.lock:
                self.downloads[job_id]['status'] = 'downloading'

            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([url])

        except Exception as e:
            with self.lock:
                self.downloads[job_id]['status'] = 'error'
                self.downloads[job_id]['error'] = str(e)

    def get_status(self, job_id):
        """Get download status"""
        with self.lock:
            return self.downloads.get(job_id)

# Global downloader instance
downloader = WebVideoDownloader()

@app.route('/download', methods=['POST'])
def start_download():
    data = request.json
    url = data.get('url')
    options = data.get('options', {})

    if not url:
        return jsonify({'error': 'URL is required'}), 400

    job_id = downloader.start_download(url, options)
    return jsonify({'job_id': job_id})

@app.route('/status/<job_id>')
def get_status(job_id):
    status = downloader.get_status(job_id)
    if not status:
        return jsonify({'error': 'Job not found'}), 404
    return jsonify(status)

# Usage: curl -X POST -H "Content-Type: application/json" -d '{"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}' http://localhost:5000/download
```

## Best Practices and Performance

### **Performance Optimization**

```python
# Optimize for speed
fast_opts = {
    'format': 'worst',  # Download fastest available format
    'socket_timeout': 10,
    'http_chunk_size': 10485760,  # 10MB chunks
    'concurrent_fragment_downloads': 8,
    'retries': 1,
    'no_overwrites': True,
    'ignoreerrors': True,
}

# Optimize for quality
quality_opts = {
    'format': 'bestvideo[height<=4320]+bestaudio/best',
    'merge_output_format': 'mkv',
    'writesubtitles': True,
    'writeinfojson': True,
    'writethumbnail': True,
    'postprocessors': [
        {'key': 'EmbedSubs'},
        {'key': 'FFmpegMetadata'},
    ]
}

# Memory-efficient for large playlists
memory_efficient_opts = {
    'lazy_playlist': True,
    'extract_flat': 'in_playlist',
    'playlist_items': '1-10',  # Process in batches
    'max_downloads': 10,
}
```

### **Resource Management**

```python
import psutil
import gc

class ResourceAwareDownloader:
    def __init__(self, max_memory_mb=1024, max_cpu_percent=80):
        self.max_memory_mb = max_memory_mb
        self.max_cpu_percent = max_cpu_percent

    def check_resources(self):
        """Check if system resources allow downloading"""
        memory_mb = psutil.virtual_memory().used / 1024 / 1024
        cpu_percent = psutil.cpu_percent(interval=1)

        if memory_mb > self.max_memory_mb:
            logger.warning(f"High memory usage: {memory_mb:.1f}MB")
            gc.collect()  # Force garbage collection

        if cpu_percent > self.max_cpu_percent:
            logger.warning(f"High CPU usage: {cpu_percent:.1f}%")
            time.sleep(2)  # Brief pause

        return memory_mb < self.max_memory_mb and cpu_percent < self.max_cpu_percent

    def download_with_resource_monitoring(self, urls):
        """Download with resource monitoring"""
        for url in urls:
            if not self.check_resources():
                logger.warning("Pausing due to high resource usage")
                time.sleep(10)
                continue

            # Proceed with download
            ydl_opts = {'outtmpl': '%(title)s.%(ext)s'}
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([url])

# Usage
resource_downloader = ResourceAwareDownloader(max_memory_mb=2048)
resource_downloader.download_with_resource_monitoring(urls)
```

This comprehensive guide provides you with the tools and patterns needed to effectively integrate yt-dlp into your Python applications, from simple scripts to complex, production-ready systems.
