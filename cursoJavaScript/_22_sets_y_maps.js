//SET
const set = new Set([1,2,3,3,3,5,6,4])
set.add(18)
set.delete(2)
console.log(set)
console.log(set.has(12))//comprueba si existe un elemento

//MAP
const map = new Map()
map.set('nombre','name')
map.set('casa','house')
map.set('hola','hello')
map.set('adios','bye')
console.log(map.has('nombre'))
console.log(map.get('casa'))
console.log(map.delete('casa'))
console.log(map)

//otra manera de crear un mapa
const map2 = new Map([
    ['uno',1],
    ['dos',2]
])
console.log(map2)
console.log('Iterando un Mapa')
for (let[key,value] of map) {
    console.log(`Key: ${key} - Value: ${value}`)
}

