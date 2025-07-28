// src/pages/admin.tsx
"use client";

import { useState, useEffect } from "react";
import {
  User,
  BookOpen,
  DollarSign,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Foydalanuvchilar",
    value: "238",
    icon: <User className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    label: "Kurslar",
    value: "14",
    icon: <BookOpen className="h-6 w-6 text-green-600" />,
    color: "bg-green-100",
  },
  {
    label: "Tushum (so'm)",
    value: "8 450 000",
    icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    label: "So‘rovlar",
    value: "63",
    icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-100",
  },
];

const labels = ["Frontend", "Backend", "AI", "Mobile", "Beginner", "Advanced"];

export default function AdminPage() {
  const [courseTags, setCourseTags] = useState({
    react: "Beginner",
    node: "Backend",
    ai: "AI",
  });

  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("admin_messages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  const handleLabelChange = (courseKey: string, newLabel: string) => {
    setCourseTags((prev) => ({ ...prev, [courseKey]: newLabel }));
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const updated = [...messages, currentMessage.trim()];
      setMessages(updated);
      localStorage.setItem("admin_messages", JSON.stringify(updated));
      setCurrentMessage("");
    }
  };

  return (
    <div className="mt-50 max-w-7xl m-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Admin Panel</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>{stat.icon}</div>
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <h2 className="text-xl font-bold">{stat.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course List */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">🎓 Kurslar ro‘yxati</h2>

        {[
          {
            key: "react",
            title: "Frontend React kursi",
            description:
              "React, Tailwind, TypeScript asosida zamonaviy UI yaratish",
          },
          {
            key: "node",
            title: "Backend Node.js kursi",
            description: "Express.js, MongoDB va autentifikatsiya",
          },
          {
            key: "ai",
            title: "AI Python kursi",
            description: "Machine Learning, TensorFlow, Jupyter Notebooks",
          },
        ].map((course) => (
          <div
            key={course.key}
            className="flex flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center shadow-sm bg-white mb-4"
          >
            <div>
              <p className="text-lg font-medium">{course.title}</p>
              <p className="text-muted-foreground text-sm">
                {course.description}
              </p>
              <p className="mt-1 text-xs text-blue-600 font-semibold">
                Teg: {courseTags[course.key]}
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Amallar</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Tegni tanlash
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="p-0">
                      <Command>
                        <CommandInput
                          placeholder="Filter labels..."
                          autoFocus
                        />
                        <CommandList>
                          <CommandEmpty>Topilmadi</CommandEmpty>
                          <CommandGroup>
                            {labels.map((label) => (
                              <CommandItem
                                key={label}
                                value={label}
                                onSelect={() =>
                                  handleLabelChange(course.key, label)
                                }
                              >
                                {label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    O‘chirish
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>

      {/* Display Messages */}
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-2">📥 Yuborilgan xabarlar:</h3>
        {messages.length === 0 ? (
          <p className="text-sm text-gray-500">Hozircha xabar yo‘q.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {messages.map((msg, idx) => (
              <li key={idx}>{msg}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
