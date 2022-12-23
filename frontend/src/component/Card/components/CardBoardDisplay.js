import React from 'react';

 export const CardBoardDisplay=(props) =>{
    if(props == undefined){
        return (<></>);
    }


    return (
        <div className="ui special cards">

        <div className="card">

            <div className="content">
                    <div className="ui grid">
                        <div className='three column row'>
                            <div className="column">
                                    <a className="ui red circular label">{props.energy}</a>
                            </div>
                            <div className='column'>
                                    <h5>{props.name}</h5>
                            </div>
                            <div className='column'>
                                    <a className="ui yellow circular label">{props.hp}</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="image imageCard">
                    <div className="ui fluid image">
                        <img id="cardImgId" className="ui centered image" src="https://static.hitek.fr/img/actualite/2017/06/27/i_deadpool-2.jpg"></img>
                    </div>
            </div>
        </div>
        </div>
            
        );
}


/*


<div className="ui special cards">
        <div className="card">

            <div className="content">
                    <div className="ui grid">
                        <div className="three column row">
                            <div className="column" style="text-align: center;">
                                    <a className="ui red circular label">{props.energy}</a>
                            </div>
                            <div className="oclumn" >
                                    <h5>{props.name}</h5>
                            </div>
                            <div className="column" style="text-align: center;">
                                    <a className="ui yellow circular label">{props.hp}</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="image imageCard">
                    <div className="ui fluid image">
                        <img id="cardImgId" className="ui centered image" src={props.smallImgUrl}></img>
                    </div>
            </div>
        </div>
            
    </div>
    */