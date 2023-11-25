/**
 * 队伍有"NORTH"|"SOUTH"|"EAST"|"WEST"四个行走方向。给一个行走方向的数组，要求优化行走路径，省去多余的行走路线，比如会回到走过的地方的路径，返回优化后的数组。
 *
 * @param { string[] } xs ("NORTH"|"SOUTH"|"EAST"|"WEST")[]
 * @return { string[] } 字符串一维数组
 */
function dirReduc(xs) {
    // write code here
    // 如果连续的路径形成一个圈，那么这段路径可以去掉。
    const route = [{ x: 0, y: 0 }]
    const current = { x: 0, y: 0 }

    let i = 0
    while (i < xs.length) {
        const direct = xs[i]
        if (direct === 'NORTH') {
            current.y++
        }
        if (direct === 'SOUTH') {
            current.y--
        }
        if (direct === 'EAST') {
            current.x++
        }
        if (direct === 'WEST') {
            current.x--
        }
        route.push({ x: current.x, y: current.y })
        const duplicate = route.findIndex((item, index) => {
            if (index === route.length - 1) {
                return false
            }
            return item.x === current.x && item.y === current.y
        })
        if (duplicate !== -1) {
            const del = route.length - duplicate - 1
            xs.splice(i - del + 1, del)
            route.splice(duplicate + 1, del)
            i--
        } else {
            i++
        }
    }

    return xs
}

console.log(dirReduc(['NORTH', 'EAST', 'NORTH', 'WEST', 'WEST', 'SOUTH', 'SOUTH', 'EAST']))
