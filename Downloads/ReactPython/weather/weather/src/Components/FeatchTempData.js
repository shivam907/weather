import React from "react";

class FeatchTempData extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            city: "Indore",
            country:"India",
            ApiKey:"c8b922f9e4e3eb1bf2a778a976701b67",
            temp:0,
            Icon:"",
            Des:""
        }
    }

    // getWeather = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => response.json())
    //       .then(json => console.log(json))
    // }


    //temp, icon

    getWeather = async (e) => {
        e.preventDefault()
        var city = document.getElementById("city").value;
        var Url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.ApiKey}`
        var data = await fetch(Url)
        var response = await data.json()
        if(response.cod == "404"){
            console.log("Enter Correct City")
        }else {
                 var Temp = Math.round(response.main.temp - 273.15)
                var Icon = response.weather[0].icon
                var Des = response.weather[0].description
                this.setState({
                    temp:Temp,
                    Icon:`http://openweathermap.org/img/wn/${Icon}@2x.png`,
                    Des:Des
                })
            console.log(response)
        }

    }

    render() {
        return (
            <div>
                <form style={{paddingTop:"40px"}}>
                    <input id = "city" type="text" placeholder="Enter City" style={{width:"300px", borderRadius:"12px", height:"22px", borderColor:"darkblue"}}/><br/><br/>
                     <button style={{width:"150px", borderRadius:"12px"}} onClick={this.getWeather}>Search..</button>
                </form>


                    <h3 style={{color:"orange"}}>Temp Is: {this.state.temp}*C</h3>
                    <img src={this.state.Icon} />
                <p>{this.state.Des}</p>

            </div>
        );
    }

}

export default FeatchTempData