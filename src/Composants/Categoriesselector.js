import './Categoriesselector.css'

function Categoriesselector(props)
{
    function printvalue(e)
    {
        props.HandleChangeselect(e.target.value)
    }
    return(
        <div className="Homepage-categories">
                    <h3>Categories</h3>
                    <div className="Homepage-categories-input">
                        <select name="categories" id="categories-select" onChange={printvalue}>
                            <option value="AnyCategory">--Any category--</option>
                            <option value="Art">Art</option>
                            <option value="Animals">Animals</option>
                            <option value="Celebrities">Celebrities</option>
                            <option value="EntertainmentBooks">Entertainment: Books</option>
                            <option value="EntertainmentFilm">Entertainment: Film</option>
                            <option value="EntertainmentMusic">Entertainment: Music</option>
                            <option value="EntertainmentVideoGames">Entertainment: Video Games</option>
                            <option value="EntertainmentJapaneseAnimeManga">Entertainment: Japanese Anime & Manga</option>
                            <option value="EntertainmentCartoonAnimations">Entertainment: Cartoon & Animations</option>
                            <option value="EntertainmentComics">Entertainment: Comics</option>
                            <option value="GeneralKnowledge">General knowledge</option>
                            <option value="Geography">Geography</option>
                            <option value="Mythology">Mythology</option>
                            <option value="Politics">Politics</option>
                            <option value="ScienceComputers">Science: Computers</option>
                            <option value="ScienceMathematics">Science: Mathematics</option>
                            <option value="ScienceNature">Science & Nature</option>
                            <option value="ScienceGadgets">Science: Gadgets</option>
                            <option value="Sports">Sports</option>
                            <option value="Vehicles">Vehicles</option>
                        </select>
                    </div>
                </div>

    )
}
export default Categoriesselector