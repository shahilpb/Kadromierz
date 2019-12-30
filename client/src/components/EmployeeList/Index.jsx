import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { GET_EMPLOYEE_LIST,GET_DRAW_EMPLOYEE } from "../../constants/api";
import apiCall, { METHOD } from "../../constants/baseUrl";
import * as actions from "../../constants/mapDispatchToProps";
import * as stateToProps from "../../constants/mapStateToProps";
import EmployeeCard from "./EmployeeCard";
import Header from "./Header";
import { Modal } from "react-bootstrap";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 10,
      hasMore: true,
      loading: false,
      employeeList: [],
      dialogStatus:false,
      drawResult:{}
    };
    this.imgRef= React.createRef()

  }



  openDialogue = ()=>{
      
    apiCall(
        GET_DRAW_EMPLOYEE,
        {
        },
        data => {
            this.setState(()=>{
                return({
                    ...this.state,
                    drawResult:data,
                   dialogStatus:true,
                })
               })

        },
        data => {
        
        },
        METHOD.GET,
        ''
      );
    }
  

  closeDialogue = ()=>{
    this.setState(()=>{
        return({
           dialogStatus:false
        })
       })
  }

  loadItems = () => {
    let token = "";
    if (!this.state.loading && this.state.hasMore) {
      this.setState(() => {
        return {
          ...this.state,
          loading: true
        };
      });

      apiCall(
        GET_EMPLOYEE_LIST,
        {
          start: this.state.start,
          limit: this.state.end,
          search: ""
        },
        data => {
          if (data.is_last && data.is_last === 1) {
            this.setState(() => {
              return {
                ...this.state,
                hasMore: false
              };
            });
          }

          this.setState(
            prevState => {
              return {
                ...this.state,
                employeeList: [...this.state.employeeList, ...data.employees],
                loading: false,
                start: prevState.start + prevState.end
              };
            },
            () => {
              this.props.getEmployeeList(data);
            }
          );
        },
        data => {
          this.setState(() => {
            return {
              ...this.state,
              hasMore: false,
              loading: false
            };
          });
        },
        METHOD.GET,
        token
      );
    }
  };
 

  render() {
    const { start, hasMore ,dialogStatus,drawResult} = this.state;

    const loader = (
      <div
        className="spinner-border text-primary d-block mx-auto"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
    return (
    
    <div className="wrapper">
<Modal
            show={dialogStatus && dialogStatus}
            className={dialogStatus ? "modal fade show" : "modal fade "}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
<div className={dialogStatus?('modal fade show'):('modal fade')} tabindex="-1" aria-modal="true" role="dialog" style= {dialogStatus? {display:'block', paddingRight:'17px'}:{display:'none'}} aria-labelledby="RandomSelectEmployeeLabel">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Employee Details</h4>
                <button type="button" onClick={this.closeDialogue} className="close pointer" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="zmdi zmdi-close"></span>
                </button>
            </div>
            <div className="modal-body employee-box-modal">
                <div className="media">
                      <div className="media-left">

       
              <img src={drawResult.image} className="rounded-circle"  alt="Employee profile" />
          

                      </div>
                      <div className="media-body ml-3">
                          <div className="form-row">
                                <label className="col-sm-4">Emp. Name <span className="float-sm-right">:</span></label>
                                <label className="col-sm-8"><span className="text-dark font-500">{this.state.drawResult.name && this.state.drawResult.name}</span></label>
                            </div>
                            <div className="form-row">
                                <label className="col-sm-4">Emp. Id <span className="float-sm-right">:</span></label>
                                <label className="col-sm-8"><span className="text-dark font-500"># {this.state.drawResult.number && this.state.drawResult.number}</span></label>
                            </div>
                            <div className="form-row">
                                <label className="col-sm-4">Emp. Position <span className="float-sm-right">:</span></label>
                                <label className="col-sm-8"><span className="text-dark font-500">{this.state.drawResult.position && this.state.drawResult.position}</span></label>
                            </div>
                        
                      </div>
                  </div>
            </div>
           
        </div>
    </div>
</div>

</Modal.Body>
            </Modal>
        <div className="main-container">
          <div className="section-page">
            <div className="container">
              <Header handleClick={this.openDialogue}/>
              <div className="col-lg-12">
                <InfiniteScroll
                  pageStart={start}
                  loadMore={this.loadItems}
                  hasMore={hasMore}
                  loader={loader}
                  className="form-row employee-box"
                >
                {/* we can get employeelist from state but to represent the structure of redux we call it from store */}
                  {this.props.employeeList &&
                    this.props.employeeList.employees &&
                    this.props.employeeList.employees.map((item, index) => {
                      return <EmployeeCard item={item} key={index} />;
                    })}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state =>
    stateToProps.appMapStateToProps(
      [stateToProps.employeeListStateToProps],
      state
    ),
  actions.appMapDispatchToProps([
    actions.asyncApiDispatchToProps,
    actions.employeeDispatchToProps
  ])
)(Index);
