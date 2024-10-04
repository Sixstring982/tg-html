import { describe, expect, it } from "vitest";
import * as tgHtml from './index';

function AnchorTest(): JSX.Element {
  return (
    <a href="http://example.com">example!</a>
  );
}

function BoldTest(): JSX.Element {
  return (
    <b>Bold!</b>
  );
}

function ItalicTest(): JSX.Element {
  return (
    <i>Italic!</i>
  );
}

function BoldItalicTest(): JSX.Element {
  return (
    <i><BoldTest /></i>
  );
}

function FragmentTest(): JSX.Element {
  return (
    <>
      <BoldTest />
      <ItalicTest />
    </>
  );
}

function TwoLinesTest(): JSX.Element {
  return (
    <>
      <BoldTest />\n
      <ItalicTest />
    </>
  );
}

function ApiExampleTest(): JSX.Element {
  return (
    <>
      <b>bold</b>, <strong>bold</strong>\n
      <i>italic</i>, <em>italic</em>\n
      <u>underline</u>, <ins>underline</ins>\n
      <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>\n
      <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>\n
      <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>\n
      <a href="http://www.example.com/">inline URL</a>\n
      <a href="tg://user?id=123456789">inline mention of a user</a>\n
      <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>\n
      <code>inline fixed-width code</code>\n
      <pre>pre-formatted fixed-width code block</pre>\n
      <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>\n
      <blockquote>Block quotation started\nBlock quotation continued\nThe last line of the block quotation</blockquote>\n
      <blockquote expandable>Expandable block quotation started\nExpandable block quotation continued\nExpandable block quotation continued\nHidden by default part of the block quotation started\nExpandable block quotation continued\nThe last line of the block quotation</blockquote>
    </>
  );
}

describe("tg-html", () => {
  it("Renders a basic element with intrinsic attributes", () => {
    const actual = BoldTest();

    expect(actual).toEqual('<b>Bold!</b>');
  });
  it("Renders a basic compound element", () => {
    const actual = BoldItalicTest();

    expect(actual).toEqual('<i><b>Bold!</b></i>');
  });
  it("Renders a fragment", () => {
    const actual = FragmentTest();

    expect(actual).toEqual('<b>Bold!</b><i>Italic!</i>');
  });
  it("Preserves newlines", () => {
    const actual = TwoLinesTest();

    expect(actual).toEqual('<b>Bold!</b>\\n<i>Italic!</i>');
  });
  it("Renders an anchor tag", () => {
    const actual = AnchorTest();

    expect(actual).toEqual('<a href="http://example.com">example!</a>');
  });
  it('Renders the example from the Telegram Bot API docs', () => {
    const actual = ApiExampleTest();

    expect(actual).toEqual([
      '<b>bold</b>, <strong>bold</strong>',
      '<i>italic</i>, <em>italic</em>',
      '<u>underline</u>, <ins>underline</ins>',
      '<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>',
      '<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>',
      '<b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>',
      '<a href="http://www.example.com/">inline URL</a>',
      '<a href="tg://user?id=123456789">inline mention of a user</a>',
      '<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>',
      '<code>inline fixed-width code</code>',
      '<pre>pre-formatted fixed-width code block</pre>',
      '<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>',
      '<blockquote>Block quotation started\\nBlock quotation continued\\nThe last line of the block quotation</blockquote>',
      '<blockquote expandable>Expandable block quotation started\\nExpandable block quotation continued\\nExpandable block quotation continued\\nHidden by default part of the block quotation started\\nExpandable block quotation continued\\nThe last line of the block quotation</blockquote>'
    ].join('\\n'));
  });
});
