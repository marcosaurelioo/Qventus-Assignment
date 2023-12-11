"use client";

import { useState, useEffect } from "react";

type RequirementPayload = [{ name: string; regex: RegExp }] | [];

export function useLocalStorage() {
  const [requirementValue, setRequirementValue] =useState<RequirementPayload>([]);

  useEffect(() => {
    const item = localStorage.getItem("requirements");

    if (item) setRequirementValue(JSON.parse(item));
  }, []);

  const storeData = (name: string, regex: string) => {
    const data = [...requirementValue, { name, regex: regex.toString() }];

    localStorage.setItem("requirements", JSON.stringify(data));
  };

  return { requirementValue, storeData };
}
