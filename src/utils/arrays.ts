/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */

export class Arrays {

    static shuffle(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}