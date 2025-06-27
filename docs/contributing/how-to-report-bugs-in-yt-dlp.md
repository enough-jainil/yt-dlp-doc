---
sidebar_position: 1
---

# How to Report Bugs in yt-dlp

Effective bug reporting is essential for maintaining and improving yt-dlp. This comprehensive guide will help you report bugs in a way that enables developers to quickly understand, reproduce, and resolve issues.

## Before Reporting a Bug

### **1. Update to Latest Version**

Always ensure you're using the latest version of yt-dlp before reporting a bug:

```bash
yt-dlp -U
```

Update yt-dlp.

```bash
yt-dlp --version
```

Verify version.

### **2. Search Existing Issues**

Before creating a new issue:

1. Visit the [yt-dlp issues page](https://github.com/yt-dlp/yt-dlp/issues)
2. Search for keywords related to your issue
3. Check both open and closed issues
4. Look for similar problems or duplicate reports

### **3. Verify It's Actually a Bug**

Confirm that the behavior is indeed a bug by:

- Reading the documentation to understand expected behavior
- Testing with minimal, standard options
- Checking if it's a known limitation or intended behavior
- Testing with different URLs or content types

### **4. Gather Diagnostic Information**

Collect the following information before reporting:

- **yt-dlp version**: `yt-dlp --version`
- **Python version**: `python --version`
- **Operating system**: Include version and architecture
- **FFmpeg version**: `ffmpeg -version` (if relevant)
- **Complete command**: The exact command that triggers the bug
- **Verbose output**: Full output with `--verbose` flag

## How to Report a Bug

### **Step 1: Create a Minimal Reproducible Example**

Reduce your command to the simplest form that still reproduces the bug:

```bash
yt-dlp --extract-audio URL
```

Minimal version instead of complex command.

### **Step 2: Generate Verbose Output**

Always include verbose output with your bug report:

```bash
yt-dlp --verbose URL 2>&1
```

Generate verbose output.

```bash
yt-dlp --verbose URL 2>&1 | curl -F 'f:1=<-' ix.io
```

Use a pastebin service for very long output.

### **Step 3: Open a New Issue**

1. Go to [yt-dlp issues](https://github.com/yt-dlp/yt-dlp/issues)
2. Click **"New Issue"**
3. Select **"Bug Report"** template
4. Fill out all required sections

### **Step 4: Complete the Bug Report Template**

#### **Bug Description**

Provide a clear, concise description of the bug:

```
yt-dlp fails to download videos from example.com with HTTP 403 error
```

#### **Reproduction Steps**

List exact steps to reproduce the issue:

```
1. Run: yt-dlp --verbose https://example.com/video/123
2. Observe the HTTP 403 error in output
3. Error occurs consistently across different videos
```

#### **Expected vs Actual Behavior**

- **Expected**: Video downloads successfully
- **Actual**: Download fails with HTTP 403 Forbidden error

#### **System Information**

```
- yt-dlp version: 2024.03.10
- Python version: 3.11.2
- Operating System: Ubuntu 22.04.3 LTS (x86_64)
- FFmpeg version: 4.4.2-0ubuntu0.22.04.1
```

#### **Verbose Output**

Include the complete verbose output in a code block or pastebin link.

## Bug Report Best Practices

### **Essential Guidelines**

1. **One Bug Per Report**: Create separate issues for different bugs
2. **Use English**: All communication should be in English
3. **Be Specific**: Provide exact commands, URLs, and error messages
4. **Include Context**: Mention when the issue started occurring
5. **Stay Factual**: Describe what happens, not what you think causes it
6. **Protect Privacy**: Don't include personal information or credentials

### **Formatting Your Report**

Use proper markdown formatting:

```markdown
## Bug Description

Clear description here

## Steps to Reproduce

1. First step
2. Second step
3. Third step

## System Information

- yt-dlp version: X.X.X
- OS: Operating System

## Verbose Output
```

verbose output here

```

```

### **Common Mistakes to Avoid**

❌ **Don't Do This**:

- Report multiple unrelated bugs in one issue
- Use vague descriptions like "doesn't work"
- Omit the verbose output
- Include personal information in logs
- Assume the cause without evidence

✅ **Do This Instead**:

- Create focused, single-issue reports
- Provide specific, detailed descriptions
- Always include verbose output
- Redact sensitive information
- Stick to observable facts

## Types of Bugs to Report

### **Extraction Failures**

- Videos that fail to download
- Incorrect metadata extraction
- Format detection issues
- Site-specific problems

### **Post-Processing Errors**

- FFmpeg conversion failures
- Audio extraction problems
- Thumbnail embedding issues
- Metadata writing errors

### **Network Issues**

- Connection timeouts
- Proxy-related problems
- Rate limiting issues
- SSL/TLS errors

### **Platform-Specific Bugs**

- Windows-specific issues
- macOS-specific problems
- Linux distribution issues
- Mobile platform problems

## After Submitting Your Report

### **Be Responsive**

- Monitor your issue for developer responses
- Answer questions promptly and thoroughly
- Provide additional information when requested
- Test proposed fixes and report results

### **Update Your Report**

- Add new information as you discover it
- Update if the issue changes or is resolved
- Mention if the bug affects other URLs or scenarios

### **Follow Up Appropriately**

- Don't bump issues without new information
- Be patient - developers are often volunteers
- Respect the time and effort of maintainers
- Thank contributors for their help

## Example of an Excellent Bug Report

```markdown
## Bug Description

yt-dlp fails to extract audio from Vimeo videos with "Unable to download JSON metadata" error

## Steps to Reproduce

1. Run: `yt-dlp --extract-audio --audio-format mp3 https://vimeo.com/123456789`
2. Observe the JSON metadata error
3. Error occurs with all tested Vimeo URLs

## Expected Behavior

Audio should be extracted and converted to MP3 format

## Actual Behavior

Download fails with error: "Unable to download JSON metadata: HTTP Error 403: Forbidden"

## System Information

- yt-dlp version: 2024.03.10 [1234567] (pip)
- Python version: 3.11.2 (CPython 64bit)
- Operating System: Windows 11 Pro (22H2)
- FFmpeg version: 6.0-full_build-www.gyan.dev

## Additional Context

- Issue started occurring after March 5, 2024
- Affects all Vimeo URLs tested (5+ different videos)
- Regular video download (without audio extraction) works fine
- Issue does not occur with YouTube URLs

## Verbose Output

[Verbose output would be included here or linked to pastebin]
```

## Getting Help

If you need assistance with bug reporting:

1. **Read the Documentation**: Check the [official documentation](https://github.com/yt-dlp/yt-dlp#readme)
2. **Search Existing Issues**: Look for similar problems and solutions
3. **Ask in Discussions**: Use GitHub Discussions for questions
4. **Community Forums**: Check Reddit r/youtubedl or similar communities

## Recognition and Contribution

Good bug reports are valuable contributions to the project:

- They help improve yt-dlp for everyone
- Well-written reports are often resolved faster
- Contributors may be recognized in release notes
- Quality reports help maintain project health

Remember: A well-written bug report is the first step toward getting your issue resolved. Taking time to provide complete, accurate information helps developers fix problems quickly and efficiently.

## Quick Reference Checklist

Before submitting your bug report, verify:

- [ ] Using latest yt-dlp version
- [ ] Searched existing issues
- [ ] Created minimal reproducible example
- [ ] Included complete system information
- [ ] Provided verbose output
- [ ] Used clear, descriptive title
- [ ] Followed bug report template
- [ ] Removed personal/sensitive information
- [ ] Used proper markdown formatting
- [ ] Focused on single issue only
