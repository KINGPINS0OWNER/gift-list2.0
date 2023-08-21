import{useEffect, useState} from "react";
import "./Brother.js";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Brother(){
    const [Brother, setBrother] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/getBrothersheet')
        .them(Brother =>  setUsers(Brother.data))
        .catch(err => console.log(err))
    }, [] )

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <divc className="w-50"></divc>
        <table classname="table"> 
            <thead>
                <tr>
                    <th>
                        item
                    </th>
                    <th>
                        price
                    </th>
                    <th>
                        availability
                    </th>
                </tr>
            </thead>
            <tbody>
              {
                Brother.map(Brother =>{
                    return <tr>
                        <tb>{Brother.item}</tb>
                        <tb>{Brother.price}</tb>
                        <tb>{Brother.avaikability}</tb>
                    </tr>
                })
              }
            </tbody>
        </table>

        </div>

);
}
export default Brother;