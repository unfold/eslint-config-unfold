module.exports = {
  'rules': {
    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        'everything-else',
        'custom-methods',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'mixins',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        'custom-methods': [
          '/^on.+$/',
          '/^get.+$/'
        ],
        'render': [
          '/^render.+$/',
          'render'
        ]
      }
    }],

    'no-extra-parens': 0,
    'react/jsx-boolean-value': 0
  }
}
