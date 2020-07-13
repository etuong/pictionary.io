class ROUND {
  constructor(word) {
    this.word = word;
    this.simplified = this.splitWord(this.simplifyWord(word))
    this.lineHistory = [];
  }

  check(guessedWord) {
    let prompted = this.splitWord(this.simplifyWord(guessedWord));
    if (this.simplified.length != prompted.length) return false;

    let flag = true;

    for (let p of prompted) {
      if (!this.simplified.includes(p)) {
        flag = false;
      }
    }

    return flag;
  }

  isClose(guessedWord) {
    if (guessedWord.length < 3 || guessedWord.length !== this.word.length) {
      return false;
    }
    guessedWord = this.simplifyWord(guessedWord);
    const word = this.simplifyWord(this.word);
    let counter = 0;
    for (let i = 0; i < guessedWord.length; i++) {
      const a = guessedWord[i];
      const b = word[i];
      if (a !== b) {
        counter++;
      }
      if (counter > 1) {
        return false;
      }
    }

    return true;
  }

  simplifyWord(word) {
    return word
        .toLowerCase()
        .replace(/\s{2,}/g, " ")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
  }

  splitWord(word) {
    return word.split(" ").filter((el) => el.length);
  }

  addLine(line) {
    this.lineHistory.push(line);
  }
}

module.exports = ROUND;