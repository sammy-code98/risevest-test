
export default function TestimonialCard(): JSX.Element {
  return (
    <div className="px-8 py-12 bg-white rounded-xl shadow-md shadow-rise_shadow md:w-[509px] h-[100%]">
      <p className="text-rise_grey text-lg text-center">
        I don’t want to invest in separate stocks because I’m not a financial
        expert and I would rather trust my money in the hands of people like
        Rise who are skilled and knowledgeable.
      </p>
      <div className="pt-6">
        <div className="flex items-center gap-6">
          <img src="/images/test.png" alt="user" className="h-14" />
          <p className="text-rise_black text-xl font-medium">Jesse</p>
        </div>
      </div>
    </div>
  );
}
