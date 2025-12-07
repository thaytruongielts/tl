import { ExamData } from './types';

export const examData: ExamData = {
  sections: [
    {
      id: 'phonetics',
      title: 'I. Ngữ Âm',
      desc: 'Chọn từ có phần gạch chân phát âm khác hoặc trọng âm khác.',
      questions: [
        { id: 1, text: "Chọn từ có phần gạch chân phát âm khác:", options: { A: "washed", B: "looked", C: "stopped", D: "played" }, answer: "D", type: "mcq", highlight: "ed" },
        { id: 2, text: "Chọn từ có phần gạch chân phát âm khác:", options: { A: "chemistry", B: "children", C: "church", D: "chicken" }, answer: "A", type: "mcq", highlight: "ch" },
        { id: 3, text: "Chọn từ có phần gạch chân phát âm khác:", options: { A: "mind", B: "find", C: "window", D: "tidy" }, answer: "C", type: "mcq", highlight: "i" },
        { id: 4, text: "Chọn từ có trọng âm chính khác:", options: { A: "depend", B: "agree", C: "suggest", D: "open" }, answer: "D", type: "mcq" },
        { id: 5, text: "Chọn từ có trọng âm chính khác:", options: { A: "beautiful", B: "difficult", C: "expensive", D: "interesting" }, answer: "C", type: "mcq" }
      ]
    },
    {
      id: 'grammar',
      title: 'II. Ngữ Pháp & Từ Vựng',
      desc: 'Chọn đáp án đúng nhất để hoàn thành câu.',
      questions: [
        { id: 6, text: "She usually goes to school ______ bus.", options: { A: "in", B: "at", C: "on", D: "by" }, answer: "D", type: "mcq" },
        { id: 7, text: "If I ______ you, I would take a break and rest.", options: { A: "am", B: "were", C: "been", D: "be" }, answer: "B", type: "mcq" },
        { id: 8, text: "He asked me where I ______ the previous day.", options: { A: "go", B: "went", C: "will go", D: "had gone" }, answer: "D", type: "mcq" },
        { id: 9, text: "This is the best movie ______ I have ever seen.", options: { A: "who", B: "whom", C: "which", D: "whose" }, answer: "C", type: "mcq" },
        { id: 10, text: "My father suggests ______ showers to save water.", options: { A: "take", B: "taking", C: "to take", D: "took" }, answer: "B", type: "mcq" },
        { id: 11, text: "She hasn't finished the report yet, ______?", options: { A: "has she", B: "hasn't she", C: "did she", D: "didn't she" }, answer: "A", type: "mcq" },
        { id: 12, text: "I wish I ______ enough money to buy a new laptop now.", options: { A: "have", B: "had", C: "will have", D: "have had" }, answer: "B", type: "mcq" },
        { id: 13, text: "The man ______ is standing over there is my teacher.", options: { A: "who", B: "which", C: "whom", D: "whose" }, answer: "A", type: "mcq" },
        { id: 14, text: "Use an umbrella. It ______ heavily outside.", options: { A: "rains", B: "rained", C: "is raining", D: "will rain" }, answer: "C", type: "mcq" },
        { id: 15, text: "Getting enough sleep is very important ______ students.", options: { A: "of", B: "to", C: "with", D: "for" }, answer: "D", type: "mcq" },
        { id: 16, text: "Jeans ______ all over the world.", options: { A: "sell", B: "sold", C: "are sold", D: "are selling" }, answer: "C", type: "mcq" },
        { id: 17, text: "He passed the exam ______ he studied very hard.", options: { A: "although", B: "because", C: "but", D: "so" }, answer: "B", type: "mcq" },
        { id: 18, text: "You should turn ______ the lights before leaving the room.", options: { A: "on", B: "off", C: "up", D: "in" }, answer: "B", type: "mcq" },
        { id: 19, text: "<b>Lan:</b> \"Why don't we go to the park this weekend?\" - <b>Nam:</b> \"______.\"", options: { A: "You're welcome.", B: "That's a good idea.", C: "Not at all.", D: "Thank you very much." }, answer: "B", type: "mcq" },
        { id: 20, text: "<b>Peter:</b> \"Congratulations on your exam results!\" - <b>Mary:</b> \"______.\"", options: { A: "It's nice of you to say so.", B: "You're welcome.", C: "I'm sorry to hear that.", D: "Good luck!" }, answer: "A", type: "mcq" }
      ]
    },
    {
      id: 'error',
      title: 'III. Tìm Lỗi Sai',
      desc: 'Xác định phần gạch chân chứa lỗi sai trong câu.',
      questions: [
        { id: 21, text: "(A) <u>Although</u> he (B) <u>is</u> tired, (C) <u>but</u> he still goes to work (D) <u>on</u> time.", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "C", type: "mcq" },
        { id: 22, text: "I (A) <u>used to</u> (B) <u>going to</u> school (C) <u>on</u> foot when I (D) <u>was</u> a primary student.", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "B", type: "mcq" },
        { id: 23, text: "The book (A) <u>who</u> (B) <u>I bought</u> (C) <u>yesterday</u> is (D) <u>very interesting</u>.", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "A", type: "mcq" },
        { id: 24, text: "(A) <u>Do you mind</u> (B) <u>if I</u> (C) <u>turn on</u> (D) <u>the TV</u>?", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "A", type: "mcq", explanation: "Correct grammar: Do you mind if I turn on / Would you mind if I turned on." },
        { id: 25, text: "My mother (A) <u>enjoys</u> (B) <u>to cook</u> (C) <u>traditional food</u> (D) <u>for our family</u>.", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "B", type: "mcq" }
      ]
    },
    {
      id: 'wordform',
      title: 'IV. Cấu Tạo Từ',
      desc: 'Viết dạng đúng của từ trong ngoặc.',
      questions: [
        { id: 26, text: "Her ______ needs to be improved. (perform)", answer: "performance", type: "input" },
        { id: 27, text: "Using electricity to catch fish is ______ prohibited. (strict)", answer: "strictly", type: "input" },
        { id: 28, text: "He is a famous ______ in this country. (music)", answer: "musician", type: "input" },
        { id: 29, text: "Solar energy is ______, plentiful, and clean. (renew)", answer: "renewable", type: "input" },
        { id: 30, text: "The internet has ______ developed in Vietnam. (increase)", answer: "increasingly", type: "input" }
      ]
    },
    {
      id: 'reading',
      title: 'V. Đọc Hiểu',
      desc: 'Đọc đoạn văn và hoàn thành bài tập.',
      contentA: {
        text: `English is a very useful language. If we know English, we can go to any countries we like. We will not find it hard to make people understand (31)______ we want to say. English also helps us to learn all kinds of (32)______ and hundreds of books are written in English every day in (33)______ countries. English has also helped to spread ideas and knowledge to all corners of the world. Therefore, the English language has helped to bring people closer to (34)______. In Vietnam, more and more people are studying English and they consider it a (35)______ key to open the door of the world.`,
        questions: [
          { id: 31, text: "Question 31", options: { A: "where", B: "what", C: "which", D: "when" }, answer: "B", type: "mcq" },
          { id: 32, text: "Question 32", options: { A: "subjects", B: "things", C: "ideas", D: "plans" }, answer: "A", type: "mcq" },
          { id: 33, text: "Question 33", options: { A: "much", B: "lot", C: "many", D: "a" }, answer: "C", type: "mcq" },
          { id: 34, text: "Question 34", options: { A: "together", B: "one another", C: "others", D: "themselves" }, answer: "B", type: "mcq" },
          { id: 35, text: "Question 35", options: { A: "gold", B: "golden", C: "silver", D: "key" }, answer: "B", type: "mcq" }
        ]
      },
      contentB: {
        text: `Environmental pollution is one of the most serious problems facing mankind today. Air, water, and soil are necessary to the survival of all living things. Badly polluted air can cause illness, and even death. Polluted water kills fish and other marine life. Pollution of soil reduces the amount of land that is available for growing food. The pollution problem is very complicated and hard to solve. It needs the cooperation of every individual and every nation.`,
        questions: [
          { id: 36, text: "What is the passage mainly about?", options: { A: "Air pollution", B: "Water pollution", C: "Environmental pollution", D: "Soil pollution" }, answer: "C", type: "mcq" },
          { id: 37, text: "According to the text, what can badly polluted air cause?", options: { A: "Clean water", B: "Illness and death", C: "More food", D: "Healthy life" }, answer: "B", type: "mcq" },
          { id: 38, text: "What happens when water is polluted?", options: { A: "Fish and marine life die.", B: "People get more water.", C: "Trees grow better.", D: "It becomes cleaner." }, answer: "A", type: "mcq" },
          { id: 39, text: "Does soil pollution affect food production?", options: { A: "Yes, it increases the land.", B: "No, it doesn't.", C: "Yes, it reduces land for growing food.", D: "The text doesn't say." }, answer: "C", type: "mcq" },
          { id: 40, text: "How can we solve the pollution problem?", options: { A: "By ignoring it.", B: "By the government only.", C: "It is impossible to solve.", D: "By the cooperation of every individual and nation." }, answer: "D", type: "mcq" }
        ]
      }
    },
    {
      id: 'writing',
      title: 'VI. Viết Lại Câu',
      desc: 'Viết lại các câu sau sao cho nghĩa không đổi.',
      questions: [
        { id: 41, text: "I started learning English 5 years ago.", answer: "learned English for 5 years", answerAlt: "learnt English for 5 years", type: "input-sentence", prefix: "I have" },
        { id: 42, text: "\"I am going to visit my grandmother tomorrow,\" said Lan.", answer: "she was going to visit her grandmother the next day", answerAlt: "she was going to visit her grandmother the following day", type: "input-sentence", prefix: "Lan said that" },
        { id: 43, text: "They built this bridge in 2010.", answer: "was built in 2010", type: "input-sentence", prefix: "This bridge" },
        { id: 44, text: "I don't have a car, so I can't drive you home.", answer: "had a car, I could drive you home", type: "input-sentence", prefix: "If I" },
        { id: 45, text: "She is too young to drive a car.", answer: "old enough to drive a car", type: "input-sentence", prefix: "She is not" },
        { id: 46, text: "Although the weather was bad, we went for a picnic.", answer: "the bad weather, we went for a picnic", type: "input-sentence", prefix: "In spite of" },
        { id: 47, text: "It takes him 30 minutes to go to school every day.", answer: "30 minutes going to school every day", type: "input-sentence", prefix: "He spends" },
        { id: 48, text: "Study hard or you will fail the exam.", answer: "you study hard, you will fail the exam", type: "input-sentence", prefix: "Unless" },
        { id: 49, text: "Why don't we go to the cinema tonight?", answer: "going to the cinema tonight", answerAlt: "that we should go to the cinema tonight", type: "input-sentence", prefix: "I suggest" },
        { id: 50, text: "This is the first time I have eaten this kind of food.", answer: "eaten this kind of food before", type: "input-sentence", prefix: "I have never" }
      ]
    }
  ]
};