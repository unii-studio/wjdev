import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 40%;
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Paragraph = styled.p`
  color: black;
  font-size: 1rem;
`;

const Link = styled.a`
  color: #00a8e8;
`;

const apiUrl = process.env.API_URL || 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getData();
  }

  // Retrieves the list of items from the Express app
  getData = () => {
    fetch(`${apiUrl}/status`)
      .then(res => res.json())
      .then(json => this.setState({ status: json.status }));
  };

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <Container>
        <Wrapper>
          <Title>
            <img src={Logo} alt="Logo" />
            Reactable
          </Title>
          <Paragraph>Quick & Simple React boilerplate.</Paragraph>
          <Paragraph>
            Read about it{' '}
            <Link href="soon" target="_blank">
              here.
            </Link>
          </Paragraph>

          <Link href={apiUrl} target="_blank">
            {status}
          </Link>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
