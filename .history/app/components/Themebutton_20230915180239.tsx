"use client";

import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();

  return(
    <button onClick={()=> setTheme(resolvedTheme ==="dark"?"light":"dark")}
    className="bg-blue-500/30 p-2 rounded-lg text-blue-500">

    </button>
  )
}
