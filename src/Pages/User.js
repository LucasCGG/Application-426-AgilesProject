import React from 'react'
import { Link } from 'react-router-dom'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        logedIn: false,
      user_id: '',
      username: '',
      rank: 'COACH',
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.appState.user_id,
      username: this.props.appState.name,
      rank: this.props.appState.rank,
    })
    /**
     * Element to be changed come here ("titles", "rank-text" etc.)
     */
  }

  /**
   * LOGIN/SIGNUP FORM IN THIS RETURN METHOD
   * Prefferably with a login fom
   */
  render() {
    if (this.state.logedIn === true) {
      return (
        <>
          <h1>Welcome back {this.state.username}</h1>
        </>
      )
    } else {
      return (
      <>
        <h1> TEST LOGED OUT</h1>
        <hr/>
      </>
      )
    }
  }
}
export default User
