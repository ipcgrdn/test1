import Image from "next/image";

export function Loading() {
    return (
      <div className="h-full w-full">
        <Image src="https://liveblocks.io/loading.svg" alt="Loading" />
      </div>
    );
  }