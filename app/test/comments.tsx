"use client";

import { useThreads } from "@/liveblocks.config"; 
import { Composer, Thread } from "@liveblocks/react-comments";
import "@liveblocks/react-comments/styles.css";
import { Button } from "@/components/ui/button"; 
import { useState } from "react";

export function Comments() {
  const [open, setOpen] = useState(false);
  const { threads } = useThreads();

  return (
    <div>
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} showComposer={open} className="mt-2"/>
      ))}
      
      <div className="mt-4 shadow-lg">
      <Composer />
      </div>

      <Button className="w-16"
      onClick={() => setOpen(!open)}>
        Show
      </Button>
    </div>
  );
}