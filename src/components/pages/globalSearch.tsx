"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Search } from "lucide-react";
import { useState } from "react";

// Kurslar ro'yxati
const courses = [
  "React asoslari",
  "React ilg‘or darajasi",
  "TypeScript asoslari",
  "Tailwind CSS bo‘yicha mukammallik",
  "Next.js ga kirish",
  "Node.js backend dasturlash",
  "To‘liq stack dasturlash",
  "Chakra UI dizayni",
];

const GlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtirlash
  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (course: string) => {
    alert(`Tanlandi: ${course}`);
    setSearchTerm(""); // Qidiruvni tozalash
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <div className="hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-b-sm transition-colors flex items-center">
            <span className="hidden md:flex">𝙎𝙚𝙖𝙧𝙘𝙝</span>
            <Search className="w-4 ml-2 h-4" />
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Kurslar bo‘yicha qidiruv</DrawerTitle>
          </DrawerHeader>

          <div className="px-4">
            <input
              type="text"
              placeholder="Masalan: React..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          <div className="px-4 max-h-[300px] overflow-auto">
            {filteredCourses.length === 0 ? (
              <p className="text-gray-500">Hech narsa topilmadi.</p>
            ) : (
              <ul>
                {filteredCourses.map((course) => (
                  <li
                    key={course}
                    className="py-2 px-3 border-b last:border-b-0 cursor-pointer hover:bg-blue-500 hover:text-white rounded transition-colors"
                    onClick={() => handleSelect(course)}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default GlobalSearch;
