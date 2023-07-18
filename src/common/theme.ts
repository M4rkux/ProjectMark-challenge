import { Strength, Theme } from "src/types"

export function borderColor(color: Theme, strength: Strength) {
  return `border-${color}-${strength}`
}

export function bgColor(color: Theme, strength: Strength) {
  return `bg-${color}-${strength}`
}

export function textColor(color: Theme, strength: Strength) {
  return `text-${color}-${strength}`
}
