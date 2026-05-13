import Videos from "../components/Videos";
import Shorts from "../components/Shorts";
function Home(){
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">
         Home Page
      </h1>
    <Videos/>
    <Shorts/>
  </div>
  );
}
export default Home;