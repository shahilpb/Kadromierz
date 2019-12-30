import React, { Component } from 'react'
import LazyLoad from "react-lazyload";

export default class EmployeeCard extends Component {
    constructor(props) {
        super(props)
    
      this.imgRef= React.createRef()
    }
    
    render() {
    const {name,number,position,image} = this.props.item
        return (
				
		<div className="col-md-4 m-b-25">
			<a href="employee.php" className="card">
			<div className="card-body">
			<div className="text-center">
           <LazyLoad
            placeholder={
              <div style={{ height: "auto", width: "64px" }}>
                <img src="/assets/images/james.png" className="rounded-circle"  alt="association profile" />
              </div>
            }
            height={100}
          
          >
            {image ? (
              <img
                src={image}
                className="rounded-circle" 
                alt="association profile"
                ref={img => (this.imgRef = img)}
                onError={e => {
                    this.imgRef.src = "/assets/images/james.png";
                }}
              />
            ) : (
              <img src="/assets/images/james.png" className="rounded-circle"  alt="Employee profile" />
            )}
          </LazyLoad>


					
					    </div>
					    <div className="card-details">
						<div className="form-row">
						    <label className="col-sm-6"><span className="font-500">Emp. Name</span><span className="float-sm-right">:</span></label>
						    <label className="col-sm-6"> <span className="text-dark font-500">{name && name}</span></label>
						</div>
						<div className="form-row">
						    <label className="col-sm-6">Emp. Id <span className="float-sm-right">:</span></label>
                              <label className="col-sm-6"><span className="text-dark font-500">#{number&& number}</span></label>
						</div>
						<div className="form-row">
						    <label className="col-sm-6">Emp. Position <span className="float-sm-right">:</span></label>
						    <label className="col-sm-6"><span className="text-dark font-500">{position && position}</span></label>
						</div>
					    </div>
					</div>
				    </a>
				</div>
        )
    }
}
