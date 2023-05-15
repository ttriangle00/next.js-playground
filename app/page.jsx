import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"></br>
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
        </h1>

        <p className="desc text-center">Promptopia is an open-source AI prompting tool for the modern world.</p>

        <Feed />
    </section>
  )
}

export default Home