import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const arrayStudentData = [
	{
		'id':'ST000',
		'FirstName':'Wagio',
		'LastName':'Joseph',
		'Gender':'Male',
		'DOB':'22-10-2004',
		'Email':'wagiojoseph@gmail.com',
		'Marital Status':'Divorced'
	},
	{
		'id':'ST001',
		'FirstName':'Joseph',
		'LastName':'Wagio',
		'Gender':'Male',
		'DOB':'22-10-2004',
		'Email':'wagiojoseph@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST002',
		'FirstName':'Christian',
		'LastName':'Uchendu',
		'Gender':'Male',
		'DOB':'09-12-0000',
		'Email':'christucoji@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST003',
		'FirstName':'Samuel',
		'LastName':'Izevbokun',
		'Gender':'Male',
		'DOB':'18-07-2004',
		'Email':'osascode7@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST004',
		'FirstName':'Abdulaziz',
		'LastName':'Mohammed',
		'Gender':'Male',
		'DOB':'01-01-0000',
		'Email':'abdulsilo32@gmail.com',
		'Marital Status':'Married'
	},
	{
		'id':'ST005',
		'FirstName':'Destiny',
		'LastName':'Ufumaka',
		'Gender':'Male',
		'DOB':'19-04-0000',
		'Email':'ufumakadestiny10@gmail.com',
		'Marital Status':'Divorced'
	},
	{
		'id':'ST006',
		'FirstName':'Life',
		'LastName':'Agburum',
		'Gender':'Male',
		'DOB':'18-10-0000',
		'Email':'lifeagburum@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST007',
		'FirstName':'Ogak',
		'LastName':'Finomo',
		'Gender':'Male',
		'DOB':'16-10-0000',
		'Email':'finomoogak@gmail.com',
		'Marital Status':'Divorced'
	},
	{
		'id':'ST008',
		'FirstName':'Victor',
		'LastName': 'Kio',
		'Gender':'Male',
		'DOB':'29-04-2002',
		'Email':'kiovictor8@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST009',
		'FirstName':'Claude',
		'LastName': 'Ujile',
		'Gender':'Male',
		'DOB':'03-08-2003',
		'Email':'claudeboss27@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST010',
		'FirstName':'Joel',
		'LastName': 'Oguzo',
		'Gender':'Male',
		'DOB':'10-01-2001',
		'Email':'joeloguzo@gmail.com',
		'Marital Status':'Divorced'
	},
    {
		'id':'ST011',
		'FirstName':'David',
		'LastName': 'Kelly',
		'Gender':'Male',
		'DOB':'24-09-0000',
		'Email':'davidkellyagbana7@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST012',
		'FirstName':'Wariebi',
		'LastName': 'Oroupah',
		'Gender':'Male',
		'DOB':'12-10-0000',
		'Email':'orouphw@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST013',
		'FirstName':'Tamuno-emi',
		'LastName': 'God\'swill',
		'Gender':'Male',
		'DOB':'06-10-1995',
		'Email':'bigwill007@gmail.com',
		'Marital Status':'Divorced'
	}
]
;

const studentDetails = arrayStudentData.filter((student)=>
student["Marital Status"] === 'Divorced');

const StartMap =  studentDetails.map((student,n=1)=>{
    
    return(
            <tr className="bg-info" key={student.id}>
                
                <td>{++n}</td>
                <td>{student.id}</td>
                <td>{student.FirstName}</td>
                <td>{student.LastName}</td>
                <td>{student.Gender}</td>
                <td>{student.DOB}</td>
                <td>{student.Email}</td>
                <td>{student["Marital Status"]}</td>
                
            </tr>
        )
    })


function MappedData(){
	return (
		<>
			<Table hover>
				<thead style=
				{{
					textAlign:'center', 
					background:'blue', 
					color:'white'
				}}>
                    <tr>
					<th>SN</th>
					<th>ID</th>
					<th>FIRST NAME</th>
					<th>LAST NAME</th>
					<th>GENDER</th>
					<th>DOB</th>
					<th>EMAIL</th>
					<th>MARITAL STATUS</th>	
                    </tr>				
				</thead>
				<tbody>
					{StartMap}
				</tbody>
			</Table>
		</>
	)	
}


const NavBar = () =>{
	return(
		<div className="bg-info">

		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><hr class="dropdown-divider"/></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</li>
					<li class="nav-item">
					<a class="nav-link disabled" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
				</div>
			</div>
			</nav>
		</div>
	)
}

function VariableObjectMapFilter(){
	return (
		<div className="App">
			<div>
				<h1 style=
				{{
					textAlign:'center',
					backgroundColor:'#f2f2f2'
				}}>
					CLASS LIST OF LEGENDS
				</h1>
			</div>
			<NavBar/>
			<MappedData/>
		</div>
	)
}

export default VariableObjectMapFilter;