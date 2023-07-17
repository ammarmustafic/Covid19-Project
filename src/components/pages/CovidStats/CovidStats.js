import axios from "axios";
import { useEffect, useState } from "react";
import "./CovidStats.css"

const CovidStats = () => {
    const [countryData, setCountryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPrePage = 17;
    const lastIndex = currentPage * recordsPrePage;
    const firstIndex = lastIndex - recordsPrePage;
    const records = countryData.slice(firstIndex, lastIndex) 
    const npage = Math.ceil(countryData.length / recordsPrePage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    useEffect(() => {
      const fetchCovidStats = async () => {
        try {
          const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
              'X-RapidAPI-Key': 'cc28d2e5d1msh517cb34697fab94p106bddjsnb52786ff6b23',
              'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            },
          };
         
          const response = await axios.request(options);
          const countryStats = response.data.response
  
          setCountryData(countryStats);
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchCovidStats();
    }, []);

    console.log(records)
    

    return (
        <div className="country-container">
            <table>
                <thead>
                    <tr>
                        <th style={{width: "70px"}}>ID</th>
                        <th style={{width: "250px"}}>Country</th>
                        <th style={{width: "150px"}}>Population</th>
                        <th style={{width: "110px"}}>New cases</th>
                        <th style={{width: "130px"}}>Deaths </th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((country,i)=>(
                        <tr key={i} className="tbody">
                            <td style={{width:"70px"}}>{firstIndex +i+1}.</td>
                            <td style={{textAlign:"left", width:"220px",padding: "5px 15px"}}>{country.country}</td>
                            <td style={{width: "150px"}}>{country.population === null ? ("/"):country.population}</td>
                            <td style={{width: "110px"}}>{country.cases.new === null ? ("/"):country.cases.new}</td>
                            <td style={{width: "130px"}}>{country.deaths.total === null ? ("/"):country.deaths.total}</td>
                        </tr>     
                    ))}
             </tbody>
          </table>

          <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="prev-btn" onClick={PrevPage}>PREV</a>
                </li>
                {
                    numbers.map((n,i)=>(
                        <li className={`page-item  ${currentPage === n ? "active-page" : ""}`} key={i}>
                            <a href="#" className="page-link" onClick={changeCurrentPage}>{n}</a> 
                        </li>
                    ))
                }
                <li className="page-item">
                    <a href="#" className="next-btn" onClick={nextPage}>NEXT</a>
                </li>
            </ul>
          </nav>
        </div>
    )
    function PrevPage() {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    };
    function changeCurrentPage(e){
        const selectedPage = Number(e.target.innerText);
        if (selectedPage >= 1 && selectedPage <= npage) {
          setCurrentPage(selectedPage);
        }
    };
    function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
}
  export default CovidStats;
  