export default function selectChampions(championsData: JSON , setGameChampions: React.Dispatch<React.SetStateAction<Object[] | undefined>>) {
    if (championsData) {
        let arrChampions = Object.values(championsData.data)
    
        let shuffleArrChampions = shuffle(arrChampions)

        let finalArrChampions = shuffleArrChampions.slice(0, 28)

        
        console.log(finalArrChampions)
        setGameChampions(finalArrChampions)
    }
}

function shuffle(array:Array<Object>) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

