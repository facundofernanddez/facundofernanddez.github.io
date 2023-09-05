"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./database/db";

interface data {
  message: string;
  username: string;
}

export async function postEntry(formData: FormData) {
  "use server";

  const data: data = await prisma.guestbook.create({
    data: {
      message: formData.get("entry") as string,
      username: "hello",
    },
  });

  revalidatePath("/guestbook");
}
