import { getEvents } from "@/utils/get-response";

const Home = async () => {
  const events = await getEvents();
  return <div>Home</div>;
};

export default Home;
