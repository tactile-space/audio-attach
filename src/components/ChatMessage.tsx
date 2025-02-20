
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isOwn: boolean;
  hasAttachment?: boolean;
  attachmentType?: "image" | "audio" | "file";
  attachmentUrl?: string;
}

export const ChatMessage = ({
  content,
  timestamp,
  isOwn,
  hasAttachment,
  attachmentType,
  attachmentUrl,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[85%] animate-in message-animation",
        isOwn ? "ml-auto justify-end" : "mr-auto justify-start"
      )}
    >
      <div
        className={cn(
          "relative flex flex-col gap-1 rounded-2xl px-4 py-3",
          isOwn
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        )}
      >
        {hasAttachment && attachmentType === "image" && (
          <img
            src={attachmentUrl}
            alt="attachment"
            className="mb-2 max-h-48 rounded-lg object-cover"
          />
        )}
        {hasAttachment && attachmentType === "audio" && (
          <audio src={attachmentUrl} controls className="mb-2 h-10 w-full" />
        )}
        {hasAttachment && attachmentType === "file" && (
          <div className="mb-2 flex items-center gap-2 rounded-lg bg-background/10 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="text-sm">Attached File</span>
          </div>
        )}
        <p className="text-sm">{content}</p>
        <span
          className={cn(
            "text-right text-xs",
            isOwn ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
};
