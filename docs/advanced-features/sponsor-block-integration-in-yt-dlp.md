---
sidebar_position: 6
---

# SponsorBlock Integration in yt-dlp

yt-dlp integrates with SponsorBlock, a crowdsourced service that allows users to skip or mark sponsored segments in YouTube videos. This feature helps you automatically handle sponsor segments, intros, outros, and other parts of videos you might want to skip.

## What is SponsorBlock?

SponsorBlock is a database of user-submitted timestamps for sponsored segments in YouTube videos. It allows viewers to skip non-content parts of videos automatically.

## Enabling SponsorBlock in yt-dlp

SponsorBlock features are disabled by default. To enable them, use the following options:

### Mark Sponsors

To mark sponsor segments in the video file:

```sh
yt-dlp --sponsorblock-mark all URL
```

This will add chapters to the video file, marking the sponsored segments.

### Remove Sponsors

To remove sponsor segments from the video:

```sh
yt-dlp --sponsorblock-remove all URL
```

This will cut out the sponsored segments from the downloaded video.

## SponsorBlock Categories

SponsorBlock recognizes several categories of segments:

- `sponsor`
- `intro`
- `outro`
- `selfpromo`
- `preview`
- `filler`
- `interaction`
- `music_offtopic`
- `poi_highlight`

You can specify which categories to mark or remove:

```sh
yt-dlp --sponsorblock-mark sponsor,intro --sponsorblock-remove outro URL
```

## Advanced Usage

### Custom Chapter Title

Customize the title of SponsorBlock chapters:

```sh
yt-dlp --sponsorblock-mark all --sponsorblock-chapter-title "[SponsorBlock]: %(category)s" URL
```

### Specify SponsorBlock API URL

If you want to use a different SponsorBlock API server:

```sh
yt-dlp --sponsorblock-api URL https://sponsor.ajay.app URL
```

## Examples

### Mark all sponsor segments but remove intros:

```sh
yt-dlp --sponsorblock-mark sponsor --sponsorblock-remove intro URL
```

### Remove all segments except `music_offtopic`:

```sh
yt-dlp --sponsorblock-remove all,-music_offtopic URL
```

### Mark sponsors and intros with custom chapter titles:

```sh
yt-dlp --sponsorblock-mark sponsor,intro --sponsorblock-chapter-title "%(category)s: %(start)s - %(end)s" URL
```

## Tips for Using SponsorBlock

- Use `--verbose` to see details about SponsorBlock actions.
- Combine with other yt-dlp features like format selection for a customized download.
- Be aware that SponsorBlock data is user-submitted and may not be 100% accurate.
- Consider contributing to SponsorBlock if you find it useful.

## Limitations and Considerations

- SponsorBlock integration only works with YouTube videos.
- The accuracy depends on user submissions to the SponsorBlock database.
- Processing videos with SponsorBlock may increase download time slightly.
- Removed segments might affect video continuity in some cases.

## Ethical Use

- Respect content creators' work while using SponsorBlock features.
- Consider supporting creators through other means if you frequently skip sponsored content.
- Be mindful that some "sponsored" content may be integral to the video's context.

SponsorBlock integration in yt-dlp provides a powerful way to customize your video downloading experience, allowing you to automatically handle sponsored and non-content segments in YouTube videos. Use it responsibly to enhance your viewing experience while respecting content creators' efforts.
