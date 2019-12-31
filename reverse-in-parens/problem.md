# Reverse Inside Parentheses (Inside Parentheses)

### [Problem created by me for CodeWars](https://www.codewars.com/kata/reverse-inside-parentheses-inside-parentheses/)
___

In this kata, you will be given a string of text and valid parentheses, such as `"h(el)lo"`. You must return the string, with only the text inside parentheses reversed, so `"h(el)lo"` becomes `"h(le)lo"`. However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction (parentheses included). so text like `"h((el))l)o"` becomes `"'h(l(el))o'"`. This pattern should repeat for however many layers of parentheses.

For example:
```
reverseInParens("h(el)lo") == "h(le)lo");
reverseInParens("a ((d e) c b)") == "a (b c (d e))");
reverseInParens("one (two (three) four)") == "one (ruof (three) owt)");
reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)");
```

Input parentheses will always be valid (i.e. you will never get "(()").