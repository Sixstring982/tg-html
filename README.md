# tg-html

JSX bindings, for use with Telegram bots.

See the
[Telegram Bot API documentation](https://core.telegram.org/bots/api#html-style) 
for the HTML formatting spec.

## Setup

Configure your `.tsconfig.json` with the following properties:

```json
{
    "compilerOptions": [
        "jsx": "react",
        "jsxFactory": "tgHtml.createElement",
        "jsxFragmentFactory": "tgHtml.createFragment"
    ]
}
```

Then, write JSX components like this:

```typescript
import * as tgHtml from 'tg-html';

export function Greeting({
    username,
}: Readonly<{
    username: string;
}>): JSX.Element {
    return (
        <>
            <b><i>My Telegram Bot</i></b>\n
            \n
            Welcome, {username}!
        </>
    );
}
```

## Thanks

* [@nicojs](https://github.com/nicojs), for inspiration! https://github.com/nicojs/typed-html
