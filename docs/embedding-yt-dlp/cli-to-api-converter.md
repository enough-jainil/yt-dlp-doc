---
sidebar_position: 3
---

# CLI to API Options Converter

Converting yt-dlp command-line options to their Python API equivalents is essential when embedding yt-dlp in applications. This comprehensive guide provides tools, examples, and complete conversion references.

## Understanding the Conversion Process

### **CLI vs API Structure**

**Command Line Format**:

```bash
yt-dlp --extract-audio --audio-format mp3 --output "%(title)s.%(ext)s" URL
```

**Python API Equivalent**:

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
    }],
    'outtmpl': '%(title)s.%(ext)s',
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([URL])
```

## Comprehensive Conversion Tool

### **Advanced CLI to API Converter**

```python
#!/usr/bin/env python3
"""
Advanced yt-dlp CLI to API Options Converter
Converts command-line arguments to Python API dictionary
"""

import sys
import json
import argparse
import shlex
from typing import Dict, Any, List, Optional
import yt_dlp

class CLIToAPIConverter:
    """Convert yt-dlp CLI options to API options"""

    def __init__(self):
        self.option_mappings = {
            # Basic options
            'format': 'format',
            'output': 'outtmpl',
            'outtmpl': 'outtmpl',
            'quiet': 'quiet',
            'verbose': 'verbose',
            'simulate': 'simulate',
            'skip_download': 'skip_download',

            # Download options
            'rate_limit': 'ratelimit',
            'retries': 'retries',
            'fragment_retries': 'fragment_retries',
            'buffer_size': 'buffersize',
            'http_chunk_size': 'http_chunk_size',

            # Network options
            'proxy': 'proxy',
            'socket_timeout': 'socket_timeout',
            'source_address': 'source_address',
            'force_ipv4': 'force_ipv4',
            'force_ipv6': 'force_ipv6',

            # Geo restriction
            'geo_verification_proxy': 'geo_verification_proxy',
            'geo_bypass': 'geo_bypass',
            'geo_bypass_country': 'geo_bypass_country',
            'geo_bypass_ip_block': 'geo_bypass_ip_block',

            # Video selection
            'playlist_start': 'playliststart',
            'playlist_end': 'playlistend',
            'playlist_items': 'playlist_items',
            'match_title': 'matchtitle',
            'reject_title': 'rejecttitle',
            'max_downloads': 'max_downloads',
            'min_filesize': 'min_filesize',
            'max_filesize': 'max_filesize',
            'date': 'date',
            'datebefore': 'datebefore',
            'dateafter': 'dateafter',
            'min_views': 'min_views',
            'max_views': 'max_views',

            # Download archive
            'download_archive': 'download_archive',
            'break_on_existing': 'break_on_existing',
            'break_on_reject': 'break_on_reject',

            # Filesystem options
            'batch_file': 'batchfile',
            'id': 'useid',
            'auto_number': 'autonumber',
            'restrict_filenames': 'restrictfilenames',
            'no_overwrites': 'nooverwrites',
            'continue_dl': 'continuedl',
            'no_part': 'nopart',
            'no_mtime': 'nomtime',
            'write_description': 'writedescription',
            'write_info_json': 'writeinfojson',
            'write_annotations': 'writeannotations',
            'write_thumbnail': 'writethumbnail',
            'write_all_thumbnails': 'writeallThumbnails',
            'list_thumbnails': 'listthumbnails',

            # Subtitle options
            'write_sub': 'writesubtitles',
            'write_auto_sub': 'writeautomaticsub',
            'all_subs': 'allsubtitles',
            'list_subs': 'listsubtitles',
            'sub_format': 'subtitlesformat',
            'sub_lang': 'subtitleslangs',

            # Authentication
            'username': 'username',
            'password': 'password',
            'twofactor': 'twofactor',
            'netrc': 'usenetrc',
            'video_password': 'videopassword',

            # Adobe Pass
            'ap_mso': 'ap_mso',
            'ap_username': 'ap_username',
            'ap_password': 'ap_password',

            # Post-processing
            'extract_audio': None,  # Special handling
            'audio_format': None,   # Special handling
            'audio_quality': None,  # Special handling
            'recode_video': None,   # Special handling
            'postprocessor_args': 'postprocessor_args',
            'keep_video': 'keepvideo',
            'no_post_overwrites': 'nopostoverwrites',
            'embed_subs': None,     # Special handling
            'embed_thumbnail': None, # Special handling
            'add_metadata': None,   # Special handling
            'metadata_from_title': 'metafromtitle',
            'xattrs': 'xattrs',
            'fixup': 'fixup',
            'prefer_avconv': 'prefer_avconv',
            'prefer_ffmpeg': 'prefer_ffmpeg',
            'ffmpeg_location': 'ffmpeg_location',
            'exec': 'exec_cmd',

            # SponsorBlock
            'sponsorblock_mark': None,    # Special handling
            'sponsorblock_remove': None,  # Special handling
            'sponsorblock_chapter_title': 'sponsorblock_chapter_title',
            'no_sponsorblock': 'no_sponsorblock',
            'sponsorblock_api': 'sponsorblock_api',

            # Extractor arguments
            'extractor_args': 'extractor_args',
        }

        self.postprocessor_mappings = {
            'extract_audio': 'FFmpegExtractAudio',
            'recode_video': 'FFmpegVideoConvertor',
            'embed_subs': 'FFmpegEmbedSubtitle',
            'embed_thumbnail': 'EmbedThumbnail',
            'add_metadata': 'FFmpegMetadata',
            'sponsorblock_mark': 'SponsorBlock',
            'sponsorblock_remove': 'SponsorBlock',
        }

    def convert_args_string(self, args_string: str) -> Optional[Dict[str, Any]]:
        """Convert CLI arguments string to API options"""
        try:
            args = shlex.split(args_string)
            return self.convert_args_list(args)
        except ValueError as e:
            print(f"Error parsing arguments: {e}", file=sys.stderr)
            return None

    def convert_args_list(self, args: List[str]) -> Optional[Dict[str, Any]]:
        """Convert CLI arguments list to API options"""
        try:
            # Parse arguments using yt-dlp's parser
            parser = yt_dlp.parseOpts(args)[0]
            return self.convert_parsed_args(parser)
        except Exception as e:
            print(f"Error converting arguments: {e}", file=sys.stderr)
            return None

    def convert_parsed_args(self, parsed_args) -> Dict[str, Any]:
        """Convert parsed arguments to API options"""
        api_opts = {}
        postprocessors = []

        # Handle basic options
        for cli_opt, api_opt in self.option_mappings.items():
            if hasattr(parsed_args, cli_opt):
                value = getattr(parsed_args, cli_opt)
                if value is not None and api_opt:
                    api_opts[api_opt] = value

        # Handle special post-processor options
        postprocessors.extend(self._handle_audio_extraction(parsed_args))
        postprocessors.extend(self._handle_video_recoding(parsed_args))
        postprocessors.extend(self._handle_embedding_options(parsed_args))
        postprocessors.extend(self._handle_metadata_options(parsed_args))
        postprocessors.extend(self._handle_sponsorblock_options(parsed_args))

        if postprocessors:
            api_opts['postprocessors'] = postprocessors

        # Handle format sorting
        if hasattr(parsed_args, 'format_sort') and parsed_args.format_sort:
            api_opts['format_sort'] = parsed_args.format_sort

        # Remove None values and empty lists
        api_opts = {k: v for k, v in api_opts.items() if v is not None}

        return api_opts

    def _handle_audio_extraction(self, args) -> List[Dict[str, Any]]:
        """Handle audio extraction post-processor"""
        processors = []

        if getattr(args, 'extractaudio', False):
            processor = {'key': 'FFmpegExtractAudio'}

            if hasattr(args, 'audioformat') and args.audioformat:
                processor['preferredcodec'] = args.audioformat

            if hasattr(args, 'audioquality') and args.audioquality:
                processor['preferredquality'] = args.audioquality

            processors.append(processor)

        return processors

    def _handle_video_recoding(self, args) -> List[Dict[str, Any]]:
        """Handle video recoding post-processor"""
        processors = []

        if hasattr(args, 'recodevideo') and args.recodevideo:
            processors.append({
                'key': 'FFmpegVideoConvertor',
                'preferedformat': args.recodevideo,
            })

        return processors

    def _handle_embedding_options(self, args) -> List[Dict[str, Any]]:
        """Handle embedding post-processors"""
        processors = []

        if getattr(args, 'embedsubs', False):
            processors.append({'key': 'FFmpegEmbedSubtitle'})

        if getattr(args, 'embedthumbnail', False):
            processors.append({'key': 'EmbedThumbnail'})

        return processors

    def _handle_metadata_options(self, args) -> List[Dict[str, Any]]:
        """Handle metadata post-processors"""
        processors = []

        if getattr(args, 'addmetadata', False):
            processors.append({'key': 'FFmpegMetadata'})

        return processors

    def _handle_sponsorblock_options(self, args) -> List[Dict[str, Any]]:
        """Handle SponsorBlock post-processors"""
        processors = []

        mark_categories = getattr(args, 'sponsorblock_mark', [])
        remove_categories = getattr(args, 'sponsorblock_remove', [])

        if mark_categories or remove_categories:
            processor = {'key': 'SponsorBlock'}

            if mark_categories:
                processor['categories'] = mark_categories
                processor['actions'] = ['mark']

            if remove_categories:
                if 'categories' in processor:
                    processor['categories'].extend(remove_categories)
                else:
                    processor['categories'] = remove_categories

                if 'actions' in processor:
                    processor['actions'].append('remove')
                else:
                    processor['actions'] = ['remove']

            processors.append(processor)

        return processors

    def format_output(self, options: Dict[str, Any], format_type: str = 'json') -> str:
        """Format output in specified format"""
        if format_type == 'json':
            return json.dumps(options, indent=2, ensure_ascii=False)
        elif format_type == 'python':
            return self._format_as_python_dict(options)
        else:
            raise ValueError(f"Unsupported format type: {format_type}")

    def _format_as_python_dict(self, options: Dict[str, Any], indent: int = 0) -> str:
        """Format options as Python dictionary string"""
        lines = ['{']
        indent_str = '    ' * (indent + 1)

        for key, value in options.items():
            if isinstance(value, dict):
                formatted_value = self._format_as_python_dict(value, indent + 1)
            elif isinstance(value, list):
                formatted_value = self._format_python_list(value, indent + 1)
            elif isinstance(value, str):
                formatted_value = f"'{value}'"
            else:
                formatted_value = repr(value)

            lines.append(f"{indent_str}'{key}': {formatted_value},")

        lines.append('    ' * indent + '}')
        return '\n'.join(lines)

    def _format_python_list(self, items: List[Any], indent: int) -> str:
        """Format list as Python list string"""
        if not items:
            return '[]'

        if all(isinstance(item, (str, int, float, bool)) for item in items):
            return repr(items)

        lines = ['[']
        indent_str = '    ' * (indent + 1)

        for item in items:
            if isinstance(item, dict):
                formatted_item = self._format_as_python_dict(item, indent + 1)
            else:
                formatted_item = repr(item)

            lines.append(f"{indent_str}{formatted_item},")

        lines.append('    ' * indent + ']')
        return '\n'.join(lines)

def main():
    """Main CLI interface"""
    parser = argparse.ArgumentParser(
        description='Convert yt-dlp CLI options to Python API options',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s --extract-audio --audio-format mp3
  %(prog)s "-f 'best[height<=720]' -o '%%(title)s.%%(ext)s'"
  %(prog)s --format json --extract-audio --audio-format mp3
        """
    )

    parser.add_argument(
        'cli_options',
        nargs='?',
        help='yt-dlp CLI options string (if not provided, read from stdin)'
    )

    parser.add_argument(
        '--format',
        choices=['json', 'python'],
        default='json',
        help='Output format (default: json)'
    )

    parser.add_argument(
        '--pretty',
        action='store_true',
        help='Pretty print output'
    )

    args = parser.parse_args()

    # Get CLI options string
    if args.cli_options:
        cli_options = args.cli_options
    else:
        print("Enter yt-dlp CLI options (press Ctrl+D when done):")
        cli_options = sys.stdin.read().strip()

    if not cli_options:
        parser.print_help()
        return 1

    # Convert options
    converter = CLIToAPIConverter()
    api_options = converter.convert_args_string(cli_options)

    if api_options is None:
        return 1

    # Output results
    try:
        output = converter.format_output(api_options, args.format)
        print(output)
        return 0
    except Exception as e:
        print(f"Error formatting output: {e}", file=sys.stderr)
        return 1

if __name__ == '__main__':
    sys.exit(main())
```

## Common Conversion Examples

### **Basic Downloads**

```bash
yt-dlp "https://example.com/video"
```

```python
ydl_opts = {}
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://example.com/video'])
```

### **Format Selection**

```bash
-f "best[height<=720]"
```

```python
ydl_opts = {
    'format': 'best[height<=720]'
}
```

### **Audio Extraction**

```bash
--extract-audio
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio'
    }]
}
```

```bash
--audio-format mp3
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3'
    }]
}
```

```bash
--audio-quality 0
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredquality': '0'
    }]
}
```

### **Output Template**

```bash
-o "%(uploader)s - %(title)s.%(ext)s"
```

```python
ydl_opts = {
    'outtmpl': '%(uploader)s - %(title)s.%(ext)s'
}
```

### **Playlist Handling**

```bash
--playlist-start 5
```

```python
ydl_opts = {
    'playliststart': 5
}
```

```bash
--playlist-end 10
```

```python
ydl_opts = {
    'playlistend': 10
}
```

```bash
--max-downloads 3
```

```python
ydl_opts = {
    'max_downloads': 3
}
```

### **Subtitle Options**

```bash
--write-sub
```

```python
ydl_opts = {
    'writesubtitles': True
}
```

```bash
--sub-lang en,es
```

```python
ydl_opts = {
    'subtitleslangs': ['en', 'es']
}
```

```bash
--embed-subs
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegEmbedSubtitle'
    }]
}
```

### **Multiple Post-Processors**

```bash
--extract-audio
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio'
    }]
}
```

```bash
--audio-format mp3
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3'
    }]
}
```

```bash
--embed-thumbnail
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'EmbedThumbnail'
    }]
}
```

```bash
--add-metadata
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegMetadata'
    }]
}
```

### **SponsorBlock Integration**

```bash
--sponsorblock-mark sponsor,intro
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'SponsorBlock',
        'categories': ['sponsor', 'intro'],
        'actions': ['mark']
    }]
}
```

```bash
--sponsorblock-remove selfpromo
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'SponsorBlock',
        'categories': ['selfpromo'],
        'actions': ['remove']
    }]
}
```

### **Network Configuration**

```bash
--proxy socks5://127.0.0.1:1080
```

```python
ydl_opts = {
    'proxy': 'socks5://127.0.0.1:1080'
}
```

```bash
--socket-timeout 30
```

```python
ydl_opts = {
    'socket_timeout': 30
}
```

```bash
--retries 5
```

```python
ydl_opts = {
    'retries': 5
}
```

### **Authentication**

```bash
--username user@example.com
```

```python
ydl_opts = {
    'username': 'user@example.com'
}
```

```bash
--password mypassword
```

```python
ydl_opts = {
    'password': 'mypassword'
}
```

```bash
--twofactor 123456
```

```python
ydl_opts = {
    'twofactor': '123456'
}
```

## Complex Conversion Examples

### **Advanced Format Selection with Sorting**

```bash
-f "best[height<=1080]"
```

```python
ydl_opts = {
    'format': 'best[height<=1080]'
}
```

```bash
-S "res:720,fps,codec:h264"
```

```python
ydl_opts = {
    'format_sort': ['res:720', 'fps', 'codec:h264']
}
```

### **Comprehensive Download Configuration**

```bash
--extract-audio
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio'
    }]
}
```

```bash
--audio-format mp3
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3'
    }]
}
```

```bash
--audio-quality 0
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredquality': '0'
    }]
}
```

```bash
--embed-thumbnail
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'EmbedThumbnail'
    }]
}
```

```bash
--add-metadata
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegMetadata'
    }]
}
```

```bash
--write-info-json
```

```python
ydl_opts = {
    'writeinfojson': True
}
```

```bash
--write-description
```

```python
ydl_opts = {
    'writedescription': True
}
```

```bash
--write-thumbnail
```

```python
ydl_opts = {
    'writethumbnail': True
}
```

```bash
--write-sub
```

```python
ydl_opts = {
    'writesubtitles': True
}
```

```bash
--sub-lang en
```

```python
ydl_opts = {
    'subtitleslangs': ['en']
}
```

```bash
--embed-subs
```

```python
ydl_opts = {
    'postprocessors': [{
        'key': 'FFmpegEmbedSubtitle'
    }]
}
```

```bash
-o "%(uploader)s/%(title)s.%(ext)s"
```

```python
ydl_opts = {
    'outtmpl': '%(uploader)s/%(title)s.%(ext)s'
}
```

```bash
--download-archive archive.txt
```

```python
ydl_opts = {
    'download_archive': 'archive.txt'
}
```

```bash
--continue
```

```python
ydl_opts = {
    'continuedl': True
}
```

```bash
--no-overwrites
```

```python
ydl_opts = {
    'nooverwrites': True
}
```

## Interactive Conversion Tool

### **Web-based Converter Interface**

```python
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)
converter = CLIToAPIConverter()

@app.route('/')
def index():
    return render_template('converter.html')

@app.route('/convert', methods=['POST'])
def convert_options():
    """Convert CLI options via web interface"""
    cli_options = request.json.get('cli_options', '')
    output_format = request.json.get('format', 'json')

    if not cli_options:
        return jsonify({'error': 'No CLI options provided'}), 400

    try:
        api_options = converter.convert_args_string(cli_options)
        if api_options is None:
            return jsonify({'error': 'Failed to parse CLI options'}), 400

        formatted_output = converter.format_output(api_options, output_format)

        return jsonify({
            'success': True,
            'api_options': api_options,
            'formatted_output': formatted_output
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

### **HTML Template (converter.html)**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>yt-dlp CLI to API Converter</title>
    <style>
      body {
        font-family: monospace;
        margin: 20px;
      }
      textarea {
        width: 100%;
        height: 150px;
        font-family: monospace;
      }
      button {
        padding: 10px 20px;
        margin: 10px 0;
      }
      .output {
        background: #f5f5f5;
        padding: 15px;
        margin: 10px 0;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>yt-dlp CLI to API Converter</h1>

    <div>
      <label>CLI Options:</label>
      <textarea id="cliOptions" placeholder="Enter yt-dlp CLI options here...">
--extract-audio --audio-format mp3 -o "%(title)s.%(ext)s"</textarea
      >
    </div>

    <div>
      <label>Output Format:</label>
      <select id="outputFormat">
        <option value="json">JSON</option>
        <option value="python">Python Dict</option>
      </select>
    </div>

    <button onclick="convertOptions()">Convert</button>

    <div id="output" class="output" style="display: none;"></div>
    <div id="error" class="error" style="display: none;"></div>

    <script>
      async function convertOptions() {
        const cliOptions = document.getElementById("cliOptions").value;
        const outputFormat = document.getElementById("outputFormat").value;

        try {
          const response = await fetch("/convert", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cli_options: cliOptions,
              format: outputFormat,
            }),
          });

          const result = await response.json();

          if (result.success) {
            document.getElementById("output").innerHTML =
              "<pre>" + result.formatted_output + "</pre>";
            document.getElementById("output").style.display = "block";
            document.getElementById("error").style.display = "none";
          } else {
            document.getElementById("error").innerText = result.error;
            document.getElementById("error").style.display = "block";
            document.getElementById("output").style.display = "none";
          }
        } catch (error) {
          document.getElementById("error").innerText =
            "Network error: " + error.message;
          document.getElementById("error").style.display = "block";
          document.getElementById("output").style.display = "none";
        }
      }
    </script>
  </body>
</html>
```

## Usage in Scripts

### **Direct Integration**

```python
from cli_to_api_converter import CLIToAPIConverter

# Initialize converter
converter = CLIToAPIConverter()

# Convert CLI string to API options
cli_string = "--extract-audio --audio-format mp3 --embed-thumbnail"
api_options = converter.convert_args_string(cli_string)

# Use with yt-dlp
import yt_dlp

with yt_dlp.YoutubeDL(api_options) as ydl:
    ydl.download(['https://example.com/video'])
```

### **Batch Conversion**

```python
def convert_multiple_commands(cli_commands):
    """Convert multiple CLI commands to API options"""
    converter = CLIToAPIConverter()
    results = {}

    for name, cli_command in cli_commands.items():
        api_options = converter.convert_args_string(cli_command)
        if api_options:
            results[name] = api_options
        else:
            print(f"Failed to convert: {name}")

    return results

# Example usage
commands = {
    'audio_download': '--extract-audio --audio-format mp3',
    'video_720p': '-f "best[height<=720]" -o "%(title)s.%(ext)s"',
    'playlist_partial': '--playlist-start 1 --playlist-end 5',
}

converted = convert_multiple_commands(commands)
print(json.dumps(converted, indent=2))
```

## Best Practices

### **Validation and Error Handling**

```python
def safe_convert_cli_options(cli_string, validate=True):
    """Safely convert CLI options with validation"""
    converter = CLIToAPIConverter()

    try:
        api_options = converter.convert_args_string(cli_string)

        if api_options is None:
            return None, "Failed to parse CLI options"

        if validate:
            # Test the options with yt-dlp
            try:
                with yt_dlp.YoutubeDL(api_options) as ydl:
                    pass  # Just test initialization
            except Exception as e:
                return None, f"Invalid API options: {e}"

        return api_options, None

    except Exception as e:
        return None, f"Conversion error: {e}"

# Usage
api_opts, error = safe_convert_cli_options("--extract-audio --audio-format mp3")
if error:
    print(f"Error: {error}")
else:
    print("Conversion successful:", api_opts)
```

This comprehensive CLI to API converter provides a robust foundation for converting yt-dlp command-line options to their Python API equivalents, making it easier to embed yt-dlp functionality in applications while maintaining the familiar CLI interface for configuration.
