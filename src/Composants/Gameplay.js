import './Gameplay.css'
import { useContext, useEffect, useState } from 'react'
import { Basedonnee } from '../ContextAPP/Contextapp'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Questionanswers from './Questionanswers';

function Gameplay()
{
    const [,[Url, useUrl],[listquestion, uselistquestion]] =useContext(Basedonnee)
    const [choicies, usechoicies] = useState(['','','',''])
    const [indexquestion, useindexquestion] = useState(0)
    const [printdiv, useprintdiv] = useState(<h3>Please try again, and choose less questions for the quiz. Our database does not containt the number of questions you want</h3>)
    const [answerclicked, useanswerclicked] = useState("")
    const [Listanswer, useListanswer] = useState([])
    

    useEffect(()=>
    {
        if(listquestion.length !=0 && indexquestion != -1)
        {
            let newchoicies = []
            let firstindex = Math.floor(1+Math.random()*2)
            newchoicies.push(listquestion[indexquestion].correct_answer)
            newchoicies.push(listquestion[indexquestion].incorrect_answers[0])
            newchoicies.push(listquestion[indexquestion].incorrect_answers[1])
            newchoicies.push(listquestion[indexquestion].incorrect_answers[2])
            let achanger = newchoicies[firstindex]
            newchoicies[firstindex] =  newchoicies[0]
            newchoicies[0] = achanger
            usechoicies(newchoicies)
            useprintdiv(<div><h3>{listquestion[indexquestion].question}</h3></div>)

        }
        console.log(listquestion)
    },[listquestion])

    useEffect(()=>
    {
        if(listquestion.length !=0 && indexquestion != -1 && listquestion[0].type == 'multiple' )
        {
            let newchoicies = []
            let firstindex = Math.floor(1+Math.random()*2)
            newchoicies.push(listquestion[indexquestion].correct_answer)
            newchoicies.push(listquestion[indexquestion].incorrect_answers[0])
            newchoicies.push(listquestion[indexquestion].incorrect_answers[1])
            newchoicies.push(listquestion[indexquestion].incorrect_answers[2])
            let achanger = newchoicies[firstindex]
            newchoicies[firstindex] =  newchoicies[0]
            newchoicies[0] = achanger
            usechoicies(newchoicies)
            useprintdiv(<div><h3>{correctquestion(listquestion[indexquestion].question)}</h3></div>)

        }
        else if(indexquestion != -1 &&listquestion[0].type == 'boolean'){
            let newchoicies = []
            newchoicies.push('True')
            newchoicies.push('False')
            useprintdiv(<div><h3>{correctquestion(listquestion[indexquestion].question)}</h3></div>)
            usechoicies(newchoicies)
        }
    },[indexquestion])
    
    function correctquestion(stringe)
    {
        
        let newstringe = stringe.replaceAll('&quot;', '\"');
        newstringe= newstringe.replaceAll('&#039;', '\'');
        return newstringe
    }

    function Handlenextquestion()
    {
        let newindexquestion = indexquestion;
        let newListanswer= Listanswer;
        if( listquestion.length != 0)
        {
            if(newindexquestion<listquestion.length -1 && newindexquestion >=0 )
            {
              newindexquestion = newindexquestion + 1;
              newListanswer.push(answerclicked)
            }
            else if(newindexquestion == listquestion.length -1) 
            {
             newindexquestion = -1
             newListanswer.push(answerclicked)
             console.log("fullanswers", newListanswer)
            }
        }
        else{
            window.location.href = "/";
        }
       
        useindexquestion(newindexquestion)
        useListanswer(newListanswer)
    }

    function HandleanswerClicked(value)
    {
        useanswerclicked(value)
    }


    function calculatetotal()
    {
        let totalanswer = 0;
        if(listquestion.length != 0)
        {
            for(let i =0; i<listquestion.length; i++)
            {
                console.log('answer clicked is' +  Listanswer[i] +'real answer' +listquestion[i].correct_answer)
                if(Listanswer[i] ==listquestion[i].correct_answer)
                {
                    totalanswer = totalanswer +1; 
                }
            }
        }
        return totalanswer;
    }
    let widthprogressbar =((indexquestion +1)/listquestion.length)*100
    
    return (
        <div className="Gameplay-container">
            {indexquestion != -1 ?
            <div>
                <ProgressBar 
                    widthprogressbar = {widthprogressbar} 
                    question={indexquestion}
                    lengthlistquestion={listquestion.length}  />
                
                <Questionanswers 
                    Questiontoprint = {printdiv}
                    answers = {choicies}
                    HandleanswerClicked ={HandleanswerClicked}
                    answerclicked={answerclicked}
                    Handlenextquestion={Handlenextquestion}/>
            </div>
            :
            <div>
                <h1 className="Gameplay-question">Your scor is {calculatetotal()}/{listquestion.length}</h1>
                <div className="Gameplay-correct-answers">
                    {listquestion.map((element,index)=>{
                    return(
                    
                        <p key ={index}className="Gameplay-correct-answer">
                            <span style={{fontWeight:'Bold'}}>Questions</span> {correctquestion(element.question)}<br/>
                            <span style={{fontWeight:'Bold'}}> Correct answer : </span> {element.correct_answer}</p>
                        )
                    })}
                </div>
                <Link to='/'>
                    <button className="Gameplay-button-try-new-quiz">Try new quiz</button>
                </Link>
            </div>
        }
        </div>
    )
}

export default Gameplay