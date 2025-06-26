export const ProjectCard = ({ title, description, image, techs, link }) => {
  return (
    <div className="flex flex-col border rounded-lg shadow-md overflow-hidden max-w-[300px] w-full bg-white dark:bg-gray-800 h-[400px] items-stretch">
      <div className="w-full h-48">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col p-2 text-center flex-grow">
        <span className="font-bold text-lg text-gray-800 dark:text-white">{title}</span>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 my-4 justify-center">
          {techs.map((tech) => (
            <span key={tech} className="px-2 py-1 border rounded text-xs text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border rounded px-4 py-2 text-sm text-color border-[#B22222] hover:bg-[linear-gradient(to_right,_#ff0000,_#800080)] dark:hover:bg-hover:bg-[#B22222] transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

