import Dummy from "./components/Dummy";

export const runtime = "edge";

async function Home() {

  const res = await fetch("https://demo-cloudflare-4gi.pages.dev/api");
  const data = await res.json();

  return (
    <>
      <h1>Hello World</h1>
      <Dummy data={data} />
    </>
  );
}
export default Home;
