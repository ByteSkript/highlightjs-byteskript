/*
Language: ByteSkript
Author: ByteSkript org (Moderocky)
Description: ByteSkript language support
Category: scripting
Website: https://docs.byteskript.org
*/

module.exports = function (hljs) {
    const KEYWORDS = [
        "function",
        "type",
        "template",
        "on",
        "final",
        "local",
        "set",
        "add",
        "delete",
        "remove",
        "run",
        "if",
        "else",
        "try",
        "catch",
        "while",
        "loop",
        "throw",
        "return",
        "break",
        "continue",
        "stop",
        "exit",
        "assert",
        "null",
        "none",
        "true",
        "false",
        "new",
    ]

    return {
        aliases: ["byteskript", "bsk"],
        keywords: KEYWORDS,
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
        ],
    };
};
