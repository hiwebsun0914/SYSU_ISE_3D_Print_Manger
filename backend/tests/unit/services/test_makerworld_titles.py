from backend.app.services.makerworld_titles import (
    clean_makerworld_slug_title,
    is_exact_makerworld_slug_title,
    parse_makerworld_title_from_markdown,
)


def test_parse_makerworld_title_from_markdown_prefers_heading():
    content = """
Title: Placeholder - 免费 3D 打印模型 - MakerWorld

# 桌面立式 宜家 洞洞板V2 - 免费 3D 打印模型 - MakerWorld
"""

    assert parse_makerworld_title_from_markdown(content) == "桌面立式 宜家 洞洞板V2"


def test_parse_makerworld_title_from_markdown_falls_back_to_title_line():
    content = "Title: 布朗熊蛋糕收纳盒 - 免费 3D 打印模型 - MakerWorld"

    assert parse_makerworld_title_from_markdown(content) == "布朗熊蛋糕收纳盒"


def test_clean_makerworld_slug_title_strips_numeric_prefix():
    url = "https://makerworld.com.cn/zh/models/658549-bi-ji-ben-dian-nao-zhi-jia-laptop-stand?from=search"

    assert clean_makerworld_slug_title(url) == "bi ji ben dian nao zhi jia laptop stand"


def test_is_exact_makerworld_slug_title_only_matches_raw_slug_fallback():
    url = "https://makerworld.com.cn/zh/models/658549-bi-ji-ben-dian-nao-zhi-jia-laptop-stand?from=search"

    assert is_exact_makerworld_slug_title("bi ji ben dian nao zhi jia laptop stand", url) is True
    assert is_exact_makerworld_slug_title("笔记本电脑支架 Laptop Stand", url) is False
