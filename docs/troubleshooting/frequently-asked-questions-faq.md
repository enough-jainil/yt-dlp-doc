---
sidebar_position: 2
---

# Frequently Asked Questions (FAQ)

## General Questions

### **Q1: What is yt-dlp?**

**A:** yt-dlp is a fork of youtube-dl, a command-line program to download videos from YouTube and other video platforms. It includes additional features and improvements over the original youtube-dl.

### **Q2: Is yt-dlp legal to use?**

**A:** The legality of using yt-dlp depends on how you use it and the laws in your jurisdiction. Always respect copyright laws and terms of service of the websites you're downloading from.

### **Q3: Does yt-dlp work on Windows/Mac/Linux?**

**A:** Yes, yt-dlp is cross-platform and works on Windows, macOS, and Linux.

## Installation and Updates

### **Q4: How do I install yt-dlp?**

**A:** You can install yt-dlp using pip:

```sh
pip install yt-dlp
```

For other installation methods, refer to the installation guide in the documentation.

### **Q5: How do I update yt-dlp?**

**A:** You can update yt-dlp by running:

```sh
yt-dlp -U
```

or

```sh
pip install -U yt-dlp
```

### **Q6: Why am I getting "command not found" errors?**

**A:** Ensure that yt-dlp is installed correctly and that its location is in your system's PATH.

## Usage and Features

### **Q7: How do I download a video?**

**A:** Basic usage:

```sh
yt-dlp [URL]
```

For example:

```sh
yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### **Q8: Can I download only the audio?**

**A:** Yes, use the `-x` or `--extract-audio` option:

```sh
yt-dlp -x [URL]
```

### **Q9: How do I select a specific video quality?**

**A:** Use the `-f` option. For example:

```sh
yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best' [URL]
```

### **Q10: Can yt-dlp download entire playlists?**

**A:** Yes, simply provide the playlist URL:

```sh
yt-dlp [PLAYLIST_URL]
```

## Troubleshooting

### **Q11: Why is the download speed slow?**

**A:** Try using an external downloader like `aria2c`:

```sh
yt-dlp --external-downloader aria2c [URL]
```

### **Q12: How do I bypass geo-restrictions?**

**A:** Use the `--geo-bypass` option:

```sh
yt-dlp --geo-bypass [URL]
```

### **Q13: Why can't I download age-restricted videos?**

**A:** Try using cookies from your browser:

```sh
yt-dlp --cookies-from-browser firefox [URL]
```

### **Q14: What do I do if yt-dlp says "video unavailable"?**

**A:** Check if the video is actually available in your region or if it requires login. You might need to use `--cookies` or `--username` and `--password` options.

## Advanced Usage

### **Q15: Can I use yt-dlp in my Python scripts?**

**A:** Yes, yt-dlp can be imported as a Python module. Check the documentation for examples.

### **Q16: How do I customize the output filename?**

**A:** Use the `-o` option with an output template. For example:

```sh
yt-dlp -o '%(title)s-%(id)s.%(ext)s' [URL]
```

### **Q17: Can yt-dlp download videos from sites other than YouTube?**

**A:** Yes, yt-dlp supports many video hosting platforms. Check the supported sites list in the documentation.

## Privacy and Security

### **Q18: Does yt-dlp collect any personal data?**

**A:** No, yt-dlp itself doesn't collect personal data. However, be cautious when using options that involve your login credentials.

### **Q19: Is it safe to use the `--cookies` option?**

**A:** While it's generally safe, be careful not to share your cookies file as it may contain sensitive information.

## Contribution and Support

### **Q20: How can I contribute to yt-dlp?**

**A:** You can contribute by reporting bugs, suggesting features, or submitting pull requests on the yt-dlp GitHub repository.

### **Q21: Where can I get help if I have more questions?**

**A:** You can seek help on the yt-dlp GitHub issues page, or in community forums dedicated to yt-dlp.

Remember, this FAQ covers common questions, but for more detailed information, always refer to the official yt-dlp documentation and GitHub repository.
