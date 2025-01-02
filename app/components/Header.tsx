import { useLocation } from "@remix-run/react";

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="h-15 mb-5 mx-5 flex flex-row justify-between items-baseline">
      <a href="/">
        <h1 className="m-5 font-bold">Fasanhuset</h1>
      </a>
      <nav>
        <ul className="flex flex-row justify-evenly">
          {pages.map((page) => (
            <li key={page.href}>
              <a
                href={page.href}
                className={`flex flex-row mx-5 text-xl hover:scale-105 ${
                  isActive(page.href) && "font-bold"
                }`}
              >
                <img src={page.icon} alt={page.text} className="mr-2" />
                {page.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const pages = [
  {
    href: "/washing",
    text: "Washing Machine",
    icon: "/images/washing-machine.svg",
  },
  {
    href: "/parking",
    text: "Parking Slot",
    icon: "/images/parking-slot.svg",
  },
  {
    href: "/partyroom",
    text: "Party Room",
    icon: "/images/party-room.svg",
  },
];
