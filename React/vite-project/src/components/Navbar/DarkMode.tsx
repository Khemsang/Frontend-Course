import { useEffect, useState } from "react"
import { BsFillSunFill } from "react-icons/bs";
import { PiMoonStarsFill } from "react-icons/pi";

const DarkMode = () => {
     // dark mode start
     const [theme, setTheme] = useState(
          localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
     )
     useEffect(() => {
          const element = document.documentElement;
          if (theme === "dark") {
               element.classList.add("dark")
               localStorage.setItem("theme", "dark")
          }
          else {
               element.classList.remove("dark")
               localStorage.setItem("theme", "light")
          }
     })
     return (
          <>
               {theme === "dark" ? (
                    <BsFillSunFill  className="text-2xl" onClick={() => setTheme("light")} />
               ) : (
                    <PiMoonStarsFill className="text-2xl" onClick={() => setTheme("dark")} />

               )}
          </>
     )
}

export default DarkMode