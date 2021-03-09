function Questionanswers(props)
{

    return(
        
            <>
                <p className="Gameplay-question">{props.Questiontoprint}</p>
                <br/>
                {<div className="Gameplay-answer-container">
                    {props.answers.map((element,index)=>{
                                return(
                                    <div key={index}onClick={()=>props.HandleanswerClicked(element)} className={  props.answerclicked == element ? "Gameplay-answer-clicked" : "Gameplay-Answer" }>
                                        {element}
                                    </div>
                                )
                            })}
                </div>}
                <button className="Gameplay-button-Next-question" onClick={props.Handlenextquestion}> Validate</button>
            </>
        
    )
}
export default Questionanswers