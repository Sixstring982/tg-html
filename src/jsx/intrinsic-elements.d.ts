declare namespace JSX {
  type Element = string;
  interface IntrinsicElements {
    a: TgHtmlAnchorElement;
    b: TgHtmlBoldElement;
    blockquote: TgHtmlBlockquoteElement;
    code: TgHtmlCodeElement;
    del: TgHtmlStrikethroughElement;
    em: TgHtmlItalicElement;
    i: TgHtmlItalicElement;
    ins: TgHtmlUnderlineElement;
    pre: TgHtmlPreElement;
    s: TgHtmlStrikethroughElement;
    span: TgHtmlSpanElement;
    strike: TgHtmlStrikethroughElement;
    strong: TgHtmlBoldElement;
    "tg-emoji": TgHtmlEmojiElement;
    "tg-spoiler": TgHtmlSpoilerElement;
    u: TgHtmlUnderlineElement;
  }
}
