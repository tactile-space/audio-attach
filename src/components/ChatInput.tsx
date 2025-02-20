
import { useState, useRef } from "react";
import { Mic, Paperclip, Send } from "lucide-react";

export const ChatInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex w-full items-end gap-2 border-t bg-background/80 p-4 backdrop-blur-sm">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
      >
        <Paperclip className="h-5 w-5" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => console.log("File selected:", e.target.files?.[0])}
      />
      <div className="relative flex-1">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="max-h-32 w-full resize-none rounded-xl border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          rows={1}
        />
      </div>
      {message.trim() ? (
        <button
          onClick={handleSendMessage}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
        >
          <Send className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
            isRecording
              ? "bg-destructive text-destructive-foreground"
              : "bg-primary text-primary-foreground hover:scale-105"
          }`}
        >
          <Mic className={`h-5 w-5 ${isRecording ? "animate-pulse" : ""}`} />
        </button>
      )}
    </div>
  );
};
