import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DocumentTitle extends PureComponent {
  componentDidMount() {
    document.title = this.props.title;
  }

  componentWillReceiveProps(nextProps) {
    if (document.title !== nextProps.title) document.title = nextProps.title;
  }

  render() {
    return null;
  }
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DocumentTitle;
