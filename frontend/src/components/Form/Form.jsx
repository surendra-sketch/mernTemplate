import React, { useEffect, useState } from "react";

import axios from "axios";
import "./style.css";
const Form = () => {
  const [person, setPerson] = useState({ name: "", email: "", password: "" });
  const [people, setPeople] = useState([]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (person.name && person.email && person.password) {
      const newPerson = {
        name: person.name,
        email: person.email,
        password: person.password,
      };
      const url = "http://localhost:5000/api/users/register/user";

      // fetch("http://localhost:5000/api/users/register/user", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name: person.name,
      //     email: person.email,
      //     password: person.password,
      //   }),

      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));

      axios.post(url, newPerson).then((res) => {
        setPeople([...people, res.data]);
      });

      // people.push(newPerson);
      // setPeople(people);
      // or
      setPerson({ name: "", email: "", password: "" });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/getuser")
      .then((res) => setPeople(res.data));
    setPeople(people);
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/users/deleteuser/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    const val = people.filter((item) => item._id !== id);
    setPeople(val);
  };

  return (
    <>
      <form className="form">
        <div className="input-field">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">
                    Name :
                    <input
                      value={person.name}
                      onChange={handleOnChange}
                      required
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Enter name"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">
                    Email :
                    <input
                      value={person.email}
                      onChange={handleOnChange}
                      required
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Enter name"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password : </label>

                  <input
                    value={person.password}
                    onChange={handleOnChange}
                    required
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={handlesubmit} type="reset">
          Create User
        </button>
      </form>
      <div className="show-data">
        <h1>Users List </h1>
        <div className="user-list">
          {people.map((user) => {
            return (
              <section className="user" key={user._id}>
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>

                  <div className="all-btn">
                    <button
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      delete
                    </button>
                    <button>update</button>
                    <button>View</button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
