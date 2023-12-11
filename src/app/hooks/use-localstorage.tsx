import { useState } from "react";

type RequirementPayload = [{ name: string; regex: RegExp }];

export function useLocalStorage() {
  const [requirementValue = []] = useState<RequirementPayload>(() => {
    const item = localStorage.getItem("requirements");

    if (item) return JSON.parse(item);
  });

  const storeData = (name: string, regex: string) => {
    const data = [...requirementValue, { name, regex: regex.toString() }];

    localStorage.setItem("requirements", JSON.stringify(data));
  };

  return { requirementValue, storeData };
}
