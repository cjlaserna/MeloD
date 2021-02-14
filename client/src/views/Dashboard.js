import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";

import chartimg from "../assets/img/chart.svg";
import developmentimg from "../assets/img/development.svg";
import "../assets/css/dashboard.css";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// mock data from my account bc couldnt deploy real

require('dotenv').config()

var SpotifyWebApi = require('spotify-web-api-node');
const queryString = require('query-string');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URL
});


const customdata = (canvas) => {
  var ctx = canvas.getContext("2d");

  var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
  gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
  gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

  return {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        label: "Songs",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: "#d048b6",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [16, 34],
      },
    ],
  };
};

const customoptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    ],
  },
};

class Dashboard extends Component {
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  constructor() {
    super();
    const token = queryString.parse(window.location.hash);
    //const params = this.getHashParams();
    //const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      recentlyPlayed: {
        song_1: 'Error',
        song_2: "Error",
        song_3: "Error",
        song_4: "Error",
        song_5: "Error",
        song_6: "Error",
        song_7: "Error",
        song_8: "Error",
        song_9: "Error",
        song_10: "Error",
      },
    };
  }

  getRecentlyPlayed(){
    spotifyApi.getMyRecentlyPlayedTracks()
      .then(function(response) {
        this.setState({
          recentlyPlayed: { 
              song_1: response.items[0].track.name, 
              song_2: response.items[1].track.name, 
              song_3: response.items[2].track.name, 
              song_4: response.items[3].track.name, 
              song_5: response.items[4].track.name, 
              song_6: response.items[5].track.name, 
              song_7: response.items[6].track.name, 
              song_8: response.items[7].track.name, 
              song_9: response.items[8].track.name, 
              song_10: response.items[9].track.name, 
            }
        });
      })
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Your Top 5 Artists</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Artists</th>
                        <th>Genre</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jazmin Bean</td>
                        <td>indie pop</td>
                      </tr>
                      <tr>
                        <td>K/DA</td>
                        <td>k-pop girl group</td>
                      </tr>
                      <tr>
                        <td>Poppy</td>
                        <td>dance pop</td>
                      </tr>
                      <tr>
                        <td>Concerned Ape</td>
                        <td>Video Game Music</td>
                      </tr>
                      <tr>
                        <td>Surf Curse</td>
                        <td>Indie Garage Rock</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    {" "}
                    Your Melo<span>Data</span>
                    <img src={chartimg}></img>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <p>Based on your recent 50 listens:</p>
                    <br></br>
                    <p>- 70% of your songs are sad songs.</p>
                    <p>- 30% of your songs are happy songs.</p>
                    <br></br>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    Song Type Melo<span>Data</span>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar data={customdata} options={customoptions} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Button href="/">Back to Home</Button>
            <Button onClick={() => this.getRecentlyPlayed()}>Update Data</Button>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
