function countSheeps(arrayOfSheep) {
    let count = arrayOfSheep.filter(x => x !== false).length
    return count
}

console.log(countSheeps([true,  true,  true,  false,
                                    true,  true,  true,  true ,
                                    true,  false, true,  false,
                                    true,  false, false, true ,
                                    true,  true,  true,  true ,
                                    false, false, true,  true]))