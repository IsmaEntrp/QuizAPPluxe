import React, { useContext, useEffect, useState } from 'react'
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import Categoriesselector from './Categoriesselector'
import MandalaGold from '../Images/Mandalagold.png'
import {Basedonnee} from '../ContextAPP/Contextapp'
import {Link} from 'react-router-dom'

function Homepage()
{


    const[ [initialdonnee, useinitialdonnee] ]= useContext(Basedonnee)
    const [Numberofquestion, useNumberofquestion] = useState(5)
    const [TypeFalsetrue, useTypeFalsetrue] = useState(false)
    const [difficulty, usedifficulty] = useState(1)
    const [Selectcategories, useSelectcategories] = useState('')


    function HandleNumberofQuestionmine(){
        let newNumberofquestion = Numberofquestion
        if(Numberofquestion > 5)
        {
            newNumberofquestion = Numberofquestion-5
        }
        useNumberofquestion(newNumberofquestion)

    }
    function HandleNumberofQuestioplus(){
        
        let newNumberofquestion = Numberofquestion
        if(Numberofquestion < 50)
        {
            newNumberofquestion = Numberofquestion+5
        }
        useNumberofquestion(newNumberofquestion)

    }
    function Checkedsalsetrue(value)
    {
        useTypeFalsetrue(value)
    }
    
    function Dificultyimgclocked(value)
    {
        usedifficulty(value)
        console.log(difficulty)
    }
    useEffect(()=>
    {
        HandleGoClick()
    },[Numberofquestion,Selectcategories,TypeFalsetrue,difficulty])
    function HandleGoClick()
    {
        let donneejeu = {
            Numberq : Numberofquestion, 
            categories :Selectcategories,
            Type : TypeFalsetrue ? 'boolean' : 'multiple',
            difficulty : difficulty === 1 ? 'easy' : difficulty === 2 ? 'medium' : difficulty === 3 && 'hard',
        }
        useinitialdonnee(donneejeu)

    }
    function HandleChangeselect(e)
    {
        useSelectcategories(e)
    }

    return(
        <div className="Homepage-container">
            <div className="Homepage-elements-container">
                <div className="Homepage-flex-row content-row-spaced">
                    <div className="Homepage-Number-of-question">
                        <h3>Number of questions</h3>
                        <div className="Homepage-Number-of-question-plus-mine">
                            
                        <FontAwesomeIcon onClick={HandleNumberofQuestionmine} icon={faMinusSquare} className="FontAwesomeIcon-moins FontAwesomeIconc"/>
                        <p>{Numberofquestion}</p>
                        <FontAwesomeIcon  onClick={HandleNumberofQuestioplus} icon={faPlusSquare} className="FontAwesomeIcon-plus FontAwesomeIconc" />
                        </div>
                    </div>

                    <Categoriesselector HandleChangeselect = {HandleChangeselect}/>

                </div>
                <div className="Homepage-type Homepage-flex-row">
                    <h3>Type : </h3>
                    <p onClick={()=>Checkedsalsetrue(true)} className={TypeFalsetrue ? "Type-green" : "random-class"}>
                        <input type="radio" id="boolean" name="Type" onChange={()=>console.log('ok')}checked={TypeFalsetrue}></input>False/True</p>
                    <p onClick={()=>Checkedsalsetrue(false)} className={!TypeFalsetrue ? "Type-green" : "random-class"}>
                        <input type="radio" id="multiple" name="Type"  onChange={()=>console.log('ok')} checked={!TypeFalsetrue} ></input>Four choicies</p>
                </div>
                
                    <div className="Homepage-difficulty">
                        <h3>Difficulty : </h3>
                        <img onClick={()=>Dificultyimgclocked(1)} src={MandalaGold} alt="difficulty1" 
                        className={difficulty>=1 ? "Homepage-Difficulty-img" : "img-not-colored"}></img>
                        <img onClick={()=>Dificultyimgclocked(2)} src={MandalaGold} alt="difficulty2"
                        className={difficulty>=2 ? "Homepage-Difficulty-img" : "img-not-colored"}></img>
                        <img onClick={()=>Dificultyimgclocked(3)} src={MandalaGold} alt="difficulty3" 
                        className={difficulty>=3 ? "Homepage-Difficulty-img" : "img-not-colored"}></img>
                    </div>
                    
                        
                    <Link to='/gameplay'>
                        <div  className="Homepage-GO">
                            <div className="Homepage-formg-go">
                                <div>
                                    <div className="triangle-code-haut" style={{transform:'translateY(4px)'}}></div>
                                    <div className="carré-code"></div>
                                    <div className="triangle-code-bas"></div>
                                </div>
                                    <h2 className="Homepage-h2-Go" > Go !</h2>
                            </div>
                            
                        </div>
                    </Link>


                
            </div>

        </div>
    )
}
export default Homepage