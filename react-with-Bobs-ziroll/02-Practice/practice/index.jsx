/* 
/*
Challenge 1:
Given an array of numbers, return an array of each number, squared */
const nums = [1, 2, 3, 4, 5]
  // --> [1, 4, 9, 16, 25]

  let numsSqr = nums.map((val) =>{
       return val*val;
  })

  console.log(numsSqr);


// Your code here



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
Challenge 2:
Given an array of strings, return an array where the first letter of each string is capitalized */
const names = ["alice", "bob", "charlie", "danielle"]
  // -->  ("Alice", "Bob", "Charlie", "Danielle")
   // Your code here

let nameUpr = names.map((item) =>{
      return ( item[0].toUpperCase() + item.slice(1));
})
   console.log(nameUpr);



   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   /*
Challenge 3:
Given an array of strings, return an array of strings that wraps & of the original strings in an HTML-like <p></p> tag.
E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
 return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"] */
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->  ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here 


let myPokemon = pokemon.map((item) =>{
    return (`<p>+${item}+</p>`)
})

console.log(myPokemon);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*
Challenge: turn the strings in the array into <h3> elements instead
*/
 function App() {
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
return (<div>
    {colors.map((item) => {
      <h3>{item}</h3>
    })}
    
    </div>)
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>