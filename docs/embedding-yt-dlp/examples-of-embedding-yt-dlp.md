---
sidebar_position: 2
---

# Examples of Embedding yt-dlp

This comprehensive collection of examples demonstrates various ways to embed yt-dlp functionality in your Python applications. From simple scripts to complex production systems, these examples cover real-world use cases with complete, working code.

## Basic Examples

### **1. Simple Video Download**

```python
import yt_dlp
import os

def simple_download(url, output_dir='downloads'):
    """Download a video with minimal configuration"""
    os.makedirs(output_dir, exist_ok=True)

    ydl_opts = {
        'outtmpl': os.path.join(output_dir, '%(title)s.%(ext)s'),
        'format': 'best[height<=1080]',
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
        print(f"✓ Downloaded: {url}")

# Usage
simple_download('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

### **2. Audio-Only Download with Metadata**

```python
def download_audio_with_metadata(url, output_dir='music'):
    """Download audio with rich metadata and cover art"""
    os.makedirs(output_dir, exist_ok=True)

    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': os.path.join(output_dir, '%(uploader)s - %(title)s.%(ext)s'),
        'postprocessors': [
            {
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '320',
            },
            {
                'key': 'FFmpegMetadata',
                'add_metadata': True,
            },
            {
                'key': 'EmbedThumbnail',
                'already_have_thumbnail': False,
            }
        ],
        'writeinfojson': True,
        'writethumbnail': True,
        'postprocessor_args': [
            '-metadata', 'title=%(title)s',
            '-metadata', 'artist=%(uploader)s',
            '-metadata', 'date=%(upload_date)s',
        ]
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Usage
download_audio_with_metadata('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
```

### **3. Information Extraction Only**

```python
def extract_comprehensive_info(url):
    """Extract detailed video information without downloading"""
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=False)

        # Format the information nicely
        video_info = {
            'basic_info': {
                'title': info.get('title'),
                'uploader': info.get('uploader'),
                'duration': f"{info.get('duration', 0) // 60}:{info.get('duration', 0) % 60:02d}",
                'upload_date': info.get('upload_date'),
                'view_count': f"{info.get('view_count', 0):,}",
            },
            'technical_info': {
                'video_id': info.get('id'),
                'webpage_url': info.get('webpage_url'),
                'format_count': len(info.get('formats', [])),
                'available_subtitles': list(info.get('subtitles', {}).keys()),
                'thumbnail': info.get('thumbnail'),
            },
            'engagement': {
                'like_count': info.get('like_count'),
                'comment_count': info.get('comment_count'),
                'average_rating': info.get('average_rating'),
            },
            'content': {
                'description': info.get('description', '')[:200] + '...' if info.get('description') else None,
                'categories': info.get('categories', []),
                'tags': info.get('tags', [])[:10],  # First 10 tags
            }
        }

        return video_info

# Usage
info = extract_comprehensive_info('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
for category, details in info.items():
    print(f"\n{category.upper().replace('_', ' ')}:")
    for key, value in details.items():
        print(f"  {key}: {value}")
```

## Intermediate Examples

### **4. Batch Download with Progress Tracking**

```python
import threading
import time
from queue import Queue

class BatchDownloader:
    def __init__(self, max_concurrent=3):
        self.max_concurrent = max_concurrent
        self.download_queue = Queue()
        self.results = []
        self.progress = {}
        self.lock = threading.Lock()

    def progress_hook(self, download_id):
        """Create a progress hook for tracking downloads"""
        def hook(d):
            with self.lock:
                if d['status'] == 'downloading':
                    self.progress[download_id] = {
                        'filename': d.get('filename', 'Unknown'),
                        'percent': d.get('_percent_str', '0%'),
                        'speed': d.get('_speed_str', 'Unknown'),
                        'eta': d.get('_eta_str', 'Unknown'),
                    }
                elif d['status'] == 'finished':
                    self.progress[download_id]['status'] = 'completed'
                    print(f"✓ Completed: {d['filename']}")
        return hook

    def download_worker(self):
        """Worker thread for downloading videos"""
        while True:
            item = self.download_queue.get()
            if item is None:
                break

            download_id, url, ydl_opts = item

            try:
                opts = ydl_opts.copy()
                opts['progress_hooks'] = [self.progress_hook(download_id)]

                with yt_dlp.YoutubeDL(opts) as ydl:
                    ydl.download([url])

                self.results.append({'id': download_id, 'url': url, 'status': 'success'})

            except Exception as e:
                self.results.append({
                    'id': download_id,
                    'url': url,
                    'status': 'error',
                    'error': str(e)
                })
                print(f"✗ Failed: {url} - {str(e)}")

            finally:
                self.download_queue.task_done()

    def download_batch(self, urls, ydl_opts=None):
        """Download multiple URLs concurrently"""
        if ydl_opts is None:
            ydl_opts = {'outtmpl': '%(title)s.%(ext)s'}

        # Start worker threads
        threads = []
        for _ in range(self.max_concurrent):
            t = threading.Thread(target=self.download_worker)
            t.daemon = True
            t.start()
            threads.append(t)

        # Queue downloads
        for i, url in enumerate(urls):
            self.download_queue.put((i, url, ydl_opts))

        # Wait for all downloads to complete
        self.download_queue.join()

        # Stop worker threads
        for _ in range(self.max_concurrent):
            self.download_queue.put(None)

        for thread in threads:
            thread.join()

        return self.results

    def get_progress_summary(self):
        """Get current progress summary"""
        with self.lock:
            return dict(self.progress)

# Usage example
downloader = BatchDownloader(max_concurrent=2)
urls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    'https://www.youtube.com/watch?v=iik25wqIuFo'
]

ydl_opts = {
    'outtmpl': '%(uploader)s - %(title)s.%(ext)s',
    'format': 'best[height<=720]'
}

results = downloader.download_batch(urls, ydl_opts)
print(f"Completed {len([r for r in results if r['status'] == 'success'])} downloads")
```

### **5. Advanced Playlist Processing**

```python
import json
import os
from pathlib import Path

class PlaylistProcessor:
    def __init__(self, base_dir='playlists'):
        self.base_dir = Path(base_dir)
        self.base_dir.mkdir(exist_ok=True)

    def process_playlist(self, playlist_url, options=None):
        """Process playlist with advanced filtering and organization"""
        if options is None:
            options = {}

        # Extract playlist information first
        info_opts = {
            'quiet': True,
            'extract_flat': True,
        }

        with yt_dlp.YoutubeDL(info_opts) as ydl:
            playlist_info = ydl.extract_info(playlist_url, download=False)

        playlist_title = playlist_info.get('title', 'Unknown Playlist')
        playlist_dir = self.base_dir / self.sanitize_filename(playlist_title)
        playlist_dir.mkdir(exist_ok=True)

        # Save playlist metadata
        metadata_file = playlist_dir / 'playlist_info.json'
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump({
                'title': playlist_info.get('title'),
                'uploader': playlist_info.get('uploader'),
                'description': playlist_info.get('description'),
                'entry_count': playlist_info.get('playlist_count'),
                'url': playlist_url,
                'extracted_at': str(datetime.now()),
            }, f, indent=2, ensure_ascii=False)

        # Configure download options
        download_opts = {
            'outtmpl': str(playlist_dir / '%(playlist_index)02d - %(title)s.%(ext)s'),
            'writeinfojson': True,
            'writesubtitles': options.get('subtitles', False),
            'writeautomaticsub': options.get('auto_subtitles', False),
            'format': options.get('format', 'best[height<=1080]'),
            'daterange': self.create_date_range(options.get('date_after'), options.get('date_before')),
            'matchtitle': options.get('match_title'),
            'rejecttitle': options.get('reject_title'),
            'min_views': options.get('min_views'),
            'max_views': options.get('max_views'),
        }

        # Remove None values
        download_opts = {k: v for k, v in download_opts.items() if v is not None}

        # Download playlist
        with yt_dlp.YoutubeDL(download_opts) as ydl:
            ydl.download([playlist_url])

        return {
            'playlist_dir': str(playlist_dir),
            'metadata_file': str(metadata_file),
            'total_entries': playlist_info.get('playlist_count', 0)
        }

    def create_date_range(self, after=None, before=None):
        """Create date range for filtering"""
        if not after and not before:
            return None

        from yt_dlp.utils import DateRange
        return DateRange(start=after, end=before)

    def sanitize_filename(self, filename):
        """Sanitize filename for filesystem compatibility"""
        import re
        # Remove invalid characters
        sanitized = re.sub(r'[<>:"/\\|?*]', '', filename)
        # Limit length
        return sanitized[:100] if len(sanitized) > 100 else sanitized

# Usage
processor = PlaylistProcessor('my_playlists')
result = processor.process_playlist(
    'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMV9Q2F0_FYGWRNyYi',
    {
        'format': 'best[height<=720]',
        'subtitles': True,
        'date_after': '20230101',
        'min_views': 1000,
    }
)
print(f"Playlist saved to: {result['playlist_dir']}")
```

## Advanced Examples

### **6. Custom Extractor Integration**

```python
class CustomYoutubeDL(yt_dlp.YoutubeDL):
    """Extended YoutubeDL with custom functionality"""

    def __init__(self, params=None, auto_init=True):
        super().__init__(params, auto_init)
        self.custom_stats = {
            'downloads': 0,
            'failures': 0,
            'total_size': 0,
            'start_time': time.time()
        }

    def process_info(self, info_dict):
        """Override to add custom processing"""
        # Custom pre-processing
        self.custom_preprocess(info_dict)

        # Call parent method
        result = super().process_info(info_dict)

        # Custom post-processing
        self.custom_postprocess(info_dict)

        return result

    def custom_preprocess(self, info_dict):
        """Custom preprocessing logic"""
        # Add custom fields
        info_dict['custom_download_time'] = time.time()

        # Custom filtering
        if info_dict.get('duration', 0) > 3600:  # Skip videos longer than 1 hour
            raise yt_dlp.utils.DownloadError("Video too long", expected=True)

    def custom_postprocess(self, info_dict):
        """Custom postprocessing logic"""
        self.custom_stats['downloads'] += 1
        if 'filesize' in info_dict:
            self.custom_stats['total_size'] += info_dict['filesize']

    def report_error(self, message, tb=None):
        """Override error reporting"""
        self.custom_stats['failures'] += 1
        super().report_error(message, tb)

    def get_custom_stats(self):
        """Get custom statistics"""
        elapsed = time.time() - self.custom_stats['start_time']
        return {
            **self.custom_stats,
            'elapsed_time': elapsed,
            'success_rate': self.custom_stats['downloads'] /
                          (self.custom_stats['downloads'] + self.custom_stats['failures'])
                          if (self.custom_stats['downloads'] + self.custom_stats['failures']) > 0 else 0
        }

# Usage
custom_ydl = CustomYoutubeDL({
    'outtmpl': '%(title)s.%(ext)s',
    'format': 'best[height<=720]'
})

urls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ']
for url in urls:
    try:
        custom_ydl.download([url])
    except Exception as e:
        print(f"Error downloading {url}: {e}")

stats = custom_ydl.get_custom_stats()
print(f"Statistics: {stats}")
```

### **7. Web API Integration**

```python
from flask import Flask, request, jsonify, send_file
import tempfile
import threading
from queue import Queue
import uuid

app = Flask(__name__)

class DownloadManager:
    def __init__(self):
        self.downloads = {}
        self.queue = Queue()
        self.worker_thread = threading.Thread(target=self.worker, daemon=True)
        self.worker_thread.start()

    def worker(self):
        """Background worker for processing downloads"""
        while True:
            download_id, url, options = self.queue.get()
            try:
                self.process_download(download_id, url, options)
            except Exception as e:
                self.downloads[download_id]['status'] = 'error'
                self.downloads[download_id]['error'] = str(e)
            finally:
                self.queue.task_done()

    def process_download(self, download_id, url, options):
        """Process individual download"""
        temp_dir = tempfile.mkdtemp()

        ydl_opts = {
            'outtmpl': f'{temp_dir}/%(title)s.%(ext)s',
            'format': options.get('format', 'best'),
            'progress_hooks': [self.create_progress_hook(download_id)],
        }

        self.downloads[download_id]['status'] = 'downloading'

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])

        self.downloads[download_id]['status'] = 'completed'
        self.downloads[download_id]['temp_dir'] = temp_dir

    def create_progress_hook(self, download_id):
        """Create progress hook for tracking"""
        def hook(d):
            if d['status'] == 'downloading':
                self.downloads[download_id]['progress'] = {
                    'percent': d.get('_percent_str', '0%'),
                    'speed': d.get('_speed_str', 'Unknown'),
                    'eta': d.get('_eta_str', 'Unknown'),
                }
        return hook

    def add_download(self, url, options=None):
        """Add download to queue"""
        download_id = str(uuid.uuid4())
        self.downloads[download_id] = {
            'url': url,
            'status': 'queued',
            'progress': {},
            'created_at': time.time()
        }

        self.queue.put((download_id, url, options or {}))
        return download_id

    def get_download_status(self, download_id):
        """Get download status"""
        return self.downloads.get(download_id)

download_manager = DownloadManager()

@app.route('/api/download', methods=['POST'])
def start_download():
    """Start a new download"""
    data = request.json
    url = data.get('url')
    options = data.get('options', {})

    if not url:
        return jsonify({'error': 'URL is required'}), 400

    download_id = download_manager.add_download(url, options)
    return jsonify({
        'download_id': download_id,
        'status': 'queued'
    })

@app.route('/api/download/<download_id>/status', methods=['GET'])
def get_download_status(download_id):
    """Get download status"""
    status = download_manager.get_download_status(download_id)
    if not status:
        return jsonify({'error': 'Download not found'}), 404

    return jsonify(status)

@app.route('/api/download/<download_id>/file', methods=['GET'])
def download_file(download_id):
    """Download the processed file"""
    status = download_manager.get_download_status(download_id)
    if not status or status['status'] != 'completed':
        return jsonify({'error': 'Download not ready'}), 404

    temp_dir = status['temp_dir']
    # Find the downloaded file
    import glob
    files = glob.glob(f"{temp_dir}/*")
    if not files:
        return jsonify({'error': 'File not found'}), 404

    return send_file(files[0], as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
```

### **8. Database Integration and Logging**

```python
import sqlite3
import logging
from datetime import datetime
from contextlib import contextmanager

class DownloadLogger:
    def __init__(self, db_path='downloads.db'):
        self.db_path = db_path
        self.setup_database()
        self.setup_logging()

    def setup_database(self):
        """Initialize database schema"""
        with self.get_db_connection() as conn:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS downloads (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    url TEXT NOT NULL,
                    title TEXT,
                    uploader TEXT,
                    duration INTEGER,
                    filesize INTEGER,
                    format TEXT,
                    status TEXT NOT NULL,
                    error_message TEXT,
                    download_started TIMESTAMP,
                    download_completed TIMESTAMP,
                    file_path TEXT
                )
            ''')

    def setup_logging(self):
        """Setup logging configuration"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('yt-dlp.log'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)

    @contextmanager
    def get_db_connection(self):
        """Database connection context manager"""
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        try:
            yield conn
        finally:
            conn.close()

    def log_download_start(self, url, info_dict):
        """Log download start"""
        with self.get_db_connection() as conn:
            cursor = conn.execute('''
                INSERT INTO downloads (url, title, uploader, duration, format, status, download_started)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (
                url,
                info_dict.get('title'),
                info_dict.get('uploader'),
                info_dict.get('duration'),
                info_dict.get('format_id'),
                'downloading',
                datetime.now()
            ))
            download_id = cursor.lastrowid
            conn.commit()

        self.logger.info(f"Started download {download_id}: {info_dict.get('title')}")
        return download_id

    def log_download_complete(self, download_id, file_path, filesize):
        """Log download completion"""
        with self.get_db_connection() as conn:
            conn.execute('''
                UPDATE downloads
                SET status = ?, download_completed = ?, file_path = ?, filesize = ?
                WHERE id = ?
            ''', ('completed', datetime.now(), file_path, filesize, download_id))
            conn.commit()

        self.logger.info(f"Completed download {download_id}: {file_path}")

    def log_download_error(self, download_id, error_message):
        """Log download error"""
        with self.get_db_connection() as conn:
            conn.execute('''
                UPDATE downloads
                SET status = ?, error_message = ?, download_completed = ?
                WHERE id = ?
            ''', ('error', error_message, datetime.now(), download_id))
            conn.commit()

        self.logger.error(f"Download {download_id} failed: {error_message}")

    def get_download_history(self, limit=50):
        """Get download history"""
        with self.get_db_connection() as conn:
            cursor = conn.execute('''
                SELECT * FROM downloads
                ORDER BY download_started DESC
                LIMIT ?
            ''', (limit,))
            return [dict(row) for row in cursor.fetchall()]

    def get_statistics(self):
        """Get download statistics"""
        with self.get_db_connection() as conn:
            stats = conn.execute('''
                SELECT
                    COUNT(*) as total_downloads,
                    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as successful,
                    SUM(CASE WHEN status = 'error' THEN 1 ELSE 0 END) as failed,
                    SUM(filesize) as total_size,
                    AVG(duration) as avg_duration
                FROM downloads
            ''').fetchone()
            return dict(stats)

# Usage with logging
logger = DownloadLogger()

class LoggingYoutubeDL(yt_dlp.YoutubeDL):
    def __init__(self, params=None, auto_init=True):
        super().__init__(params, auto_init)
        self.logger = logger
        self.current_download_id = None

    def process_info(self, info_dict):
        """Override to add logging"""
        # Log download start
        self.current_download_id = self.logger.log_download_start(
            info_dict['webpage_url'], info_dict
        )

        try:
            result = super().process_info(info_dict)

            # Log successful completion
            if 'filepath' in info_dict:
                file_size = os.path.getsize(info_dict['filepath']) if os.path.exists(info_dict['filepath']) else 0
                self.logger.log_download_complete(
                    self.current_download_id,
                    info_dict['filepath'],
                    file_size
                )

            return result

        except Exception as e:
            # Log error
            self.logger.log_download_error(self.current_download_id, str(e))
            raise

# Usage
ydl = LoggingYoutubeDL({
    'outtmpl': '%(title)s.%(ext)s',
    'format': 'best[height<=720]'
})

# Download with logging
ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])

# Check statistics
stats = logger.get_statistics()
print(f"Download Statistics: {stats}")

# Get recent downloads
history = logger.get_download_history(10)
for download in history:
    print(f"{download['title']} - {download['status']}")
```

## Production Examples

### **9. Robust Production Downloader**

```python
import asyncio
import aiohttp
import signal
import sys
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from typing import List, Optional, Callable

@dataclass
class DownloadTask:
    url: str
    options: dict
    callback: Optional[Callable] = None
    retry_count: int = 0
    max_retries: int = 3

class ProductionDownloader:
    def __init__(self, max_workers=4, max_retries=3):
        self.max_workers = max_workers
        self.max_retries = max_retries
        self.executor = ThreadPoolExecutor(max_workers=max_workers)
        self.tasks = asyncio.Queue()
        self.running = False
        self.stats = {
            'processed': 0,
            'successful': 0,
            'failed': 0,
            'retried': 0
        }

    async def start(self):
        """Start the download service"""
        self.running = True

        # Setup signal handlers for graceful shutdown
        signal.signal(signal.SIGINT, self.signal_handler)
        signal.signal(signal.SIGTERM, self.signal_handler)

        # Start worker tasks
        workers = [
            asyncio.create_task(self.worker(f"worker-{i}"))
            for i in range(self.max_workers)
        ]

        print(f"Started {self.max_workers} download workers")

        # Wait for workers to complete
        await asyncio.gather(*workers, return_exceptions=True)

    async def worker(self, worker_name):
        """Worker coroutine for processing downloads"""
        print(f"{worker_name} started")

        while self.running:
            try:
                # Get task with timeout
                task = await asyncio.wait_for(self.tasks.get(), timeout=1.0)

                # Process the download task
                await self.process_task(worker_name, task)

                # Mark task as done
                self.tasks.task_done()

            except asyncio.TimeoutError:
                continue
            except Exception as e:
                print(f"{worker_name} error: {e}")

    async def process_task(self, worker_name, task: DownloadTask):
        """Process individual download task"""
        print(f"{worker_name} processing: {task.url}")

        try:
            # Run download in thread pool
            loop = asyncio.get_event_loop()
            result = await loop.run_in_executor(
                self.executor,
                self.download_sync,
                task
            )

            self.stats['successful'] += 1

            # Call callback if provided
            if task.callback:
                await self.safe_callback(task.callback, result, None)

        except Exception as e:
            print(f"{worker_name} failed to download {task.url}: {e}")

            # Retry logic
            if task.retry_count < task.max_retries:
                task.retry_count += 1
                self.stats['retried'] += 1
                print(f"Retrying {task.url} (attempt {task.retry_count})")
                await self.tasks.put(task)
            else:
                self.stats['failed'] += 1
                if task.callback:
                    await self.safe_callback(task.callback, None, e)

        finally:
            self.stats['processed'] += 1

    def download_sync(self, task: DownloadTask):
        """Synchronous download function"""
        with yt_dlp.YoutubeDL(task.options) as ydl:
            info = ydl.extract_info(task.url, download=True)
            return info

    async def safe_callback(self, callback, result, error):
        """Safely execute callback"""
        try:
            if asyncio.iscoroutinefunction(callback):
                await callback(result, error)
            else:
                callback(result, error)
        except Exception as e:
            print(f"Callback error: {e}")

    async def add_download(self, url: str, options: dict = None, callback: Callable = None):
        """Add download to queue"""
        task = DownloadTask(
            url=url,
            options=options or {'outtmpl': '%(title)s.%(ext)s'},
            callback=callback,
            max_retries=self.max_retries
        )
        await self.tasks.put(task)

    def signal_handler(self, signum, frame):
        """Handle shutdown signals"""
        print(f"\nReceived signal {signum}, shutting down gracefully...")
        self.running = False

    async def shutdown(self):
        """Graceful shutdown"""
        print("Waiting for remaining tasks to complete...")
        await self.tasks.join()
        self.executor.shutdown(wait=True)
        print("Shutdown complete")

    def get_stats(self):
        """Get current statistics"""
        return dict(self.stats)

# Usage example
async def download_callback(result, error):
    """Callback function for download completion"""
    if error:
        print(f"Download failed: {error}")
    else:
        print(f"Download completed: {result.get('title', 'Unknown')}")

async def main():
    downloader = ProductionDownloader(max_workers=2)

    # Add some downloads
    urls = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    ]

    for url in urls:
        await downloader.add_download(
            url,
            {'format': 'best[height<=720]', 'outtmpl': '%(title)s.%(ext)s'},
            download_callback
        )

    # Start processing
    try:
        await downloader.start()
    except KeyboardInterrupt:
        pass
    finally:
        await downloader.shutdown()
        print(f"Final stats: {downloader.get_stats()}")

# Run the production downloader
if __name__ == "__main__":
    asyncio.run(main())
```

## Integration Patterns

### **10. Django Integration**

```python
# models.py
from django.db import models
from django.contrib.auth.models import User

class DownloadJob(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('downloading', 'Downloading'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    url = models.URLField()
    title = models.CharField(max_length=500, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    file_path = models.CharField(max_length=1000, blank=True)
    error_message = models.TextField(blank=True)
    progress = models.JSONField(default=dict)

# tasks.py (Celery)
from celery import shared_task
from django.utils import timezone
import yt_dlp
import os

@shared_task
def download_video(job_id):
    """Celery task for downloading videos"""
    from .models import DownloadJob

    try:
        job = DownloadJob.objects.get(id=job_id)
        job.status = 'downloading'
        job.save()

        # Setup download directory
        download_dir = f'media/downloads/user_{job.user.id}'
        os.makedirs(download_dir, exist_ok=True)

        def progress_hook(d):
            if d['status'] == 'downloading':
                job.progress = {
                    'percent': d.get('_percent_str', '0%'),
                    'speed': d.get('_speed_str', 'Unknown'),
                    'eta': d.get('_eta_str', 'Unknown'),
                }
                job.save()

        ydl_opts = {
            'outtmpl': f'{download_dir}/%(title)s.%(ext)s',
            'format': 'best[height<=1080]',
            'progress_hooks': [progress_hook],
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(job.url, download=True)

            job.title = info.get('title', '')
            job.file_path = info.get('filepath', '')
            job.status = 'completed'
            job.completed_at = timezone.now()
            job.save()

    except Exception as e:
        job.status = 'failed'
        job.error_message = str(e)
        job.save()
        raise

# views.py
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import DownloadJob
from .tasks import download_video

@login_required
def start_download(request):
    """Start a new download"""
    if request.method == 'POST':
        url = request.POST.get('url')
        if url:
            job = DownloadJob.objects.create(
                user=request.user,
                url=url
            )
            # Start async download
            download_video.delay(job.id)
            return JsonResponse({'job_id': job.id, 'status': 'started'})

    return JsonResponse({'error': 'Invalid request'}, status=400)

@login_required
def download_status(request, job_id):
    """Get download status"""
    job = get_object_or_404(DownloadJob, id=job_id, user=request.user)
    return JsonResponse({
        'status': job.status,
        'title': job.title,
        'progress': job.progress,
        'error': job.error_message,
    })
```

## Best Practices and Tips

### **Error Handling Strategies**

```python
def robust_download(url, max_retries=3):
    """Download with comprehensive error handling"""

    for attempt in range(max_retries):
        try:
            ydl_opts = {
                'outtmpl': '%(title)s.%(ext)s',
                'format': 'best',
                'socket_timeout': 30,
                'retries': 3,
            }

            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                return ydl.extract_info(url, download=True)

        except yt_dlp.utils.DownloadError as e:
            if "unavailable" in str(e).lower():
                print(f"Video unavailable: {url}")
                break
            elif attempt < max_retries - 1:
                print(f"Attempt {attempt + 1} failed, retrying...")
                time.sleep(2 ** attempt)  # Exponential backoff
            else:
                print(f"Download failed after {max_retries} attempts: {e}")
                raise

        except Exception as e:
            print(f"Unexpected error: {e}")
            if attempt == max_retries - 1:
                raise
            time.sleep(1)

    return None
```

### **Memory Management**

```python
def memory_efficient_download(urls):
    """Download multiple URLs with memory management"""

    for url in urls:
        # Process one at a time to manage memory
        ydl_opts = {
            'outtmpl': '%(title)s.%(ext)s',
            'format': 'best[height<=720]',  # Limit quality to save memory
        }

        # Create new instance for each download
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            try:
                ydl.download([url])
            except Exception as e:
                print(f"Failed to download {url}: {e}")

        # Force garbage collection
        import gc
        gc.collect()
```

These comprehensive examples demonstrate the full range of yt-dlp embedding possibilities, from simple scripts to production-ready applications with proper error handling, logging, and scalability considerations.
