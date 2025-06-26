---
sidebar_position: 2
---

# How to Contribute Code to yt-dlp

Contributing code to yt-dlp is an excellent way to improve the project, add new features, and give back to the community. This comprehensive guide covers everything you need to know about contributing code effectively.

## Prerequisites and Setup

### **Development Environment Requirements**

Before contributing, ensure you have:

- **Python 3.8+**: Latest stable version recommended
- **Git**: For version control and collaboration
- **GitHub Account**: For forking and pull requests
- **Code Editor**: VS Code, PyCharm, or your preferred editor
- **FFmpeg**: For testing media processing features

### **Knowledge Requirements**

- **Python Programming**: Intermediate to advanced level
- **Git Workflow**: Basic understanding of branching and merging
- **Web Technologies**: HTML, HTTP, JSON for extractor development
- **Regular Expressions**: For pattern matching and extraction
- **Testing**: Unit testing and integration testing concepts

## Getting Started

### **1. Fork and Clone the Repository**

```bash
# Fork the repository on GitHub first, then clone your fork
git clone https://github.com/YOUR_USERNAME/yt-dlp.git
cd yt-dlp

# Add upstream remote for staying updated
git remote add upstream https://github.com/yt-dlp/yt-dlp.git
```

### **2. Set Up Development Environment**

```bash
# Create and activate virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install development dependencies
pip install -r requirements.txt
pip install -r devscripts/requirements.txt

# Install in development mode
pip install -e .
```

### **3. Verify Installation**

```bash
# Test basic functionality
python -m yt_dlp --version
python -m yt_dlp --help

# Run basic tests
python -m pytest test/test_download.py -v
```

## Development Workflow

### **1. Stay Updated with Upstream**

```bash
# Fetch latest changes from upstream
git fetch upstream

# Update your main branch
git checkout master
git merge upstream/master

# Push updates to your fork
git push origin master
```

### **2. Create Feature Branch**

```bash
# Create and switch to feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

### **3. Make Your Changes**

Follow these development practices:

- **Write Clean Code**: Follow PEP 8 style guidelines
- **Add Documentation**: Document new features and functions
- **Write Tests**: Add tests for new functionality
- **Commit Frequently**: Make small, focused commits

### **4. Testing Your Changes**

```bash
# Run all tests
python -m pytest

# Run specific test categories
python -m pytest test/test_extractors.py
python -m pytest test/test_postprocessors.py

# Test with specific extractors
python -m pytest test/test_extractors.py::test_youtube

# Run linting
python -m flake8 yt_dlp/
```

### **5. Commit Your Changes**

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "Add support for NewSite extractor

- Implement NewSiteIE class with video extraction
- Add support for playlists and channels
- Include metadata extraction for title, description
- Add tests for various URL patterns"
```

## Types of Contributions

### **1. Extractor Development**

Extractors are the core of yt-dlp, handling video extraction from websites.

#### **Basic Extractor Structure**

```python
from .common import InfoExtractor
from ..utils import (
    extract_attributes,
    get_element_by_class,
    unified_strdate,
)

class NewSiteIE(InfoExtractor):
    _VALID_URL = r'https?://(?:www\.)?newsite\.com/watch/(?P<id>[0-9]+)'
    _TESTS = [{
        'url': 'https://newsite.com/watch/12345',
        'md5': 'expected_md5_hash',
        'info_dict': {
            'id': '12345',
            'ext': 'mp4',
            'title': 'Expected Video Title',
            'description': 'Expected description',
            'uploader': 'Expected uploader',
            'duration': 120,
        }
    }]

    def _real_extract(self, url):
        video_id = self._match_id(url)
        webpage = self._download_webpage(url, video_id)

        title = self._html_search_regex(
            r'<title>([^<]+)</title>', webpage, 'title')

        video_url = self._html_search_regex(
            r'video_url["\']:\s*["\']([^"\']+)', webpage, 'video url')

        return {
            'id': video_id,
            'title': title,
            'url': video_url,
            'ext': 'mp4',
        }
```

#### **Extractor Best Practices**

1. **URL Pattern Matching**:

   ```python
   _VALID_URL = r'https?://(?:www\.)?site\.com/(?:video/)?(?P<id>[a-zA-Z0-9]+)'
   ```

2. **Comprehensive Tests**:

   ```python
   _TESTS = [{
       'url': 'test_url',
       'info_dict': {
           'id': 'expected_id',
           'ext': 'expected_extension',
           'title': 'expected_title',
           # ... other expected fields
       }
   }, {
       # Additional test cases
       'url': 'another_test_url',
       'only_matching': True,  # For URL pattern testing only
   }]
   ```

3. **Error Handling**:
   ```python
   try:
       data = self._download_json(api_url, video_id)
   except ExtractorError as e:
       if 'not found' in str(e):
           raise ExtractorError('Video not found', expected=True)
       raise
   ```

### **2. Post-Processor Development**

Post-processors handle media processing after download.

#### **Basic Post-Processor Structure**

```python
from .common import PostProcessor
from ..utils import PostProcessingError

class CustomPP(PostProcessor):
    def __init__(self, downloader=None, **kwargs):
        super().__init__(downloader)
        # Initialize custom parameters

    def run(self, info):
        # Process the downloaded file
        filepath = info['filepath']

        try:
            # Perform custom processing
            self.to_screen(f'Processing {filepath}')
            # ... processing logic ...

            return [], info  # Return (files_to_delete, info_dict)
        except Exception as e:
            raise PostProcessingError(f'Custom processing failed: {str(e)}')
```

### **3. Core Functionality Improvements**

Contributing to core functionality requires understanding of:

- **YoutubeDL class**: Main downloader logic
- **Format selection**: Video/audio format handling
- **Network handling**: HTTP requests and responses
- **File system operations**: Path handling and file management

## Contribution Guidelines

### **Code Style and Standards**

1. **Follow PEP 8**: Use consistent Python coding style
2. **Use Type Hints**: Add type annotations for new code
3. **Write Docstrings**: Document classes and functions
4. **Keep Functions Small**: Break complex logic into smaller functions
5. **Use Meaningful Names**: Choose descriptive variable and function names

### **Testing Requirements**

1. **Unit Tests**: Test individual functions and methods
2. **Integration Tests**: Test complete extraction workflows
3. **Edge Cases**: Test error conditions and unusual inputs
4. **Performance Tests**: Ensure changes don't degrade performance

```python
# Example test structure
def test_new_site_extraction(self):
    """Test NewSite video extraction"""
    ie = NewSiteIE()
    result = ie.extract('https://newsite.com/watch/12345')

    self.assertEqual(result['id'], '12345')
    self.assertEqual(result['title'], 'Expected Title')
    self.assertIsNotNone(result['url'])
```

### **Documentation Requirements**

1. **Code Comments**: Explain complex logic
2. **Docstrings**: Document public methods and classes
3. **README Updates**: Update documentation for new features
4. **Changelog Entries**: Document user-facing changes

## Pull Request Process

### **1. Prepare Your Pull Request**

```bash
# Ensure your branch is up to date
git checkout master
git pull upstream master
git checkout your-feature-branch
git rebase master

# Run final tests
python -m pytest
python -m flake8 yt_dlp/

# Push your changes
git push origin your-feature-branch
```

### **2. Create Pull Request**

1. **Go to GitHub**: Navigate to your fork on GitHub
2. **Click "New Pull Request"**: Compare your branch with upstream master
3. **Fill PR Template**: Complete all required sections
4. **Add Reviewers**: Request review from maintainers

### **3. Pull Request Template**

```markdown
## Description

Brief description of changes made

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Existing tests pass
- [ ] New tests added
- [ ] Manual testing completed

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

### **4. Code Review Process**

1. **Initial Review**: Maintainers review code and architecture
2. **Feedback**: Address review comments and suggestions
3. **Iterate**: Make requested changes and push updates
4. **Final Review**: Maintainers approve and merge

## Advanced Contribution Topics

### **Extractor Maintenance**

1. **Site Changes**: Update extractors when sites change
2. **Format Updates**: Handle new video/audio formats
3. **API Changes**: Adapt to site API modifications
4. **Performance**: Optimize extraction speed and reliability

### **Security Considerations**

1. **Input Validation**: Sanitize user inputs
2. **URL Handling**: Prevent malicious URL exploitation
3. **File Operations**: Secure file system access
4. **Network Security**: Handle SSL/TLS properly

### **Performance Optimization**

1. **Caching**: Implement appropriate caching strategies
2. **Async Operations**: Use asynchronous programming where beneficial
3. **Memory Management**: Optimize memory usage for large files
4. **Network Efficiency**: Minimize unnecessary requests

## Getting Help and Support

### **Communication Channels**

1. **GitHub Issues**: For bug reports and feature requests
2. **GitHub Discussions**: For questions and general discussion
3. **Code Review**: Through pull request comments
4. **Documentation**: Comprehensive guides and references

### **Learning Resources**

1. **Existing Code**: Study current extractors and implementations
2. **Test Cases**: Learn from existing test patterns
3. **Documentation**: Read all available documentation
4. **Community**: Engage with other contributors

## Recognition and Advancement

### **Contribution Recognition**

- **Changelog**: Contributors listed in release notes
- **Git History**: Permanent record of contributions
- **Community**: Recognition within the community
- **Skills**: Improved programming and collaboration skills

### **Becoming a Maintainer**

Regular, high-quality contributions may lead to:

- **Commit Access**: Direct repository access
- **Review Privileges**: Ability to review other contributions
- **Decision Making**: Input on project direction
- **Mentoring**: Helping new contributors

## Quick Reference

### **Common Commands**

```bash
# Development setup
git clone https://github.com/YOUR_USERNAME/yt-dlp.git
cd yt-dlp
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -e .

# Testing
python -m pytest
python -m pytest test/test_extractors.py::TestYoutube
python -m flake8 yt_dlp/

# Git workflow
git checkout -b feature/new-feature
git add .
git commit -m "Descriptive commit message"
git push origin feature/new-feature
```

### **Contribution Checklist**

- [ ] Fork and clone repository
- [ ] Set up development environment
- [ ] Create feature branch
- [ ] Make changes following guidelines
- [ ] Add comprehensive tests
- [ ] Update documentation
- [ ] Run all tests and linting
- [ ] Create pull request
- [ ] Respond to review feedback
- [ ] Celebrate your contribution!

Contributing to yt-dlp is rewarding and helps millions of users worldwide. Start small, learn continuously, and don't hesitate to ask for help when needed. Your contributions make a real difference!
