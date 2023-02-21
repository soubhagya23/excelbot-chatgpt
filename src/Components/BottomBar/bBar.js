import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BBar() {
  return (
    <div
      className="w-full max-w-md px-2 lg:invisible md:invisible"
      style={{ position: "fixed", bottom: 0, marginBottom: 10 }}
    >
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-green-600/60 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            <Link to="/dashboard" style={{textDecoration:'none'}}>Home</Link>
            
          </Tab>
           <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
             <Link to="/dashboard/chats" style={{textDecoration:'none',color:'white'}}>Chats</Link>
          </Tab>
         
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
           Profile
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
