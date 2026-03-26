import { Task } from "../types";

export const defaultTasks: Task[] = [
  {
    id: "t1",
    title: "Move healthcare rights",
    description: "Prepare required documents and contact the related office.",
    dueDate: "2026-06-01",
    done: false,
    isDefault: true,
  },
  {
    id: "t2",
    title: "Course registration",
    description: "Check subjects and complete registration on time.",
    dueDate: "2026-06-05",
    done: false,
    isDefault: true,
  },
];