(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    title:          string;
    description:    string;
    rating:         number;
    cast:           string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }


  function checkFullName (fullName: string) {
    console.log({fullName});
    return true
  }


  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor", birthdate);
    return true;
  }


  // Función deficiente

  const getPayAmountBad = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
    }
    
    return result;
}

// Función mejorada


  const getPayAmoutBetter = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;
    return 4000;
  }

  // Función mejorada con operador ternario

  const getPayAmoutTernary = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
    return (
      isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000
    )
  }
})();
