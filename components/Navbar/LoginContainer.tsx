import Axios from "@/app/utils/API/axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
type Props = {
  closeContainer: (value: boolean) => void;
};
type User = {
  username: string;
  password: string;
};
export default function LoginContainer({ closeContainer }: Props) {
  const router=useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  async function handleLoginSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setLoading(true);
    const { data } = await Axios.post("/auth/login", {
      ...user,
    });
    console.log(data)
    localStorage.setItem("JWT",data.token)
    setLoading(false)
    toast.success("Login Successfull")
    closeContainer(false)
  }

  function handleChange(name: string, value: string): void {
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md z-40 grid place-items-center p-5 text-black">
      <div className="relative flex flex-col bg-white rounded-md w-full md:w-1/2 lg:w-1/3 p-5">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form className="flex flex-col">
          <input
            value={user.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            name="username"
            className="w-full py-2 my-1 bg-white border rounded focus:outline-none px-3"
            type="text"
            placeholder="johnDoe@gmail.com"
          />
          <input
            value={user.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            name="password"
            className="w-full py-2 my-1 bg-white border rounded focus:outline-none px-3"
            type="password"
            placeholder="*******"
          />
          {loading ? (
            <p className="w-full py-2 my-1 text-white border rounded focus:outline-none px-3 bg-indigo-200 active:scale-90 transition-transform duration-300 grid place-items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-white animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </p>
          ) : (
            <button
              onClick={(e) => handleLoginSubmit(e)}
              className="w-full py-2 my-1 text-white border rounded focus:outline-none px-3 bg-indigo-500 active:scale-90 transition-transform duration-300"
            >
              Submit
            </button>
          )}
        </form>
        <button
          onClick={() => closeContainer(false)}
          className="absolute top-2 right-2 border rounded-full h-10 w-10 grid place-items-center hover:bg-indigo-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
