import { useState } from "react";
import { EditorJsContent } from "modules/profile/types/editor";
import Output from "editorjs-react-renderer";

type TimelineItemProps = {
  _id: string;
  title: string;
  subtitle: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  description?: EditorJsContent;
  link?: string;
  type?: string;
  image?: string;
};

type SliderColumnProps = {
  title: string;
  data: TimelineItemProps[];
};

export const SliderColumn = ({ title, data }: SliderColumnProps) => {
  const [page, setPage] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const cardsPerPage = 2;
  const maxPage = Math.ceil(data.length / cardsPerPage) - 1;

  const nextPage = () => setPage((prev) => Math.min(prev + 1, maxPage));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const extractPlainText = (description?: EditorJsContent): string => {
    if (!description?.blocks) return "";
    return description.blocks
      .map((block) => {
        if (block.type === "paragraph" || block.type === "header") {
          return block.data?.text?.replace(/<[^>]+>/g, "") ?? "";
        }
        return "";
      })
      .join(" ");
  };

  const truncateText = (text: string, wordLimit = 15) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const paginatedData = data.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <div className="flex flex-col w-full lg:w-1/2 px-4">
      <h2 className="text-3xl font-bold text-white mb-4 text-center md:text-start">
        {title}
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex flex-col gap-6 transition-transform duration-800 ease-in-out">
          {paginatedData.map((item) => {
            const isExpanded = expandedItems[item._id];
            const plainText = extractPlainText(item.description);
            const isTruncated = plainText.split(" ").length > 15;

            return (
              <div key={item._id} className="w-full">
                <div className="border border-gray-600/40 p-6 rounded-2xl shadow-md bg-gray-900/40 backdrop-blur-sm">
                  <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                  <h3 className="text-md text-gray-400 font-semibold mb-2">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.date
                      ? item.date
                      : `${item.startDate} to ${item.endDate}`}
                  </p>
                  <div className="text-gray-400 text-justify py-4 border border-gray-900 p-4 rounded-xl mb-2">
                    {isExpanded ? (
                      <Output data={item.description} />
                    ) : (
                      <p>{truncateText(plainText)}</p>
                    )}
                  </div>
                  {isTruncated && (
                    <button
                      onClick={() => toggleExpand(item._id)}
                      className="text-sm text-blue-400 hover:underline"
                    >
                      {isExpanded ? "See Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            className="text-white text-sm px-3 py-1 border border-gray-500 rounded disabled:opacity-30"
            disabled={page === 0}
          >
            ← Prev
          </button>
          <button
            onClick={nextPage}
            className="text-white text-sm px-3 py-1 border border-gray-500 rounded disabled:opacity-30"
            disabled={page === maxPage}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
