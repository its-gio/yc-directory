import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { StartUpCardType } from "@/app/(root)/page";

const StartupCard = ({
  post: { _createdAt, views, author, title, category, description, image, _id },
}: {
  post: StartUpCardType;
}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="start_up_card">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-meduim line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://placeholder.co/48x48"
            crossOrigin="anonymous"
            alt="Puppy place holder!"
            className="rounded-full"
            width={48}
            height={48}
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc ">{description}</p>

        <Image
          src={image || "https://placeholder.co/400x400"}
          className="startup-card_image"
          alt="placeholder"
          crossOrigin="anonymous"
          width={"400"}
          height={"400"}
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-mediumn">{category}</p>
        </Link>

        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
