import axios from "axios";
import useSWR from "swr";

const getName = (path: string) => {
  return axios.get<{ name: any }>(path);
};

export const Home: React.FC = () => {
  const { data, error, isValidating } = useSWR("/api/user", getName);
  console.log(data?.data);
  if (error) return <div>failed to load</div>;
  if (isValidating) return <div>loading...</div>;
  return <div>hello {data?.data.name}!</div>;
};
