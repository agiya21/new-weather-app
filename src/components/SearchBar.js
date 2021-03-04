/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import { jsx, css } from '@emotion/react'
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchFill: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            searchFill: event.target.value
        })
    }

    render() {
        const linkUrl = "/Window/" + this.state.searchFill
        return (
            <div>
                <Navbar>
                    <Form inline>
                        <Form.Group controlId="formSearchBar">
                            <Form.Control
                                css={css`border-radius : 20px`}
                                type="text"
                                placeholder="Search City or Country"
                                className="mr-sm-2"
                                onChange={this.handleChange}
                            />
                            <Link to={linkUrl} >
                                <Button css={css`border-radius : 25px`} type="submit" ><FontAwesomeIcon icon={faSearch} /></Button>
                            </Link>
                        </Form.Group>
                    </Form>
                </Navbar>
            </div>
        )
    }
}


export default SearchBar