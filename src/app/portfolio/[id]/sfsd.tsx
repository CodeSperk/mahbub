<div className="max-width">
        <header className="overflow-hidden w-full h-[320px] md:h-[480px] lg:h-[70vh]">
          <Image
            src={project.img[0]}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-md w-full"
            priority
          />
        </header>

        <div className="">
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div>
                <h3 className="mb-8">{project.title}</h3>
                <div className="flex items-center flex-wrap gap-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className={linkStyles}
                  >
                    Live Link
                    <FaExternalLinkAlt />
                  </Link>

                  <Link
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    <FaGithub className="w-4 h-4" />
                    Client
                  </Link>

                  <Link
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    <FaGithub className="w-4 h-4" />
                    Server
                  </Link>
                </div>
              </div>

              {/* Admin Credentials */}
              <div className="p-4 bg-card-bg rounded-lg">
                <h6 className="font-semibold mb-2">Admin Credentials</h6>
                <div className="space-y-1">
                  <p>
                    Email: {project.admin[0]}
                  </p>
                  <p>
                    Password: {project.admin[1]}
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="space-y-10 md:space-y-12">
              {/* Overview Section */}
              <div>
                <h5 className="font-semibold mb-3 border-l-4 border-highlight pl-4">
                  Overview
                </h5>
                <p className="pt-2">{project.description}</p>
              </div>

              {/* Technologies Used Section */}
              {project.technologies?.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 shadow-sm border-t border-highlight shadow-highlight rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Section */}
              {project.features?.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Features ✨
                  </h5>
                  <ul className="list-disc list-inside space-y-2 pl-6 pt-2 text-secondary text-base md:text-lg leading-relaxed">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges Section */}
              {project.challenges?.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-3 border-l-4 border-highlight pl-4">
                    Challenges
                  </h5>
                  <ul className="list-disc list-inside space-y-2 pl-6 pt-2 text-secondary text-base md:text-lg leading-relaxed">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="">
              <Image
                src={project.img[0]}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>