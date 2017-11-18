export class Label extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.label}</h1>
      </div>
    )
  }
}

Label.propTypes = {
  label: PropTypes.string
}

