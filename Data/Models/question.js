class Question {
    constructor(id, text, options, categoryId, correctAnswerIndex) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.categoryId = categoryId;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

export { Question, questions };
