import React from 'react'

const Skill = () => {
  return (
      <section className="pt-20 pb-40 bg-slate-50 dark:bg-[#1F2235] transition duration-500" id="skill">
          <h2 className="relative text-3xl text-left sm:text-center text-[#3e6ff4] mt-4 mb-8 font-extrabold pl-4 sm:pl-0
          after:absolute after:w-16 after:h-[3px] after:left-0 after:right-0 after:m-0 after:ml-4 after:top-10 after:bg-[#3e6ff4] sm:after:m-auto sm:after:ml-0">Skills</h2>
          <div className="gap-y-8 text-center sm:text-left mx-auto pt-10 xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 items-center px-10">
              <div>
              <div className="sm:pr-10">
            <h2 className="mb-5 font-extrabold text-2xl dark:text-white">Profesional Skills</h2>
            <p className="text-base dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
            </div>
            <ul className="mt-10 mx-auto pl-3 sm:pl-0">
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-html5 transition duration-300 text-gray-300 group-hover:text-[#E34C26]" /></li>
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-css3 transition duration-300 text-gray-300 group-hover:text-[#2965F1]" /></li>
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-javascript transition duration-300 text-gray-300 group-hover:text-[#F0DB4F]" /></li>
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-react transition duration-300 text-gray-300 group-hover:text-[#61DBFB]" /></li>
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-nodejs transition duration-300 text-gray-300 group-hover:text-[#3C873A]" /></li>
                <li className="inline-block text-6xl relative pr-5 group"><i className="bx bxl-tailwind-css transition duration-300 text-gray-300 group-hover:text-[#67e8f9]" /></li>
            </ul>
              </div>


              <div>              
                <img src="https://i.postimg.cc/yY6Mm5wc/work3.jpg"  className="rounded-lg xl:w-10/12" />
            </div>
          </div>
      </section>
  )
}

export default Skill