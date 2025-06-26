---
sidebar_position: 3
---

# Developing Plugins for yt-dlp

This comprehensive guide covers everything you need to know about developing plugins for yt-dlp, from basic extractor creation to advanced post-processor development.

## Plugin Development Overview

### Prerequisites

- Python 3.9+ with strong programming skills
- Understanding of yt-dlp's core functionality
- Web technologies knowledge (HTML, CSS, JavaScript)
- HTTP/networking understanding
- Git version control

## Plugin Types

### 1. Extractor Plugins

Extract video information and download URLs from websites.

### 2. Post-Processor Plugins

Process downloaded files or metadata after download.

### 3. Downloader Plugins

Custom download methods and protocols.

## Basic Extractor Example

```python
from yt_dlp.extractor.common import InfoExtractor
from yt_dlp.utils import ExtractorError, int_or_none

class ExampleSiteIE(InfoExtractor):
    IE_NAME = 'examplesite'
    IE_DESC = 'Example video hosting site'
    _VALID_URL = r'https?://(?:www\.)?example\.com/watch/(?P<id>[a-zA-Z0-9]+)'

    _TESTS = [{
        'url': 'https://example.com/watch/abc123',
        'info_dict': {
            'id': 'abc123',
            'ext': 'mp4',
            'title': 'Test Video',
            'description': 'Test video description',
            'duration': 120,
        }
    }]

    def _real_extract(self, url):
        video_id = self._match_id(url)
        webpage = self._download_webpage(url, video_id)

        title = self._html_search_regex(
            r'<h1[^>]*>([^<]+)</h1>', webpage, 'title')

        video_url = self._html_search_regex(
            r'videoUrl\s*:\s*["\']([^"\']+)["\']',
            webpage, 'video URL')

        return {
            'id': video_id,
            'title': title,
            'url': video_url,
        }
```

## Post-Processor Example

```python
from yt_dlp.postprocessor.common import PostProcessor
from yt_dlp.utils import PostProcessingError

class CustomProcessor(PostProcessor):
    def __init__(self, downloader=None, **kwargs):
        super().__init__(downloader)
        self.custom_option = kwargs.get('custom_option', 'default')

    def run(self, info):
        filepath = info['filepath']

        try:
            # Custom processing logic here
            self.to_screen(f'Processing {info["title"]}')

        except Exception as e:
            raise PostProcessingError(f'Processing failed: {str(e)}')

        return [], info
```

## Testing and Debugging

### Unit Testing

```python
import unittest
from yt_dlp.extractor import get_info_extractor

class TestExampleSiteIE(unittest.TestCase):
    def setUp(self):
        self.ie = get_info_extractor('ExampleSite')()

    def test_video_extraction(self):
        url = 'https://example.com/watch/abc123'
        info = self.ie.extract(url)

        self.assertEqual(info['id'], 'abc123')
        self.assertIsNotNone(info['url'])
```

### Debug Logging

```python
def _real_extract(self, url):
    video_id = self._match_id(url)
    self.write_debug(f'Extracting video ID: {video_id}')

    webpage = self._download_webpage(url, video_id)
    self.write_debug(f'Downloaded webpage, length: {len(webpage)}')

    # Continue extraction...
```

## Plugin Packaging

### Setup.py Configuration

```python
from setuptools import setup, find_packages

setup(
    name='yt-dlp-example-plugin',
    version='1.0.0',
    description='Example plugin for yt-dlp',
    packages=find_packages(),
    install_requires=['yt-dlp>=2024.1.1'],
    entry_points={
        'yt_dlp.plugins': [
            'example = yt_dlp_example.extractors:ExampleSiteIE',
        ],
    },
    python_requires='>=3.9',
)
```

## Best Practices

### Code Quality

- Follow yt-dlp coding conventions
- Include comprehensive test cases
- Use proper error handling
- Document your code thoroughly

### Security

- Validate all user input
- Sanitize extracted data
- Use parameterized URLs
- Handle authentication securely

### Performance

- Cache API responses when appropriate
- Use efficient regex patterns
- Minimize network requests
- Handle large playlists efficiently

## Development Workflow

1. Set up development environment
2. Create plugin structure
3. Implement extraction logic
4. Write comprehensive tests
5. Test with real content
6. Package and distribute

## Plugin Directory Structure

```
yt-dlp-example-plugin/
 yt_dlp_example/
    __init__.py
    extractors/
       __init__.py
       example.py
    postprocessors/
        __init__.py
        example.py
 tests/
 setup.py
 README.md
 LICENSE
```

## Publishing

1. Test thoroughly with various content
2. Create comprehensive documentation
3. Package with setup.py
4. Upload to PyPI
5. Create GitHub release
6. Maintain and update regularly

By following this guide, you can develop robust plugins that extend yt-dlp's functionality while maintaining compatibility and security.
