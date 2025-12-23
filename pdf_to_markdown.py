#!/usr/bin/env python3
"""
PDF to Markdown converter using Docling.

Usage:
    python pdf_to_markdown.py
"""

from pathlib import Path
from docling.document_converter import DocumentConverter


def convert_pdf_to_markdown(pdf_path: str, output_path: str | None = None) -> str:
    """
    Convert a PDF file to Markdown using Docling.

    Args:
        pdf_path: Path to the PDF file
        output_path: Optional path to save the markdown file

    Returns:
        The markdown content as a string
    """
    pdf_file = Path(pdf_path)

    if not pdf_file.exists():
        raise FileNotFoundError(f"PDF file not found: {pdf_path}")

    print(f"Converting: {pdf_file.name}")

    # Initialize the converter
    converter = DocumentConverter()

    # Convert the PDF
    result = converter.convert(pdf_path)

    # Export to markdown
    markdown_content = result.document.export_to_markdown()

    # Save to file if output path provided
    if output_path:
        output_file = Path(output_path)
        output_file.write_text(markdown_content, encoding="utf-8")
        print(f"Saved to: {output_file}")

    return markdown_content


def main():
    pdf_path = "/Users/pauloesb/Documents/VH_Curriculum_Vitae_EN_V6.pdf"
    output_path = "/Users/pauloesb/Projects/Personal/pauloesb/VH_Curriculum_Vitae_EN_V6.md"

    try:
        markdown = convert_pdf_to_markdown(pdf_path, output_path)
        print("\n" + "=" * 50)
        print("Conversion complete!")
        print("=" * 50)
        print("\nMarkdown Preview (first 2000 chars):\n")
        print(markdown[:2000] if len(markdown) > 2000 else markdown)
    except FileNotFoundError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Conversion failed: {e}")
        raise


if __name__ == "__main__":
    main()
