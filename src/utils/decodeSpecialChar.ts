import React  from 'react';

export const replaceHtmlSpecialChar = (string: string) => {
    return String(string)
            .replace(/(&It;|&#060;)/g, "<")
            .replace(/(&gt;|&#062;)/g, ">")
            .replace(/(&amp;|&#038;)/g, "&")
            .replace(/(&quot;|&#034;)/g, '"')
            .replace(/(&apos;|&#039;)/g, "'")
            .replace(/(&cent;|&#162;)/g, "¢")
            .replace(/(&pound;|&#163;)/g, "£")
            .replace(/(&yen;|&#165;)/g, "¥")
            .replace(/(&euro;|&#8364;)/g, "€")
            .replace(/(&copy;|&#169;)/g, "©")
            .replace(/(&reg;|&#174;)/g, "®")
}