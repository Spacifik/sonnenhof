// components/DummyPage.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Text } from "./text";

interface EmptyPage {
  title: string;
  description: string;
  content: string;
}

export const EmptyPage: React.FC = () => {
  const [textData, setTextData] = useState<EmptyPage | null>(null);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { default: data } = await import(`../data${pathname}/text`);
        setTextData(data);
      } catch (error) {
        console.error("Error fetching text data:", error);
      }
    };

    fetchData();
  }, [pathname]);

  if (!textData) {
    return <div>Loading...</div>;
  }

  const { title, description, content } = textData;
  return (
    <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black p-3 md:p-5 lg:p-10">
      <div className="flex flex-col gap-1">
        <Text variant="tiny-primary" mono uppercase>
          {description}
        </Text>
        <Text variant="big-primary">{title}</Text>
      </div>

      <Text variant="small-primary">{content}</Text>
    </div>
  );
};
