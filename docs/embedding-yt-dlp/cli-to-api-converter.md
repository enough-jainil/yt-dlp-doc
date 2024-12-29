---
sidebar_position: 3
---

# CLI to API Options Converter

When embedding yt-dlp in Python scripts, you might want to convert command-line options to their API equivalent. This tool helps convert CLI options to the corresponding Python API options.

## Basic Usage

Save the following script as `cli_to_api.py`:

```python
import sys
import json
import yt_dlp
import shlex

def cli_to_api(cli_options_string):
    """Convert CLI options to API options dictionary"""
    try:
        opts = shlex.split(cli_options_string)
    except ValueError as e:
        print(f"Error parsing command-line options: {e}", file=sys.stderr)
        return None

    default = yt_dlp.parse_options([]).ydl_opts
    try:
        parsed_opts = yt_dlp.parse_options(opts).ydl_opts
    except yt_dlp.utils.DownloadError as e:
        print(f"yt-dlp error parsing options: {e}", file=sys.stderr)
        return None
    except SystemExit:
        print("yt-dlp exited due to invalid options.", file=sys.stderr)
        return None

    diff = {}
    for k, v in parsed_opts.items():
        if k not in default or default[k] != v:
            if k == 'postprocessors':
                default_pps = default.get('postprocessors', [])
                diff['postprocessors'] = [pp for pp in v if pp not in default_pps]
                if not diff['postprocessors']:
                    continue
            elif k == 'format_sort':
                default_fs = default.get('format_sort', [])
                diff['format_sort'] = [fs for fs in v if fs not in default_fs]
                if not diff['format_sort']:
                    continue
            elif k == 'merge_output_format':
                if v != default.get('merge_output_format'):
                    diff[k] = v
            else:
                diff[k] = v

    return diff

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python cli_to_api.py '<yt-dlp options>'", file=sys.stderr)
        sys.exit(1)

    cli_options_string = sys.argv[1]
    options = cli_to_api(cli_options_string)

    if options is None:
        sys.exit(1)

    print(json.dumps(options, indent=4))
```

## Examples

### Converting Audio Extraction Options

```bash
python cli_to_api.py "--extract-audio --audio-format mp3"
```

Output:

```json
{
  "postprocessors": [
    {
      "key": "FFmpegExtractAudio",
      "preferredcodec": "mp3"
    }
  ]
}
```

### Converting Format Selection

```bash
python cli_to_api.py "-f 'bestvideo[height<=1080]+bestaudio/best'"
```

Output:

```json
{
  "format": "bestvideo[height<=1080]+bestaudio/best"
}
```

### Converting Output Template

```bash
python cli_to_api.py "-o '%(title)s.%(ext)s'"
```

Output:

```json
{
  "outtmpl": "%(title)s.%(ext)s"
}
```

## Using in Python Scripts

You can import and use the converter directly in your Python scripts:

```python
from cli_to_api import cli_to_api

# Convert CLI options to API options
cli_opts = "--extract-audio --audio-format mp3"
api_opts = cli_to_api(cli_opts)

# Use the converted options with yt-dlp
with yt_dlp.YoutubeDL(api_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=example'])
```

## Notes

- The converter only shows options that differ from the defaults.
- Some complex CLI options might need manual adjustment.
- Always verify the converted options work as expected.
- Use quotes around CLI options containing spaces or special characters.

This tool is especially useful when:

- Porting CLI scripts to Python.
- Learning the yt-dlp API.
- Debugging API option configurations.

By using this converter, you can easily transition from command-line usage to programmatic usage of yt-dlp, making your scripts more flexible and powerful.
