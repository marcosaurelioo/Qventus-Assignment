"use client";

import { useLocalStorage } from "../hooks/use-localstorage";
import { Input } from "../components/input";
import { useState } from "react";

export default function Example3() {
  const { requirementValue, storeData } = useLocalStorage();

  const [requirementName, setRequirementName] = useState("");
  const [regexValue, setRegexValue] = useState("");

  return (
    <div>
      <div>
        <h1>Password Component (API example)</h1>

        <Input manualRequirement={requirementValue} />
      </div>

      <form
        onSubmit={() => storeData(requirementName, regexValue)}
        className="flex flex-col mt-72"
      >
        <div>
          <h1>Insert your requirement</h1>
        </div>

        <div className="flex gap-2">
          <input
            onChange={(e) => setRequirementName(e.target.value)}
            placeholder="requirement description"
            value={requirementName}
            required
          />

          <input
            onChange={(e) =>
              setRegexValue(e.target.value !== "/" ? e.target.value : "")
            }
            placeholder="requirement rules (RegExp)"
            value={regexValue}
            required
          />
        </div>

        <div className="mt-1">
          <button type="submit">Create requirement</button>
        </div>
      </form>
    </div>
  );
}
