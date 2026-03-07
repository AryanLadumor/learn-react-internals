import React from "react";
import { DUMMY_USER_PHOTTO } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: DUMMY_USER_PHOTTO,
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/AryanLadumor");
      const jsondata = await data.json();

      console.log("Fetched Data:", jsondata);

      this.setState({
        userInfo: jsondata,
      });
      console.log("dasd", this.state.userInfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("unmouted Compoennt");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div
        className="m-6 p-6 w-64 bg-white rounded-3xl shadow-lg 
  flex flex-col items-center gap-3
  transform transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
      >
        <div className="overflow-hidden rounded-full">
          <img
            src={avatar_url}
            className="w-32 h-32 object-cover rounded-full 
        transition-transform duration-500 
        hover:scale-110"
            alt="profile"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          {name}
        </h2>

        <p className="text-gray-500 text-lg">{location}</p>

        <p className="text-sm text-gray-400">Aryan@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
