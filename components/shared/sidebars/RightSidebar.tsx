import React from "react";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "@/components/shared/RenderTag";

const RightSidebar = () => {
  const questions = [
    {
      _id: "1",
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      _id: "2",
      title:
        "What are the advantages of using a Bayesian approach to statistics?",
    },
    {
      _id: "3",
      title: "How can I get a list of all the unique words in a text file?",
    },
    { _id: "4", title: "How do I get the current time in Python?" },
    {
      _id: "5",
      title: "What is the difference between 'git pull' and 'git fetch'?",
    },
  ];

  const tags = [
    { _id: "1", title: "Javascript", frequency: 20152 },
    { _id: "2", title: "Python", frequency: 152 },
    { _id: "3", title: "React", frequency: 201 },
    { _id: "4", title: "Next.js", frequency: 15 },
    { _id: "5", title: "Node.js", frequency: 201 },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px]">
      <div className="flex flex-col">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.slice(0, 5).map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.slice(0, 5).map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.title}
              totalQuestions={tag.frequency}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
