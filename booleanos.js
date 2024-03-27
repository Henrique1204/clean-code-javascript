// Booleanos devem ser escritos como pergunta.

const userMajority = true;
const isUserOnMajority = true;

// is, does, has

const disabled = true;
const isDisabled = true;

const userHasGroup = true; // apesar de não estar no começo, o `has` traz sentido de pergunta.

// Exercício.

const user = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const isAboveMinimumHeightLimit = 130;

const currentHour = new Date().getHours();

const parkIsOpen = currentHour > 9 && currentHour < 18;

if (!parkIsOpen) throw new Error("O parque está fechado!");

const hasTicket = user.hasTicket;

if (!hasTicket) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const isAllowedToEnterToy= user.height > isAboveMinimumHeightLimit;

if (!isAllowedToEnterToy) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");
