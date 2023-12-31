"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const [total, settotal] = useState(0);
  const [complete, setcomplete] = useState([]);

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    if (title == "") {
      alert("Title of the task Cannot be empty");
    } else {
      setmainTask([...mainTask, { title, desc }]);
      settitle("");
      setdesc("");
      // console.log(mainTask)
    }
  };

  const delteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  
  const completeHandler = (i) => {
    let copytask = [...mainTask];
    let task=mainTask[i];
    setcomplete([...complete,task]);
    
    console.log(complete);
    copytask.splice(i, 1);
    setmainTask(copytask);

    let a = total + 1;
    settotal(a);
    console.log(total);
  };

  let renderTask = (
    <h2 className="text-2xl font-semibold text-center py-4 ">
      No Task Available
    </h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
    return (
      <>
          {i==0 && 
            <div className="bg-slate-200 text-2xl font-semibold text-center py-4 ">
              Task Remaining
            </div>
          }
          <li
            key={i}
            className="list-none flex items-center mb-5 py-4 justify-around"
          >
            <div className="text-2xl font-semibold">{i + 1}</div>
            <div className="flex justify-between px-3  w-2/3">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-lg font-medium">{t.desc}</h6>
            </div>

            <button
              onClick={() => {
                delteHandler(i);
              }}
              className="bg-red-400 text-white px-4 py-2 rounded font-bold"
            >
              Delete
            </button>
            <button
              onClick={() => {
                completeHandler(i);
              }}
              className="bg-green-400 text-white px-4 py-2 rounded font-bold"
            >
              Complete
            </button>
          </li>
        </>
      );
    });
  }
  let renderTask2 = (
    <h2 className="text-2xl font-semibold text-center py-4 "> 
          Work Effectively to Comlplete The Task😊
    </h2>
  );

  if (complete.length > 0) {
    renderTask2 = complete.map((t, i) => {
      return (
        <li
          key={i}
          className="list-none flex items-center mb-5 py-4 justify-around bg-slate-300"
        >
          <div className="text-2xl font-semibold">{i + 1}</div>
          <div className="flex justify-between px-3  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <div className="px-5" />
          <div/>
        </li>

      );
    });
  }

  return (
    <div className="min-h-screen bg-slate-500">
      <h1
        className="bg-black text-white
       p-5 text-5xl font-bold
        text-center"
      >
        My Todo List
      </h1>
      <form onSubmit={submitHandler} className="bg-slate-500">
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 my-8 mx-4 px-3 py-2"
          placeholder="Enter our Task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 mx-4 my-8 px-3 py-2"
          placeholder="Enter Decription Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      
      <hr />
      <div className="bg-slate-200">{renderTask}</div>
      <div className="bg-slate-500 text-2xl font-semibold text-center py-4 ">
        Total task Completed :{total}
      </div>
      <div className="bg-slate-300">{renderTask2}</div>

    </div>
  );
};

export default page;
