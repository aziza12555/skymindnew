"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ navigate

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Email noto‘g‘ri formatda");
      return;
    }

    if (password.length < 6) {
      toast.error("Parol kamida 6 belgidan iborat bo‘lishi kerak");
      return;
    }

    try {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      console.log({ email, password });

      // ✅ Admin va oddiy user farqi
      if (email === "admin@skymind.uz") {
        navigate("/admin/courses");
      } else {
        navigate("/");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Login xatoligi");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-50 p-6 border rounded-xl bg-white shadow">
      <div className="flex gap-2 justify-center items-center mb-4">
        <h2 className="text-2xl pb-2 font-bold">Kirish</h2>
        <Link to="/register" className="text-sm text-blue-600 hover:underline">
          Ro‘yxatdan o‘tish
        </Link>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
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
          Kirish
        </Button>
      </form>
    </div>
  );
}
