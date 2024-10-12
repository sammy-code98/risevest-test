export default function Support(): JSX.Element {
  return (
    <div className="py-2">
      <p className="text-lg text-rise_grey2 ml-4 md:hidden">We are supported by</p>
      <div className="md:py-8 px-5 flex justify-center items-center">
        <img src="/src/assets/supports.svg" alt="supports" className="h-full" />
      </div>
    </div>
  );
}
