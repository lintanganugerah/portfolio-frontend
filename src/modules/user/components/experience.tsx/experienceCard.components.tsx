import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";
import { useState } from "react";

export default function Experience({
  data,
  currentPage,
  itemsPerPage = 2,
}: {
  data: {
    _id: string;
    title: string;
    entity: string;
    date: string;
    description: EditorJsContent;
  }[];
  currentPage: number;
  itemsPerPage?: number;
}) {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      {currentItems.map((item) => (
        <div
          key={item._id}
          className="bg-gray-900/50 backdrop-blur-md border border-neutral-900 rounded-lg text-white p-4"
          id={item._id}
        >
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="text-sm font-bold text-gray-400">{item.entity}</div>
          <div className="text-sm font-light text-gray-600">{item.date}</div>
          <div className="text-xs mt-4">
            <div
              className={`${!expandedItems[item._id] ? "line-clamp-1" : ""}`}
            >
              <Output data={item.description} />
            </div>
            <button
              onClick={() => toggleExpand(item._id)}
              className="text-blue-400 hover:text-blue-300 mt-2 text-sm"
            >
              {expandedItems[item._id] ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
