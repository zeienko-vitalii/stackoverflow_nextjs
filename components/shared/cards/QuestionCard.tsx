import React from "react";
import RenderTag from "../RenderTag";
import Metric from "./Metric";
import Link from "next/link";
import { getTimestamp, formatNumber } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  createdAt,
  title,
  tags,
  author,
  upvotes,
  answers,
  views,
}: QuestionProps) => {
  return (
    <div className="card-wrapper w-full rounded-xl p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>

        {/* TODO: if signed in add edit delete actions for authors */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        <div className="flex gap-5">
          {tags.map((tag) => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          ))}
        </div>
      </div>

      <div className="flex-between mt-5 flex-wrap gap-3 max-sm:flex-col max-sm:items-start">
        <Metric
          imgUrl={author.picture}
          alt="user"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />{" "}
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatNumber(upvotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="messages"
          value={formatNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
