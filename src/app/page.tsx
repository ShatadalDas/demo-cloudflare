import Dummy from "./components/Dummy";

export const runtime = "edge";

async function Home() {

  if (process.env.BASE_URL === undefined) {
    throw new Error("Missing BASE_URL environment variable");
  }

  const res = await fetch(`${process.env.BASE_URL}/api`);
  const data = await res.json();

  return (
    <>
      <h1>Hello World</h1>
      <Dummy data={data} />
    </>
  );
}
export default Home;
