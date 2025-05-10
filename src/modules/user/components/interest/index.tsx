export const Interest = () => {
	// const links = ["React.js", "React.js", "React.js", "React.js"];
	const techStacks = [
		{ name: 'Node.js', logo: 'assets/logo/nodejs.svg' },
		{ name: 'Express', logo: 'assets/logo/expressjs-light.svg' },
		{ name: 'MongoDB', logo: 'assets/logo/mongodb.svg' },
		{ name: 'Redis', logo: 'assets/logo/redis.svg' },
		{ name: 'React', logo: 'assets/logo/react.svg' },
		{ name: 'Tailwind CSS', logo: 'assets/logo/tailwindcss.svg' },
		{ name: 'PostgreSQL', logo: 'assets/logo/postgresql.svg' },
		{ name: 'AWS', logo: 'assets/logo/aws-dark.svg' },
		{ name: 'Laravel', logo: 'assets/logo/laravel2.svg' },
		{ name: 'Javascript', logo: 'assets/logo/javascript.svg' },
		{ name: 'MySQL', logo: 'assets/logo/mysql.svg' },
		{ name: 'Go', logo: 'assets/logo/go.svg' },
		{ name: 'Typescript', logo: 'assets/logo/typescript.svg' },
		{ name: 'Postman', logo: 'assets/logo/postman.svg' },
		{ name: 'Swagger', logo: 'assets/logo/swagger.svg' },
	]

	return (
		<div className='flex flex-col lg:items-start items-center justify-center gap-10 px-6 lg:px-20'>
      <div className='flex-1 flex flex-col justify-start items-center lg:items-start text-center lg:text-left space-y-4'>
        <div className='flex flex-row items-center space-x-4'>
          <h2 className='text-3xl font-bold'>Tech Stack</h2>
          <div className="text-sm">that i've worked with, and exploring</div>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6'>
            {techStacks.map((stack, index) => (
              <div key={index} className='group flex flex-col items-center bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow transition-transform duration-300 hover:rotate-2 hover:scale-115'>
                <img src={stack.logo} alt={stack.name} className='w-12 h-12 mb-2 object-cover transition-transform duration-300 group-hover:scale-125'/>
                <span className='text-sm font-medium text-white'>{stack.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
	);
};
