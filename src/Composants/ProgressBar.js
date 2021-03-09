import './ProgressBar.css'


function ProgressBar(props)
{
    const styleprogressbar = {
        width: `${props.widthprogressbar}%`,
        height: '1rem',
        backgroundColor: 'rgb(47, 130, 255)',
        borderRadius: '1rem',
    }
    return(
                <div className="progress-bar-container">
                    <p> Question : {(props.question +1) + '/' + props.lengthlistquestion}</p>
                    <div className="progress-bar" style={styleprogressbar}></div> 
                </div>
    )
}

export default ProgressBar