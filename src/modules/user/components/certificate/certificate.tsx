import { LuExternalLink } from "react-icons/lu";

interface CertificateProps {
  title: string;
  description: string;
  link: string;
  year: number;
  id: string;
}

export const Certificate = ({
  title,
  description,
  link,
  year,
  id,
}: CertificateProps) => {
  return (
    <div className="border border-gray-900 hover:bg-white/10 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 w-full h-full flex flex-col justify-between">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <p className="text-xs text-gray-500">Issued {year}</p>
        <p className="text-xs text-gray-600">ID: {id}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center px-4 py-2 border border-white rounded-xl text-white hover:bg-white hover:text-black font-medium transition-colors duration-300 w-fit"
      >
        <span>Show Credential</span>
        <LuExternalLink className="ml-2" />
      </a>
    </div>
  );
};
