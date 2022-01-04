/*
Language: ByteSkript
Author: ByteSkript org (Moderocky)
Description: ByteSkript language support
Category: scripting
Website: https://docs.byteskript.org
*/

module.exports = function(hljs) {
  const KEYWORDS = [
    "function",
    "on",
    "type",
    "template",
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
    "new"
  ];

  const ENTRIES = {
    className: 'built_in',
    relevance: 2,
    begin: '\\b(verify|trigger|syntax)(?=:)'
  };

  const EVENTS = {
    className: 'built_in',
    relevance: 2,
    begin: '(?<=on ).+(?=:)'
  };

  const FUNCTIONS = {
    className: 'built_in',
    relevance: 1,
    begin: '(?<=function )[\\w_]+ ?(?=[\\(:])'
  };

  const FUNCTION_USE = {
    className: 'built_in',
    relevance: 1,
    begin: '(?<!function )[\\w_]+\\(',
    end: '\\)'
  };

  const LITERALS = {
    className: 'literal',
    relevance: 1,
    begin: '\\b(null|none|false|true)\\b'
  };

  const NUMBERS = {
    className: 'number',
    relevance: 0,
    begin: '\\b-?[0-9]+(\\.[0-9]+)?[dDlLfF]?\\b'
  };

  const VARIABLES = {
    className: 'variable',
    relevance: 2,
    begin: '\\{[@_!\\$]?\\w[\\w_]*\\}'
  };

  const REGEX = {
    className: 'literal',
    relevance: 0,
    begin: '/[^*].*/'
  };

  return {
    aliases: ["byteskript", "bsk"],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      FUNCTIONS,
      EVENTS,
      ENTRIES,
      VARIABLES,
      NUMBERS,
      LITERALS,
      REGEX,
      FUNCTION_USE
    ]
  };
};
