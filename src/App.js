import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect( () => {
    fetchData(page);
  }, [])

  function fetchData(page){
    fetch(`https://randomuser.me/api/?page=${page}&results=25`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else{
        return Promise.reject({status: res.status, statusText: res.statusText})
      }
    }).then( res => {
      if(page > 1){
        let resultArray = [...data, ...res.results]
        setData(resultArray);
      } else{
        setData(res.results);
      }
      setLoader(false);
    }).catch(error => console.log('Error '+ error.statusText))
  }


  function loadMoreHandler(e){
    console.log(e)
    console.log(e.target.scrollHeight+" "+ e.target.clientHeight +" "+ e.target.scrollTop)
    let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
    if(bottom){
      let _page = page + 1;
      fetchData(_page);
      setLoader(true);
      setPage(_page)
    }
  }

  return (

    <div onScroll={loadMoreHandler} className='table-wrap'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Profle Pic</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr>
                  <td>{item.name['first']}</td>
                  <td>{item.gender}</td>
                  <td><img src = { item.picture['thumbnail'] } ></img></td>
                </tr>
              )
            })
          }
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
