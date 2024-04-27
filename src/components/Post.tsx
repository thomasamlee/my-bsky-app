import { AppBskyFeedDefs } from "@atproto/api";

interface Props {
  post: AppBskyFeedDefs.PostView;
}

export const Post = ({ post }: Props) => {
  return (
    <div className="w-full max-w-sm bg-blue-400">
      <div className="flex flex-row items-center">
        <img
          src={post.author.avatar}
          alt={post.author.handle}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <p className="text-lg font-medium">{post.author.displayName}</p>
          <p>@{post.author.handle}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>{post.record.text}</p>
      </div>
    </div>
  );
};
