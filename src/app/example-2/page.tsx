"use client";

import { Input } from "../components/input";

export default function Example2() {
  return (
    <div>
      <h1>Password Component (Manual example)</h1>

      <Input
        requirements={["hasNumber"]}
        manualRequirement={[
          { name: "Must have at least 16 characters", regex: /.{16,}/ },
        ]}
      />
    </div>
  );
}
