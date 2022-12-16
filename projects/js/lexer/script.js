import Lexer from "./lexer.js";

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea[name=source]");
  textarea.addEventListener("input", (e) => {
    refreshOutput(e.target.value);
  });

  refreshOutput(textarea.value);
});

function refreshOutput(html) {
  const output = document.querySelector("pp-output");

  output.innerText = "";
  output.appendChild(prettyParse(html));
}

//---------------------------------------------------------------------

function prettyParse(html) {
  const lexer = new Lexer(html);

  function parseComment() {
    const commentText = lexer.readUntil((lexer) => lexer.match("-->"));
    lexer.consumeMatch("-->");
    return document.createComment(commentText);
  }

  function parseElement() {
    const tagName = lexer.readIdentifier();
    const element = document.createElement(tagName);
    console.log(lexer.readUntil((lexer) => lexer.match(/\/?>/)));

    if (lexer.consumeMatch(">")) {
      element.appendChild(parseContent());

      lexer.consumeMatch("</");
      lexer.readUntil((lexer) => lexer.consumeMatch(">"));
    } else {
      lexer.consumeMatch("/>");
    }

    return element;
  }

  function parseContent() {
    let text = "";
    const fragment = document.createDocumentFragment();

    function streamText() {
      if (text.length) {
        fragment.appendChild(document.createTextNode(text));
        text = "";
      }
    }

    while (!lexer.eof && !lexer.match("</")) {
      if (lexer.consumeMatch("<!--")) {
        streamText();
        fragment.appendChild(parseComment());
      } else if (lexer.consumeMatch("<")) {
        streamText();
        fragment.appendChild(parseElement());
      } else {
        text += lexer.read();
      }
    }

    streamText();

    return fragment;
  }

  return parseContent();
}
