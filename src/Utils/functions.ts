/**
 * Slices a given text string to a maximum length.
 *
 * @param {string} txt - The input text string.
 * @param {number} [max=50] - The maximum length of the sliced text.
 * @returns {string} The sliced text string, with an ellipsis if it exceeds the maximum length.
 */
export function textSlicer(txt: string, max: number = 50) {
    if (txt.length >= max) 
        return `${txt.slice(0, max)}...`;
    return txt;
}