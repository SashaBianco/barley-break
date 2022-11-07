
const DifficultyLevel = (props) => {

    const handlerChangeInput = (e) => {
        const currentValue = e.target.value;

        if (currentValue === 'Easy') {
            props.onStateCountShuffle(50);
          }
      
        if (currentValue === 'Medium') {
            props.onStateCountShuffle(100);
          }
      
        if (currentValue === 'Hard') {
            props.onStateCountShuffle(300);
          }

        props.onStateDiffLevel(currentValue);   
    }

    return (
        <form>
                <input type="radio" name="difficultyLevel" value='Easy' checked={props.diffLevel === 'Easy' ? true : false} onChange={handlerChangeInput}/>Easy
                <input type="radio" name="difficultyLevel" value='Medium' checked={props.diffLevel === 'Medium' ? true : false} onChange={handlerChangeInput}/>Medium
                <input type="radio" name="difficultyLevel" value='Hard' checked={props.diffLevel === 'Hard' ? true : false} onChange={handlerChangeInput}/>Hard
        </form>
    )
}
    

export default DifficultyLevel;