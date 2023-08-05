import Form from "../components/Form";
import { prisma } from "../database/db";
import GuestbookTitle from "./GuestbookTitle";

async function getEntries() {
  try {
    const data = await prisma.guestbook.findMany({
      take: 50,
      orderBy: {
        created_at: "desc",
      },
    });

    return data;
  } catch (error) {
    console.error("Error while fetching guestbook entries:", error);
    return [];
  }
}

export const revalidate = 60;

export default async function GuestbookPage() {
  const data = await getEntries();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <GuestbookTitle />
      </div>

      <div className="w-full">
        <div className="max-w-[500px] mx-auto mt-8">
          {/* <Form /> */}

          <div className="flex flex-col space-y-2">
            {data.map((entry) => (
              <div
                key={entry.id}
                className="w-full text-sm break-words"
              >
                {entry.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
