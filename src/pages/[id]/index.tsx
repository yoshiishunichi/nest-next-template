import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { apiClient } from 'src/shared/lib/apiClient';
import { Story } from 'src/shared/types';

type StoryPageProps = {
  story: Story;
};

export const getServerSideProps: GetServerSideProps<StoryPageProps> = async (
  ctx: GetServerSidePropsContext,
) => {
  const id = ctx.query.id;
  if (id) {
    const response = await apiClient.get<Story | null>(`/api/story/${id}`);
    return response.data
      ? {
          props: { story: response.data },
        }
      : { notFound: true };
  } else {
    return {
      notFound: true,
    };
  }
};

const StoryPage: NextPage<StoryPageProps> = (props) => {
  const { story } = props;

  return (
    <div>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <h1>story: {story.title}</h1>
      <p>あらすじ: {story.description}</p>
    </div>
  );
};

export default StoryPage;
