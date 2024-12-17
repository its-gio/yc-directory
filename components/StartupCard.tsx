import React from "react";

type StartCardType = {
  _id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  _createdAt: string;
  views: number;
  author: {
    _id: number;
  };
};

const StartupCard = ({ post }: { post: StartCardType }) => {
  return <div>StartupCard</div>;
};

export default StartupCard;
