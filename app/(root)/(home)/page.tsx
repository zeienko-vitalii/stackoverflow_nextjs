import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "0",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "0", name: "python" },
      { _id: "1", name: "sqlalchemy" },
      { _id: "2", name: "flask" },
    ],
    author: {
      _id: "0",
      name: "John Doe",
      picture:
        "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1920_FMwebp_.jpg",
    },
    upvotes: 121235,
    answers: [],
    views: 1200000,
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "1",
    title: "How to use React Router in Next.js?",
    tags: [
      { _id: "0", name: "react" },
      { _id: "1", name: "next.js" },
      { _id: "2", name: "react-router" },
    ],
    author: {
      _id: "1",
      name: "Jane Doe",
      picture:
        "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1920_FMwebp_.jpg",
    },
    upvotes: 12,
    answers: [],
    views: 12,
    createdAt: new Date("2024-04-01T00:00:00.000Z"),
  },
];
const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length <= 0 ? (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        ) : (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
