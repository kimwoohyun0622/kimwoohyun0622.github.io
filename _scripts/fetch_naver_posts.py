"""Fetch Naver blog RSS and create al-folio _posts redirect stubs for a category."""
from __future__ import annotations

import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path

BLOG_ID = "kimwoohyun0622"
CATEGORY = "그래프 아저씨"
RSS_URL = f"https://rss.blog.naver.com/{BLOG_ID}.xml"
POSTS_DIR = Path(__file__).resolve().parents[1] / "_posts"
EXTERNAL_SOURCE = "네이버 블로그"


def norm_cat(s: str) -> str:
    return (s or "").replace("\xa0", " ").replace("\u200b", "").strip()


def slugify(title: str) -> str:
    s = title.lower().strip()
    s = re.sub(r"[^\w\s가-힣-]", "", s, flags=re.UNICODE)
    s = re.sub(r"[\s_]+", "-", s)
    s = s.strip("-")
    return s[:60] or "post"


def strip_html(text: str) -> str:
    text = unescape(text or "")
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def main() -> None:
    req = urllib.request.Request(RSS_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()

    root = ET.fromstring(raw)
    channel = root.find("channel")
    assert channel is not None

    POSTS_DIR.mkdir(exist_ok=True)
    created = []

    for item in channel.findall("item"):
        category = norm_cat(item.findtext("category") or "")
        if category != CATEGORY:
            continue

        title = (item.findtext("title") or "untitled").strip()
        link = (item.findtext("link") or "").split("?")[0].strip()
        guid = (item.findtext("guid") or link).strip()
        desc = strip_html(item.findtext("description") or "")
        pub = item.findtext("pubDate")
        dt = parsedate_to_datetime(pub) if pub else datetime.now().astimezone()

        date_str = dt.strftime("%Y-%m-%d")
        slug = slugify(title)
        filename = f"{date_str}-{slug}.md"
        path = POSTS_DIR / filename

        safe_title = title.replace('"', '\\"')
        date_front = dt.strftime("%Y-%m-%d %H:%M:%S %z")
        body = "\n".join(
            [
                "---",
                "layout: post",
                f'title: "{safe_title}"',
                f"date: {date_front}",
                "categories: blog",
                "tags: [그래프, 네이버]",
                f"external_source: {EXTERNAL_SOURCE}",
                f"redirect: {link}",
                "---",
                "",
                desc,
                "",
                f"원문: [{title}]({link})",
                "",
            ]
        )
        path.write_text(body, encoding="utf-8")
        created.append((filename, title, link))

    print(f"created {len(created)} posts in {POSTS_DIR}")
    for name, title, link in created:
        print(f"- {name}")
        print(f"  {title}")
        print(f"  {link}")


if __name__ == "__main__":
    main()
