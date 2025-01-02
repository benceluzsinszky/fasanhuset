import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Fasanhuset" },
    { name: "description", content: "Welcome to Fasanhuset!" },
  ];
};

export default function Index() {
  return (
    <>
      <h2>Welcome to Fasanhuset!</h2>
      <p>
        Here you can book a parking slot, reserve the washing machine, or rent
        the party room.
      </p>
    </>
  );
}
