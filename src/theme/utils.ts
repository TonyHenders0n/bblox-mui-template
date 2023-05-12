import type { PaletteColor } from "@mui/material/styles/createPalette";
import type { ColorPreset } from "./index";
import { blue, green, indigo, purple, pink } from "./colors";

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case "blue":
      return blue;
    case "green":
      return green;
    case "indigo":
      return indigo;
    case "purple":
      return purple;
    case "pink":
      return pink;
    default:
      console.error(
        'Invalid color preset, accepted values: "blue", "green", "indigo", "pink" or "purple"".'
      );
      return blue;
  }
};
