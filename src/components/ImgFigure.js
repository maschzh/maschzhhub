import React, { Component } from 'react';

export default class ImgFigure extends Component{
	/*
	* imgFigure的点击处理函数
	*/
	handleClick(e){
		if(this.props.arrange.isCenter){
			this.props.inverse();
		} else {
			this.props.center();
		}
		

		e.stopPropagation();
		e.preventDefault();
	}

	render(){
		var styleObj = {};

		//如果props属性中指定了这张图片的位置，则使用
		if(this.props.arrange.pos){
			styleObj= this.props.arrange.pos;
		}

		//如果图片的旋转角度有值并且不为0，添加旋转角度
		if(this.props.arrange.rotate){
			(['MOZ','ms','Webkit', '']).forEach(function (value){
				styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			}.bind(this));
		}

		if(this.props.arrange.isCenter){
			styleObj.zIndex =11
		}

		let imgFigureClassName = 'img-figure';
		imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
		return (
			<figure className={imgFigureClassName} style = {styleObj} onClick = {this.handleClick.bind(this)}>
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back" onClick = {this.handleClick.bind(this)}>
						<p>
							{this.props.data.desc}
						</p>
					</div>
				</figcaption>
			</figure>
		);
	}
}