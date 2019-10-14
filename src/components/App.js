import React, { Component } from "react"
import "../assets/css/App.css"
import { connect } from "react-redux"
import { simpleAction } from "../actions/simpleAction"

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bob</h1>
          <p>Кто же такой этот Боб?</p>
          <pre>{this.props.ktoBob.result}</pre>
          <button onClick={this.simpleAction}>Спросить у REDUX!!!</button>
        </header>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
