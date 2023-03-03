import { Col, Row } from "antd";
import axios from 'axios'
import { useEffect, useState } from "react";

import CardComponent from "./components/cardcomponent";
function App() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)



  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
       setData(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
    getUsers();
  },[0])
  


  const onclick = (value) => {
    var updatedData = data.filter((user) => user.id != value)
    setData(updatedData)
    if(data.length === 1){
      setLoading(true)
    }
  }

  return (
    <div className="App">
    { loading? <div className="spinner">
  <div className="dot1"></div>
  <div className="dot2"></div>
</div> :
      <div className="card-grid">
      <Row gutter={[16, 24]}>
        {data.map((user) => (
          <Col key={user.id} className="gutter-row" lg={6} sm={8} xs={24}>
            <div >
              <CardComponent  name={user.name} email={user.email} phone={user.phone} website={user.website} onclick={onclick} id={user.id}/>
            </div>
          </Col>
        ))}
      </Row>
    </div>}
    </div>
    
  );
}

export default App;
