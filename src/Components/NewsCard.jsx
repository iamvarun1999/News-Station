import React, { Component } from 'react'
import '../Assets/css/NewsItem.css'

export default class NewsCard extends Component {
    render() {
        return (
            <>
                <div className=" col-lg-3 col-md-4 col-sm-12 mb-2">
                    <div className="card" >
                        <img src={this.props.img} className="card-img-top" height="200px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className='fs-7 text-gray'>News By -: {this.props.source}</p>
                            <hr/>
                            <div className="main d-flex justify-content-between">
                                <div className="left">{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}`}</div>
                                <div className="right"><i className="bi bi-whatsapp whatsapp"></i>&nbsp;&nbsp;<i className="bi bi-twitter twitter"></i></div>
                            </div>
                            <p className="card-text">{this.props.discription}</p>
                            <a href={this.props.url} className="btn btn-sm web-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
