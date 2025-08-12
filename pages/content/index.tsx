import AskQuestion from "@/components/AskQuestion/AskQuestion";
import Template from "@/components/Template/Template";
import React, { useEffect, useState } from "react";
import { getAllQuestions } from "../api/fetch";
import axios from "axios";
import { Question } from "@/types/question";
import QuestionWrapper from "@/components/QuestionWrapper/QuestionWrapper";
import { Answer } from "@/types/answer";

const ContentPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const fetchQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data.questions);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const addNewQuestion = (newQuestion: Question) => {
    setQuestions((prev) => [newQuestion, ...prev]);
  };

  const handleDelete = (deletedId: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== deletedId));
  };

  return (
    <Template>
      <AskQuestion onQuestionAdded={addNewQuestion} />
      <QuestionWrapper
        questions={questions}
        onDelete={handleDelete}
        answers={answers}
      />
    </Template>
  );
};

export default ContentPage;
