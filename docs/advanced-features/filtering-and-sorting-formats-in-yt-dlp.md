---
sidebar_position: 2
---

# Filtering and Sorting Formats in `yt-dlp`

`yt-dlp` offers advanced options for filtering and sorting available formats, enabling you to precisely select the media quality and type you want to download. Below is an updated guide on how to use these features effectively.

---

## Filtering Formats

Use the `-f` or `--format` option to filter formats based on specific criteria.

#### **Basic Syntax**

```bash
yt-dlp -f FILTER URL
```

#### **Filter Operators**

| Operator | Description                                        |
| -------- | -------------------------------------------------- |
| `+`      | Merge two formats (e.g., separate video and audio) |
| `/`      | Fallback if the former format is unavailable       |
| `,`      | Download multiple formats                          |

#### **Common Filters**

| Filter       | Description                          |
| -----------  | ------------------------------------ |
| `best`       | Best quality format (video + audio). |
| `worst`      | Worst quality format.                |
| `worstvideo` | Worst quality video-only format.     |
| `worstaudio` | Worst quality audio-only format.     |
| `bestvideo`  | Best quality video-only format.      |
| `bestaudio`  | Best quality audio-only format.      |

#### **Advanced Filtering**

Use square brackets `[]` to apply additional filters:

- `bestvideo[height<=720]`: Best video with height no more than 720p.
- `bestaudio[ext=m4a]`: Best M4A audio format.
- `best[fps>30][height>720]`: Best format with more than 30 fps and height greater than 720p.

#### **Filtering Examples**

1. **Best MP4 video with M4A audio:**

   ```bash
   yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' URL
   ```

2. **Best video no larger than 720p:**

   ```bash
   yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]' URL
   ```

3. **Worst video at least 480p:**
   ```bash
   yt-dlp -f 'worst[height>=480]' URL
   ```

---

## Sorting Formats

Use the `-S` or `--format-sort` option to sort formats based on multiple criteria.

### Basic Syntax

```bash
yt-dlp -S SORT_ORDER URL
```

#### **Sorting Fields**

| Field          | Description                |
| -------------- | -------------------------- |
| `filesize`     | File size.                 |
| `res`          | Video resolution.          |
| `fps`          | Frame rate.                |
| `codec:vcodec` | Video codec preference.    |
| `codec:acodec` | Audio codec preference.    |
| `br`           | Average bitrate.           |
| `asr`          | Audio sample rate.         |
| `proto`        | Protocol preference.       |
| `ext`          | File extension preference. |

#### **Sorting Order**

- **Descending order (default)**: `field1,field2,field3`
- **Ascending order**: `+field1,+field2,+field3`

### Sorting Examples

1. **Prefer higher resolution, then higher bitrate:**

   ```bash
   yt-dlp -S 'res,br' URL
   ```

2. **Prefer MP4 container, then higher resolution:**

   ```bash
   yt-dlp -S 'ext:mp4:m4a,res' URL
   ```

3. **Prefer better codec, then higher bitrate, then larger file size:**
   ```bash
   yt-dlp -S '+codec,+br,+size' URL
   ```

---

### Combining Filtering and Sorting

You can use both filtering and sorting together for precise format selection:

```bash
yt-dlp -f 'bestvideo[height<=1080]+bestaudio' -S 'proto,ext:mp4:m4a,res,br' URL
```

This command:

1. Selects the best video up to 1080p and best audio.
2. Sorts by protocol, preferring MP4/M4A container, higher resolution, and higher bitrate.

---

### Tips for Effective Filtering and Sorting

1. **List Formats First**: Use `-F` or `--list-formats` to view available formats before filtering/sorting.
2. **Combine Criteria**: Use multiple criteria for more precise selection.
3. **Verbose Mode**: Use `--verbose` to see how `yt-dlp` interprets your format selection.
4. **Check Availability**: Not all options may be available for every video source.
5. **Simulate First**: Test your filters with `--simulate` to ensure they work as expected.

---

### Additional Options

- **Merge Output Format**: Specify the container format when merging audio and video:

  ```bash
  yt-dlp --merge-output-format mp4 -f 'bestvideo+bestaudio' URL
  ```

- **Download Subtitles**: Include subtitles in the download:
  ```bash
  yt-dlp --write-subs -f 'best' URL
  ```

---

## Conclusion

By mastering format filtering and sorting in `yt-dlp`, you can ensure you're always downloading the exact quality and format of media you need. Experiment with different filters and sorting options to optimize your downloads.

For more advanced usage, refer to the official `yt-dlp` documentation or use `yt-dlp --help` for a full list of options.
