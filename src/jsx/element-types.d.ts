declare namespace JSX {
  interface TgHtmlAnchorElement {
    href: string | URL;
  }
  interface TgHtmlBlockquoteElement {
    expandable?: boolean;
  }
  interface TgHtmlBoldElement {}
  interface TgHtmlCodeElement {
    class?: `language-${string}`;
  }
  interface TgHtmlEmojiElement {
    "emoji-id": string;
  }
  interface TgHtmlItalicElement {}
  interface TgHtmlPreElement {}
  interface TgHtmlSpanElement {
    class?: "tg-spoiler";
  }
  interface TgHtmlSpoilerElement {}
  interface TgHtmlStrikethroughElement {}
  interface TgHtmlUnderlineElement {}
}
