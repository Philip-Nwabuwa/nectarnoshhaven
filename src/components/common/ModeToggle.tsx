"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (typeof window !== "undefined" && mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Switch
          id="dark-mode-toggle"
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
        <Label htmlFor="dark-mode-toggle">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Label>
      </div>
    );
  } else {
    return null;
  }
}
