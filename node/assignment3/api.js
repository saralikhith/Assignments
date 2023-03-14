var ok=document.getElementById('ok')
const http=new XMLHttpRequest();
function country(){
  document.getElementById('ok').innerHTML=`
  <tr>
  <tr>
      <th>active_cases</th>
      <th>country_name</th>
      <th>deaths</th>
      <th>cases</th>
      <th>deaths_per_1m_population</th>
      <th>new_cases</th>
      <th>new_deaths</th>
      <th>region</th>
      <th>serious_critical</th>
      <th>tests_per_1m_population</th>
      <th>total_recovered</th>
      <th>total_tests</th>
  </tr>
  `
  http.onload=function(){
    var x=JSON.parse(http.responseText)
   let c=0;
    for (const i of x.countries_stat) {
        const tr=document.createElement('tr') 
        const td1=document.createElement('td')
        td1.innerHTML=`${i.active_cases}`
          tr.appendChild(td1)
          const td2=document.createElement('td')
          td2.innerHTML=`${i.country_name}`
          td2.id=`table${c}`
          c++;
            tr.appendChild(td2)
            const td3=document.createElement('td')
            td3.innerHTML=`${i.deaths}`
              tr.appendChild(td3)
              const td4=document.createElement('td')
              td4.innerHTML=`${i.cases}`
                tr.appendChild(td4)
                const td5=document.createElement('td')
                td5.innerHTML=`${i.deaths_per_1m_population}`
                  tr.appendChild(td5)
                  const td7=document.createElement('td')
                  td7.innerHTML=`${i.new_cases}`
                    tr.appendChild(td7)
                    const td8=document.createElement('td')
                    td8.innerHTML=`${i.new_deaths}`
                      tr.appendChild(td8)
                      const td9=document.createElement('td')
                      td9.innerHTML=`${i.region}`
                        tr.appendChild(td9)
                        const td10=document.createElement('td')
                        td10.innerHTML=`${i.serious_critical}`
                          tr.appendChild(td10)
                          const td11=document.createElement('td')
                          td11.innerHTML=`${i.tests_per_1m_population}`
                            tr.appendChild(td11)
                            const td12=document.createElement('td')
                            td12.innerHTML=`${i.total_recovered}`
                              tr.appendChild(td12)
                              const td13=document.createElement('td')
                              td13.innerHTML=`${i.total_tests}`
                                tr.appendChild(td13)
          ok.append(tr)
         
         }
}

http.open("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api");
http.setRequestHeader("X-RapidAPI-Key", "76076a4a06mshfd39029125e45ffp1ad18djsn85d79dedea39");
http.setRequestHeader("X-RapidAPI-Host", "corona-virus-world-and-india-data.p.rapidapi.com");
http.send()
}
function world(){
  document.getElementById('ok').innerHTML=`
  <tr>
      <th>active_cases</th>
      <th>deaths_per_1m_population</th>
      <th>new_cases</th>
      <th>new_deaths</th>
      <th>serious_critical</th>
      <th> statistic_taken_at</th>
      <th>total_cases</th>
      <th>  total_cases_per_1m_population</th>
      <th> total_deaths</th>
     
      <th>total_recovered</th>
  </tr>
  `
  http.onload=function(){
    var i=(JSON.parse(http.responseText)).world_total
  const tr=document.createElement('tr') 
  const td1=document.createElement('td')
  td1.innerHTML=`${i.active_cases}`
    tr.appendChild(td1)
    const td2=document.createElement('td')
    td2.innerHTML=`${i.deaths_per_1m_population}`
      tr.appendChild(td2)
      const td3=document.createElement('td')
      td3.innerHTML=`${i.new_cases}`
        tr.appendChild(td3)
        const td4=document.createElement('td')
        td4.innerHTML=`${i.new_deaths}`
          tr.appendChild(td4)
          const td5=document.createElement('td')
          td5.innerHTML=`${i.serious_critical}`
            tr.appendChild(td5)
            const td7=document.createElement('td')
            td7.innerHTML=`${i.statistic_taken_at}`
              tr.appendChild(td7)
              const td8=document.createElement('td')   
              td8.innerHTML=`${i.total_cases}`
                      tr.appendChild(td8)
                      const td9=document.createElement('td')
                      td9.innerHTML=`${i.total_cases_per_1m_population}`
                        tr.appendChild(td9)
                       
                         
                            const td12=document.createElement('td')
                            td12.innerHTML=`${i.total_deaths}`
                              tr.appendChild(td12)
                              const td13=document.createElement('td')
                              td13.innerHTML=`${i.total_recovered}`
                                tr.appendChild(td13)
          ok.append(tr)
        
         
}

http.open("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api");
http.setRequestHeader("X-RapidAPI-Key", "76076a4a06mshfd39029125e45ffp1ad18djsn85d79dedea39");
http.setRequestHeader("X-RapidAPI-Host", "corona-virus-world-and-india-data.p.rapidapi.com");
http.send()
}

function myFunction(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("ok");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  
}

/*
active_cases: 
"1,196,538"
cases
: 
"82,649,779"
country_name
: 
"USA"
deaths
: 
"1,018,316"
deaths_per_1m_population
: 
"3,044"
new_cases
: 
"0"
new_deaths
: 
"0"
region
: 
""
serious_critical
: 
"1,465"
tests_per_1m_population
: 
"2,990,303"
total_cases_per_1m_population
: 
"247,080"
total_recovered
: 
"80,434,925"
total_tests
: 
"1,000,275,726"
*/