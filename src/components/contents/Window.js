import React from "react"
import ConditionTemp from "./ConditionTemp"
import HeaderCity from "./HeaderCity"

class Window extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            searchDetails: []
        }
    }

    componentDidMount() {
        const searches = this.props.match.params.name
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searches + "&appid=dfb53468a35b1ae027d7d965954bef9d"
        this.setState({ isLoading: true })
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    searchDetails: data
                })
            })
    }

    render() {
        const {searchDetails} = this.state
        console.log(searchDetails)
        return (
            <div>

                <ConditionTemp />
                <HeaderCity name={searchDetails.name}/>

            </div>
        )
    }
}

export default Window