---
sidebar_position: 2
---

# How to Contribute Code to yt-dlp

Contributing code to yt-dlp is a great way to improve the project and add new features. This guide will walk you through the process of contributing code to yt-dlp.

## Prerequisites

Before you start contributing, make sure you have:

- A GitHub account
- Git installed on your local machine
- Python 3.8 or later installed
- Basic knowledge of Python programming
- Familiarity with git and GitHub workflows

## Step-by-Step Guide to Contributing

### 1. Fork the Repository

1. Go to the [yt-dlp GitHub repository](https://github.com/yt-dlp/yt-dlp).
2. Click the "Fork" button in the top-right corner.
3. This creates a copy of the repository in your GitHub account.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```sh
git clone https://github.com/YOUR_USERNAME/yt-dlp.git
cd yt-dlp
```

### 3. Set Up the Development Environment

Create a virtual environment:

```sh
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

Install development dependencies:

```sh
pip install -r requirements.txt
```

### 4. Create a New Branch

Create a new branch for your feature or bugfix:

```sh
git checkout -b your-feature-branch
```

### 5. Make Your Changes

- Implement your feature or fix the bug.
- Follow the yt-dlp coding conventions.
- Add or update tests as necessary.
- Update documentation if you're adding new features.

### 6. Run Tests

Ensure all tests pass:

```sh
python3 -m pytest
```

### 7. Commit Your Changes

Commit your changes with a clear and descriptive commit message:

```sh
git add .
git commit -m "Add new feature: Short description of your changes"
```

### 8. Push to Your Fork

Push your changes to your GitHub fork:

```sh
git push origin your-feature-branch
```

### 9. Create a Pull Request

1. Go to your fork on GitHub.
2. Click "New Pull Request".
3. Select your feature branch.
4. Fill out the pull request template with details about your changes.
5. Click "Create Pull Request".

## Best Practices for Contributing

- **Keep it focused**: Each pull request should address a single feature or bug fix.
- **Follow coding standards**: Adhere to PEP 8 and yt-dlp's specific coding conventions.
- **Write tests**: Add tests for new features and ensure existing tests pass.
- **Update documentation**: If you're adding or changing functionality, update the relevant documentation.
- **Describe your changes**: Provide a clear description of what your code does and why it's needed.
- **Be responsive**: Be prepared to answer questions and make changes based on review feedback.

## Code Review Process

1. A maintainer will review your pull request.
2. They may ask for changes or clarifications.
3. Make any requested changes and push them to your branch.
4. Once approved, a maintainer will merge your pull request.

## Additional Guidelines

- **Extractor contributions**: If you're adding or updating an extractor, make sure to follow the extractor writing guidelines.
- **Core functionality changes**: Discuss major changes in an issue before implementing them.
- **Performance considerations**: Ensure your changes don't negatively impact performance, especially for commonly used features.

## Getting Help

If you need help or have questions:

- Check the contributing guidelines.
- Ask in the yt-dlp issues section.
- Join community discussions on platforms like Discord or Matrix (if available).

## Recognition

Your contributions will be recognized in the project's changelog and contributors list. Significant contributions may lead to maintainer status.

Remember, contributing to open-source projects like yt-dlp is a great way to improve your skills, give back to the community, and make a meaningful impact on a widely used tool.
