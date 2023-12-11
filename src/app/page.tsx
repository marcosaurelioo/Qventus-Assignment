"use client";

import { Input } from "./components/input";

export default function Home() {
  return (
    <div>
      <h1>Password Component</h1>

      <Input
        requirements={[
          "consecutiveLetters",
          "uppercaseLetter",
          "specialChar",
          "hasNumber",
        ]}
      />
    </div>
  );
}
