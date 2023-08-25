import { AboutMe } from "../AboutMe/AboutMe"
import { Technologies } from "../Technologies/Technologies"

export function About() {
  return (
    <section>
      <h1 className="text-center">About</h1>
      <div className="flex justify-evenly">
        <div className="flex flex-wrap justify-evenly">
          <AboutMe />
          <Technologies />
        </div>
      </div>
    </section>
  )
}