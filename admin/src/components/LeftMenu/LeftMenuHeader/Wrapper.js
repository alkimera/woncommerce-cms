import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/logo-alkimera.png';

const Wrapper = styled.div`
background-color: #f56161;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};


    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 4.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
