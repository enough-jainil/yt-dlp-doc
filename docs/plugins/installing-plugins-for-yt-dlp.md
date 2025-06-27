---
sidebar_position: 1
---

# Installing Plugins for yt-dlp

This comprehensive guide covers all aspects of installing plugins for yt-dlp, from simple package installations to advanced development setups. Learn how to extend yt-dlp's functionality safely and effectively.

## Overview of yt-dlp Plugin Installation

### **What You'll Learn**

- Multiple installation methods for different scenarios
- Plugin directory structure and organization
- Dependency management and compatibility
- Security considerations and best practices
- Troubleshooting common installation issues

### **Prerequisites**

- yt-dlp installed and functional
- Basic command-line knowledge
- Python 3.9+ (for development installations)
- Internet connection for downloading plugins

## Installation Methods

### **Method 1: Package Manager Installation (Recommended)**

#### **Using pip (Python Package Index)**

The most reliable method for well-maintained plugins:

Search for available plugins

```bash
pip search yt-dlp-plugin
```

Install from PyPI

```bash
pip install yt-dlp-plugin-name
```

Install specific version

```bash
pip install yt-dlp-plugin-name==1.2.3
```

Install with optional dependencies

```bash
pip install yt-dlp-plugin-name[extra-features]
```

Install from requirements file

```bash
pip install -r plugin-requirements.txt
```

#### **Installing from GitHub**

For plugins not on PyPI or development versions:

Install latest version from GitHub

```bash
pip install git+https://github.com/user/yt-dlp-plugin-repo.git
```

Install specific branch or tag

```bash
pip install git+https://github.com/user/yt-dlp-plugin-repo.git@main
```

```bash
pip install git+https://github.com/user/yt-dlp-plugin-repo.git@v1.0.0
```

Install from private repository (with authentication)

```bash
pip install git+https://username:token@github.com/user/private-plugin.git
```

#### **Using System Package Managers**

Some plugins may be available through system package managers:

Homebrew (macOS)

```bash
brew search yt-dlp-plugin
```

```bash
brew install yt-dlp-plugin-name
```

APT (Debian/Ubuntu)

```bash
apt search yt-dlp-plugin
```

```bash
sudo apt install yt-dlp-plugin-name
```

DNF (Fedora)

```bash
dnf search yt-dlp-plugin
```

```bash
sudo dnf install yt-dlp-plugin-name
```

AUR (Arch Linux)

```bash
yay -S yt-dlp-plugin-name
```

### **Method 2: Manual Installation**

#### **Understanding Plugin Directory Structure**

yt-dlp looks for plugins in specific directories:

```
Plugin Search Paths (in order of priority):
1. ~/.config/yt-dlp/plugins/
2. ~/.yt-dlp-plugins/
3. ./yt-dlp-plugins/ (current directory)
4. Python site-packages/yt_dlp_plugins/
```

#### **Directory Organization**

```
~/.config/yt-dlp/plugins/
├── extractors/
│   ├── __init__.py
│   ├── custom_site.py
│   └── another_extractor.py
├── postprocessors/
│   ├── __init__.py
│   ├── custom_processor.py
│   └── metadata_enhancer.py
├── downloaders/
│   ├── __init__.py
│   └── custom_downloader.py
└── utils/
    ├── __init__.py
    └── helper_functions.py
```

#### **Manual Installation Steps**

**Step 1: Create Plugin Directories**

Create the main plugin directory structure

```bash
mkdir -p ~/.config/yt-dlp/plugins/{extractors,postprocessors,downloaders,utils}
```

Create **init**.py files for Python package recognition

```bash
touch ~/.config/yt-dlp/plugins/__init__.py
```

```bash
touch ~/.config/yt-dlp/plugins/extractors/__init__.py
```

```bash
touch ~/.config/yt-dlp/plugins/postprocessors/__init__.py
```

```bash
touch ~/.config/yt-dlp/plugins/downloaders/__init__.py
```

```bash
touch ~/.config/yt-dlp/plugins/utils/__init__.py
```

**Step 2: Download Plugin Files**

Download single plugin file

```bash
wget https://raw.githubusercontent.com/user/repo/main/extractor.py -O ~/.config/yt-dlp/plugins/extractors/custom_site.py
```

Download entire plugin repository

```bash
git clone https://github.com/user/plugin-repo.git /tmp/plugin
cp -r /tmp/plugin/yt_dlp_plugins/* ~/.config/yt-dlp/plugins/
```

Download and extract archive

```bash
curl -L https://github.com/user/repo/archive/main.zip -o plugin.zip
unzip plugin.zip
cp plugin-main/*.py ~/.config/yt-dlp/plugins/extractors/
```

**Step 3: Install Dependencies**

Install plugin dependencies if requirements.txt exists

```bash
pip install -r plugin-requirements.txt
```

Install individual dependencies

```bash
pip install requests beautifulsoup4 lxml
```

Install optional dependencies

```bash
pip install pillow[extra] ffmpeg-python
```

### **Method 3: Development Installation**

#### **Setting Up Development Environment**

For plugin development or testing unreleased versions:

Clone plugin repository

```bash
git clone https://github.com/user/yt-dlp-plugin-repo.git
cd yt-dlp-plugin-repo
```

Create virtual environment

```bash
python -m venv plugin-dev-env
source plugin-dev-env/bin/activate
```

Install in development mode

```bash
pip install -e .
```

Install with development dependencies

```bash
pip install -e .[dev,test]
```

#### **Linking Development Plugins**

Create symbolic links for development

```bash
ln -s /path/to/plugin/development/extractor.py ~/.config/yt-dlp/plugins/extractors/
```

For Windows (requires admin privileges)

```bash
mklink ~/.config/yt-dlp/plugins/extractors/extractor.py /path/to/plugin/development/extractor.py
```

## Plugin Configuration and Management

### **Configuration Files**

Configure plugins through yt-dlp configuration files:

```bash
# ~/.config/yt-dlp/config
# Enable specific post-processors
--use-postprocessor PluginName

# Configure extractor arguments
--extractor-args "plugin:option=value"
```

### **Environment Variables**

Plugin-specific environment variables

```bash
export PLUGIN_API_KEY="your-api-key"
```

```bash
export PLUGIN_DEBUG="true"
```

Python path for custom plugins

```bash
export PYTHONPATH="/custom/plugin/path:$PYTHONPATH"
```

## Verification and Testing

### **Verifying Plugin Installation**

#### **Basic Verification**

Check if plugin is loaded

```bash
yt-dlp --verbose "URL" 2>&1 | grep -i "plugin"
```

List all loaded extractors (includes plugins)

```bash
yt-dlp --list-extractors | grep -i "custom"
```

List all post-processors (includes plugins)

```bash
yt-dlp --list-postprocessors | grep -i "custom"
```

Check plugin version

```bash
python -c "import yt_dlp_plugins.plugin_name; print(plugin_name.__version__)"
```

#### **Testing Plugin Functionality**

Simulation mode (no actual download)

```bash
yt-dlp --simulate --use-postprocessor PluginName "URL"
```

Test with verbose output

```bash
yt-dlp --verbose --use-postprocessor PluginName "URL"
```

Test specific plugin features

```bash
yt-dlp --extractor-args "plugin:test_mode=true" "URL"
```

## Troubleshooting Installation Issues

### **Common Installation Problems**

#### **Plugin Not Found**

Check plugin search paths

```bash
python -c "import sys; print('\n'.join(sys.path))"
```

Verify directory structure

```bash
ls -la ~/.config/yt-dlp/plugins/
```

Test manual import

```bash
python -c "import sys; sys.path.append('~/.config/yt-dlp/plugins'); import extractors.plugin_name"
```

#### **Import Errors**

Check for syntax errors

```bash
python -m py_compile ~/.config/yt-dlp/plugins/extractors/plugin.py
```

Check missing dependencies

```bash
pip check
```

Test import with detailed error

```bash
python -c "
import sys
sys.path.append('~/.config/yt-dlp/plugins')
try:
    import extractors.plugin_name
    print('Import successful')
except Exception as e:
    print(f'Import failed: {e}')
"
```

#### **Permission Issues**

Check file permissions

```bash
ls -la ~/.config/yt-dlp/plugins/
```

Fix permissions

```bash
chmod -R 755 ~/.config/yt-dlp/plugins/
```

```bash
chmod 644 ~/.config/yt-dlp/plugins/*/*.py
```

Check ownership

```bash
chown -R $USER:$USER ~/.config/yt-dlp/plugins/
```

#### **Version Compatibility Issues**

Check yt-dlp version

```bash
yt-dlp --version
```

Check plugin compatibility

```bash
pip show yt-dlp-plugin-name | grep Requires
```

Update to compatible versions

```bash
pip install "yt-dlp>=2024.1.1" "yt-dlp-plugin-name>=1.0.0"
```

### **Debug and Logging**

#### **Enable Debug Logging**

Maximum verbosity

```bash
yt-dlp -vvv "URL"
```

Save debug output

```bash
yt-dlp --verbose "URL" 2>&1 | tee debug.log
```

## Security Considerations

### **Plugin Security Best Practices**

#### **Source Verification**

- **Official repositories**: Prefer plugins from official or well-known sources
- **Code review**: Review plugin code before installation when possible
- **Reputation**: Check developer reputation and plugin reviews
- **Updates**: Ensure plugins are actively maintained

#### **Installation Security**

Install from trusted sources only

```bash
pip install --trusted-host pypi.org yt-dlp-plugin-name
```

Use virtual environments for isolation

```bash
python -m venv secure-plugin-env
source secure-plugin-env/bin/activate
pip install yt-dlp plugin-name
```

#### **Runtime Security**

Run with restricted permissions

```bash
yt-dlp --no-exec --no-shell-escape "URL"
```

Monitor plugin behavior

```bash
strace -e network yt-dlp --use-postprocessor PluginName "URL"
```

## Maintenance and Updates

### **Regular Maintenance Tasks**

#### **Plugin Updates**

Update all pip-installed plugins

```bash
pip list | grep yt-dlp-plugin | cut -d' ' -f1 | xargs pip install --upgrade
```

Check for plugin updates

```bash
pip list --outdated | grep yt-dlp-plugin
```

Update specific plugin

```bash
pip install --upgrade yt-dlp-plugin-name
```

#### **Cleanup and Optimization**

Remove unused plugins

```bash
pip uninstall unused-plugin-name
```

Clean plugin cache

```bash
rm -rf ~/.cache/yt-dlp/plugins/
```

Optimize plugin directory

```bash
find ~/.config/yt-dlp/plugins/ -name "*.pyc" -delete
```

```bash
find ~/.config/yt-dlp/plugins/ -name "__pycache__" -type d -exec rm -rf {} +
```

### **Backup and Recovery**

#### **Plugin Backup**

Backup plugin directory

```bash
tar -czf yt-dlp-plugins-backup-$(date +%Y%m%d).tar.gz ~/.config/yt-dlp/plugins/
```

Backup pip-installed plugins list

```bash
pip freeze | grep yt-dlp-plugin > yt-dlp-plugins-requirements.txt
```

#### **Recovery Procedures**

Restore from backup

```bash
tar -xzf yt-dlp-plugins-backup-20240101.tar.gz -C ~/
```

Reinstall from requirements

```bash
pip install -r yt-dlp-plugins-requirements.txt
```

Reset to clean state

```bash
rm -rf ~/.config/yt-dlp/plugins/
mkdir -p ~/.config/yt-dlp/plugins/{extractors,postprocessors,downloaders}
```

## Best Practices Summary

### **Installation Best Practices**

1. **Use package managers** when possible for easier updates
2. **Test in virtual environments** before system-wide installation
3. **Keep plugins updated** for security and compatibility
4. **Document installed plugins** for team environments
5. **Use version pinning** for production deployments

### **Security Best Practices**

1. **Verify plugin sources** before installation
2. **Review plugin code** when possible
3. **Use isolated environments** for untrusted plugins
4. **Monitor plugin behavior** in production
5. **Keep backups** of working configurations

### **Maintenance Best Practices**

1. **Regular updates** for security patches
2. **Clean unused plugins** to reduce complexity
3. **Monitor performance impact** of plugins
4. **Test plugins** after yt-dlp updates
5. **Document plugin configurations** for reproducibility

By following this comprehensive installation guide, you can safely and effectively extend yt-dlp's functionality with plugins while maintaining security, performance, and maintainability.
