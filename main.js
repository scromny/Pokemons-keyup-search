var elPokemons = document.querySelector('.pokemons');
var elPokTemp = document.querySelector('#pokemon-temp').content;

var show = function(massiv){
    elPokemons.textContent = '';
        var pokFragment = document.createDocumentFragment();

        massiv.forEach(function(pokemon){
            var tempClone = elPokTemp.cloneNode(true);

            tempClone.querySelector('.name').textContent = pokemon.name;
            tempClone.querySelector('.pic').src = pokemon.img;
            tempClone.querySelector('.pic').alt = pokemon.name;
            tempClone.querySelector('.id').textContent = pokemon.id;

            var wks = pokemon.weaknesses;
            wks.forEach(function(wk){
                var pokemonli = document.createElement('li');
                pokemonli.textContent = wk;
                tempClone.querySelector('.ul').appendChild(pokemonli);
            });

            pokFragment.appendChild(tempClone);
        });

        elPokemons.appendChild(pokFragment);
}

show(pokemons);

// search
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
});

elInput.addEventListener('keyup', function(){
    var key = new RegExp(elInput.value, 'gi');

    var searchedPokemons = pokemons.filter(function(pokemon){
        return pokemon.name.match(key);
    });

    show(searchedPokemons);
});