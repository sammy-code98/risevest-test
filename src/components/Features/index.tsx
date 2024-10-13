import { IoIosArrowRoundForward } from "react-icons/io";

export default function Features(): JSX.Element {
  return (
    <div className="w-11/12  mx-auto max-w-screen-2xl space-y-6 py-8">
      {/* invest */}
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <div className="space-y-3">
            <h3 className="text-rise_black text-2xl md:text-4xl font-medium text-center md:text-justify">
              Invest your money in dollars
            </h3>
            <p className="text-lg md:text-xl text-center md:text-justify tracking-wide text-rise_grey md:w-3/5">
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better.
            </p>
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center md:justify-start">
            <button className="p-2 flex text-xl  text-primary rounded-xl hover:bg-rise_teal transition duration-300">
              Start Investing Now <IoIosArrowRoundForward className="mt-1" />
            </button>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src="/images/invest.svg" alt="invest" className="h-full" />
        </div>
      </div>

      {/* choice */}

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img src="/images/choice.svg" alt="invest" className="h-full" />
        </div>

        <div className="md:w-1/2">
          <div className="space-y-3">
            <h3 className="text-rise_black text-2xl md:text-4xl font-medium text-center md:text-start  md:w-[328px]">
              Choose what's best for you
            </h3>
            <p className="text-lg md:text-xl text-center md:text-justify tracking-wide text-rise_grey">
              Unlike other platforms, Rise lets you pick between stocks, US real
              estate and fixed income, according to your risk appetite. That way
              you can spread your risk and tap into different investments all in
              one place.
            </p>
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center md:justify-start">
            <button className="p-2 flex text-xl  text-primary rounded-xl hover:bg-rise_teal transition duration-300">
              Start Investing Now <IoIosArrowRoundForward className="mt-1" />
            </button>
          </div>
        </div>
      </div>

      {/* goals */}
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <div className="space-y-3">
            <h3 className="text-rise_black text-2xl md:text-4xl font-medium text-center md:text-justify">
              Set goals and reach them
            </h3>
            <p className="text-lg md:text-xl text-center md:text-justify tracking-wide text-rise_grey md:w-3/5">
              You can invest towards a goal on Rise--retirement, higher
              education, save for your home or travel budgets. Or create a goal
              of your own and invest periodically to achieve them.
            </p>
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center md:justify-start">
            <button className="p-2 flex text-xl  text-primary rounded-xl hover:bg-rise_teal transition duration-300">
              Start Investing Now <IoIosArrowRoundForward className="mt-1" />
            </button>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src="/images/goals.svg" alt="invest" className="h-full" />
        </div>
      </div>

      {/* remember */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img src="/images/remember.svg" alt="invest" className="h-full" />
        </div>

        <div className="md:w-1/2">
          <div className="space-y-3">
            <h3 className="text-rise_black text-2xl md:text-4xl font-medium text-center md:text-start  md:w-[386px]">
              We remember so you dont have to
            </h3>
            <p className="text-lg md:text-xl text-center md:text-justify tracking-wide text-rise_grey">
              Our Auto-invest feature makes it easy to stay consistent, even
              when you forget. Set a funding amount, frequency and payment
              method and Rise will automatically fund your investment, on
              schedule.
            </p>
          </div>
          <div className="py-2 md:py-4 flex justify-center items-center md:justify-start">
            <button className="p-2 flex text-xl  text-primary rounded-xl hover:bg-rise_teal transition duration-300">
              Start Investing Now <IoIosArrowRoundForward className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
