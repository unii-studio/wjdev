import styled from 'styled-components';

const Image = styled.img.attrs(({ size }) => ({
  src: 'portrait-1.jpg',
  alt: 'Portrait of Willie Liwa Johnson',

  height: size || '400px',
}))`
  height: 400px;
  border-radius: 50%;
  /* padding-top: 5em;
  padding-bottom: 4em; */
  /* filter: invert(100%); */
`;

export default Image;
