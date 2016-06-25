/*
 * This file is part of Zwig.
 *
 * (c) Alexander Skrotzky
 *
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed
 * with this source code.
 */

Operators.div = function zwigOperatorDiv(lhs, rhs) {
    return numberify(lhs) / numberify(rhs);
};