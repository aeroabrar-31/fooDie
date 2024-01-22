// import { count } from "@ckeditor/ckeditor5-utils";
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
      profiledata: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aeroabrar-31");

    const jsondata = await data.json();

    console.log(jsondata);

    this.setState({
      profiledata: jsondata,
    });

    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    // console.log(this.props);
    return (
      <div>
        <h1>Profile Class component</h1>
        <img src={this.state.profiledata.avatar_url} width={200} height={200} />
        <h4>Name: {this.state.profiledata.name} </h4>
        <h4>Bio : {this.state.profiledata.bio} </h4>
        <h3>Repositories : {this.state.profiledata.public_repos}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          class ++
        </button>
      </div>
    );
  }
}

export default ProfileClass;
