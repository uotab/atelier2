import React from 'react';

 export const CardFullDisplay=(props) =>{
    if(props == undefined){
        return (<></>);
    }


    return (
        <div classNameName="ui special cards">
    <div className="card">

        <div className="content">
                <div className="ui grid">
                    <div className="three column row">
                        <div className="column">
                            <i className="heart outline icon"></i><span id="cardHPId">{props.hp}</span> 
                        </div>
                        <div className="column">
                                <h5>{props.family}</h5>
                        </div>
                        <div className="column">
                            <span id="energyId">{props.energy}</span> <i className="lightning icon"></i>
                        </div>
                    </div>
                </div>
        </div>
        <div className="image imageCard">

            <div className="blurring dimmable image">
                <div className="ui inverted dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui primary button">Add Friend</div>
                        </div>
                    </div>
                </div>
                <div className="ui fluid image">
                    <a className="ui left corner label">
                        {props.name}
                      </a>
                    <img id="cardImgId" className="ui centered image" src="https://static.hitek.fr/img/actualite/2017/06/27/i_deadpool-2.jpg"></img>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="ui form tiny">
                <div className="field">
                    <label id="cardNameId"></label>
                    <textarea id="cardDescriptionId" className="overflowHiden" readonly="" rows="2">{props.description}
                    </textarea>
                </div>
            </div>
        </div>
        <div className="content">
            <i className="heart outline icon"></i><span id="cardHPId"> HP {props.hp}</span> 
            <div className="right floated ">
                    <span id="cardEnergyId">Energy {props.energy}</span>
                <i className="lightning icon"></i>
                 
            </div>
        </div>
        <div className="content">
            <span className="right floated">
                    <span id="cardAttackId"> Attack {props.attack}</span> 
                <i className=" wizard icon"></i>
            </span>
            <i className="protect icon"></i>
            <span id="cardDefenceId">Defense {props.defense}</span> 
        </div>
        <div className="ui bottom attached button">
            <i className="money icon"></i>
            Actual Value <span id="cardPriceId"> {props.money}$</span>
        </div>

    </div>
</div>
            
        );
}