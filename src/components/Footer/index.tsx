import {
  footerContact,
  footerExplore,
  footerMain,
  footerProducts,
} from "../../staticData";
import { GoArrowUpRight } from "react-icons/go";

export default function Index() {
  return (
    <div className="mx-auto max-w-screen-2xl py-12 gap-6 md:gap-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-start gap-6">
        <div>
          <div>
            <img
              src="/images/logo-dark.svg"
              alt="dark-logo"
              className="pb-6"
            />
            <ul className="space-y-3">
              {footerMain.map((main) => (
                <li key={main.title}>
                  <a
                    href={main.href}
                    className="text-rise_grey hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {main.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-rise_black text-lg  font-medium pb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerExplore.map((explore) => (
                <li key={explore.title}>
                  <a
                    href={explore.href}
                    className="flex gap-2 items-center text-rise_grey hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {explore.title} <GoArrowUpRight />{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-rise_black text-lg  font-medium pb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {footerProducts.map((products) => (
                <li key={products.title}>
                  <a
                    href={products.href}
                    className="text-rise_grey hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {products.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-rise_black text-lg  font-medium pb-6">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {footerContact.map((contact) => (
                <li key={contact.title}>
                  <a
                    href={contact.href}
                    className="flex gap-2 items-center text-rise_grey hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {contact.title} <GoArrowUpRight />{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
