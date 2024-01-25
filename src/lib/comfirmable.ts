export const comfirmable = (tip: string, fn: () => void) => () => {
  const result = window.confirm(tip)
  if (result) { fn() }
}
