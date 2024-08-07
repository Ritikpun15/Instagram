import { useSelector } from "react-redux";
import React from "react";

function Profile() {
  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="w-full h-full">
      <main className="bg-black">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1"
                src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user.username}
                </h2>
              </div>

              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">136 </span>
                  posts
                </li>

                <li>
                  <span className="font-semibold">40.5k </span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">302 </span>
                  following
                </li>
              </ul>

              <div className="hidden md:block">
                <span>Travel, Nature and Music</span>
                <p>🌍 Adventurer at heart, exploring the world one destination at a time.</p>
              </div>
            </div>

            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>🌍 Adventurer at heart, exploring the world one destination at a time.</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          <div className="px-px md:px-3">
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-300
                    border-t"
            >
              <li className="md:border-t md:border-gray-600 md:-mt-px md:text-gray-300">
                <a className="inline-block p-3" href="#">
                  <i className="fas fa-th-large text-xl md:text-xs"></i>
                  <span className="hidden md:inline">post</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <i className="far fa-square text-xl md:text-xs"></i>
                  <span className="hidden md:inline">igtv</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1" href="#">
                  <span className="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap -mx-px md:-mx-3">
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6 flex justify-center">
                    <img
                      className="w-60 h-60 object-cover"
                      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />

                    <i className="fas fa-square absolute right-0 top-0 m-1"></i>

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          412K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          2,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6 flex justify-center">
                    <img
                      className="w-60 h-60 object-cover"
                      src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          412K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          1,993
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full flex justify-center md:mb-6">
                    <img
                      className="w-60 h-60 object-cover"
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          112K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          2,090
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full flex justify-center md:mb-6">
                    <img
                      className="w-60 h-60 object-cover"
                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                      alt="image"
                    />

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          112K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          2,090
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6 flex justify-center">
                    <img
                      className="w-60 h-60"
                      object-cover
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />

                    <i className="fas fa-video absolute right-0 top-0 m-1"></i>

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          841K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6 flex justify-center">
                    <img
                      className="w-60 h-60"
                      object-cover
                      src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                      alt="image"
                    />

                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                                    space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart"></i>
                          120K
                        </span>

                        <span className="p-2">
                          <i className="fas fa-comment"></i>
                          3,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
