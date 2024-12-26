import React from "react";

export default function Disclaimer(): JSX.Element {
  return (
    <section className="py-8 text-center relative overflow-hidden bg-ifm-color-primary-light dark:bg-ifm-color-primary-dark">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-ifm-color-primary-darkest">
          Disclaimer
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-ifm-color-primary-darkest">
          This is not the official yt-dlp documentation. I am a fan of yt-dlp
          and created this documentation for my personal use. If you'd like to
          contribute to this unofficial documentation, you can do so on my
          GitHub repository.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            className="button button--secondary button--lg bg-ifm-color-primary text-white"
            href="https://github.com/yt-dlp/yt-dlp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official yt-dlp Project
          </a>
          <a
            className="button button--secondary button--lg bg-ifm-color-primary text-white"
            href="https://github.com/enough-jainil/yt-dlp-doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute to This Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
