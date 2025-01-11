import React, { useRef, useState } from "react";

const Users = () => {
  const [pass, setpass] = useState("");
  const [correct, setcorrect] = useState(false);
  const [code, setcode] = useState("360");
  const showhideref = useRef();
  const storeduser = JSON.parse(localStorage.getItem("users")) || [];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (code == pass) {
      showhideref.current.classList.add("flex");
      showhideref.current.classList.remove("hidden");
      e.target.classList.add("hidden");
      setTimeout(() => {
        setcorrect(false);
      }, 2000);
    } else {
      setpass("");
      setcorrect(true);
      setTimeout(() => {
        setcorrect(false);
      }, 2000);
    }
  };

  const handlechange = (e) => {
    setpass(e.target.value);
  };

  return (
    <div className="p-3 gap-5 flex items-center w-full justify-center flex-col">
      <h1 className="text-[15px] font-semibold">
        Get Password by itz_kallukaliya permission
      </h1>
      <form
        onSubmit={handleOnSubmit}
        action=""
        method="POST"
        className="w-full flex gap-5 mt-10 items-center justify-center flex-col "
      >
        <h1 className="text-[19px] font-semibold">Get Password</h1>
        {/* <input value={form.userid} onChange={((e)=>{
           setform({userid:e.target.value})
        })}  className='py-3 bg-transparent border-[1px] border-gray rounded-xl outline-none w-full px-3'  type="text" placeholder='Enter a unique id' /> */}
        <input
          className="py-3 bg-transparent border-[1px] border-gray rounded-xl outline-none w-full px-3"
          type="number"
          onChange={handlechange}
          name=""
          id=""
          placeholder="Enter Code"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-3xl w-full"
        >
          Submit
        </button>
      </form>
      {correct && (
        <div className="bg-red-500 w-full flex items-center justify-center p-3 text-white rounded-3xl transition-all transition-opacity">
          Code is incorrect Try Again!
        </div>
      )}
      <div ref={showhideref} className="w-full  flex-col gap-2 p-3 hidden">
        {storeduser.map((elem, id) => {
          return (
            <div key={id} className="item bg-black p-3 rounded-xl">
              <h2 className="text-[16px] text-white">
                Username: {elem.username}
              </h2>
              <h2 className="text-[16px] text-white">
                Password: {elem.password}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
