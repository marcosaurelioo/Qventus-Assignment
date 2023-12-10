import Image from "next/image";

const array = [
  { name: "Has a number 0-9" },
  { name: "Has a special char !@$$%^&*" },
  { name: "Has a uppercase Letter" },
  { name: "Has NO consecutive letters" },
];

export function Input() {
  return (
    <div className="flex gap-3 max-sm:flex-col">
      <div>
        <input />
      </div>

      <div className="flex flex-col gap-3">
        {array.map((item, index) => (
          <div className="flex gap-3 items-center" key={index}>
            <Image
              src={false ? "check-icon.svg" : "wrong-icon.svg"}
              height={30}
              width={30}
              alt="img"
            />

            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
