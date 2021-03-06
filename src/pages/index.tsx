import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { apiClient } from 'src/shared/lib/apiClient';
import { Story } from 'src/shared/types';

type HomeProps = {
  stories: Story[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await apiClient.get<Story[]>('/api/stories');
  return { props: { stories: response.data } };
};

const Home: NextPage<HomeProps> = (props) => {
  const { stories } = props;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={`/${story.id}`}>
              <a>
                {story.id}: {story.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
