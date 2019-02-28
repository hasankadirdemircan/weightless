export type Color = {r: number, g: number, b: number};
export type Palette = {[hue: number]: Color} & {contrast: Color | {[hue: number]: Color}};
export type PaletteMap = {[name: string]: Palette};

/**
 * Sets a color variable on a target.
 * @param name
 * @param hue
 * @param color
 * @param $target
 */
export function setColor (name: string, hue: number, color: Color, $target: HTMLElement = document.documentElement) {
	$target.style.setProperty(`--${name}-${hue}`, `${color.r}, ${color.g}, ${color.b}`);
}

/**
 * Sets the palette variables for a palette map.
 * @param paletteMap
 */
export function setPaletteMap (paletteMap: PaletteMap) {
	for (const [name, palette] of Object.entries(paletteMap)) {
		for (const [hue, color] of Object.entries(palette)) {
			if (hue === "contrast") {
				// TODO: Set the contrasts
			} else {
				setColor(name, parseInt(hue), <Color>color);
			}
		}
	}
}
