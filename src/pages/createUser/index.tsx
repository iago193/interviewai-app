import { FaGithub, FaAnglesRight } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export function CreateUser() {
  const inputStyle =
    "bg-gray-200 text-black transition mt-4 duration-300 rounded-lg p-2 w-full outline-0 focus:outline-2 transform focus:scale-102 outline-blue-300 focus:shadow-blue-400 shadow-sm";
  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="text-white bg-blue-800 backdrop-blur-2xl
                w-96 rounded-2xl p-4"
        >
          <h2 className="border-b-2 border-b-gray-500 pb-2 text-xl text-center">
            Crie sua conta
          </h2>
          <form action="#" className="mt-4">
            <input
              className={inputStyle}
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu primeiro nome..."
            />
            <input
              className={inputStyle}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Digite seu sobre nome..."
            />
            <input
              className={inputStyle}
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail.."
            />
            <input
              className={inputStyle}
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha.."
            />
            <input
              className={inputStyle}
              id="password-repeat"
              name="password-repeat"
              type="password-repeat"
              placeholder="Repita sua senha.."
            />
            <button
              className="bg-blue-600 flex justify-center items-center gap-2 font-bold transition-all duration-300 cursor-pointer transform hover:shadow-blue-400 shadow-sm hover:scale-105 rounded-lg p-2 mt-4
            hover:bg-white hover:text-black"
            >
              Criar <FaAnglesRight />
            </button>
          </form>
          <div className="mt-10 border-t-2 border-t-gray-500">
            <h2 className=" bg-blue-800 mx-auto text-center w-10 -mt-3 text-sm">
              OU
            </h2>
            <div className="block mt-6">
              <button className="flex justify-around items-center gap-2 cursor-pointer">
                <FaGithub size={25} />
                <span>Criar com github</span>
              </button>
            </div>
            <div className="block mt-2">
              <button className="flex justify-around items-center gap-2 cursor-pointer">
                <SiGmail className="bg-red-500 p-1 rounded-full" size={25} />
                <span>Criar com Gmail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
