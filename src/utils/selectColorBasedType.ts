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
    fairy: 'purple-400',
    normal: 'purple-400',
    fighting: 'purple-400',
    flying: 'purple-400',
    poison: 'purple-400',
    ground: 'purple-400',
    bug: 'green-700',
    electric: 'yellow-400',
    dragon: 'purple-400',
  }

  return color[type];
}