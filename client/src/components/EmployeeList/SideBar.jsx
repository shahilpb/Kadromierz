import React from 'react'

export default function SideBar() {
    return (
        <div className="col-lg-3">
        <div className="card text-center">
        <div className="card-body">
            <div className="list-group text-left small-padd-list">
            <button type="button" className="list-group-item list-group-item-action active" onclick="window.location='javascript:;'">Random Select Employee</button>
            <button type="button" className="list-group-item list-group-item-action" onclick="window.location='javascript:;'">Employee Pair</button>
            </div>
        </div>
        </div>
    </div>
    )
}
