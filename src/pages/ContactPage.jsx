import { Button } from "../components/shared/Button";

export default function ContactPage() {
  return (
    <>
      <section className="bg-deep-black flex flex-col items-center min-h-dvh">
        <div className="flex flex-col align-center text-center self-stretch">
          <h1 className="text-custom-heading-2-uppercase text-neon-green uppercase mt-[40px]">Contact Us</h1>
          <p className="text-custom-body-2 text-adventure-white">Any questions or remarks? Just write us a message!</p>
        </div>

        <form className="flex flex-col text-adventure-white mt-[40px]">
          <label className="flex flex-col  w-[583px] h-[50px] flex-shrink-0">First Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Last Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Phone Number
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Message
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[100px] ">
            </input>
          </label>
          <Button
            label={"Send Message"}
            color={
              "border-2 border-neon-green text-neon-green bg-none hover:bg-neon-green hover:text-black"
            }
          />
        </form>
      </section>
    </>
  )
}
