---
sidebar_position: 3
---

# Developing Plugins for yt-dlp

This guide covers the process of creating plugins for yt-dlp, allowing you to extend its functionality with custom extractors or post-processors.

## Overview

yt-dlp plugins are Python modules that can add new features without modifying the core codebase. There are two main types of plugins:

- **Extractor Plugins**: Add support for new websites.
- **PostProcessor Plugins**: Implement new post-download processing features.

## Getting Started

### Prerequisites

- Python 3.8 or later
- Familiarity with yt-dlp's codebase
- Understanding of the website's structure (for extractors) or desired post-processing (for post-processors)

## Setting Up the Development Environment

1. Fork and clone the yt-dlp repository.
2. Set up a virtual environment:

```sh
python3 -m venv yt-dlp-dev
source yt-dlp-dev/bin/activate
```

3. Install development dependencies:

```sh
pip install -r requirements.txt
```

## Creating an Extractor Plugin

1. Create a new Python file in the `yt_dlp/extractor/` directory, e.g., `mysite.py`.
2. Define your extractor class, inheriting from `yt_dlp.extractor.common.InfoExtractor`.
3. Implement the required methods, primarily `_real_extract()`.

### Example Structure

```python
from yt_dlp.extractor.common import InfoExtractor

class MySiteIE(InfoExtractor):
    _VALID_URL = r'https?://(?:www\.)?mysite\.com/watch/(?P<id>[0-9]+)'

    def _real_extract(self, url):
        video_id = self._match_id(url)
        webpage = self._download_webpage(url, video_id)

        title = self._html_search_regex(r'<h1>(.+?)</h1>', webpage, 'title')

        return {
            'id': video_id,
            'title': title,
            'url': self._html_search_regex(r'videoUrl\s*=\s*"(.+?)"', webpage, 'video URL'),
        }
```

## Creating a PostProcessor Plugin

1. Create a new Python file in the `yt_dlp/postprocessor/` directory, e.g., `mypostprocessor.py`.
2. Define your post-processor class, inheriting from `yt_dlp.postprocessor.common.PostProcessor`.
3. Implement the required methods, primarily `run()`.

### Example Structure

```python
from yt_dlp.postprocessor.common import PostProcessor

class MyPostProcessor(PostProcessor):
    def __init__(self, downloader=None, **kwargs):
        super().__init__(downloader)
        self._kwargs = kwargs

    def run(self, info):
        # Your post-processing logic here
        return [], info
```

## Testing Your Plugin

### For Extractors

Use the `test_download()` method in your test case.

### Example Test for an Extractor

```python
from yt_dlp.extractor.common import InfoExtractor
from yt_dlp.utils import ExtractorError

class TestMySiteIE(InfoExtractor):
    def test_download(self):
        self._test_download('https://www.mysite.com/watch/12345', {'id': '12345', 'title': 'Test Video'})
```

### For Post-Processors

Create a test case that applies your post-processor to a download.

## Packaging Your Plugin

1. Create a `setup.py` file for your plugin:

```python
from setuptools import setup, find_packages

setup(
    name='yt-dlp-mysite',
    version='0.1.0',
    packages=find_packages(),
    install_requires=['yt-dlp'],
    entry_points={
        'yt_dlp.plugins': ['mysite = yt_dlp_mysite:MySiteIE'],
    },
)
```

2. Create a `README.md` file describing your plugin and its usage.

## Best Practices

- Follow yt-dlp's coding style and conventions.
- Document your code thoroughly.
- Handle errors gracefully and provide meaningful error messages.
- Respect websites' terms of service and implement rate limiting if necessary.
- Keep your plugin focused on a specific task or website.

## Submitting Your Plugin

- If it's a general-purpose plugin, consider submitting it to the main yt-dlp repository.
- Otherwise, host it on GitHub and add the `yt-dlp-plugins` topic.
- Update the yt-dlp wiki with information about your plugin.

## Maintaining Your Plugin

- Keep your plugin updated with changes in yt-dlp's core.
- Respond to bug reports and feature requests from users.
- Regularly test your plugin against the target website to ensure it still works.

## Advanced Topics

- Implementing support for subtitles, thumbnails, and other metadata.
- Handling authentication for sites that require login.
- Creating plugins that work with multiple related websites.
- Optimizing performance for large downloads or playlists.

By developing plugins for yt-dlp, you can contribute to the community and extend the tool's capabilities to meet specific needs. Remember to always respect copyright and the terms of service of the websites you're working with.
