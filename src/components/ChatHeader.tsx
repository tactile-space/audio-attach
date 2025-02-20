
import { User } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="flex items-center gap-3 border-b bg-background/80 p-4 backdrop-blur-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
        <User className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold">John Doe</h2>
        <span className="text-xs text-muted-foreground">Online</span>
      </div>
    </div>
  );
};
