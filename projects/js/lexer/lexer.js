export default class Lexer {
  constructor(source) {
    this.source = source;
    this.file_pointer = 0;
  }

  read() {
    if (this.file_pointer < 0 || this.file_pointer >= this.source.length) {
      return undefined;
    }

    return this.source[this.file_pointer++];
  }

  rewind() {
    this.file_pointer = 0;
  }

  match(token) {
    return this.remainder.search(token) === 0;
  }

  consumeMatch(token) {
    const match = this.remainder.match(token);

    if (match && match.length && match.index == 0) {
      this.file_pointer += match[0].length;

      return true;
    }

    return false;
  }

  readUntil(condition) {
    const start_pointer = this.file_pointer;

    while (!this.eof && !condition(this)) {
      this.file_pointer++;
    }

    return this.source.substring(start_pointer, this.file_pointer);
  }

  readIdentifier() {
    return this.readUntil((lexer) => !lexer.match(/\w/));
  }

  skipWhitespace() {
    return this.readUntil((lexer) => !lexer.match(/\s/));
  }

  get eof() {
    return this.file_pointer >= this.source.length;
  }

  get remainder() {
    return this.source.substring(this.file_pointer);
  }
}

/**
 *
 * read(): pointer++
 * rewind(): pointer[0]
 * match(token): boolean
 * consumeMatch(token): boolean
 * readUntil(condition): substring
 * readIdentifier(): readUntil(condition)
 * skipWhiteSpace(): readUntil(condition)
 * get eof() :boolean
 * get remainder(): substring
 *
 *
 */
