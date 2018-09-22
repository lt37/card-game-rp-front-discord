"use strict";
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Arrays {
    static shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
exports.Arrays = Arrays;
//# sourceMappingURL=arrays.js.map