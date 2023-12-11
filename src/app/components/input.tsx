"use client";

import Image from "next/image";
import { useState } from "react";

export type DefaultRequirements =
  | "consecutiveLetters"
  | "specialChar"
  | "uppercaseLetter"
  | "hasNumber";

interface InputProps {
  manualRequirement?: [{ name: string; regex: RegExp }] | [];
  requirements?: DefaultRequirements[] | [];
}

const defaultPasswordRequirements = {
  hasNumber: { name: "Has a number 0-9", regex: /\d/ },
  specialChar: { name: "Has a special char !@$$%^&*", regex: /[!@#$%^&*]/ },
  uppercaseLetter: { name: "Has a uppercase Letter", regex: /[A-Z]/ },
  consecutiveLetters: { name: "Has NO consecutive letters", regex: /^(?!.*([a-zA-Z])\1)/, },
};

export function Input({ manualRequirement = [], requirements = [] }: InputProps) {
  const selectedRequirements = requirements.map((req) => defaultPasswordRequirements[req]);
  const [password, setPassword] = useState("");

  const validations = [...selectedRequirements, ...manualRequirement];

  return (
    <div className="flex gap-3 max-sm:flex-col">
      <div>
        <input onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="flex flex-col gap-3">
        {validations.map((item, index) => {
          const isRequirementValidated = new RegExp(item.regex).test(password);

          return (
            <div className="flex gap-3 items-center" key={index}>
              <Image
                src={isRequirementValidated ? "check-icon.svg" : "wrong-icon.svg"}
                height={30}
                width={30}
                alt="img"
              />

              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
