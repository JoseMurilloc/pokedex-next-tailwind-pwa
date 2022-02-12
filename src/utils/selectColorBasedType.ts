type StylesColorKey = {[key: string]: string}


export function selectColorBasedType(type: string) {
  const color: StylesColorKey  = {
    grass: 'green-400',
    fire: 'red-400', 
    rock: 'amber-400',
    ghost: 'violet-800',
    steel: 'zinc-400	',
    water: 'blue-600',
    psychic: 'pink-400',
    ice: 'blue-300',
    dark: 'orange-700',
    fairy: 'green-400',
    normal: 'green-400',
    fighting: 'green-400',
    flying: 'green-400',
    poison: 'green-400',
    ground: 'green-400',
    bug: 'green-400',
    electric: 'green-400',
    dragon: 'green-400',
  }

  console.log(color[type])

  return color[type];
}