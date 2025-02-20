
import { ChatHeader } from "@/components/ChatHeader";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";

const Index = () => {
  // Example messages
  const messages = [
    {
      content: "Hey! How are you?",
      timestamp: "09:41",
      isOwn: false,
    },
    {
      content: "I'm good, thanks! Check out this photo",
      timestamp: "09:42",
      isOwn: true,
      hasAttachment: true,
      attachmentType: "image" as const,
      attachmentUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      content: "That looks amazing!",
      timestamp: "09:43",
      isOwn: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <div className="mx-auto flex h-screen w-full max-w-2xl flex-col overflow-hidden bg-background shadow-xl">
        <ChatHeader />
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Index;
