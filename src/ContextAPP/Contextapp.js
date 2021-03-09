import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const Basedonnee = createContext()

export function BasedonneeProvider(props)
{

    const [initialdonnee, useinitialdonnee] = useState({
                                                        Numberq : 0, 
                                                        categories :'Allcategories',
                                                        Type : 'multiple',
                                                        difficulty : 'Intermediate'
                                                    });
    const [Url, useUrl]= useState('');
    const [listquestion, uselistquestion] = useState([]);

    function Buildurl(object)
    {
        let categories = 0 
        switch(object.categories)
        {
            case "AnyCategory" : 
                categories = 0;
                break;
            case 'Art' : 
                categories = 25;
                break;
            case 'Animals' : 
                categories = 27;
                break;
            case 'Celebrities' : 
                categories = 26;
                break;
            case 'EntertainmentBooks' : 
                categories = 10;
                break;
            case 'EntertainmentFilm' : 
                categories = 11;
                break;
            case 'EntertainmentMusic' : 
                categories = 12;
                break;
            case 'EntertainmentVideoGames' : 
                categories = 15;
                break;
            case 'EntertainmentJapaneseAnimeManga' : 
                categories = 31;
                break;
            case 'EntertainmentCartoonAnimations' : 
                categories = 32;
                break;
            case 'EntertainmentComics' : 
                categories = 29;
                break;
            case 'GeneralKnowledge' : 
                categories = 9;
                break;
            case 'Geography' : 
                categories = 22;
                break;
            case 'Mythology' : 
                categories = 20;
                break;
            case 'Politics' : 
                categories = 24;
                break;
            case 'ScienceComputers' : 
                categories = 18;
                break;
            case 'ScienceMathematics' : 
                categories = 19;
                break;
            case 'ScienceNature' : 
                categories = 17;
                break;
            case 'ScienceGadgets' : 
                categories = 30;
                break;
            case 'Sports' : 
                categories = 21;
                break;
            case 'Vehicles' : 
                categories = 28;
                break;
            default :
                categories = 0;
                break;

        }
       let  url=''
       if(categories != 0)
       {
           url = 'https://opentdb.com/api.php?amount='+object.Numberq+'&category='+categories+'&difficulty='+object.difficulty+'&type=' +object.Type+''
       }
       else
       {
        url = 'https://opentdb.com/api.php?amount='+object.Numberq+'&difficulty='+object.difficulty+'&type=' +object.Type+''
       }
       useUrl(url)
    }
    useEffect(()=>
    {

        Buildurl(initialdonnee)
    },[initialdonnee])
    async function fetchdata(Urltofetch) {
        // fetch data from a url endpoint
        const data = await axios.get(Urltofetch)
        console.log('data', data.data.results);
        uselistquestion(data.data.results)
        return data;
      }
    useEffect(()=>
    {

        fetchdata(Url)
    },[Url])
    return(
        <Basedonnee.Provider value ={[[initialdonnee, useinitialdonnee],[Url, useUrl], [listquestion, uselistquestion]]}>
            {props.children}
        </Basedonnee.Provider>
    )
}