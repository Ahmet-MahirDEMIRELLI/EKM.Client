export class Exam {
    constructor(
      public id: number,
      public examName: string,
      public turkishQuestionCount: number,
      public mathQuestionCount: number,
      public scienceQuestionCount: number,
      public historyQuestionCount: number,
      public religionQuestionCount: number,
      public foreignLanguageQuestionCount: number,
      public active: boolean
    ) {}
}