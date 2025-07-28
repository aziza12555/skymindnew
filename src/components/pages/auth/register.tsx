"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Ism majburiy");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Email noto‘g‘ri formatda");
      return;
    }

    if (password.length < 6) {
      toast.error("Parol kamida 6 belgidan iborat bo‘lishi kerak");
      return;
    }

    try {
      toast.success("Ro‘yxatdan muvaffaqiyatli o‘tildi!");
      console.log({ name, email, password });

      // Tozalash
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-50 p-6 border rounded-xl bg-white shadow">
      <div className="flex gap-2 items-center mb-4">
        <h2 className="text-2xl font-bold">Ro‘yxatdan o‘tish</h2>
        <Link
          to="/auth"
          className="text-sm text-blue-600  font-sans mt-3 hover:underline"
        >
          Kirish
        </Link>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Ismingiz
          </label>
          <Input
            type="text"
            placeholder="Aziza Jo'raboyeva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Parol
          </label>
          <Input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Ro‘yxatdan o‘tish
        </Button>
      </form>
    </div>
  );
}
