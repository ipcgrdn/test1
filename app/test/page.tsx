import { Room } from "../Room"; 
import { Comments } from "./comments";

export default function Page() {
  return (
    <div className="w-full h-full p-8 bg-cyan-200 overflow-scroll">
      <Room>
        <Comments />
      </Room>
    </div>
  );
}