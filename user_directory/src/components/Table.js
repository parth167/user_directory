import React from "react";
import API from '../utils/api.js';
import Search from "./Search";

// create state for sorted users and function to update
class Tables extends React.Component {
  state = {
    search: '',
    results: [],
    sortList: ""
  };

  componentDidMount() {
    API.employeeApi()
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (e) => {
    if (e.target.name === "search") {
      const searchInput = e.target.value.toLowerCase();
      this.setState({
        search: searchInput,
      });
    }
  };

  sortFName = () => {
    const sortEmployees = this.state.results.sort((a,b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortList === "DESC") {
      sortEmployees.reverse();
      this.setState({ sortList: "ASC" });
    } else {
      this.setState({ sortList: "DESC" });
    }
    this.setState({ results: sortEmployees });
  };
  // sort by last name
  sortLName = () => {
    const sortEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortList === "DESC") {
      sortEmployees.reverse();
      this.setState({ sortList: "ASC" });
    } else {
      this.setState({ sortList: "DESC" });
    }
    this.setState({ results: sortEmployees });
  };
  render() {
  return (
    <div className="container">
    <div className="row">
    <Search
      handleInputChange={this.handleInputChange}
      search={this.state.search}
    />
    </div>
    <div className='mt-2'>
      <table className='table'>
        <thead className='thead text-warning'>
          <tr>
            <th scope='col'>Profile</th>
            <th scope='col'
              onClick={this.sortFName}
            >
              FirstName&#9660;
            </th>
            <th scope='col'
              onClick={this.sortLName}
            >
              LastName&#9660;
            </th>
            <th scope='col'>Phone</th>          
            <th scope='col'>Email</th>
            <th scope='col'>Country</th>
            <th scope='col'>Age</th>
          </tr>
        </thead>
      
      {// firstname
        this.state.results &&
              this.state.results.map((item) =>
                item.name.first.toLowerCase().includes(this.state.search) ? (
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td>
                        <img
                          src={item.picture.thumbnail}
                          alt="thumbnail"
                        />
                      </td>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.location.country}</td>
                      <td>{item.dob.date}</td>
                      
                    </tr>
                  </tbody>
                ) : //lastname
                item.name.last.toLowerCase().includes(this.state.search) ? (
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td>
                        <img  src={item.picture.thumbnail}
                          alt="thumbnail"/>
                      </td>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.location.country}</td>
                      <td>{item.dob.date}</td>
                     
                    </tr>
                  </tbody>
                ) : null
              )}
          </table>
        </div>
     </div>
    );
  }
}

export default Tables;
