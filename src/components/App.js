import React, { Component } from "react";
import axios from "../api/axios";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import Search from "./Search";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { images: [] };
  // onSearchSubmit = term => {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: {
  //         query: term
  //       },
  //       headers: {
  //         Authorization:
  //           "Client-ID c438126ef7cc9334c84c3eb2e080875931acd9fb31ec180e61cb978f37722f24"
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // onSearchSubmit = async term => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term
  //     },
  //     headers: {
  //       Authorization:
  //         "Client-ID c438126ef7cc9334c84c3eb2e080875931acd9fb31ec180e61cb978f37722f24"
  //     }
  //   });

  //   this.setState({ images: response.data.results });
  // };

  onSearchSubmit = async term => {
    const response = await axios.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        {/* <DatePicker /> */}
        <Search onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
