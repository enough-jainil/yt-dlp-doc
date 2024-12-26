---
sidebar_position: 1
---

# How to Report Bugs in yt-dlp

Effective bug reporting is crucial for the continuous improvement of yt-dlp. This guide will help you report bugs in a way that allows developers to understand, reproduce, and fix the issue efficiently.

## Before Reporting a Bug

1. **Update yt-dlp**: Ensure you're using the latest version of yt-dlp:

   ```sh
   yt-dlp -U
   ```

2. **Check existing issues**: Search the yt-dlp issues page to see if your bug has already been reported.

3. **Verify it's a bug**: Make sure the behavior you're experiencing is indeed a bug and not an intended feature or limitation.

## Steps to Report a Bug

### 1. Gather Information

Collect the following details:

- yt-dlp version (`yt-dlp --version`)
- Full command you're running
- Complete output of the command with `--verbose` flag
- URL of the video/playlist (if applicable)
- Your operating system and version

### 2. Create a Minimal Reproducible Example

Try to create the simplest possible command that reproduces the bug.

### 3. Open a New Issue

Go to the [yt-dlp issues page](https://github.com/yt-dlp/yt-dlp/issues) and click "New Issue".

### 4. Fill Out the Bug Report Template

yt-dlp provides a bug report template. Fill it out completely, including:

- A clear, concise description of the bug
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Additional context (screenshots, error messages, etc.)

### 5. Include the Verbose Log

Always include the complete verbose output:

```sh
yt-dlp --verbose URL 2>&1 | paste
```

Replace `URL` with the actual URL you're trying to download.

### 6. Format Your Report

Use markdown to format your report for readability:

- Use code blocks for command-line inputs and outputs
- Use headings and lists to organize information

### 7. Be Responsive

After submitting, be prepared to respond to questions or requests for additional information from the developers.

## Best Practices for Bug Reporting

- **One bug per report**: If you encounter multiple issues, create separate reports for each.
- **Be specific**: Provide exact steps to reproduce the bug.
- **Avoid speculation**: Stick to describing what actually happened, not what you think might be causing it.
- **Include relevant details**: If the bug involves a specific video or website, include the URL.
- **Respect privacy**: Don't share personal information or passwords in your report.
- **Be patient**: Developers are often volunteers and may not respond immediately.
- **Use English**: The primary language for yt-dlp development is English.

## Example of a Good Bug Report

### Bug Description

yt-dlp fails to download videos from example.com with an "HTTP Error 403: Forbidden" message.

### Steps to Reproduce

1. Run the following command:

   ```sh
   yt-dlp --verbose https://www.example.com/watch?v=123456
   ```

2. Observe the error message in the output.

### Expected Behavior

The video should download successfully.

### Actual Behavior

The download fails with an HTTP 403 error.

### System Information

- yt-dlp version: 2023.03.04
- Operating System: Ubuntu 22.04
- Python version: 3.10.6

### Verbose Log

```plaintext
[debug] Command-line config: ['--verbose', 'https://www.example.com/watch?v=123456']
[debug] Encodings: locale UTF-8, fs utf-8, out utf-8, pref UTF-8
[debug] yt-dlp version 2023.03.04 [9d339c4] (win32_exe)
[debug] Python 3.10.6 (CPython 64bit) - Windows-10-10.0.19045-SP0
[debug] Checking exe version: ffmpeg -bsfs
[debug] Checking exe version: ffprobe -bsfs
[debug] exe versions: ffmpeg N-106550-g072101bd52-20220410 (fdk,setts), ffprobe N-106624-g391ce570c8-20220415, phantomjs 2.1.1
[debug] Optional libraries: Cryptodome-3.15.0, brotli-1.0.9, certifi-2022.12.7, mutagen-1.46.0, sqlite3-2.6.0, websockets-10.4
[debug] Proxy map: {}
[debug] [generic] Extracting URL: https://www.example.com/watch?v=123456
[generic] 123456: Requesting header

WARNING: Unable to download webpage: HTTP Error 403: Forbidden (caused by <HTTPError 403: 'Forbidden'>); please report this issue on https://github.com/yt-dlp/yt-dlp/issues?q= , filling out the "Broken site" issue template. Confirm you are on the latest version using yt-dlp -U

[generic] 123456: Downloading webpage

ERROR: Unable to download webpage: HTTP Error 403: Forbidden (caused by <HTTPError 403: 'Forbidden'>)

Traceback (most recent call last):
File "yt_dlp\extractor\generic.py", line 2823, in \_real_extract
File "yt_dlp\YoutubeDL.py", line 3380, in urlopen
File "urllib\request.py", line 216, in urlopen
File "urllib\request.py", line 525, in open
File "urllib\request.py", line 544, in http_response
File "urllib\request.py", line 469, in error
File "urllib\request.py", line 403, in \_call_chain
File "urllib\request.py", line 552, in http_error_default
urllib.error.HTTPError: HTTP Error 403: Forbidden
```

### Additional Notes

This issue started occurring after the latest update. It affects all videos on example.com.

By following these guidelines, you'll help the yt-dlp developers quickly understand and address the issues you're experiencing, contributing to the improvement of the tool for everyone.
