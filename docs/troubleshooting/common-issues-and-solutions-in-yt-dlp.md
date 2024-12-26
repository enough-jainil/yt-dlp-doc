---
sidebar_position: 1
---

# Common Issues and Solutions in yt-dlp

This guide covers frequently encountered problems when using yt-dlp and provides solutions to resolve them.

## 1. Video Unavailable

**Issue:** yt-dlp reports that the video is unavailable.

**Solutions:**

- Check if the video is available in your region or if it requires authentication.
- Try using a VPN or proxy:

  ```sh
  yt-dlp --proxy socks5://127.0.0.1:9150 URL
  ```

- Use `--cookies-from-browser BROWSER` to pass authentication cookies.

## 2. Format Selection Errors

**Issue:** Unable to download the desired format or quality.

**Solutions:**

- List available formats:

  ```sh
  yt-dlp -F URL
  ```

- Specify format explicitly:

  ```sh
  yt-dlp -f FORMAT_CODE URL
  ```

- Use format selectors:

  ```sh
  yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best' URL
  ```

## 3. Slow Download Speeds

**Issue:** Downloads are slower than expected.

**Solutions:**

- Use `aria2` as the external downloader:

  ```sh
  yt-dlp --external-downloader aria2c URL
  ```

- Adjust the number of retries:

  ```sh
  yt-dlp -R 10 URL
  ```

- Limit the download rate to avoid throttling:

  ```sh
  yt-dlp --limit-rate 1M URL
  ```

## 4. Geo-Restriction Bypass Failing

**Issue:** Unable to bypass geo-restrictions.

**Solutions:**

- Use `--geo-bypass` option:

  ```sh
  yt-dlp --geo-bypass URL
  ```

- Specify a different country:

  ```sh
  yt-dlp --geo-bypass-country US URL
  ```

- Use a VPN or proxy from an allowed country.

## 5. Subtitle Download Issues

**Issue:** Subtitles are not downloading or are in the wrong format.

**Solutions:**

- List available subtitles:

  ```sh
  yt-dlp --list-subs URL
  ```

- Specify language:

  ```sh
  yt-dlp --sub-lang en --write-sub URL
  ```

- Convert subtitles:

  ```sh
  yt-dlp --convert-subs srt URL
  ```

## 6. Playlist Download Problems

**Issue:** Issues with downloading entire playlists.

**Solutions:**

- Use playlist-specific options:

  ```sh
  yt-dlp --yes-playlist URL
  ```

- Download specific items:

  ```sh
  yt-dlp --playlist-items 1,3,5-7 URL
  ```

- Reverse order:

  ```sh
  yt-dlp --playlist-reverse URL
  ```

## 7. Network Errors

**Issue:** Frequent network errors or timeouts.

**Solutions:**

- Increase retries:

  ```sh
  yt-dlp -R 10 URL
  ```

- Add sleep interval:

  ```sh
  yt-dlp --sleep-interval 5 URL
  ```

- Use a different IP address:

  ```sh
  yt-dlp --source-address IP_ADDRESS URL
  ```

## 8. Filename Conflicts

**Issue:** Duplicate filenames or invalid characters in filenames.

**Solutions:**

- Use output template:

  ```sh
  yt-dlp -o '%(title)s-%(id)s.%(ext)s' URL
  ```

- Restrict filenames:

  ```sh
  yt-dlp --restrict-filenames URL
  ```

- Auto-number:

  ```sh
  yt-dlp -o '%(autonumber)s-%(title)s.%(ext)s' URL
  ```

## 9. FFmpeg Related Issues

**Issue:** Problems related to FFmpeg, often for post-processing.

**Solutions:**

- Ensure FFmpeg is installed and in PATH.
- Specify FFmpeg location:

  ```sh
  yt-dlp --ffmpeg-location /path/to/ffmpeg URL
  ```

- Update FFmpeg to the latest version.

## 10. Age-Restricted Content

**Issue:** Unable to download age-restricted videos.

**Solutions:**

- Use cookies:

  ```sh
  yt-dlp --cookies cookies.txt URL
  ```

- Pass login info:

  ```sh
  yt-dlp -u USERNAME -p PASSWORD URL
  ```

- Use `--age-limit` option:

  ```sh
  yt-dlp --age-limit 21 URL
  ```

## 11. YouTube Throttling

**Issue:** YouTube throttling download speed.

**Solutions:**

- Use `--throttled-rate` option:

  ```sh
  yt-dlp --throttled-rate 100K URL
  ```

- Try different format selection:

  ```sh
  yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' URL
  ```

## 12. Outdated yt-dlp Version

**Issue:** Features not working or unexpected errors.

**Solution:**

- Update yt-dlp:

  ```sh
  yt-dlp -U
  ```

  or

  ```sh
  pip install -U yt-dlp
  ```

## 13. SSL Certificate Errors

**Issue:** SSL certificate verification fails.

**Solutions:**

- Update your SSL certificates.
- (Not recommended for security reasons) Disable SSL verification:

  ```sh
  yt-dlp --no-check-certificate URL
  ```

## 14. Region-Locked Content

**Issue:** Content is not available in your region.

**Solutions:**

- Use a VPN or proxy from an allowed region.
- Try `--geo-bypass` option:

  ```sh
  yt-dlp --geo-bypass URL
  ```

## 15. Verbose Output for Debugging

**Issue:** Need more information to diagnose a problem.

**Solution:**

- Use verbose output:

  ```sh
  yt-dlp -v URL
  ```

- For even more detail:

  ```sh
  yt-dlp --verbose --dump-pages URL
  ```

Remember, always ensure you're using the latest version of yt-dlp, as many issues are resolved in newer releases. If you encounter persistent issues not covered here, consider checking the official yt-dlp issues page or seeking help in the community forums.
