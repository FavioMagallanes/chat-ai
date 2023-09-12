"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";

import { useChat } from "ai/react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat A</CardTitle>
        <CardDescription className="text-sm">
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {messages.map(message => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-500 text-xs mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>FM</AvatarFallback>
                    <AvatarImage src="https://github.com/FavioMagallanes.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>FM</AvatarFallback>
                    <AvatarImage src="https://github.com/openai.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="font-semibold block text-slate-700">
                    {message.role === "user" ? "Usuário" : "AI"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
