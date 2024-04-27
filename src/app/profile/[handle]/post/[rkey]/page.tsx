// src/app/page.tsx
import { AppBskyFeedDefs, AppBskyFeedPost } from "@atproto/api";
import { Post } from "~/components/Post";
import { agent } from "~/lib/api";

interface Props {
  params: {
    handle: string;
    rkey: string;
  };
}

export default async function PostView({ params }: Props) {
  const uri = `at://${decodeURIComponent(params.handle)}/app.bsky.feed.post/${
    params.rkey
  }`;

  const thread = await agent.app.bsky.feed.getPostThread({
    uri,
  });

  if (!AppBskyFeedDefs.isThreadViewPost(thread.data.thread))
    throw new Error("Expected a thread view post");

  const post = thread.data.thread.post;

  if (!AppBskyFeedPost.isRecord(post.record))
    throw new Error("Expected a post with a record");

  return (
    <div className="grid min-h-screen place-items-center">
      <Post post={post} />
    </div>
  );
}
