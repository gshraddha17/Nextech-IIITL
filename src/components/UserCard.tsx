import prisma from "@/lib/prisma";
import Image from "next/image";

const colorSchemes = {
  admin: {
    background: "bg-gradient-to-br from-purple-500 to-indigo-600",
    text: "text-white",
    badge: "bg-white text-purple-600"
  },
  teacher: {
    background: "bg-gradient-to-br from-teal-400 to-blue-500",
    text: "text-white",
    badge: "bg-white text-teal-600"
  },
  student: {
    background: "bg-gradient-to-br from-pink-500 to-rose-500",
    text: "text-white",
    badge: "bg-white text-pink-600"
  },
  parent: {
    background: "bg-gradient-to-br from-amber-500 to-orange-600",
    text: "text-white",
    badge: "bg-white text-amber-600"
  }
};

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };

  const data = await modelMap[type].count();
  const colors = colorSchemes[type];

  return (
    <div className={`rounded-2xl ${colors.background} ${colors.text} p-4 flex-1 min-w-[130px] shadow-lg transform transition-all hover:scale-105`}>
      <div className="flex justify-between items-center">
        <span className={`text-[10px] ${colors.badge} px-2 py-1 rounded-full`}>
          2024/25
        </span>
        <Image 
          src="/more.png" 
          alt="" 
          width={20} 
          height={20} 
          className="opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
      <h1 className="text-2xl font-bold my-4">{data}</h1>
      <h2 className={`capitalize text-sm font-medium ${colors.text} bg-white/20 px-2 py-1 rounded-md inline-block`}>{type}s</h2>
    </div>
  );
};

export default UserCard;